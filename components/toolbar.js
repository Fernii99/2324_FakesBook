import React from "react";
import styled from "styled-components/native"
import {MaterialCommunityIcons} from '@expo/vector-icons'

import Avatar from "./avatar"

const Container = styled.View`
    width: 100%;
    height: 92px;
    margin-top: 1px;
`

const Row = styled.View`
    flex-direction: row;
    background-color: #FFF;
    width: 100%;
    padding: 0 11px;
    align-items: center;
`

const Input = styled.TextInput`
    height: 40px;
    width: 85%;
    padding: 0 8px;
    border: 1px solid #DDD;
    margin: 10px;
    border-radius: 30px;
`
const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background: #DDD;
`

const Menu = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;
`

const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: 500;
    font-size: 12px;
`
const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;
`

const Toolbar = () =>{
    return(
        <Container>
            <Row>
                <Avatar source={require('../assets/40.jpg')} />
                <Input placeholder="¿Qué estas pensando?" />
            </Row>
            <Divider/>
            <Row>
                <Menu>
                    <MaterialCommunityIcons name="video-account" size={20} color="#F44337" />
                    <MenuText> Directo </MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <MaterialCommunityIcons name="image-multiple" size={20} color="#F44337" />
                    <MenuText> Foto </MenuText>
                </Menu>
                <Separator />
                <Menu>
                    <MaterialCommunityIcons name="video-plus" size={20} color="#F44337" />
                    <MenuText> Sala </MenuText>
                </Menu>
            </Row>
        </Container>
    )

}
export default Toolbar