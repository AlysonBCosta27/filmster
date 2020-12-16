import React from 'react';
import { Image, ImagePropTypes, StyleSheet, Text, View } from 'react-native';
import QtdButton from './QtdButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';



const ProductRow = (props)=>{

    const navigation = useNavigation ();
    const navigateToDetails = () => {
        navigation.navigate('Details',{props});
    };

    return(
        <View style={styles.card}>
            <TouchableOpacity onPress={navigateToDetails}>
                <View style={styles.topCard}>
                    <View style={styles.left}>
                        <View style={styles.titleAndPrice}>
                            <Text style={styles.title}>{props.name}</Text>
                            <Text style={styles.price}>R$ {props.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.desc}>{props.desc}</Text>
                        </View>
                    </View>
                    <View style={styles.right}>
                        <Image source={{uri: props.img}} style={styles.image}/>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.buttonMargin}>
                <QtdButton name={props.name}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25, //margem do topo do card
        marginBottom: 5, //margem de baixo do card
        flex: 1, //
        borderRadius: 10, //arredondamento da borda do card
        shadowColor: "#000", //cor da borda
        shadowOffset:{
        width: 0,
        height: -5
        }, //o tamanho da sombra
        shadowOpacity: 0.1, // opacidade da sombra
        shadowRadius: 20, // tamanho da sombra
        elevation: 5, // tamanho da elevação da sombra
        backgroundColor: "#fff", // cor da sombra
        marginHorizontal: 10, 
        overflow: "hidden" // faz com que o card não mostre todas as informações dele, somente clicando sobre ele
    },
    topCard:{
        flex: 1,
        flexDirection: "row"
    },
    title:{
        fontSize: 20, // tamanho da fonte
        color: "#e22424", // cor da fonte
        fontWeight: "bold" // fonte usada
    },
    desc:{
        color: "#626262", // cor da descrição do card
    },
    image:{
        width: 85,
        height: 70
    }, // imagem do card [Poster do filme]
    left:{
        flex: 3,
        paddingHorizontal: 10
    },
    price:{
        fontSize: 15, // fonte do preço
        color: "#e22424", // cor da fonte
        fontWeight: "bold" // fonte usada
    },
    titleAndPrice:{
        flexDirection: "row",
        justifyContent: "space-between", // centraliza o titulo e o preço na horizontal com o "row"
        alignItems: "center" // alinha os items para o centro do card
    },
    buttonMargin:{
        flex: 1,
        marginVertical: 15
    }
});

export default ProductRow;