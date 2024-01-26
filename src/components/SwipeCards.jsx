import React, { useRef, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, Animated, PanResponder, Image, Alert} from 'react-native';
import {Badge} from "react-native-paper";
import {BadgeNo, BadgeText, BadgeTextNo, BadgeYes} from "../constants/style/match/styled";

const SwipeCard = ({ item, onSwipeLeft, onSwipeRight }) => {
    const { width } = Dimensions.get('window');
    const swipeX = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: swipeX }], { useNativeDriver: false }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > width / 2) {
                    // Swiped right
                    onSwipeRight();
                } else if (gestureState.dx < -width / 2) {
                    // Swiped left
                    onSwipeLeft();
                } else {
                    // Return to the center
                    Animated.spring(swipeX, {
                        toValue: 0,
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const rotateCard = swipeX.interpolate({
        inputRange: [-width / 2, 0, width / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
    });

    const animatedCardStyle = {
        transform: [{ translateX: swipeX }, { rotate: rotateCard }],
    };

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[styles.card, animatedCardStyle]}
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text>{item.text}</Text>
            </View>
        </Animated.View>
    );
};

const SwipeCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            text: 'Card 1',
            image: 'https://placekitten.com/300/200', // Example image URL
        },
        {
            text: 'Card 2',
            image: 'https://placekitten.com/300/201', // Example image URL
        },
        {
            text: 'Card 3',
            image: 'https://placekitten.com/300/202', // Example image URL
        },
    ];
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const onSwipeLeft = () => {
        // Handle left swipe action
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

        setDisliked(true)
        setTimeout(() => {
            setDisliked(false)
        }, 1000)

    };

    const onSwipeRight = () => {
        // Handle right swipe action
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setLiked(true)
        setTimeout(() => {
            setLiked(false)
        }, 1000)

    };

    return (
        <View style={styles.container}>
            <SwipeCard
                key={currentIndex}
                item={data[currentIndex]}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
            />

            {liked && <BadgeYes>
                <BadgeText>LIKE</BadgeText>
            </BadgeYes>}
            {disliked && <BadgeNo>
                <BadgeTextNo>DISLIKE</BadgeTextNo>
            </BadgeNo>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
        margin: 10,
        elevation: 5,
        overflow: 'hidden',
        position: 'relative', // Change to 'relative'
    },
    cardImage: {
        width: '100%',
        height: '100%', // Adjusted height
        resizeMode: 'cover',
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%', // Adjusted width
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        padding: 10,
    },
});


export default SwipeCards;
