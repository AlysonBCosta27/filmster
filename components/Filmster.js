import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import logo from '../assets/logo.png';

const cartAction = () => {
    console.log("Clicou no carrinho");
  } // log de ação ao clicar

const Filmster = () => {
    return(
    <Header
       backgroundColor='#131313' // fundo do cabeçalho
    >
        <View/>
        <Image source={logo} style={styles.logo}/>
        <TouchableOpacity onPress={cartAction}>
          <Icon
          type='font-awesome'
          color='#fff'
          name='shopping-cart' // nome do icone usado
          />
        </TouchableOpacity>
    </Header>
    )
}

const styles = StyleSheet.create({
  logo:{
    width:30,
    height: 30
  } // logo no header
});

export default Filmster;