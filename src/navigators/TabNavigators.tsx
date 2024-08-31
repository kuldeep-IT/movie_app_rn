import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                backgroundColor: COLORS.Black,
                borderWidth: 0,
                height: SPACING.space_10 * 10,
            }
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                                <MaterialCommunityIcons
                                    name="movie-open-play"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_20 * 1.5}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                                <MaterialCommunityIcons
                                    name="magnify"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_20 * 1.5}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                                <MaterialCommunityIcons
                                    name="ticket-confirmation-outline"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_20 * 1.5}
                                />
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Account"
                component={UserAccountScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLORS.Orange } : {}]}>
                                <MaterialCommunityIcons
                                    name="account-outline"
                                    color={COLORS.White}
                                    size={FONTSIZE.size_20 * 1.5}
                                />
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    }
});

export default TabNavigator;
