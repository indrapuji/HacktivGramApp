import React from 'react'
import { View, Image } from 'react-native'

export default function Header() {
    return (
        <View style={{ height: 48, flexDirection: "row", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                    <View >
                        <Image source={require('../../assets/images/camera.png')} style={{ width: 38, height: 38, top: 3, left: 4 }} />
                    </View>
                    <View>
                        <Image source={require('../../assets/images/instagram.png')} style={{ width: 110, height: 38, top: 4, left: 4 }} />
                    </View>
                </View>
                <View>
                    <Image source={require('../../assets/images/chat.png')} style={{ width: 38, height: 38, top: 3, right: 4 }} />
                </View>
            </View>
        </View>
    )
}