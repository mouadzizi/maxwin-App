import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 20,
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
        fontSize: 17,
        fontWeight: 'bold',
        color: '#444',
        lineHeight: 23,
    },
    subTitle:{
        fontSize: 13,
        lineHeight: 23,
        color: '#ccc',
        fontStyle: 'italic'
    }
});