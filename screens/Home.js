import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native"

import MainSeparator from "../components/mainSeparator";
import Toolbar from "../components/toolbar";
import Users from "../components/users";
import Story from "../components/story";

const View = styled.View`
   flex: 1;
`

const Home = () =>{
    return (
        <View>
            <Toolbar />
            <MainSeparator />
            <Users/>
            <MainSeparator/>
            <Story/>
            <MainSeparator/>
        </View>
    )
}

export default Home