import React, { useState } from "react";
// import * as Font from "expo-font"
import { StyleSheet, View, ScrollView } from "react-native";
// import { AppLoading } from 'expo'
import Navigation from './src/components/Navigation'
import Space from './src/components/Space'
import Header from './src/components/Header'
import Story from './src/components/Story'
import Post from './src/components/Post'

// const getFonts = () => {
// 	return Font.loadAsync({
// 		'Apple-Symbols': require('./assets/fonts/Apple-Symbols.ttf')
// 	})
// }

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	// if (fontsLoaded) {
	return (
		<View style={{ flex: 1 }}>
			<Space />
			<Header />
			<View style={{ flex: 1 }}>
				<View>
					<ScrollView showsVerticalScrollIndicator={false}>
						<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
							<Story />
						</ScrollView>
						<Post />
						<Post />
						<Post />
					</ScrollView>
				</View>
			</View>
			<Navigation />
		</View >
	);
	// } else {
	// 	return (
	// 		<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
	// 	)
	// }
}

const styles = StyleSheet.create({});
