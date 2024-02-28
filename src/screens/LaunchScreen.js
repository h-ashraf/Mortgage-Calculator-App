import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const LaunchScreen = ({ navigation }) => {
    useEffect(() => {
        // Define animation values
        const fadeIn = Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
        });

        const fadeOut = Animated.timing(opacityValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
        });

        // Start animation sequence
        Animated.sequence([fadeIn, Animated.delay(2000), fadeOut]).start(() => {
        // Navigate to Home Screen after animation completes
        navigation.navigate('Home');
        });
    }, []);

    // Define initial opacity value for animation
    const opacityValue = new Animated.Value(0);

    return (
        <View style={styles.container}>
        <Animated.Text style={[styles.text, { opacity: opacityValue }]}>
            Welcome to Mortgage Calculator App
        </Animated.Text>
        {/* Add more content or animation as needed */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default LaunchScreen;