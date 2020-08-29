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
    galleryImageSelectIcon: {
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
    },
    topNavCodeEditor: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: "relative"
    },
    topNavTextCodeEditor: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15
    },
    textInputDark: {
        borderColor: 'transparent',
        backgroundColor: '#24292E'
    },
    textDark: {
        height: Math.ceil(windowHeight * 0.65),
        color: '#24292E',
        fontFamily: 'Consolas',
        lineHeight: 20,
    },
    textInputLight: {
        borderColor: '#24292E',
        marginHorizontal: 2,
        marginTop: 2,
        backgroundColor: '#fff'
    },
    textLight: {
        height: Math.ceil(windowHeight * 0.65),
        color: '#fff',
        fontFamily: 'Consolas',
        lineHeight: 20
    },
    menuHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        alignItems: 'center',
        borderTopColor: '#3366FF',
        borderTopWidth: 1
    },
    languageButton: {
        backgroundColor: 'transparent',
        borderColor: '#7d7d7d',
        borderWidth: 1,
        borderRadius: 3,
        height: 40,
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    buttonHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 25,
        paddingBottom: 20
    },
    codeEditorButton: {
        width: '35%',
        borderRadius: 50,
        backgroundColor: '#3366FF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 9,
        justifyContent: 'center'
    },
    errorModalTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
        height: 50, 
        borderBottomColor: '#7d7d7d',
        borderBottomWidth: 1
    },
    errorInput: {
        marginTop: 10,
        borderColor: 'transparent'
    },
    errorInputText: {
        height: Math.ceil(windowHeight * 0.85),
        color: '#fe5c5c'
    }
})