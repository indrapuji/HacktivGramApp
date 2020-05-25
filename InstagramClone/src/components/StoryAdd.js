import React from 'react'
import { View, Image, Text } from 'react-native'

export default function History() {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 18 }}>
                <View style={{ width: 64, height: 64, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Image source={require('../../assets/images/image.png')} style={{ width: 55, height: 55, borderRadius: 50, position: 'absolute' }} />
                    <Image source={require('../../assets/images/profile-add.png')} style={{ width: 64, height: 64 }} />
                </View>
                <Text style={{ fontSize: 15, marginTop: 2, textAlign: "center" }}>Your Story</Text>
            </View >
        </View>
    )
}