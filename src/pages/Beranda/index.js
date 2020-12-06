import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HomeProfile, Gap, ProdukBesiPengepul, Input } from '../../components'
import { colors, showError, useForm } from '../../utils'
import { Fire } from '../../config'
import { ILSearch } from '../../assets'


const Beranda = ({ onPress, navigation }) => {

    const [produk, setProduk] = useState([]);
    const [produks, setProduks] = useState([]);
    const [form, setForm] = useForm({
        kota: '',
        daerah: '',
    });

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
                <HomeProfile onPress={() => navigation.navigate('Profil')} />
                <Gap height={10} />
                <View style={{ position: 'relative', marginHorizontal: 8, marginVertical: 17 }}>
                    <TextInput 
                        placeholder="Cari Besi"
                        style={{ borderWidth: 1, borderColor: colors.primary, borderRadius: 20, height: 40, fontSize: 13, paddingLeft: 55, paddingRight: 14 }}
                     />
                    <Image source={ILSearch} style={{ position: 'absolute', top: 3, left: 10, backgroundColor: 'white' }} />
                </View>
                {
                    produk.map(list => {
                        return <TouchableOpacity onPress={() => navigation.navigate('DetailProdukPengepul', {
                            jenisBesi: list.data.jenisBesi,
                            harga: list.data.harga,
                            kota: list.data.kota,
                            daerah: list.data.daerah,
                            pic: { uri: list.data.fotoBesi },
                            fullName: list.data.fullName,
                            nomorHp: list.data.nomorHp
                        })}>
                            <ProdukBesiPengepul
                                key={list.id}
                                jenisBesi={list.data.jenisBesi}
                                harga={list.data.harga}
                                kota={list.data.kota}
                                daerah={list.data.daerah}
                                pic={{ uri: list.data.fotoBesi }}
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
