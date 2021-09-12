import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function TextView(props) {
	const [ loaded, setLoaded ] = useState(false);
	useEffect(() => {
		loadFonts().then(() => setLoaded(true)).catch((err) => console.warn(err.message));
	}, []);

	const loadFonts = async () => {
		await Font.loadAsync({
			'Nova-Regular': {
				uri: require('../../../assets/Fonts/NovaSlim-Regular.ttf'),
				display: Font.FontDisplay.FALLBACK
			},
			'Source-Regular': {
				uri: require('../../../assets/Fonts/SourceSansPro-Regular.ttf'),
				display: Font.FontDisplay.FALLBACK
			}
		});
	};

	return (
		<View>
			{loaded ? props.fontFamily == 'Source-Regular' ? (
				<Text style={[ { fontFamily: 'Source-Regular', fontSize: props.fontSize }, props.style ]}>
					{props.children}
				</Text>
			) : (
				<Text style={[ { fontFamily: 'Nova-Regular', fontSize: props.fontSize }, props.style ]}>
					{props.children}
				</Text>
			) : null}
		</View>
	);
}
