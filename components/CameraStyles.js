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
        flex: 1,
        flexDirection: 'row',
        width: windowWidth,
        flexWrap: 'wrap',
        backgroundColor: 'transparent'
    },
    galleryImages: {
        height: 100,
        width: 100,
        margin: 5
    }
})