import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

type ItemProps = {title: string; image: any};

const Item = ({title, image}: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Icon name="bookmark" color={'red'} size={16} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtile}>23 mins . 4 km</Text>
  </View>
);

const Recommended = () => {
  const columns = [];
  const itemsPerColumn = 5;
  for (let i = 0; i < itemsPerColumn; i++) {
    columns.push(data.filter((_, index) => index % itemsPerColumn === i));
  }
  const renderColumn = ({item}: {item: typeof data}) => (
    <View style={styles.column}>
      {item.map(subItem => (
        <Item key={subItem.id} title={subItem.title} image={subItem.image} />
      ))}
    </View>
  );

  return (
    <FlatList
      data={columns}
      renderItem={renderColumn}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    right: 8,
  },
  item: {
    flex: 1,
    width: 201,
    backgroundColor: '#1c2833',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  image: {
    width: 180,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  column: {
    flexDirection: 'column',
  },
  subtile: {
    color: 'green',
    fontSize: 14,
  },
});

export default Recommended;
