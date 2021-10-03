import React from 'react';
import { SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Icon, TopNavigation, TopNavigationAction, Divider, Modal, Button } from '@ui-kitten/components';

import styles from './CameraStyles';

const BackArrow = (props) => (
    <Icon {...props} name="arrow-ios-back-outline"/>
);

const uploadIcon = (props) => (
    <Icon {...props} name="cloud-upload-outline"/>
);

class GalleryPage extends React.Component {
    state = {
        visible: false,
        uri: '',
        enableUpload: true,
        selectedImages: [],
        startSelection: false
    };
    
    setVisible = (visible, uri) => this.setState({ visible, uri });

    handleLongPressImage = (image) => {
        const found = this.state.selectedImages.find(object => object.id === image.id);
        if(found !== undefined) {
            const indexObject = this.state.selectedImages.indexOf(found);
            if(indexObject > -1) {
                this.state.selectedImages.splice(indexObject, 1);
            }
        } else {
            this.setState({ selectedImages: [image, ...this.state.selectedImages] });
        }
        if(this.state.selectedImages.length != 0) {
            this.setState({ startSelection: true });
        } else {
            this.setState({ startSelection: false });
        }
        if(this.state.selectedImages.length !== 0) {
            this.setState({ enableUpload: false });
        } else {
            this.setState({ enableUpload: true });
        }
    };

    handleShortPressImage = (visible, image) => {
        if(this.state.startSelection === true) {
            this.handleLongPressImage(image);
        } else {
            this.setVisible(visible, image.uri);
        }
    };

    render () {
        const { visible, uri, enableUpload, selectedImages } = this.state;
        const album = this.props.route.params.album.assets;
        const navigateBack = () => {
            this.props.navigation.navigate('Home');
        };
        const backAction = () => (
            <TopNavigationAction icon={BackArrow} onPress={navigateBack}/>
        );
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation
                    title={<Text style={styles.topNavText}>Gallery</Text>}
                    accessoryLeft={backAction}
                    style={styles.topNav}
                />
                <Divider/>
                <ScrollView style={{ margin: 5 }}>
                    <Layout style={styles.galleryGrid}>
                        {album.map(({uri}, index) => (
                            <TouchableWithoutFeedback key={ uri }
                            delayLongPress={200}
                            onLongPress={this.handleLongPressImage.bind(this, album[index])}
                            onPress={this.handleShortPressImage.bind(this, true, album[index])}>
                                <Image source={{ uri }} style={styles.galleryImage}/>
                            </TouchableWithoutFeedback>
                        ))}
                    </Layout>
                </ScrollView>
                <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => this.setVisible(false, '')}>
                    <Image source={{ uri }} style={styles.imageModal}/>
                </Modal>
                <Button
                    disabled={enableUpload}
                    accessoryRight={uploadIcon}
                    style={styles.uploadButton}
                    onPress={() => {this.props.navigation.navigate('Code Editor')}}
                > Upload ({selectedImages.length})
                </Button>
            </SafeAreaView>
        );
    }
}
export default GalleryPage;