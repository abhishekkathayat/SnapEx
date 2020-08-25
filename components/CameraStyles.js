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
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    }
})