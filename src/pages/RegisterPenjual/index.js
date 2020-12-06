import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header, Input, Button, Gap, Loading} from '../../components'
import { colors, useForm, storeData, showError } from '../../utils'
import {Fire} from '../../config'

const RegisterPenjual = ({ navigation }) => {
    const [form, setForm ] = useForm ({
        fullName: '',
        kota: '',
        daerah: '',
        nomorHp: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false)


    const onContinue = () => {
        console.log(form);
        setLoading(true);
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success)  => {
             setLoading(false);
             setForm('reset');
             const data = {
                fullName: form.fullName,
                kota: form.kota,
                daerah: form.daerah,
                nomorHp: form.nomorHp,
                email: form.email,
                uid: success.user.uid
             }
             Fire.database()
             .ref('userPenjual/' + success.user.uid + '/')
             .set(data);
             storeData('user', data);
             navigation.navigate('MainAppPenjual', data);
             console.log('register success: ', success);
        })
        .catch((err) => {
            setLoading(false);
            showError(err.message)
          });
    };
    return (
        <>
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.content}>

                    <Input 
                        label="Nama" 
                        value ={form.fullName} 
                        onChangeText ={value => setForm('fullName',value)} />
                    <Gap height={8} />

                    <Input 
                        label="Kota" 
                        value ={form.kota} 
                        onChangeText ={(value) => setForm('kota',value)} />
                    <Gap height={8} />

                    <Input 
                        label="Daerah/Desa" 
                        value ={form.daerah} 
                        onChangeText ={(value) => setForm('daerah',value)} />
                    <Gap height={8} />

                    <Input 
                        label="Nomor HP (contoh : 62******)" 
                        value ={form.nomorHp} 
                        onChangeText ={(value) => setForm('nomorHp',value)} />
                    <Gap height={8} />

                    <Input 
                        label="Email" 
                        value ={form.email} 
                        onChangeText ={(value) => setForm('email',value)} />
                    <Gap height={8} />

                    <Input 
                        label="Password" 
                        value ={form.password} 
                        onChangeText ={(value) => setForm('password',value)} 
                        secureTextEntry />
                        <Gap height={20} />
                    
                   <Button 
                        title="Lanjutkan" 
                        onPress={ onContinue } 
                        />

            </View>
            </ScrollView>
        </View>
        {loading && <Loading/>}
        </>
    )
}

export default RegisterPenjual

const styles = StyleSheet.create({
    page: { backgroundColor: colors.white, flex: 1 },
    content: { padding: 40, paddingTop: 0 }
})
