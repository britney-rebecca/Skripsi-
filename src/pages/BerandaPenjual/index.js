import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, HomeProfile, ProdukBesi, Gap } from '../../components'
import { colors, getData, showError } from '../../utils'
import { Fire } from '../../config'

const BerandaPenjual = ({onPress ,navigation}) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
            console.log(user.uid+' asdf')
        })
    }

    const [produk, setProduk] = useState([]);
    useEffect(() => {
        Fire.database()
        .ref('produk/'+ user.uid )
        .once('value')
        .then(res => {
            console.log('data: ', res.val());
            if (res.val()) {
                const oldData = res.val();
                const data = [];
                Object.keys(oldData).map(item => {
                    data.push({
                        id: item,
                        data: oldData[item]
                    })
                })
                console.log('parse list product: ', data);
                setProduk(data);
            }
        }).catch(err => {
            showError(err.message);
        })
    })
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeProfile onPress={() => navigation.navigate('Profil')}/>
                <Gap height={10}/>
                <Button title="Tambah Produk" onPress={() => navigation.navigate('TambahProduk')} style={styles.tombol}/>
                <Gap height={10}/>
                {produk.map(list => {
                    return <TouchableOpacity>
                    <ProdukBesi 
                    key={list.id}
                    jenisBesi={list.data.jenisBesi}
                    berat={list.data.berat}
                    harga={list.data.harga}
                    pic={{uri: list.data.fotoBesi}}
                    klik='Klik untuk melihat selengkapnya' 
                    onPress = {onPress}/>
                    </TouchableOpacity>
                })}
            </ScrollView>
        </View>
    )
}

export default BerandaPenjual

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
