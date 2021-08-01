import { StyleSheet } from 'react-native';
import { COLORS } from '../../GlobalStyle';

export default StyleSheet.create({
	containerOutlined: {
		padding: 10,
		width: 170,
		height: 50,
		borderWidth: 1,
		borderColor: COLORS.primary,
		borderRadius: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 2,
		marginLeft: 8
	},
	containerFill: {
		padding: 10,
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		width: 170,
		height: 50,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 2,
		marginLeft: 8

	}
});
