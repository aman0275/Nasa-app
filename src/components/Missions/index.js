import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions, FlatList, Linking } from 'react-native';
import Missionscard from './missioncard.js';
import Storecard from './storecard.js';
import feed from '../../../assets/data/feed';


const Missions = (props) => {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    var url = 'https://newsapi.org/v2/everything?' +
        'q=NASA&' +
        'from=' + yyyy + '-' + mm + '-' + dd + '&' +
        'sortBy=popularity&' +
        'apiKey=510ab8c5d0c74b7c8b2a80f955a1b5c6';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.articles.slice(0, 5)))

    }, []);


    var url1 = 'https://newsapi.org/v2/everything?' +
        'q=space missions&' +
        'from=' + yyyy + '-' + mm + '-' + dd + '&' +
        'sortBy=popularity&' +
        'apiKey=510ab8c5d0c74b7c8b2a80f955a1b5c6';

    useEffect(() => {
        fetch(url1)
            .then((response) => response.json())
            .then((json) => setData1(json.articles.slice(0, 5)))

    }, []);


    var url2 = 'https://newsapi.org/v2/everything?' +
        'q=cosmos&' +
        'from=' + yyyy + '-' + mm + '-' + dd + '&' +
        'sortBy=popularity&' +
        'apiKey=510ab8c5d0c74b7c8b2a80f955a1b5c6';

    useEffect(() => {
        fetch(url2)
            .then((response) => response.json())
            .then((json) => setData2(json.articles.slice(0, 5)))

    }, []);


    var actionOnRow = (item) => {
        const card = item.card;
        Linking.openURL(item.url);
    };

    return (

        <View>
            <View style={styles.textview}>
                <Text style={styles.texttop}>ONGOING &</Text>
                <Text style={styles.texttop}>UPCOMMING MISSIONS</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={data}

                    renderItem={({ item }) => (
                        <Pressable onPress={() => actionOnRow(item)}>
                            <Missionscard card={item} />
                        </Pressable>
                    )}
                />
            </View>
            <View>
                <FlatList
                    horizontal
                    data={data1}
                    renderItem={({ item }) => <Missionscard card={item} />}
                />
            </View>
            <View style={styles.textview}>
                <Text style={styles.texttop}>LEARN MORE</Text>
                <Text style={styles.texttop}>ABOUT COSMOS</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={data2}
                    renderItem={({ item }) => <Missionscard card={item} />}
                />
            </View>
            <View style={styles.textview}>
                <Text style={styles.texttop}>NASA STORE</Text>
            </View>
            <View>
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
    textview: {
        padding: 20,
        paddingLeft: 30,
    },
    texttop: {
        color: "white",
    }
})

export default Missions;