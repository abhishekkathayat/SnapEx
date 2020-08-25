import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Camera } from 'expo-camera';

import styles from './CameraStyles';
import Toolbar from './Toolbar';

class CameraPage extends React.Component {
    camera = null;
    state = {
        captures: [],
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
    };
    
    setFlashMode = (flashMode) => this.setState({ flashMode });
    handleCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        console.log(photoData);
        this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };
    
    async componentDidMount() {
        const camera = await Camera.requestPermissionsAsync();
        const hasCameraPermission = (camera.status === 'granted');
        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;
        if(hasCameraPermission === null) {
            return <Layout/>;
        }
        else if(hasCameraPermission === false) {
            return <Text>Access to the camera has been denied.</Text>;
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
                    capturing = {capturing}
                    flashMode = {flashMode}
                    cameraType = {this.setCameraType}
                    setFlashMode = {this.setFlashMode}
                    onCapture = {this.handleCapture}
                />
            </React.Fragment>
        );
    };
};

export default CameraPage;