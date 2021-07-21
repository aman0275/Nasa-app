import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const Storecard = (props) => {
    const card = props.card;
    return (
        <View>
            <View>
                <Image
                    style={styles.cardimage}
                    source={{ uri: card.image }}
                />
                <Text style={styles.cardtext}>
                    {card.title}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cardimage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 25,
    },
    cardtext: {
        color: "white",
        alignItems: "center",
        margin: 5,
    }
})

export default Storecard;