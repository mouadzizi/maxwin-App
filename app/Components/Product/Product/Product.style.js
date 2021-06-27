import {StyleSheet} from 'react-native';
import {COLORS, windowWidth, windowHeight} from '../../../GlobalStyle';

export default StyleSheet.create({
    containerGlobal: {
        height: 340,
        backgroundColor: COLORS.Grey[100],
        marginVertical: 10,
        borderColor: COLORS.Grey[200],
    },
    containerSection1:{
        height: 40,
        paddingLeft: 10,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerLikes: {
        paddingEnd: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer:{
        height: 250,
        flexDirection: 'row',
    },
    informationContainer:{
        height: 50,
        flexDirection: 'row'
    },
    informationContainerSection1:{
        height: 50,
        paddingLeft: 20,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    informationContainerSection2:{
        height: 50,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    priceText:{
        fontWeight: 'bold',
        color: COLORS.primary,
        fontSize: 16,
    },
    likeNumber:{
        padding: 10,
        fontWeight: 'bold',
        color: 'black'
    },
});