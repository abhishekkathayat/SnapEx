import React from 'react';
import { SafeAreaView, ScrollView, Image, Text } from 'react-native';
import { Layout, Icon, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';

import styles from './CameraStyles';

const BackArrow = (props) => (
    <Icon {...props} name="arrow-ios-back-outline"/>
);

class GalleryPage extends React.Component {
    render () {
        const navigateBack = () => {
            this.props.navigation.navigate('Home');
        };
        const backAction = () => (
            <TopNavigationAction icon={BackArrow} onPress={navigateBack}/>
        )
        const album = this.props.route.params.album.assets;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation
                    title={<Text style={styles.topNavText}>Gallery</Text>}
                    accessoryLeft={backAction}
                    style={styles.topNav}
                />
                <Divider/>
                <ScrollView>
                    <Layout style={styles.galleryGrid}>
                        {album.map(({ uri }) => (
                            <Image key={uri} source={{ uri }} style={styles.galleryImages}/>
                        ))}
                    </Layout>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default GalleryPage;