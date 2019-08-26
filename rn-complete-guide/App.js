import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addGoalHandler = (enteredText) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredText }]);
    setAddMode(addMode => !addMode);
  }

  const deleteHandler = (id)=>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter(goal => goal.id !== id);
    })
  }

  const hideModal =()=>{
    setAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title ="Add New Goal" onPress={()=> setAddMode(true)}/>
      <GoalInput onCancel={hideModal} isVisible={isAddMode} addHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem   id ={itemData.item.id} itemValue={itemData.item.value} onDelete={deleteHandler}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 12,
    paddingVertical: 50,
  }
});
