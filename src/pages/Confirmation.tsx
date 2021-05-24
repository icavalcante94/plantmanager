import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

//usando para que o texto não fique atrás do status bar
import Constants from 'expo-constants'; 
const statusBarHeight = Constants.statusBarHeight

export function Confirmation (){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.content} >
                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button
                        title="Começar"
                        onPress={handleMoveOn}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: statusBarHeight ,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    emoji: {
        fontSize: 72
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 30,
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 10
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }

})