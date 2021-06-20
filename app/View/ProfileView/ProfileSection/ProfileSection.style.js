import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 70,
        marginTop: 10,
    },

    containerImage:{
        flex: 1,
        justifyContent: 'center'
    },

    containerText:{
        flex: 2,
        justifyContent: 'center'
    },

    containerButton:{
        flex: 1,
        justifyContent: 'center'
    },

    title:{
        color: '#444',
        lineHeight: 23,
    },
    subTitle:{
        color: '#ccc',
    }
});