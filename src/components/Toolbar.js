import React from 'react';
import { Camera } from 'expo-camera';
import { Icon, Layout } from '@ui-kitten/components';
import { Image, TouchableOpacity } from 'react-native';

import styles from './CameraStyles';

const { FlashMode: CameraFlashModes } = Camera.Constants;

export default ({
    capturing = false,
    lastCapture,
    flashMode = CameraFlashModes.off,
    setFlashMode,
    onCapture, onPressImage
}) => (
    <Layout style={styles.toolbar}>
        <Layout style={styles.toolbarSub}>
            <TouchableOpacity onPress={() => setFlashMode(
                flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on
            )}>
                <Icon
                    style={{ height: 30, width: 30 }}
                    name={flashMode === CameraFlashModes.on ? 'flash-outline' : 'flash-off-outline' }
                    fill="#fff"
                />
            </TouchableOpacity>
        </Layout>
        <Layout style={styles.toolbarSub}>
            <TouchableOpacity onPress={onCapture}>
                <Layout style={[styles.captureBtn, capturing]}/>
            </TouchableOpacity>
        </Layout>
        <Layout style={styles.toolbarSub}>
            <TouchableOpacity onPress={onPressImage}>
                <Image source={lastCapture} style={styles.imageHolder}/>
            </TouchableOpacity>
        </Layout>
    </Layout>
);