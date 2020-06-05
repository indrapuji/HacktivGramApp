import React, {useEffect, useState} from "react";
import { ScrollView, View, Text } from "react-native";
import { Header, Navigation, Post, Space, StoryAdd, Story } from '../components';
import axios from 'axios'

export default function Home({ navigation }) {

    const host = 'https://safe-headland-69478.herokuapp.com'

    // const [toFollow, setTofollow] = useState([])
    const [post, setPost] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() => {
       // followTrigger()
        getEffect()
    }, [])

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZ3VzQG1haWwuY29tIiwiaWF0IjoxNTkwNTcxNTMwfQ.g83jUYgPG2HGIeTI9QLIxgH4LGvUmc4RkBpC5dFwTlo'

    function getEffect() {
        axios({
            method: "get",
            url: `${host}/posts/all`,
        })
            .then(response => {
                let allpost = response.data
                axios({
                    method: "get",
                    url: `${host}/follows/following`,
                    headers: { token }
                })
                    .then(response => {
                        let allfollowing = response.data
                        setFollowing(allfollowing)
                        let arrpost = []
                        for (let i = 0; i < allpost.length; i++) {
                            for (let j = 0; j < allfollowing.length; j++) {
                                if (allpost[i].UserId === allfollowing[j].id) {
                                    arrpost.push(allpost[i])
                                }
                            }
                        }
                        setPost(arrpost)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <View style={{ flex: 1 }}>
            <Space />
            <Header />
            <View style={{ flex: 1 }}>
                <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 97, flexDirection: 'row', paddingLeft: 12, paddingTop: 7, borderWidth: 0.5, borderColor: "#DADADA" }}>
                            {(following.length>0)&& following.map((item,idx)=>(
                                <View key={idx}>
                                    <StoryAdd image={item.image} />
                                </View>
                            ))}
                            {/* <Text>Following:{JSON.stringify(following)}</Text> */}
                            <Story />
                        </ScrollView>
                        {(post.length>0) && post.map((posting, idx)=>(
                            <View key={idx}>
                                <Post posting={posting}/>
                            </View>
                        ))}
                        
                    </ScrollView>
                </View>
            </View>
            <Navigation navigation={navigation} />
        </View >
    );
}