import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header } from '../components/Header';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

//*inicio* usando para que o texto não fique atrás do status bar no Android
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
/*fim*/

export function PlantSelect(){
    return (
        <SafeAreaView style = {styles.container}>
            <View>
                <View style = {styles.header}>
                    <Header />

                    <Text style={styles.title}>
                        Em qual ambiente
                    </Text>
                    <Text style={styles.subtitle}>
                        você quer colocar sua planta?
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

// Objeto de Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: statusBarHeight,
        marginBottom: 20,
        backgroundColor: colors.background,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        padding: 30,
        alignItems: 'center'
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading,
        lineHeight: 20
    }
})