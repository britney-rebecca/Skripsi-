import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../../../utils'

const ProdukBesi = ({jenisBesi, pic, harga, berat}) => {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.image} />
            <View style={styles.titleWrapper}>
            <Text style={styles.title}>{jenisBesi}</Text>
            <Text style={styles.klik}>Estimasi Berat : {berat} </Text>
            <Text style={styles.klik}>Estimasi Harga : {harga} </Text>
            </View>
        </View>
    )
}

export default ProdukBesi

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