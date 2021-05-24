import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View, 
    SafeAreaView
} from 'react-native';

import userImg from '../assets/iago.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

//*inicio* usando para que o texto não fique atrás do status bar no Android
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
/*fim*/

export function Header(){
    return (
        <SafeAreaView style={styles.container}>
            <View>
               <Text style={styles.greeting}>Olá,</Text> 
               <Text style={styles.userName}>Iago</Text>
            </View>

                <Image style={styles.image} source={userImg}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginTop: statusBarHeight,
        marginBottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
       width: 70,
       height: 70,
       borderRadius: 35
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})