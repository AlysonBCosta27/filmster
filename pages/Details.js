import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Filmster} from 'react-native-elements';

import Filmster from '../components/Filmster';

const Details = () =>{
    const route = useRoute();
    const filme = route.params.props;
    console.log(filme);
    return (
            <View style={styles.container}>
            <Filmster/>
              <View>
                  <Text>{filme.name}</Text>
                  <Text>{filme.desc}</Text>
              </View>
          </View>
)}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
  });

export default Details