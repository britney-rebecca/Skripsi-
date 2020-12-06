import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILLogo } from '../../assets'
import { Gap, Button, Header } from '../../components'
import { colors } from '../../utils'

const Disclaimer = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header onPress={() => navigation.goBack()} title='Ketentuan Penggunaan Aplikasi BesiTua' />
                    <Gap height={20} />
                    {/* <Text style={styles.desc}>Ketentuan Penggunaan Aplikasi BesiTua</Text> */}
                    <Gap height={20} />
                    <ILLogo style={styles.logo} />
                    <Gap height={20} />

                    <Text style={styles.teks}>Selamat Datang di Aplikasi BesiTua!</Text>
                    <Gap height={30} />

                    <Text style={styles.teks}>1. Ketentuan Umum</Text>
                    <Text style={styles.teks}>BACALAH SELURUH KETENTUAN PENGGUNAAN INI SEBELUM MENGAKSES ATAU MENGGUNAKAN APLIKASI BesiTua.</Text>
                    <Text style={styles.teks}>Ketentuan Penggunaan ini adalah perjanjian antara pengguna (“Anda”) dan Founder Aplikasi BesiTua (“Kami”),
                    Ketentuan Penggunaan ini mengatur akses dan penggunaan Anda atas aplikasi kami kelola, konten, produk dan layanan yang disediakan
                (selanjutnya, secara bersama-sama disebut sebagai “Aplikasi”).</Text>
                    <Text style={styles.teks}> Dengan menyetujui Ketentuan Penggunaan ini,
                Anda juga menyetujui perubahannya yang merupakan bagian yang tidak terpisahkan dari Ketentuan Penggunaan ini.</Text>
                    <Text style={styles.teks}>2. Penggunaan Aplikasi dan Layanan</Text>
                    <Text style={styles.teks}>Akses dan penggunaan Aplikasi tunduk pada Ketentuan Penggunaan ini.
                    Anda mempunyai kebebasan penuh untuk memilih menggunakan Aplikasi atau aplikasi lain,
                    menggunakan Layanan yang tersedia pada Aplikasi atau tidak, atau berhenti menggunakan Aplikasi.
                Kami hanya memfasilitasi Anda untuk menemukan berbagai Layanan yang Anda perlukan dengan menyediakan Aplikasi.</Text>
                    <Text style={styles.teks}>3. Pembukaan dan Pengaksesan Akun BesiTua</Text>
                    <Text style={styles.teks}>Sebelum menggunakan Aplikasi, Anda harus menyetujui Ketentuan Penggunaan ini,
                    dan mendaftarkan diri Anda dengan memberikan informasi yang dibutuhkan oleh Kami.
                    Saat melakukan pendaftaran, Kami akan meminta Anda untuk memberikan nama lengkap, email, alamat,
                    dan nomor telepon seluler pribadi Anda yang sah.
                    Anda tidak dapat mengubah informasi data diri Anda.
                    Sehingga pastikan bahwa informasi yang Anda masukkan sudah benar-benar sesuai.
                    Jika pada keadaan tertentu Anda terpaksa harus merubah informasi pribadi yang telah dimasukkan,
                    Anda dapat menghubungi Admin (Kami) lewat Contact Admin yang terdapat pada Menu Informasi Aplikasi
                  pada saat Anda telah berhasil melakukan Pendaftaran atau Login menggunakan Akun Anda pada Aplikasi.</Text>
                    <Text style={styles.teks}>4. Akun Anda</Text>
                    <Text style={styles.teks}>Keamanan dan kerahasiaan Akun Anda, termasuk nama terdaftar, email terdaftar,
                    alamat terdaftar, nomor telepon genggam terdaftar sepenuhnya merupakan tanggung jawab pribadi Anda.
                    Semua kerugian dan risiko yang ada akibat kelalaian Anda menjaga keamanan dan kerahasiaan sebagaimana disebutkan ditanggung oleh Anda sendiri.
                    Dalam hal demikian, Kami akan menganggap setiap penggunaan atau pesanan yang dilakukan melalui Akun Anda sebagai permintaan yang sah dari Anda.
                    Segera beritahukan Kami jika Anda mengetahui atau menduga bahwa Akun Anda telah digunakan tanpa sepengetahuan dan persetujuan Anda.
                  Kami akan melakukan tindakan yang Kami anggap perlu dan dapat Kami lakukan terhadap penggunaan tanpa persetujuan tersebut.</Text>
                  <Text style={styles.teks}>5. Produk Besi Bekas</Text>
                  <Text style={styles.teks}>Apabila Anda melakukan pendaftaran sebagai Penjual dan login dengan Akun Penjual Anda, 
                  maka Anda telah menyetujui ketentuan layanan pada Produk Besi Bekas, dalam hal ini produk yang dapat dijual pada 
                  Aplikasi BesiTua harus mengandung minimal 75% kadar besi. Kami tidak bertanggung jawab apabila sewaktu-waktu didapati produk yang 
                  tidak sesuai dengan ketentuan tersebut. Ini sepenuhnya menjadi tanggung jawab dari Penjual yaitu pemilik Akun yang bersangkutan.
                  </Text>
                  <Gap height={40} />
                  <Text style={styles.teks}>Saya telah membaca dan mengerti seluruh Ketentuan Penggunaan ini dan konsekuensinya dan dengan ini menerima setiap hak, kewajiban, dan ketentuan yang diatur di dalamnya. </Text>
                    <Gap height={40} />

                    <Text style={styles.teks}>Klik Setuju untuk melanjutkan.</Text>
                    <Gap height={20} />
                    <View style={styles.tombol}>
                        <Button title='Setuju' onPress={() => navigation.replace('RegisterPenjual')} />
                    </View>
                    {/* <Gap height={100} /> */}

                    <Gap height={5} />
                    <Text></Text>

                </ScrollView>
            </View>

        </View>
    )
}

export default Disclaimer

const styles = StyleSheet.create({

    page: {
        backgroundColor: colors.primary,
        flex: 2,
        margin: 20,
        padding: 2

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
        height: 100,
        width: 100,
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
    },
    tombol: {
        marginLeft: 30,
        marginRight: 30
    }
})