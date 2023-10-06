import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native"
import Profile from "../components/Profile";


const View = styled.View`
    align-items: center;
    heigh:500px;
`

const ProfileScreen = () =>{
    return (
        <View>
            <Profile/>
        </View>
    )
}

export default ProfileScreen