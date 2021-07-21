import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import logo from '../../../assets/images/logo.png';
import { FontAwesome5 } from '@expo/vector-icons';

const Topbar = (props) => {
    return (
        <View>
            <View style={styles.topbar}>
                <SimpleLineIcons name="menu" size={24} color="white" />
                <Image source={logo} style={{ width: 100, height: 44 }} />
                <FontAwesome5 name="user-alt" size={24} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topbar: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 0,
        display: 'flex',
        width: "100%",
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default Topbar;