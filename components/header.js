import React from "react";
import styled from 'styled-components'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Container = styled.View`
    width: 100%;
    padding-top: 50px;
    padding-bottom: 10px;
    padding-horizontal: 10px;
    align-items:center;
    flex-direction:row;
    justify-content: space-between;
`

const Text = styled.Text`
    color:#3a86e9;
    font-size: 35px;
    fontWeight: 800;
    letter-spacing: -0.3px
`

const Row = styled.View`
    flex-direction: row;
    heigh: 70px;
    align-items:center;
`

const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin-left: 16px;
    background-color: #EEEEEE;
    align-items: center;
    justify-content: center
`
const Menu = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center
`

const Header = () => {
    return(
        <Container>
            <Row>
                <Menu>
                    <MaterialCommunityIcons name="menu" size={25} color="black" ></MaterialCommunityIcons>
                </Menu>
                <Text>Fakebook</Text>
            </Row>
            <Row>
                <Button title="">
                    <MaterialCommunityIcons name="magnify" size={25} color="black" ></MaterialCommunityIcons>
                </Button>
               <Button title="">
                    <MaterialCommunityIcons name="facebook-messenger" size={26} color="black"></MaterialCommunityIcons>
               </Button>
            </Row>
        </Container>
    )
}

export default Header