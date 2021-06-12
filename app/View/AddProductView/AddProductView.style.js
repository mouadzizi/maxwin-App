import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    item: {
        alignItems: 'flex-start',
        padding: 15,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1,
    },
    header__name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
    },
    header: {
        paddingVertical: 6,
        paddingHorizontal: 10,

        backgroundColor: '#eee',
    },
});