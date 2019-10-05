import React, {useState, useEffect} from 'react';
import {View, AsyncStorage, KeyboardAvoidingView, Platform, Image, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';
import api from '../services/api';

export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('List');
            }
        })
        //AsyncStorage.removeItem('user');
        //navigation.navigate('Login');
    }, [])
    async function handleSubmit(){
        //email, techs
        const response = await api.post('/sessions', {
            email
        });

        const {_id} = response.data;

        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);

        navigation.navigate('List');

        console.log(_id);
    }
    return (
        // <KeyboardAvoidingView enable ={Platform.OS === 'ios'} behaviour="padding" style={styles.container}>
        <KeyboardAvoidingView behaviour={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>SEU E-MAIL*</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>TECNOLOGIAS *</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de Interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value ={techs}
                    onChangeText={setTechs}

                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    form : {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    input:{
        borderWidth: 1,
        borderColor:'#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }


})