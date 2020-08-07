import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response=>{
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher)=>{
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(()=>{
    loadFavorites();
  })

  async function handleFiltersSubmit(){
    loadFavorites();
    const response = await api.get('classes', {
      params:{
        subject, week_day, time,
      }
    });
    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
      <View style={styles.container}>
        <PageHeader 
          title="Proffys disponíveis" 
          headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather size={20} name="filter" color="#FFF" />
            </BorderlessButton>
          )}
        >
          {isFiltersVisible && ( 
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput 
                value={subject} 
                onChangeText={text=>setSubject(text)} 
                style={styles.input} 
                placeholderTextColor="#c1bccc" 
                placeholder="Qual a matéria?"
              />

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput 
                    value={week_day} 
                    onChangeText={text=>setWeekDay(text)} 
                    style={styles.input} 
                    placeholderTextColor="#c1bccc" 
                    placeholder="Qual o dia?"
                  />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput 
                    value={time} 
                    onChangeText={text=>setTime(text)} 
                    style={styles.input} 
                    placeholderTextColor="#c1bccc" 
                    placeholder="Qual horário?"
                  />
                </View>
              </View>

              <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </PageHeader>

        <ScrollView 
          style={styles.teacherList} 
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }} 
        >
          {teachers.map((teacher: Teacher)=> {
            return(
              <TeacherItem 
                key={teacher.id} 
                teacher={teacher}
                favorited={favorites.includes(teacher.id)}
              />
            )
          })}
        </ScrollView>
      </View>
  );
};

export default TeacherList;