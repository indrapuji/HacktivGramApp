import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ height: 25, backgroundColor: "#F0F0F0" }}></View>
			<View style={{ height: 48, flexDirection: "row", backgroundColor: "white", borderWidth: 0.5 }}>
				<View style={{ flex: 1, justifyContent: "center" }}>
					<Image source={require('./assets/camera.png')} style={{ width: 38, height: 38, left: 7 }} />
				</View>
				<View style={{ flex: 1 }}>
					<Image source={require('./assets/instagram.png')} style={{ width: 110, height: 30, marginLeft: -75, top: 10 }} />
				</View>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Image source={require('./assets/chat.png')} style={{ width: 38, height: 38, marginRight: -80 }} />
				</View>
			</View>
			<View style={{ flex: 1 }}></View>
			<View style={{ height: 48, flexDirection: "row" }}>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<View>
						<Image source={require('./assets/home.png')} style={{ width: 38, height: 38 }} />
					</View>
				</View>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<View>
						<Image source={require('./assets/search.png')} style={{ width: 38, height: 38 }} />
					</View>
				</View>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<View>
						<Image source={require('./assets/add.png')} style={{ width: 38, height: 38 }} />
					</View>
				</View>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
					<View>
						<Image source={require('./assets/like.png')} style={{ width: 38, height: 38 }} />
					</View>
				</View>
				<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
					<View>
						<Image source={require('./assets/thumbnail-pp.png')} style={{ width: 38, height: 38 }} />
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
