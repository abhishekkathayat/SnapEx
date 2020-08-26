import React from 'react';
import { SafeAreaView, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, Icon, TopNavigation, TopNavigationAction, Divider, Modal } from '@ui-kitten/components';

import styles from './CameraStyles';

const BackArrow = (props) => (
    <Icon {...props} name="arrow-ios-back-outline"/>
);

class GalleryPage extends React.Component {
    state = {
        visible: false,
        uri: ''
    };
    setVisible = (visible, uri) => this.setState({ visible, uri });
    render () {
        const { visible, uri } = this.state;
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
                        {album.map(({ uri }) => (
                            <TouchableWithoutFeedback key={ uri }
                                onPress={() => this.setVisible(true, uri)}>
                                <Image source={{ uri }} style={styles.galleryImages}/>
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
            </SafeAreaView>
        );
    }
}
export default GalleryPage;