import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function BottomRegister(props) {
    function onLogin() {
        props.navigation.navigate('Login')
    }
    return (
        <View style={{ height: 48, flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
            <View>
                <Text>Already have an account?</Text>
            </View>
            <TouchableOpacity onPress={onLogin}>
                <View>
                    <Text style={{ color: "blue" }}> Log in.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}