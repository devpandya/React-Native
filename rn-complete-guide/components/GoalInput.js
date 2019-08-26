import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.addHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.isVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} style={{ marginBottom: 10 }}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={props.onCancel} color="red"></Button>
                    </View>
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
    },
    buttonContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        borderBottomColor: '#212121',
        borderBottomWidth: 1,
        marginHorizontal: 15,
        marginBottom: 10
    }
});

export default GoalInput;