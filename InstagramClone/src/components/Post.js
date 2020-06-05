import React from 'react'
import { View, Image, Text } from 'react-native'


export default function Post(props) {

    return (
        <View style={{ height: 566, borderWidth: 0.5, borderColor: "#DADADA" }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                {/* <Text>props: {JSON.stringify(props.posting)}</Text> */}
                <View style={{ height: 53, flexDirection: 'row' }}>
                    <View style={{ justifyContent: "center" }}>
                        <Image source={{uri:props.posting.image_url}} style={{ width: 38, height: 38, left: 9, borderRadius: 50 }} />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ marginLeft: 17, fontSize: 13, fontWeight: 'bold' }}>{props.posting.title}</Text>
                        <Text style={{ top: -5, marginLeft: 17, fontSize: 13 }}>{props.posting.location}</Text>
                    </View>
                </View>
                <View>
                    <Image source={{uri:props.posting.image_url}} style={{ width: 38, height: 38, top: 4, right: 5 }} />
                </View>
            </View>
            <View>
                <View style={{ width: 360, height: 360 }}>
                    <Image source={{uri:props.posting.image_url}} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ height: 53, flexDirection: 'row' }}>
                    <View>
                        <Image source={require('../../assets/images/like.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
                    </View>
                    <View >
                        <Image source={require('../../assets/images/comment.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
                    </View>
                    <View >
                        <Image source={require('../../assets/images/chat.png')} style={{ width: 38, height: 38, left: 8, top: 5 }} />
                    </View>
                </View>
                <View>
                    <Image source={require('../../assets/images/bookmark.png')} style={{ width: 38, height: 38, top: 5, right: 5 }} />
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
    )
} 