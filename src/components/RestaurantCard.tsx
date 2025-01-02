import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  //   ImageSourcePropType,
} from 'react-native';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Restaurant {
  id: number;
  title: string;
  //   image: string[];
  ratings: number;
  time: string;
  distance: string;
  offer: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const data = [
  {
    id: 1,
    title: 'Pasta',
    image: require('../assets/recommended/pasta.jpg'),
  },
  {
    id: 2,
    title: 'Pizza',
    image: require('../assets/recommended/pizza.jpg'),
  },
  {
    id: 3,
    title: 'Burgers',
    image: require('../assets/recommended/burgers.jpg'),
  },
  {
    id: 4,
    title: 'Sushi',
    image: require('../assets/recommended/sushi.jpg'),
  },
  {
    id: 5,
    title: 'Desserts',
    image: require('../assets/recommended/desserts.jpg'),
  },
  {
    id: 6,
    title: 'More Burgers',
    image: require('../assets/recommended/burgers.jpg'),
  },
  {
    id: 7,
    title: 'More Sushi',
    image: require('../assets/recommended/sushi.jpg'),
  },
  {
    id: 8,
    title: 'More Desserts',
    image: require('../assets/recommended/desserts.jpg'),
  },
  {
    id: 9,
    title: 'More Desserts',
    image: require('../assets/recommended/desserts.jpg'),
  },
  {
    id: 10,
    title: 'More Desserts',
    image: require('../assets/recommended/desserts.jpg'),
  },
];
const RestaurantCard: React.FC<RestaurantCardProps> = ({restaurant}) => {
  console.log('restaurant', restaurant);
  return (
    <View style={styles.item}>
      <ImageBackground source={data[0].image} style={styles.image}>
        <View style={styles.timeBg}>
            <Icon name="clock-o" color={'green'} size={16} />
            <Text style={styles.subtitle}>  </Text>
          <Text style={styles.subtitle}>{restaurant.time}</Text>
          <Text style={styles.subtitle}> | </Text>
          <Text style={styles.subtitle}>{restaurant.distance}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="bookmark" color={'red'} size={16} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* </ImageBackground> */}
      <View style={styles.ratingInfo}>
        <Icon name="star" color={'white'} size={14} />
        <Text style={styles.ratingSubtitle}> {restaurant.ratings}</Text>
      </View>
      <View style={styles.resturantInfo}>
        <Text style={styles.title}>{restaurant.title}</Text>
        <Text style={styles.offer}>{restaurant.offer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1c2833',
    marginVertical: 10,
    borderRadius: 10,
    paddingBottom: 10,
    marginHorizontal: 1,
    elevation: 5,
  },
  ratingInfo:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems:'center',
    justifyContent: 'center',
    width: 50,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    padding:2,
  },
  ratingSubtitle:{
    color: 'white',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  resturantInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 5,
  },
  offer: {
    fontSize: 14,
    color: '#ff6f61',
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  timeBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'absolute',
    bottom: 0,
    width: '35%',
    flexDirection: 'row',
    height: 30,
    paddingHorizontal: 10,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RestaurantCard;
