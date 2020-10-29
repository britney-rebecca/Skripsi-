import React from 'react'
import { StyleSheet, View, ImageBackground} from 'react-native'
import {ILGetStarted} from '../../assets';
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source ={ILGetStarted}style = {styles.page}>
           <View>
            </View>

           <View>
            <Button title= "Daftar sebagai Penjual" onPress={() => navigation.navigate('RegisterPenjual')}/>
            <Gap height={10}/>
            <Button title= "Daftar sebagai Pengepul" onPress={() => navigation.navigate('RegisterPengepul')}/>
            <Gap height={10}/>
            <Button type='secondary' title= "Masuk sebagai Penjual" onPress={() => navigation.navigate('LoginPenjual')}/>
            <Gap height={10}/>
            <Button type='secondary' title= "Masuk sebagai Pengepul" onPress={() => navigation.navigate('Login')}/>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page : {padding: 60, justifyContent : 'space-between',flex:1},
    title : {fontSize: 30, fontWeight : "500", color: 'black', marginTop : 120}
});
