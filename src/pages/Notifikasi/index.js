import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListNotif } from '../../components'
import { colors } from '../../utils'

const Notifikasi = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Pemberitahuan</Text>
            <ListNotif />
            <ListNotif />
            <ListNotif />
        </View>
    )
}

export default Notifikasi

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        // paddingVertical: 30,
        // paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})

// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const Notifikasi = () => {
//     return (
//         <View>
//             <Text>Halaman Notifikasi</Text>
//         </View>
//     )
// }

// export default Notifikasi

// const styles = StyleSheet.create({})