import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native"
import { ScrollView } from "react-native";

import MainSeparator from "../components/mainSeparator";
import Toolbar from "../components/toolbar";
import Users from "../components/users";
import Story from "../components/story";
import Post from "../components/posts";

const View = styled.View`
   flex: 1;
`

const Home = () =>{
    return (
        <View>
            <ScrollView>
            <Toolbar />
            <MainSeparator />
            <Users/>
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
            <Post/>
        </ScrollView>
        </View>
    )
}

export default Home