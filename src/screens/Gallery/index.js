import React from 'react';
import { View, ImageBackground, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import Topbar from '../../components/Topbar';
import Videospage from '../../components/Videospage';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Topbar />
                    <Videospage />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        height: "100%",
    }
})

export default HomeScreen;