import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    ScrollContainer:{
        flex: 1,
        marginBottom: 65,
        backgroundColor: 'white'
    }
});