import React from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import feed from '../../../assets/data/feed';
import Videoscard from './videoscard.js';
import Storecard from './storecard.js';

const Videospage = (props) => {

    return (

        <View>
            <View style={styles.videos}>
                <Text style={styles.heading}>NEW VIDEOS</Text>
                <FlatList
                    horizontal
                    data={feed}
                    renderItem={({ item }) => <Videoscard card={item} />}
                />
            </View>

            <View>
                <Text style={styles.heading}>PODCASTS</Text>
                <FlatList
                    horizontal
                    data={feed}
                    renderItem={({ item }) => <Storecard card={item} />}
                />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    videos: {
        marginTop: 10,
    },
    heading: {
        fontSize: 15,
        padding: 20,
        paddingLeft: 30,
        color: "white",

    },
    textview: {
        padding: 20,
        paddingLeft: 30,
    },
    texttop: {
        color: "white",
    }
})

export default Videospage;