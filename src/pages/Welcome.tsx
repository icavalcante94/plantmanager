import React from 'react';
import { 
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// inicío da declaração exigida para configuração usada para que o texto não fique atrás do status bar
import Constants from 'expo-constants'; 
const statusBarHeight = Constants.statusBarHeight
// fim da declaração para configuração usada para que o texto não fique atrás do status bar
export function Welcome(){
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification');
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}> 
                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas {'\n'}
                    de forma fácil
                </Text>

                <Image 
                    source={wateringImg} 
                    style={styles.image}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7} //controla efeito do clique
                    onPress={handleStart}
                >

                    <Text>
                        <Feather 
                            name="chevron-right"
                            style={styles.buttonIcon}
                        />
                    </Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: statusBarHeight , //configuração usada para que o texto não fique atrás do status bar
        marginBottom: 20, //configuração usada para que o texto não fique atrás do status bar
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 38
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        paddingHorizontal: 20, // distancia da borda
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7 // ajuste de imagem conforme o tamanho da tela, reponsivel
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 24
    }

});