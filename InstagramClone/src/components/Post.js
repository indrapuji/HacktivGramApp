import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function Post() {
    return (
        <View style={{ height: 566, borderWidth: 0.5, borderColor: "#DADADA" }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <TouchableOpacity>
                    <View style={{ height: 53, flexDirection: 'row' }}>
                        <View style={{ justifyContent: "center" }}>
                            <Image source={require('../../assets/images/image.png')} style={{ width: 38, height: 38, left: 9, borderRadius: 50 }} />
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ marginLeft: 17, fontSize: 13, fontWeight: 'bold' }}>animationv</Text>
                            <Text style={{ top: -5, marginLeft: 17, fontSize: 13 }}>Location</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Image source={require('../../assets/images/3dots.png')} style={{ width: 38, height: 38, top: 4, right: 5 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ width: 360, height: 360 }}>
                    <Image source={require('../../assets/images/image.png')} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ height: 53, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <View>
                            <Image source={require('../../assets/images/like.png')} style={{ width: 35, height: 35, left: 9, marginRight: 7, top: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Image source={require('../../assets/images/comment.png')} style={{ width: 35, height: 35, left: 6, top: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View >
                            <Image source={require('../../assets/images/chat.png')} style={{ width: 35, height: 35, left: 9, marginRight: 7, top: 5 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View>
                        <Image source={require('../../assets/images/bookmark.png')} style={{ width: 35, height: 35, top: 5, right: 5 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ height: 100, }} >
                    <Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>Likes</Text>
                    <Text style={{ left: 15, fontWeight: 'bold', fontSize: 15 }}>animationv</Text>
                    <Text style={{ fontSize: 15, paddingHorizontal: 15 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                </View>
            </View>
        </View>
    )
} 