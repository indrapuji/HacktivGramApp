import React from 'react'
import { View, Text, Image } from 'react-native'

export default function ImageProfile() {

    

    return (
        <View style={{ flex: 1, height: 114, flexDirection: 'row', justifyContent: "space-evenly" }}>
            <View>
                <Image source={require('../../assets/images/image.png')} style={{ top: 14, bottom: 14, width: 87, height: 87, borderRadius: 50 }} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                <Text style={{ fontSize: 15 }}>Posts</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                <Text style={{ fontSize: 15 }}>Followers</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>135</Text>
                <Text style={{ fontSize: 15 }}>Following</Text>
            </View>
        </View>
    )
}
