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
      avatarContainer:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      avatar:{
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: COLORS.Grey[200]
      },
      avatarText:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: COLORS.primary
      }
});