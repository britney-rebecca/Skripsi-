import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Input, Gap, Loading } from '../../components'
import { useForm, storeData, showError } from '../../utils'
import {Fire} from '../../config'
import { ScrollView } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
    const [form, setForm] = useForm ({email: '', password: '',});
    const [loading, setLoading] = useState(false);

    const login = () => {
        console.log('form: ', form);
        setLoading(true);
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(res => {
            console.log('success: ', res);
            setLoading(false);
            Fire.database()
                .ref(`userPengepul/${res.user.uid}/`)
                .once('value')
                .then(resDB => {
                    console.log('data user: ', resDB.val());
                    if (resDB.val()) {
                        storeData('user', resDB.val());
                        navigation.replace('MainApp');
                    }
            });
        })
        .catch(err => {
            console.log('error: ', err);
            setLoading(false);
            showError(err.message)
        });
    };

    return (
        <>
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height = {40} />
            <ILLogo/>
            <Text style={styles.Text}>Silahkan Masuk</Text>
            <Input 
                label = "Alamat Email" 
                value={form.email} 
                onChangeText={value => setForm('email', value )}
            />
            <Gap height={24}/>
            <Input 
                label = "Kata Sandi" 
                value={form.password} 
                onChangeText={value => setForm('password', value)} 
                secureTextEntry
            />

            <Gap height={40}/>
            <Button title="Masuk" onPress={login}/>
            <Gap height={30}/>
            </ScrollView>
        </View>
        {loading && <Loading />}
        </>
    );
};

export default Login

const styles = StyleSheet.create({
    page : {paddingHorizontal: 40, backgroundColor: 'white', flex:1},
    Text : {fontSize : 20, color :'#112340', marginTop:40, marginBottom:40}
})
