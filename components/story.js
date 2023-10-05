import React from 'react'
import { ScrollView } from 'react-native'
import  styled from 'styled-components/native'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from "./avatar";


import fakeStories from '../data/fakeStories'


const Container = styled.View`
    width: 100%;
    height: 230px;
    flex-direction: row;
    align-items: center;
`

const UserCard = styled.View`
    width: 110px;
    height: 200px;
    margin-right: 10px;
    position: relative;
`

const UserCardStory = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`

const UserCardPlus = styled.View`
    width: 30px;
    height:  30px;
    border-radius: 15px;
    background: #3a86e9;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 40px;
`
const UserCardFooter = styled.View`
    position: absolute;
    width: 100%;
    height: 35%;
    top: 130px;
    left: 0px;
    border: ${(props => props.profile ? '1px solid #DDDDDD' : 0)};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${( props => props.profile ? '#FFFFFF' : '#00000000' )}
`
const UserOnCard = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #FFFFFF;
    border-radius:20px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`

const Text = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 0 10px;
    padding-top: ${(props => props.profile ? '20px' : '45px' )};
    text-align: center;
    color: ${(props => props.profile ? '#000' : '#fff')}

`

const Story = () => {
   return (
        <>
            <Container>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{paddingLeft:10}}
                >
                <UserCard>
                    <UserCardStory source={require('../assets/story.jpg')}/>
                    <UserCardFooter profile={true}>
                        <Text profile={true}> Crear una historia </Text>
                    </UserCardFooter>
                    <UserCardPlus>
                        <MaterialCommunityIcons name="plus" size={28} color="#FFFFFF" />
                    </UserCardPlus>
                </UserCard>
                { fakeStories.map((story, i) => {
                        return (
                            <UserCard key={i.toString()}>
                                <UserCardStory source={story.source} />
                                <UserCardFooter profile={false}>
                                    <Text profile={false}> {story.name} </Text>
                                </UserCardFooter>
                                <UserOnCard>
                                    <Avatar 
                                        source={story.user}
                                        story={true}
                                        checked={story.checked}
                                    >
                                    </Avatar>
                                </UserOnCard>
                            </UserCard>
                        )
                    })}
                </ScrollView>
            </Container>
        </>
   ) 
}

export default Story