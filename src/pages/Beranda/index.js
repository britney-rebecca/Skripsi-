import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HomeProfile, Gap, ProdukBesiPengepul } from '../../components'
import { colors, showError } from '../../utils'
import { Fire } from '../../config'

const Beranda = ({onPress ,navigation}) => {
    const [produk, setProduk] = useState([]);
    const [produks, setProduks] = useState([]);

    setTimeout(() => {
            Fire.database()
            .ref('produkPengepul/')
            .once('value')
            .then(res => {
                if (res.val()) {
                    const oldData = res.val();
                    const data = [];
                    Object.keys(oldData).map(item => {
                        data.push({
                            id: item,
                            data: oldData[item]
                        })
                    })
                    setProduk(data);
                }
            }).catch(err => {
                showError(err.message);
            });
    }, 0);

    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeProfile onPress={() => navigation.navigate('Profil')}/>
                <Gap height={10}/>
                <Text>
                    Cari Besi
                </Text>
                <Gap height={10}/>
                {
                    produk.map(list => {
                        return <TouchableOpacity onPress = {() => navigation.navigate('DetailProdukPengepul', {
                            jenisBesi: list.data.jenisBesi, 
                            harga: list.data.harga, 
                            alamatLengkap: list.data.alamatLengkap, 
                            pic: {uri: list.data.fotoBesi}, 
                            fullName: list.data.fullName, 
                            nomorHp: list.data.nomorHp
                            })}>
                        <ProdukBesiPengepul 
                        key={list.id}
                        jenisBesi={list.data.jenisBesi}
                        harga={list.data.harga}
                        alamatLengkap={list.data.alamatLengkap}
                        pic={{uri: list.data.fotoBesi}}
                        test={list.id}
                        klik='Klik untuk melihat selengkapnya' 
                        />
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    page: {
        paddingVertical: 30,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        flex: 1
    },
    tombol: {
        fontSize: 16,
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209
    }
})
