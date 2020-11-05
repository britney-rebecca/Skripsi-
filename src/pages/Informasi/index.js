import React from 'react'
import {  StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILLogo } from '../../assets'
import { Gap } from '../../components'
import { colors } from '../../utils'

const Beranda = () => {
    return (
        <View style={styles.page}>
              <View style={styles.content}>
              <ScrollView showsVerticalScrollIndicator={false}>
              <Gap height={20} />
              <Text style={styles.desc}>Informasi Aplikasi</Text>
              <Gap height={20} />
              <ILLogo style={styles.logo}/>
              <Gap height={20} />
             
              <Text style={styles.teks}>Selamat Datang di Aplikasi BesiTua!</Text>
                <Gap height={30} />

                <Text style={styles.teks}>  BesiTua adalah aplikasi berbasis Android </Text>
                <Text style={styles.teks}>  yang dibuat untuk memudahkan para pengepul besi bekas </Text>
                <Text style={styles.teks}>  untuk mengetahui dimana terdapat ketersediaan besi bekas. </Text>
                <Text style={styles.teks}>  Pengepul dapat melihat produk yang diunggah oleh Penjual </Text>
                <Text style={styles.teks}>  dan informasi tentang Penjual (seperti nama, nomor hp, dan alamat) </Text>
                <Text style={styles.teks}>  sehingga Pengepul dapat langsung menghubungi Penjual melalui informasi yang tertera. </Text>
                <Gap height={50} />
            
            <Text style={styles.teks}>Contact Admin: </Text>
            <Gap height={10} />
            <Text style={styles.teks}>1. Email  : besitua@gmail.com </Text>
            <Text style={styles.teks}>2. No Tlp : 081345678347</Text>
            <Text style={styles.teks}>3. Alamat : Airmadidi. Minahasa Utara</Text>
            <Gap height={100} />

            <Text style={styles.teks}>Copyright 2020.</Text>
              <Gap height={5} />
              <Text></Text>
        
            </ScrollView>
            </View>

        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({

    page: {
        backgroundColor: colors.primary,
        flex: 2,
        margin: 20

    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 30,
        flex: 3,
        marginTop: -30,
        paddingTop: 14,
        
    },
    desc: {
        textAlign: 'center',
        
       // position:'absolute',
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    avatar: {
        height:100,
        width:100,
        alignSelf: 'center',
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
    },
    teks: {
        fontSize: 13,
        textAlign: "center", 
        color: 'grey',
    }
})