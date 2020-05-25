import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Add, Search, Profile, Like, Login, Register } from './src/screens'


const Stack = createStackNavigator();

export default function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
				<Stack.Screen options={{ headerShown: false }} name="Add" component={Add} />
				<Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
				<Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
				<Stack.Screen options={{ headerShown: false }} name="Like" component={Like} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
				<Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
			</Stack.Navigator>
		</NavigationContainer>
	);

}

const styles = StyleSheet.create({});
