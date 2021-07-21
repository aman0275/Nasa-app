import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image, ImageBackground, Dimensions, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 12 / 16);
const imageWidth = dimensions.width;



const Homepic = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=igitvf0kdW1dhti9SGmwlZ3zhYKg8vVxwBQHardP')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const image = { uri: data['url'] };
    const date = data['date'];
    const copyright = data['copyright'];
    const title = data['title'];


    var handleOpenWithLinking = () => {
        Linking.openURL(data['hdurl']);
    };
    return (
        <View>
            <View style={styles.imageview}>
                <ImageBackground source={image} style={styles.image} >

                    <View style={styles.toptext}>
                        <Text style={styles.imagetext}>{copyright}</Text>
                        <View style={styles.toptext2}>
                            <AntDesign name="clockcircle" size={20} color="white" style={{ paddingRight: 10, }} />
                            <Text style={styles.imagetext}>{date}</Text>
                        </View>
                    </View>
                    <Pressable onPress={() => handleOpenWithLinking()}>
                        <View style={styles.lowertextdiv}>
                            <Text style={styles.lowertext}>
                                {title}
                            </Text>
                            <Text style={styles.lowertext}>
                                NASA API Live
                            </Text>
                        </View>
                    </Pressable>

                </ImageBackground>
            </View>

        </View >
    )
};

const styles = StyleSheet.create({
    imageview: {
        width: "100%",

    },
    image: {

        width: imageWidth,
        height: imageHeight,
        display: "flex",
        justifyContent: "space-between",
    },
    toptext: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    toptext2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imagetext: {
        color: "white",

    },
    lowertextdiv: {
        backgroundColor: 'rgba(74, 74, 74, 0.6)',

        padding: 14,
        paddingLeft: 30,
    },
    lowertext: {
        color: "white",
        opacity: 1,
    },
})

export default Homepic;