import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated, PanResponder, Image, Alert, TouchableOpacity} from 'react-native';
import {Badge} from "react-native-paper";
import {BadgeNo, BadgeText, BadgeTextNo, BadgeYes} from "../constants/style/match/styled";
import {Ionicons} from '@expo/vector-icons';

const SwipeCard = ({item, onSwipeLeft, onSwipeRight}) => {
    const {width} = Dimensions.get('window');
    const swipeX = useRef(new Animated.Value(0)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {dx: swipeX}], {useNativeDriver: false}),
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
        transform: [{translateX: swipeX}, {rotate: rotateCard}],
    };

    return (
        <Animated.View
            {...panResponder.panHandlers} style={[styles.card, animatedCardStyle]}>
            <Image source={{uri: item.image}} style={styles.cardImage}/>
            <View style={styles.cardContent}>
                <Text style={styles.cardText}>{item.text}</Text>
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
    const handleLike = () => {
        setLiked(true);
        setTimeout(() => {
            setLiked(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

        }, 1000);

    };

    const handleDislike = () => {
        setDisliked(true);
        setTimeout(() => {
            setDisliked(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

        }, 1000);
    };

    return (
        <View style={styles.container}>
            <SwipeCard key={currentIndex} item={data[currentIndex]} onSwipeLeft={onSwipeLeft}
                       onSwipeRight={onSwipeRight}/>
            {liked &&
                <Ionicons name="heart" size={80} color="#30A46C" style={styles.iconLike}/>
            }
            {disliked &&
                <Ionicons name="close" size={80} color="#E5484D" style={styles.iconNo}/>
            }
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleDislike} style={styles.dislikeButton}>
                    <Ionicons name="close" size={40} style={styles.buttonTextNo}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
                    <Ionicons name="game-controller" size={40} style={styles.buttonTextYes}/>
                    {/*<Ionicons name="checkmark" size={40} style={styles.buttonTextYes}/>*/}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
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

        width: '100%', // Adjusted width// Semi-transparent background
        padding: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        gap: 20,
        position: 'absolute',
        bottom: 40,
    },
    likeButton: {
        backgroundColor: '#121B17',
        borderWidth: 1,
        borderColor: '#20573E',
        padding: 10,
        borderRadius: 100,
    },
    dislikeButton: {
        backgroundColor: '#191111',
        borderWidth: 1,
        borderColor: '#72232D',
        padding: 10,
        borderRadius: 100,
    },
    buttonTextNo: {
        color: '#E5484D',
        fontWeight: 'bold',
    },
    buttonTextYes: {
        color: '#30A46C',
        fontWeight: 'bold',
    },
    iconLike: {
        position: 'absolute',
        top: 200,
        right: 50,
        zIndex: 1,
        borderColor: '#20573E',
    }, iconNo: {
        position: 'absolute',
        top: 200,
        left: 50,
        zIndex: 1,
        borderColor: '#72232D',
    }
});


export default SwipeCards;
