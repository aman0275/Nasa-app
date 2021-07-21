import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions, SafeAreaView, SectionList, StatusBar, TouchableOpacity } from 'react-native';


const Missionscard = (props) => {
    const card = props.card;

    return (
        <TouchableOpacity >

            {console.log(props)}
            <View style={styles.card}>
                <Image
                    style={styles.cardimage}
                    source={{ uri: card.urlToImage }}
                />
                <View style={styles.cardtexts}>
                    <View>
                        <Text numberOfLines={1} style={styles.toptext}>{card['title']}</Text>
                        <Text numberOfLines={1} style={styles.desc}>{card['description']}</Text>
                    </View>
                    <Text style={styles.bottomtext}>{card.source.name}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        display: 'flex',
        flexDirection: "row",

    },
    cardimage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardtexts: {
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
    },
    toptext: {
        color: "white",
        width: 150
    },
    desc: {
        color: "white",
        width: 180
    },
    bottomtext: {
        color: "white",
    },


})

export default Missionscard;