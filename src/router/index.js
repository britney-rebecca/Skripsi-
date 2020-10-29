import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    Splash, 
    GetStarted, 
    RegisterPenjual, 
    RegisterPengepul, 
    Login,
    LoginPenjual, 
    UploadPhoto, 
    Beranda, 
    BerandaPenjual,
    Informasi, 
    Profil, 
    TambahProduk,
    DetailProdukPengepul
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
//import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda} />
            <Tab.Screen name="Informasi" component={Informasi} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

const MainAppPenjual = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={BerandaPenjual} />
            <Tab.Screen name="Informasi" component={Informasi} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return ( 
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options= {{headerShown : false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options= {{headerShown : false}}/>
            <Stack.Screen name="RegisterPenjual" component={RegisterPenjual} options= {{headerShown : false}}/>
            <Stack.Screen name="RegisterPengepul" component={RegisterPengepul} options= {{headerShown : false}}/>
            <Stack.Screen name="Login" component={Login} options= {{headerShown : false}}/>
            <Stack.Screen name="LoginPenjual" component={LoginPenjual} options= {{headerShown : false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options= {{headerShown : false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options= {{headerShown : false}}/>
            <Stack.Screen name="MainAppPenjual" component={MainAppPenjual} options= {{headerShown : false}}/>
            <Stack.Screen name="Profil" component={Profil} options= {{headerShown : false}}/>
            <Stack.Screen name="TambahProduk" component={TambahProduk} options= {{headerShown : false}}/>
            <Stack.Screen name="DetailProdukPengepul" component={DetailProdukPengepul} options= {{headerShown : false}}/>
        </Stack.Navigator>
    );
};

export default Router;