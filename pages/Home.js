import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Filmster from '../components/Filmster';
import ProductRow from '../components/ProductRow';
import axios from 'axios';


const App = () => {

  const [filme, setFilme] = useState();

  const fetchFilme = async () =>{
    const response = await axios.get('https://my-json-server.typicode.com/AlysonBCosta27/getpizza-data/pizzas');
    setPizzas(response.data);
  }

  useEffect(()=>{
    fetchFilme();
});

  return(
    <View style={styles.container}>
      <Filmster/>
      <FlatList
        data={filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <ProductRow
            name={item.name}
            desc={item.desc}
            img= {item.img}
            price= {item.price}
          />
        }
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  logo:{
    width:30,
    height: 30
  }
});

export default App;