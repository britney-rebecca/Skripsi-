import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import { DummyPhoto1 } from '../../../assets'
import { colors } from '../../../utils'

const ProdukBesiPengepul = ({ jenisBesi, pic, harga }) => {
    // const [produk, setProduk] = useState([]);

    // setTimeout(() => {
    //     db.database()
    //     .ref('produk/'+test)
    //     .once('value')
    //     .then(res => {
    //         if (res.val()) {
    //             const oldData = res.val();
    //             const data = [];
    //             Object.keys(oldData).map(item => {
    //                 data.push({
    //                     id: item,
    //                     data: oldData[item]
    //                 })
    //             })
    //             setProduk(data);
    //         }
    //     }).catch(err => {
    //         showError(err.message);
    //     });
    // }, 100);

    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{jenisBesi}</Text>
                <Text style={styles.klik}>{harga}</Text>
                <Text style={styles.klik}>Klik untuk melihat selengkapnya</Text>
            </View>
        </View>
    )
}

export default ProdukBesiPengepul

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16
    },
    title: {
        fontSize: 16,
        color: colors.text.primary
    },
    klik: {
        fontSize: 12,
        color: colors.text.secondary,
        marginTop: 4
    },
    image: {
        flex: 1,
        width: 130,
        height: 110,
        borderRadius: 11
    },
    titleWrapper: {
        marginLeft: 13,
        flex: 1
    }
})