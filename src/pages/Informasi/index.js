import React from 'react'
import {  StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILlogoo } from '../../assets/illustration'
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
              <Image source={ILlogoo} style={styles.avatar} />
              <Gap height={20} />
              <Text style={styles.teks}>
                  BesiTua adalah aplikasi berbasis Android yang dibuat untuk memudahkan 
                  para pengepul besi bekas untuk mengetahui dimana terdapat ketersediaan besi bekas. 
                  Pengepul dapat melihat produk yang diunggah oleh Penjual dan informasi tentang Penjual (seperti nama, nomor hp, dan alamat)
                  sehingga Pengepul dapat langsung menghubungi Penjual melalui informasi yang tertera.
              </Text>
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
    teks: {
        fontSize: 13,
        textAlign: "center", 
        color: 'grey',
       }
})