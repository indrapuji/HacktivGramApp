import React from 'react'
import { View, Image } from "react-native";

export default function Navigation() {
    return (
        <View style={{ height: 48, flexDirection: "row", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Image source={require('../../assets/images/home.png')} style={{ width: 38, height: 38 }} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Image source={require('../../assets/images/search.png')} style={{ width: 38, height: 38 }} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Image source={require('../../assets/images/add.png')} style={{ width: 38, height: 38 }} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                <View>
                    <Image source={require('../../assets/images/like.png')} style={{ width: 38, height: 38 }} />
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <Image source={require('../../assets/images/thumbnail-pp.png')} style={{ width: 38, height: 38 }} />
                </View>
            </View>
        </View>
    )
}