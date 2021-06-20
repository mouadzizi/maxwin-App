import {StyleSheet} from 'react-native';
import {COLORS, windowWidth, windowHeight} from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        height: 320,
        backgroundColor: COLORS.Grey[100],
        marginHorizontal: 10,
        marginVertical: 20,
        borderColor: COLORS.Grey[200],
        borderRadius: 10
    },
    titleContainer:{
        height: 30,
    },
    imageContainer:{
        height: 240,
        flexDirection: 'row',
    },
    informationContainer:{
        height: 50,
        flexDirection: 'row'
    },
    title:{
        color: COLORS.primary,
        fontWeight: 'bold',
        padding: 5
    }
});