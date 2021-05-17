import React, {useState} from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native'

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';

//usando para que o texto não fique atrás do status bar
import Constants from 'expo-constants'; 
const statusBarHeight = Constants.statusBarHeight

export function Welcome(){
    const [visible, setVisible ] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image}/>
            }

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title="Imagem" onPress={handleVisibility} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: statusBarHeight ,
        marginBottom: 20,
                
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        // borderWidth: 1,
        paddingHorizontal: 20 // distancia da borda
    },
    image: {
        height: 292,
        width: 284
    },

});