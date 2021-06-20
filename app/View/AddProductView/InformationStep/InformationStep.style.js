import { StyleSheet } from 'react-native';
import { COLORS, windowHeight, windowWidth } from '../../../GlobalStyle';
export default StyleSheet.create({
    container:{
        paddingTop: 15,
        paddingHorizontal: 20,
    },
    containerHeight:{
        height: windowHeight*0.84,
    },
    pickerView:{
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '100%',
        borderColor: COLORS.Grey[300],
    },
    pickerInput:{
        height: 50,
        width: '100%'
    },
    label:{
        color: COLORS.primary,
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    title:{
        marginTop: 20,
        paddingLeft: 10,
        color: COLORS.primary
    }
})