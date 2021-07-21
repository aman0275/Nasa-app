import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const Notifications = (props) => {
    const card = props.card;
    return (
        <View>
            <View style={styles.card}>
                <Image
                    style={styles.cardimage}
                    source={{ uri: card.image }}
                />
                <Text style={styles.cardtext}>
                    {card.desc} <Text style={styles.texth}>{card.id}hr</Text>
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: "row",
        marginLeft: 25,
        marginBottom: 25,
        alignItems: "center",
    },
    cardimage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 18,
    },
    cardtext: {
        color: "white",
        alignItems: "center",
        margin: 4,
        width: '65%',
        fontWeight: "bold",
        fontSize: 16,
    },
    texth: {
        color: "grey",
    }
})

export default Notifications;