import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';


import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";


const GameOverScreen = props => {
    return (
    <ScrollView>
    <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
        <Image 
            source={require('../assets/success.png')} 
            //source={{uri: 'https://images.unsplash.com/photo-1505855265981-d52719d1f64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}} 
            style={styles.image} 
            resizeMode="cover"
        />
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone needed{' '} 
                <Text style={styles.highlight}>{props.roundsNumber}</Text>
                rounds to guess the number{' '} 
                <Text style={styles.highlight}>{props.userNumber}</Text>
            </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>
            NEW GAME
        </MainButton>
    </View>
    </ScrollView>
    )};

const styles = StyleSheet.create({
    screen: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       paddingVertical: 10
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        marginVertical: 30,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    highlight: {
        color: Colors.primary
    }
});

export default GameOverScreen;