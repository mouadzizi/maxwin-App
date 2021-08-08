import { StyleSheet } from 'react-native';
import { COLORS } from '../../GlobalStyle';

export default StyleSheet.create({
	containerOutlined: {
		padding: 10,
		width: "95%",
		height: 60,
		borderWidth: 1,
		borderColor: COLORS.primary,
		borderRadius: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 7,
		marginLeft: 8
	},
	containerFill: {
		padding: 10,
		width: "95%",
		height: 60,
		backgroundColor: COLORS.primary,
		borderRadius: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginVertical: 7,
		marginLeft: 8

	}
});
