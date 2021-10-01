import {StyleSheet} from 'react-native';
import { COLORS } from '../../GlobalStyle';


export default StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#ddd',
    },
    container: {
        marginVertical: 7,
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
      },

      label: {
        color: COLORS.primary,
        fontSize: 17,
        fontWeight: 'bold'
      },
});