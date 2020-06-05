import React from "react";
import React, {useEffect, useState} from "react";
import { ScrollView, View, Text } from "react-native";

//import Regis from "../components/UserForm/login";

export default function Login() {
	return (
		<View style={{ backgroundColor: "#FAFAFA" }}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<img
					style={{
						width: "35%",
						height: "33%",
						marginTop: 35,
					}}
					src={require("../assets/images/regphone.jpg")}
				/>
				{/* <Regis /> */}
			</View>
			{/* <View className="sub" id="footer"> */}
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 50,
				}}
			>
				<View
					style={{
						display: "flex",
						color: "#385185",
						fontSize: 12,
						flexDirection: "row",
						marginBottom: 30,
						fontWeight: "bold",
					}}
				>
					<p style={{ marginRight: "0.7rem" }}>ABOUT</p>
					<p style={{ marginRight: "0.7rem" }}>HELP</p>
					<p style={{ marginRight: "0.7rem" }}>PRESS</p>
					<p style={{ marginRight: "0.7rem" }}>API</p>
					<p style={{ marginRight: "0.7rem" }}>JOBS</p>
					<p style={{ marginRight: "0.7rem" }}>PRIVACY</p>
					<p style={{ marginRight: "0.7rem" }}>TERMS</p>
					<p style={{ marginRight: "0.7rem" }}>LOCATIONS</p>
					<p style={{ marginRight: "0.7rem" }}>TOP ACCOUNTS</p>
					<p style={{ marginRight: "0.7rem" }}>HASTAGS</p>
					<p style={{ marginRight: "0.7rem" }}>LANGUAGE</p>
				</View>
				<View
					style={{
						color: "grey",
						fontSize: 13,
						fontWeight: "bold",
						marginLeft: "3rem",
					}}
				>
					<View>© 2020 INSTAGRAM FROM FACEBOOK</View>
				</View>
			</View>
		</View>
	);
}
