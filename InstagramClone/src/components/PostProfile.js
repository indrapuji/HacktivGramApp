import React from 'react'
import { View, Image } from 'react-native'

export default function PostProfile() {
    return (
        <View>
            <View style={{ flex: 1, flexWrap: "wrap", flexDirection: 'row', justifyContent: "space-between" }}>
                <View style={{ marginVertical: 1 }}>
                    <Image source={require('../../assets/images/image.png')} style={{ width: 119, height: 119 }} />
                </View>
            </View>
        </View>
    )
}