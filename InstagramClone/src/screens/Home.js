import React from "react";
import { ScrollView, View } from "react-native";
import { Header, Navigation, Post, Space, StoryAdd, Story } from '../components';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
                            <StoryAdd />
                            <Story />
                        </ScrollView>
                        <Post />
                    </ScrollView>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </View >
    );
}