import React from 'react';
import { View, ImageBackground, Text, Pressable, StyleSheet, ScrollView, FlatList } from 'react-native';
import Notification from '../../components/Notifications';
import feed from '../../../assets/data/feed';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.not}>
                    <Text style={styles.nottext}>NOTIFICATIONS</Text>
                </View>

                <View>
                    <View>
                        <FlatList

                            data={feed}
                            renderItem={({ item }) => <Notification card={item} />}
                        />
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
    },
    not: {
        marginTop: 35,
        alignItems: 'center',
        marginBottom: 24,
    },
    nottext: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    }
})

export default HomeScreen;