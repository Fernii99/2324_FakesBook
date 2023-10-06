import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons' 
import MainSeparator from './mainSeparator' 
import styled from "styled-components/native";
import { Text } from "react-native";

const GeneralContainer = styled.View`
    background-color: white;
    width: 100%
`

const Navigation = styled.View`
    flex-direction: row;
    height: 50px;
    width: 100%;
    justify-content: space-between;
    background: #FFF;
    align-items: center;
    padding-horizontal: 10px;
`

const NavigationContainerLeft = styled.View`
    width: 20%;
    flex-direction: row;
`
const NavigationContainerCenter = styled.View`
    width:35%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
const NavigationContainerRight = styled.View`
    width: 20%;
    flex-direction: row;
    justify-content: flex-end;
`

const ButtonRotated = styled.TouchableOpacity`
    height: 25px;
    width: 25px;
    transform: rotate(180deg);
`
const Button = styled.TouchableOpacity`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`

const Header = styled.View` 
    background: blue;
`
const ImageContainer = styled.View`
    width: 100%;
    object-fit: cover;
`

const BackgroundImage = styled.Image`
    height: 250px;
`

const ProfileContainer = styled.View`
    position: absolute;
    bottom: -50px;
    left: 20px;
`

const ProfileImage = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 200px;
    backgroundColor: black;
    border: 4px solid white;
    position-x: 10;
`


const ProfileImageCamera = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    right: 15px;
    background: #ddd;
    border-radius: 30px;
`

const BackgroundCameraContainer = styled.TouchableOpacity`
    width: 30px;
    height:30px;
    position: absolute;
    bottom:10px;
    right: 10px;
    background: #ddd;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
`
const HeaderBottomContainer = styled.View`
    width: 100%;
    margin-top: 50px;
`

const UserName = styled.Text`
    font-size: 25px;
    font-weight: bold;
    padding-left: 10px;
`

const ButtonsContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`
const AddStory = styled.TouchableOpacity`
    width: 45%;
    flex-direction: row;
    background: #4267B2;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
`
const EditProfile = styled.TouchableOpacity`
    width: 35%;
    flex-direction: row;
    background: #DDD;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
`
const ExtraOption = styled.TouchableOpacity`
    width: 12%;
    flex-direction: row;
    background: #DDD;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-around;
`

const BodyContainer = styled.View`
    flex-direction: row;
    background: #FFF;
    width: 100%;
    height: 300px;
`

const BodyButtonsContainer = styled.View`
    padding-top: 10px;
    flex-direction: row;
    padding-left: 5px;
    width: 70%;
    height: 40px;
    justify-content: space-around;
`
const PostsButton = styled.TouchableOpacity`
    background: #EDF5FE;
    flex-direction: row;
    padding-horizontal: 10px;
    border-radius: 30px;
    align-items: center;
    justify-content: space-around;
`
const PhotosButton = styled.TouchableOpacity`
    justify-content:center;
    align-items: center;
    
`
const ReelsButton = styled.TouchableOpacity`
    justify-content:center;    
    align-items: center;
    
`
const Spacer = styled.View`
    width:90%;
    border-bottom: 1px solid;
    border-color: black
`

const Profile = () => {
    return (
        <>
        <GeneralContainer>
            <Navigation>
                <NavigationContainerLeft>
                    <ButtonRotated> 
                        <MaterialCommunityIcons name="greater-than" size={25}  />
                    </ButtonRotated>
                </NavigationContainerLeft>
                <NavigationContainerCenter>
                    <Text>Asier Fernandez Cerio</Text>
                </NavigationContainerCenter>
                    <NavigationContainerRight>
                    <Button>
                        <MaterialCommunityIcons name="pencil" size={25} />
                    </Button>
                    <Button>
                        <MaterialCommunityIcons name="magnify" size={25} />
                    </Button>
                </NavigationContainerRight>
            </Navigation>
            <Header>
                <ImageContainer>
                    <BackgroundImage source={require('../assets/story3.jpg')}  /> 
                    <ProfileContainer>
                        <ProfileImage source={require('../assets/fernii.png')}></ProfileImage>
                        <ProfileImageCamera>
                            <MaterialCommunityIcons name="camera" size={20}  />
                        </ProfileImageCamera>
                    </ProfileContainer>
                    <BackgroundCameraContainer>
                        <MaterialCommunityIcons name="camera" size={20} />
                    </BackgroundCameraContainer>
                </ImageContainer>
            </Header>
            <HeaderBottomContainer>
                <UserName>"El Mesias" Ferni</UserName>
                <ButtonsContainer>
                <AddStory> 
                    <MaterialCommunityIcons name="plus" size={20} color={"#FFF"} />
                    <Text style={{ fontSize:20, fontWeight:500, color:'#FFF'}}>Añadir historia</Text>
                </AddStory>
                <EditProfile> 
                    <MaterialCommunityIcons name="pen" size={20} color={"#FFF"} />
                    <Text style={{ fontSize:20, fontWeight:500, color:'#FFF'}}>Editar Perfil</Text>
                </EditProfile>
                <ExtraOption> 
                    <MaterialCommunityIcons name="dots-horizontal" size={20} color={"#FFF"} />
                </ExtraOption>
            </ButtonsContainer>
            </HeaderBottomContainer>

            
            <MainSeparator />
                <BodyContainer>
                    <BodyButtonsContainer>
                        <PostsButton> 
                            <Text style={{ fontSize:20, fontWeight:500, color:'#2962CA'}}>Publicaciones</Text>
                        </PostsButton>
                        <PhotosButton> 
                            <Text style={{ fontSize:20, fontWeight:500, color:'#000'}}>Fotos</Text>
                        </PhotosButton>
                        <ReelsButton> 
                        <Text style={{ fontSize:20, fontWeight:500, color:'#000'}}>Reels</Text>

                        </ReelsButton>
                    </BodyButtonsContainer>
                </BodyContainer>

                <Spacer />

         </GeneralContainer>
        </>
    )
}

export default Profile