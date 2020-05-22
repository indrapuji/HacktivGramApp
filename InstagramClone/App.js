import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Add, Search, Profile, Like } from './src/screens'
// import * as Font from "expo-font"
// import { AppLoading } from 'expo'

// const getFonts = () => {
// 	return Font.loadAsync({
// 		'Apple-Symbols': require('./assets/fonts/Apple-Symbols.ttf')
// 	})
// }

const Stack = createStackNavigator();

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	// if (fontsLoaded) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
				<Stack.Screen options={{ headerShown: false }} name="Add" component={Add} />
				<Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
				<Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
				<Stack.Screen options={{ headerShown: false }} name="Like" component={Like} />
			</Stack.Navigator>
		</NavigationContainer>
	);
	// } else {
	// 	return (
	// 		<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
	// 	)
	// }
}

const styles = StyleSheet.create({});
