import { StyleSheet } from 'react-native'
import {COLORS} from '../../../../GlobalStyle'

export const s = StyleSheet.create({
    container:{
        backgroundColor:'#bdc3c7',
        width:'100%',
        height:90,
        borderRadius:14,
        alignItems:'center'
    },
    title:{
      fontSize:18,
      letterSpacing:2,
      fontWeight:'200',
      alignSelf:'flex-start'
    },
    cat:{
        alignSelf:'center',
        fontSize: 16
    },
    button:{
       backgroundColor:COLORS.secondary,
       width:'70%',
       height:'30%',
       borderRadius:14,
       marginVertical:6
    }
})