import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { Header, ListProfile, Profile, Gap, Button } from '../../components'
import { Address, Phone} from '../../assets'
import {Fire} from '../../config'
import { colors, getData } from '../../utils'
import { showMessage } from 'react-native-flash-message'

const Profil = ({navigation}) => {
    const [profile, setProfile] = useState ({
        fullName: '',
        nomorHp: '',
    })

    useEffect(() => {
        getData ('user').then(res => {
            console.log('data user: ', res);
            const data = res;
            data.photo = {uri: res.photo};
            setProfile(data);
        });
       
    }, []);

    const signOut = () => {
        Fire.auth().signOut().then(() => {
            console.log('berhasil sign out');
            navigation.replace('GetStarted')
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: 'red',
                color: colors.white
            })
        })
    }

    return (
        <View style={styles.page}>
            <Header title='Profile' onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {profile.fullName.length > 0 && (
             <Profile 
                    name={profile.fullName} 
                    desc={profile.nomorHp} 
                    photo={profile.photo}
             />
            )}

            <Gap height={14} />
                <ListProfile id='1' 
                    profile={Phone} 
                    name='Nomor Hp'  
                    desc={profile.nomorHp} />
                <ListProfile id='2' 
                    profile={Address} 
                    name='Alamat'  
                    desc={profile.alamatLengkap} 
                    // onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/')}} 
            />

           <View style={styles.tombol}>
                <Button title='Keluar' onPress={signOut}/>
           </View>

        </View>
    )
}


export default Profil

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    tombol: {
        marginLeft: 30,
        marginRight: 30
    }
})