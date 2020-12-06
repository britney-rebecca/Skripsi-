import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import { DummyPhoto1 } from '../../../assets'
import { colors } from '../../../utils'
import { Button } from '../../atoms'

const ProdukBesiPengepul = ({ jenisBesi, pic, harga }) => {
    const [disable, setDisable] = useState(false);
    const [pesan, setPesan] = useState ('Tersedia');
    const book = () => {
        setPesan('Terjual');
        setDisable(true);
    }
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{jenisBesi}</Text>
                <Text style={styles.klik}>Estimasi Harga : {harga}</Text>
                <Text style={styles.klik}>Klik untuk melihat selengkapnya</Text>
                <Text style={styles.title}>{pesan}</Text>
                <Button disable={disable} title='Ambil' onPress={() => book()}  disabled={true} />
            </View>
            <View style={styles.pesan}>
            
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
    },
    pesan:{
        alignItems: 'center',
        width: 30,
        height: 3
    },
})