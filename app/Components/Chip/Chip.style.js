import { StyleSheet } from 'react-native';
import { COLORS } from '../../GlobalStyle';

export default StyleSheet.create({
	containerOutlined: {
		padding: 10,
		borderWidth: 1,
		borderColor: COLORS.primary,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 1
	},
	containerFill: {
		padding: 10,
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		width: 105,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 1
	}
});
