import React, { useState } from "react";
import * as Font from "expo-font"
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AppLoading } from 'expo'

const getFonts = () => {
	return Font.loadAsync({
		'Apple-Symbols': require('./assets/fonts/Apple-Symbols.ttf')
	})
}

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	if (fontsLoaded) {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 25, backgroundColor: "#F0F0F0" }} />
				{/* header */}
				<View style={{ height: 48, flexDirection: "row", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
						<View style={{ flexDirection: 'row' }}>
							<View >
								<Image source={require('./assets/images/camera.png')} style={{ width: 38, height: 38, top: 3, left: 4 }} />
							</View>
							<View>
								<Image source={require('./assets/images/instagram.png')} style={{ width: 110, height: 38, top: 4, left: 4 }} />
							</View>
						</View>
						<View>
							<Image source={require('./assets/images/chat.png')} style={{ width: 38, height: 38, top: 3, right: 4 }} />
						</View>
					</View>
				</View>

				<View style={{ flex: 1 }}>
					{/* story */}
					<View>
						<ScrollView showsVerticalScrollIndicator={false}>
							<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Your Story</Text>
								</View>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Bram</Text>
								</View>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Agus</Text>
								</View>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Ruli</Text>
								</View>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Malik</Text>
								</View>
								<View style={{ marginRight: 18 }}>
									<View style={{ width: 64, height: 64, borderRadius: 50 }}>
										<Image source={require('./assets/images/thumbnail-story.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
									<Text style={{ fontSize: 15, fontFamily: "Apple-Symbols", marginTop: 2, textAlign: "center" }}>Verry</Text>
								</View>
							</ScrollView>
							{/* {post} */}
							<View style={{ height: 566, borderWidth: 0.5, borderColor: "#DADADA" }}>
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
									<View style={{ height: 53, flexDirection: 'row' }}>
										<View style={{ justifyContent: "center" }}>
											<Image source={require('./assets/images/thumbnail-post.png')} style={{ width: 38, height: 38, left: 9 }} />
										</View>
										<View style={{ justifyContent: "center" }}>
											<Text style={{ marginLeft: 17, fontSize: 13, fontWeight: 'bold' }}>animationv</Text>
											<Text style={{ top: -5, marginLeft: 17, fontSize: 13 }}>Location</Text>
										</View>
									</View>
									<View>
										<Image source={require('./assets/images/3dots.png')} style={{ width: 38, height: 38, top: 4, right: 5 }} />
									</View>
								</View>
								<View>
									<View style={{ width: 360, height: 360 }}>
										<Image source={require('./assets/images/image.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
								</View>
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
									<View style={{ height: 53, flexDirection: 'row' }}>
										<View>
											<Image source={require('./assets/images/like.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
										<View >
											<Image source={require('./assets/images/comment.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
										<View >
											<Image source={require('./assets/images/chat.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
									</View>
									<View>
										<Image source={require('./assets/images/bookmark.png')} style={{ width: 38, height: 38, top: 5, right: 5 }} />
									</View>
								</View>
								<View>
									<View style={{ height: 100, }} >
										<Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>Likes</Text>
										<Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>animationv</Text>
										<Text style={{ fontSize: 15, paddingHorizontal: 15 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
									</View>
								</View>
							</View>

							<View style={{ height: 566, borderWidth: 0.5, borderColor: "#DADADA" }}>
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
									<View style={{ height: 53, flexDirection: 'row' }}>
										<View style={{ justifyContent: "center" }}>
											<Image source={require('./assets/images/thumbnail-post.png')} style={{ width: 38, height: 38, left: 9 }} />
										</View>
										<View style={{ justifyContent: "center" }}>
											<Text style={{ marginLeft: 17, fontSize: 13, fontWeight: 'bold' }}>animationv</Text>
											<Text style={{ top: -5, marginLeft: 17, fontSize: 13 }}>Location</Text>
										</View>
									</View>
									<View>
										<Image source={require('./assets/images/3dots.png')} style={{ width: 38, height: 38, top: 4, right: 5 }} />
									</View>
								</View>
								<View>
									<View style={{ width: 360, height: 360 }}>
										<Image source={require('./assets/images/image.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
									</View>
								</View>
								<View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
									<View style={{ height: 53, flexDirection: 'row' }}>
										<View>
											<Image source={require('./assets/images/like.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
										<View >
											<Image source={require('./assets/images/comment.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
										<View >
											<Image source={require('./assets/images/chat.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
										</View>
									</View>
									<View>
										<Image source={require('./assets/images/bookmark.png')} style={{ width: 38, height: 38, top: 5, right: 5 }} />
									</View>
								</View>
								<View>
									<View style={{ height: 100, }} >
										<Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>Likes</Text>
										<Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>animationv</Text>
										<Text style={{ fontSize: 15, paddingHorizontal: 15 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
									</View>
								</View>
							</View>

						</ScrollView>
					</View>
				</View>

				<View style={{ height: 48, flexDirection: "row", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
						<View>
							<Image source={require('./assets/images/home.png')} style={{ width: 38, height: 38 }} />
						</View>
					</View>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
						<View>
							<Image source={require('./assets/images/search.png')} style={{ width: 38, height: 38 }} />
						</View>
					</View>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
						<View>
							<Image source={require('./assets/images/add.png')} style={{ width: 38, height: 38 }} />
						</View>
					</View>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
						<View>
							<Image source={require('./assets/images/like.png')} style={{ width: 38, height: 38 }} />
						</View>
					</View>
					<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
						<View>
							<Image source={require('./assets/images/thumbnail-pp.png')} style={{ width: 38, height: 38 }} />
						</View>
					</View>
				</View>
			</View >
		);
	} else {
		return (

			<AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
		)
	}
}

const styles = StyleSheet.create({});
