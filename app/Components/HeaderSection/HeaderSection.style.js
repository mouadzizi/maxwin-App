import {StyleSheet} from 'react-native';
import { COLORS } from '../../GlobalStyle';
export default StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    container1:{
        flex: 1,
        alignItems: 'flex-start'
    },
    container2:{
        flex: 1,
        alignItems: 'flex-end',
        paddingEnd: 10,
    },
    title:{
        paddingLeft: 20,
        fontSize: 20,
        color: COLORS.secondary,
        fontWeight: 'bold'
    }
});