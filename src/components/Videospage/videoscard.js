import React from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const Videoscard = (props) => {
    const card = props.card;
    return (
        <View>
            <View>
                <ImageBackground style={styles.cardimage}
                    source={{ uri: card.image }}>

                    <View style={styles.card}>
                        <AntDesign name="playcircleo" size={30} color="white" />
                        <View style={styles.subcard}>
                            <Text style={styles.head}>{card.title}</Text>
                            <Text style={styles.subhead}>10 hrs ago</Text>
                        </View>
                    </View>
                </ImageBackground>

            </View>
        </View >

    );
}

const styles = StyleSheet.create({

    cardimage: {
        width: 270,
        height: 150,
        borderRadius: 12,
        marginRight: 12,
        marginLeft: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",

    },
    card: {
        display: "flex",
        flexDirection: "row",
        margin: 14,

    },
    subcard: {
        marginLeft: 10,
    },
    head: {
        color: "white",
        fontWeight: "bold",
    },
    subhead: {
        color: "white",

    }

})

export default Videoscard;