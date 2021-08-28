import {StyleSheet} from 'react-native';
import { COLORS } from '../../GlobalStyle';
export default StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#ddd',
    },
    imageContainer:{
        backgroundColor: COLORS.primary,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 75,
    },
    container: {
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ddd'
    },
    errorMessage:{
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
        alignSelf:'center'
    },
    welcomeText:{
        color: COLORS.text,
        fontSize: 17,
        textAlign: 'center',
        marginTop: 20
    },
});