import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Header } from '../components/Header';
import { Load } from '../components/Load'

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

//*inicio* usando para que o texto não fique atrás do status bar no Android
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;
/*fim*/

interface EnviromentProps {
    key: string;
    title: string;
}
interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
    times: number;
    repeat_every: string;
    } 
}

export function PlantSelect(){
    const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);//estado auxiliar para filtrar, isso ajuda a não ficar requisitando tanto a API
    const [enviromentSelected, setEnviromentSelected] = useState('all');
    const [loading, setLoading] = useState(true);

    function handleEnviromentSelected(enviroment: string){
        setEnviromentSelected(enviroment);

        if(enviroment == 'all')
            return setFilteredPlants(plants);
        
        const filtered = plants.filter(plant =>
          plant.environments.includes(enviroment)  
        );

        setFilteredPlants(filtered);
    }
 
    useEffect(() => {
        async function fetchEnviroment(){
            const {data} = await api.get('plants_environments?_sort=title&_order=asc');
            setEnvirtoments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data    
            ]);
        }

        fetchEnviroment();

    },[])//carrega antes do carregamento da tela

    useEffect(() => {
        async function fetchPlants(){
            const {data} = await api.get('plants?_sort=name &_order=asc');
            setPlants(data);
            setFilteredPlants(data);
            setLoading(false)
        }

        fetchPlants();
    },[])

    if(loading)
        return <Load/>

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

                <View>
                    <FlatList
                        data={enviroments}
                        renderItem={({ item }) => (
                            <EnviromentButton 
                                title={item.title}
                                active={item.key === enviromentSelected}
                                onPress={() => handleEnviromentSelected(item.key)}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.enviromentList}  
                    />
                </View>

                <View style = {styles.plants}>
                    <FlatList 
                        data = {filteredPlants}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            
                            <PlantCardPrimary data={item} />
                            
                        )}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}                                                  
                    />

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
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})