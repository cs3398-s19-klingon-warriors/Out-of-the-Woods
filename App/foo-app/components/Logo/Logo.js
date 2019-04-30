import React from 'react';
import { View, Image, Text } from 'react-native';

const Logo = () => (
	<View accessible={true} accessibilityRole='image'>
		<Image source={require('./images/ootw_newlogo.png')}>
		</Image>
	</View>
);

export default Logo;