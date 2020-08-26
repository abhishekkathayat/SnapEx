import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Camera } from 'expo-camera';
import { Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

import styles from './CameraStyles';
import Toolbar from './Toolbar';

class CameraPage extends React.Component {
    camera = null;
    state = {
        lastCapture: {},
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
        hasStoragePermission: null,
    };
    
    setFlashMode = (flashMode) => this.setState({ flashMode });
    handleCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, lastCapture: photoData })
        const asset = await MediaLibrary.createAssetAsync(photoData.uri);
        MediaLibrary.createAlbumAsync('SnapEx', asset, false)
        .then(() => {})
        .catch(error => {
            Alert.alert('An Error Occurred!')
        });
    };

    openGallery = async () => {
        const album = await MediaLibrary.getAlbumAsync('SnapEx');
        if(album != null) {
            const albumAssets = await MediaLibrary.getAssetsAsync({
                album: album.id
            });
            console.log(albumAssets);
            this.props.navigation.navigate('Gallery', {album: albumAssets});
        }
        else {
            Alert.alert('No Images in the Gallery.');
        }
    };
    
    async componentDidMount() {
        const camera = await Camera.requestPermissionsAsync();
        const storage = await MediaLibrary.requestPermissionsAsync();
        const hasCameraPermission = (camera.status === 'granted');
        this.setState({ hasCameraPermission });
        const hasStoragePermission = (storage.status === 'granted');
        this.setState({ hasStoragePermission });
        if(hasStoragePermission === true) {
            const album = await MediaLibrary.getAlbumAsync('SnapEx');
            if(album !== null) {
                const albumImages = await MediaLibrary.getAssetsAsync({
                    album: album.id,
                    sortBy: [[MediaLibrary.SortBy.creationTime, false]],
                });
                this.setState({ lastCapture: albumImages.assets[0] });
            }
        }
    };

    render() {
        const { hasCameraPermission, hasStoragePermission, flashMode, cameraType, capturing, lastCapture } = this.state;
        if(hasCameraPermission === null || hasStoragePermission === null) {
            return <Layout/>;
        }
        else if(hasCameraPermission === false) {
            return <Text>Access to the camera has been denied.</Text>;
        }
        else if(hasStoragePermission === false) {
            return <Text>Access to the storage has been denied.</Text>;
        }
        return (
            <React.Fragment>
                <Layout>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                </Layout>
                <Toolbar
                    lastCapture = {lastCapture}
                    capturing = {capturing}
                    flashMode = {flashMode}
                    setFlashMode = {this.setFlashMode}
                    onCapture = {this.handleCapture}
                    onPressImage = {this.openGallery}
                />
            </React.Fragment>
        );
    };
};

export default CameraPage;