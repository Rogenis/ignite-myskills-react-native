import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';
import Button from '../components/Button/Button';
import SkillCard from '../components/SkillCard/SkillCard';
import {styles} from './styles';

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Rógenis!</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        keyExtractor={item => item}
        data={mySkills}
        renderItem={({item}) => <SkillCard skill={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
