import { COLORS } from '../theme/theme';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }: any) => {

    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>();
    const [popularMoviesList, setPopularMoviesList] = useState<any>();
    const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>();

    if ((nowPlayingMoviesList == undefined && nowPlayingMoviesList == null)
        && (popularMoviesList == undefined && popularMoviesList == null)
        && (upcomingMoviesList == undefined && upcomingMoviesList == null)
    ) {
        return (
            <ScrollView
                style={styles.container}
                bounces={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color={COLORS.Orange} />
                </View>
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: COLORS.Black
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
