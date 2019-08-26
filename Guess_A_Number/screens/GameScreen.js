import React from 'react';
import { View, Text, StyleSheet, TextInput , Button} from 'react-native';

const GameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.screenTitle}>{"Start a New Game"}</Text>
            <View style={styles.inputContainer} >
                <TextInput placeholder={"Enter a Number"}/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={()=>{}}/>
                    <Button title="Confirm" onPress={()=>{}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    screenTitle:{
        fontSize:20,
        marginVertical:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
        shadowColor:'#212121',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:5,
        paddingBottom: 20,
        borderRadius:10,
        backgroundColor: '#fff'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:10,
        justifyContent:'space-between'
    }
});

export default GameScreen;