import { StyleSheet, Dimensions } from 'react-native';
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: windowHeight,
        width: windowWidth,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    toolbarSub: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    toolbar: {
        flex: 1,
        height: 140,
        width: windowWidth,
        position: "absolute",
        flexDirection: 'row',
        backgroundColor: 'transparent',
        bottom: 0
    },
    captureBtn: {
        width: 70,
        height: 70,
        borderRadius: 65,
        borderColor: '#fff',
        borderWidth: 2,
        backgroundColor: 'transparent'
    },
    imageHolder: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: 'transparent'
    },
    topNav: {
        height: 80,
        paddingTop: 35
    },
    topNavText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    galleryGrid: {
        width: windowWidth,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent'
    },
    galleryImage: {
        height: Math.floor((windowWidth - 50) / 4),
        width: Math.floor((windowWidth - 50) / 4),
        margin: 5,
        justifyContent: 'flex-end'
    },
    galleryImageSelect: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
        margin: 8,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    imageModal: {
        height: Math.ceil(0.6 * windowHeight),
        width: Math.ceil(0.6 * windowWidth),
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
    },
    uploadButton: {
        width: 150,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20
    }
})