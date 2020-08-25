import React from 'react';
import { Camera } from 'expo-camera';
import { Icon, Layout } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';

import styles from './CameraStyles';

const { FlashMode: CameraFlashModes } = Camera.Constants;

export default ({
    capturing = false,
    flashMode = CameraFlashModes.off,
    setFlashMode,
    onCapture
}) => (
    <Layout style={styles.toolbar}>
        <Layout style={styles.alignCenter}>
            <TouchableOpacity onPress={() => setFlashMode(
                flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on
            )}>
                <Icon name={flashMode === CameraFlashModes.on ? 'flash-outline' : 'flash-off-outline'}/>
            </TouchableOpacity>
        </Layout>
        <Layout style={styles.alignCenter}>
        </Layout>
        <Layout style={styles.alignCenter}>
        </Layout>
    </Layout>
);