import React from 'react'
import { View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Navigation(props) {
    function onHome() {
        props.navigation.navigate('Home')
    }
    function onSearch() {
        props.navigation.navigate('Search')
    }
    function onAdd() {
        props.navigation.navigate('Add')
    }
    function onLike() {
        props.navigation.navigate('Like')
    }
    function onProfile() {
        props.navigation.navigate('Profile')
    }

    return (
        <View style={{ height: 48, flexDirection: "row", borderWidth: 0.5, borderColor: "#DADADA", backgroundColor: '#FAFAFA' }}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onHome}>
                    <View>
                        <Image source={require('../../assets/images/home.png')} style={{ width: 38, height: 38 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onSearch}>
                    <View>
                        <Image source={require('../../assets/images/search.png')} style={{ width: 38, height: 38 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onAdd}>
                    <View>
                        <Image source={require('../../assets/images/add.png')} style={{ width: 38, height: 38 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                <TouchableOpacity onPress={onLike}>
                    <View>
                        <Image source={require('../../assets/images/like.png')} style={{ width: 38, height: 38 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={onProfile}>
                    <View>
                        <Image source={require('../../assets/images/thumbnail-pp.png')} style={{ width: 38, height: 38 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}