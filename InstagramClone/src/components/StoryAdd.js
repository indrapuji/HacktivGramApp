import React from 'react'
import { View, Image, Text } from 'react-native'

export default function History(props) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 18 }}>
                <View style={{ width: 64, height: 64, alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {/* <Text>image: {props.image}</Text> */}
                    <Image source={{uri:props.image}} style={{ width: 55, height: 55, borderRadius: 50, position: 'absolute' }} />
                    <Image source={require('../../assets/images/profile-add.png')} style={{ width: 64, height: 64 }} />
                </View>
                <Text style={{ fontSize: 15, marginTop: 2, textAlign: "center" }}>Your Story</Text>
            </View >
        </View>
    )
}