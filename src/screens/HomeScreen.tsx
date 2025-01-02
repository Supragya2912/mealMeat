import React, {useEffect, useCallback, useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  // FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackNavigationProp, TabRouteProp} from '../types/navigation';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {ANIMATION_CONFIGS} from '@gorhom/bottom-sheet';
import {ReduceMotion} from 'react-native-reanimated';
import {Tab} from '@rneui/themed';
import Recommended from '../components/Recommended';
import RestaurantCard from '../components/RestaurantCard';

type HomeScreenProps = {
  navigation: StackNavigationProp;
  route: TabRouteProp;
};
const bottomSheetAnimationConfig = {
  ...ANIMATION_CONFIGS,
  reduceMotion: ReduceMotion.Never,
};

interface Restaurant {
  id: number;
  title: string;
  image: string[];
  ratings: number;
  time: string;
  distance: string;
  offer: string;
}

const restaurantData: Restaurant[] = [
  {
    id: 1,
    title: 'Biryani By kilo',
    image: [
      require('../assets/recommended/pizza.jpg'),
      require('../assets/recommended/pizza.jpg'),
      require('../assets/recommended/pizza.jpg'),
    ],
    ratings: 4.9,
    time: '30-40 min',
    distance: '2.3 km',
    offer: '20% off | Use code: BIRYANI20',
  },
  {
    id: 2,
    title: 'Pizza Hut',
    image: [
      require('../assets/recommended/pizza.jpg'),
      require('../assets/recommended/pizza.jpg'),
      require('../assets/recommended/pizza.jpg'),
    ],
    ratings: 4.5,
    time: '20-30 min',
    distance: '1.5 km',
    offer: '15% off | Use code: PIZZA15',
  },
  {
    id: 3,
    title: 'Burger King',
    image: [
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
    ],
    ratings: 4.7,
    time: '25-35 min',
    distance: '3.0 km',
    offer: '10% off | Use code: BURGER10',
  },
  {
    id: 4,
    title: 'Subway',
    image: [
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
    ],
    ratings: 4.6,
    time: '15-25 min',
    distance: '2.0 km',
    offer: '25% off | Use code: SUBWAY25',
  },
  {
    id: 5,
    title: 'KFC',
    image: [
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
      require('../assets/recommended/burgers.jpg'),
    ],
    ratings: 4.8,
    time: '20-30 min',
    distance: '1.8 km',
    offer: '20% off | Use code: KFC20',
  },
  {
    id: 6,
    title: "Domino's Pizza",
    image: [
      require('../assets/recommended/pasta.jpg'),
      require('../assets/recommended/pasta.jpg'),
      require('../assets/recommended/pasta.jpg'),
    ],
    ratings: 4.4,
    time: '30-40 min',
    distance: '2.5 km',
    offer: '30% off | Use code: DOMINOS30',
  },
  {
    id: 7,
    title: 'Taco Bell',
    image: [
      require('../assets/recommended/pasta.jpg'),
      require('../assets/recommended/pasta.jpg'),
      require('../assets/recommended/pasta.jpg'),
    ],
    ratings: 4.3,
    time: '25-35 min',
    distance: '3.2 km',
    offer: '10% off | Use code: TACO10',
  },
  {
    id: 8,
    title: "McDonald's",
    image: [
      require('../assets/recommended/desserts.jpg'),
      require('../assets/recommended/desserts.jpg'),
      require('../assets/recommended/desserts.jpg'),
    ],
    ratings: 4.5,
    time: '20-30 min',
    distance: '2.8 km',
    offer: '15% off | Use code: MCD15',
  },
  {
    id: 9,
    title: 'Starbucks',
    image: [
      require('../assets/recommended/sushi.jpg'),
      require('../assets/recommended/sushi.jpg'),
      require('../assets/recommended/sushi.jpg'),
    ],
    ratings: 4.6,
    time: '10-20 min',
    distance: '1.2 km',
    offer: '5% off | Use code: STARBUCKS5',
  },
  {
    id: 10,
    title: "Dunkin' Donuts",
    image: [
      require('../assets/recommended/sushi.jpg'),
      require('../assets/recommended/sushi.jpg'),
      require('../assets/recommended/sushi.jpg'),
    ],
    ratings: 4.2,
    time: '15-25 min',
    distance: '2.1 km',
    offer: '20% off | Use code: DUNKIN20',
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [state, setState] = useState({
    search: '',
  });
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [sheetIndex, setSheetIndex] = useState(-1);
  const [tabIndex, setTabIndex] = useState(0);

  const toggleBottomSheet = () => {
    setSheetIndex(prev => (prev === 0 ? -1 : 0));
  };

  // const renderItem = ({item}: {item: Restaurant}) => (
  //   <RestaurantCard restaurant={item} />
  // );

  const getToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('authToken');
    if (token === null) {
      navigation.navigate('Login');
    }
  }, [navigation]);

  const filteredRestaurants = restaurantData.filter(restaurant =>
    restaurant.title.toLowerCase().includes(state.search.toLowerCase()),
  );

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.locationText}>Location</Text>
            <View style={styles.locationContainer}>
              <Icon name="location" size={25} color="black" />
              <Text style={styles.location}>Rohini West, Delhi, India</Text>
              <TouchableOpacity
                onPress={toggleBottomSheet}
                style={styles.iconButton}>
                <Icon name="chevron-down" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Search"
              placeholderTextColor="white"
              style={styles.search}
              value={state.search}
              onChangeText={search => setState({...state, search})}
            />
          </View>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Tab
              value={tabIndex}
              style={styles.tab}
              onChange={setTabIndex}
              indicatorStyle={styles.indicatorStyle}>
              <Tab.Item
                title="Recommended"
                titleStyle={styles.tabItem}
                iconPosition="left"
                icon={
                  <Icon
                    name="star"
                    size={25}
                    color="red"
                    style={styles.starIcon}
                  />
                }
              />
              <Tab.Item
                title="Collection"
                titleStyle={styles.tabItem}
                iconPosition="left"
                icon={<Icon name="bookmark" size={25} color="red" />}
              />
            </Tab>
          </View>
          <View style={styles.sectionOne}>
            {tabIndex === 0 ? (
              <View>
                <Recommended />
              </View>
            ) : (
              <View>
                <Text>Collection</Text>
              </View>
            )}
          </View>
          <View style={styles.sectionTwo}>
            <Text style={styles.restaurantText}>All Restaurants</Text>
            <Text style={styles.restaurantSubtitle}>10 restaurant delivering near you</Text>
            <View>
            <FlatList
              data={filteredRestaurants}
              renderItem={({item}) => <RestaurantCard restaurant={item} />}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />

            </View>
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        index={sheetIndex}
        onChange={index => setSheetIndex(index)}
        handleIndicatorStyle={styles.indicatorStyle}
        backgroundStyle={styles.backgroundStyle}
        snapPoints={['25%', '50%']}
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        animationConfigs={bottomSheetAnimationConfig}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetHeader}>Select your address</Text>
          <TouchableOpacity style={styles.bottomSheetItem}>
            <Text style={styles.bottomSheetText}>Rohini West</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addAddress}>
            <Text style={styles.bottomSheetText}>+ Add New Address</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e1111',
    flex: 1,
  },
  topBar: {
    backgroundColor: '#9A2A2A',
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  starIcon: {
    marginLeft: 10,
  },
  search: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  tab: {
    backgroundColor: '#1c2833',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  addAddress: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#17202a',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  indicatorStyle: {
    backgroundColor: 'red',
  },
  backgroundStyle: {
    backgroundColor: '#9A2A2A',
  },
  locationText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  locationContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  location: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconButton: {
    marginLeft: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 8,
  },
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: '#9A2A2A',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bottomSheetHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  bottomSheetItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemIcon: {
    marginRight: 10,
  },
  bottomSheetText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#B0B0B0',
    marginVertical: 10,
  },
  contentContainer: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    padding: 36,
    alignItems: 'center',
  },
  tabItem: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  sectionOne: {
    flex: 1,
  },
  sectionTwo: {
    marginVertical: 10,
  },
  restaurantText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    color: 'gray',
  },
  restaurantSubtitle :{
    fontSize: 16,
    color: 'gray',
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default HomeScreen;
