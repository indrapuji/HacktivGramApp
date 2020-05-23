import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { Space, BottomRegister } from '../components'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Register({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View>
                    <View style={{ marginTop: 56, }}>
                        <Image source={require('../../assets/images/thumbnail-reg.png')} style={{ height: 151, width: 151 }} />
                    </View>
                </View>
            </View>
            <BottomRegister navigation={navigation} />
        </View>
    )
}