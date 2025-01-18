import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Restaurant} from '../interface/RestaurantDetail';
import {Divider, Icon} from '@rneui/base';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Input} from '@rneui/themed';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CustomList from '../components/CustomList';

type RestaurantDetailsScreenRouteProp = RouteProp<
  {RestaurantDetailsScreen: {restaurant: Restaurant}},
  'RestaurantDetailsScreen'
>;

type Props = {
  route: RestaurantDetailsScreenRouteProp;
};

const RestaurantDetailsScreen: React.FC<Props> = ({route}) => {
  const {restaurant} = route.params;
  const [sheetIndex, setSheetIndex] = useState(2);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const data = [
    {title: 'Filters', icon: 'filter-list', isDefault: true},
    ...restaurant.category,
  ];

  //   const categories = [
  //     {
  //       title: 'Veg',
  //       icon: 'leaf',
  //     },
  //     {
  //       title: 'Non Veg',
  //       icon: 'restaurant',
  //     },
  //     {
  //       title: 'Rated',
  //       icon: 'star',
  //     },
  //     {
  //       title: 'Fastest Delivery',
  //       icon: 'motorcycle',
  //     },
  //     {
  //       title: 'Spicy',
  //       icon: 'whatshot',
  //     },
  //     {
  //       title: 'Best Seller',
  //       icon: 'star',
  //     },
  //   ];
  console.log('RestaurantDetailsScreen', restaurant);

  useEffect(() => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topIconContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="arrow-left" size={24} color={'white'} />
        </TouchableOpacity>
        <View style={styles.topIcon}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="save" size={24} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="more-vert" size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheet
        index={sheetIndex}
        onChange={index => setSheetIndex(index)}
        handleIndicatorStyle={styles.indicatorStyle}
        backgroundStyle={styles.backgroundStyle}
        snapPoints={['50%', '70%', '100%']}
        enablePanDownToClose={false}
        ref={bottomSheetRef}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheetInnerContainer}>
            <View style={styles.restaurantInfoContainer}>
              <View>
                <Text style={styles.title}>{restaurant.title}</Text>
                <View style={styles.addressContainer}>
                  <Text style={styles.subHeading}>{restaurant.time}</Text>
                  <Text style={styles.subHeading}> | </Text>
                  <Text style={styles.subHeading}>{restaurant.address}</Text>
                </View>
                <View style={styles.addressContainer}>
                  <Text style={styles.subHeading}>Schedule for later</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Text style={styles.subHeading}>{restaurant.ratings}</Text>
                <Icon name="star" size={24} color={'white'} />
              </View>
            </View>
            <Divider />
            <View style={styles.offerContainer}>
              <Text style={styles.subHeading}>{restaurant.offer}</Text>
              <TouchableOpacity style={styles.offerText}>
                <Text style={styles.subHeading}>3 offers</Text>
                <Icon name="keyboard-arrow-down" size={24} color={'white'} />
              </TouchableOpacity>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.marginTop5}>
              <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => `${item.title}-${index}`}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.categoryContainer}>
                    <Icon
                      name={item.title === 'Filters' ? 'filter-list' : 'menu'}
                      size={24}
                      color="white"
                      style={styles.iconMarginRight}
                    />
                    <Text style={styles.categoryText}>{item.title}</Text>
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <ScrollView>
            <View style={styles.listContent}>
              <CustomList data={restaurant}/>
              {/* <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList />
              <CustomList /> */}
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomInnerContainer}>
          <View style={styles.searchInputContainer}>
            <Icon
              name="search"
              size={24}
              color="#888"
              style={styles.searchIcon}
            />
            <Input
              placeholderTextColor="#888"
              inputStyle={styles.inputStyle}
              containerStyle={styles.inputContainerStyle}
              inputContainerStyle={styles.inputContainerStyle}
            />
          </View>
          <TouchableOpacity style={styles.menuBtn}>
            <Icon name="restaurant-menu" size={24} color="white" />
            <Text style={styles.menuText}>Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  categoryContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#9A2A2A',
  },
  bottomSheetInnerContainer: {
    zIndex: 1,
    backgroundColor: '#1c2833',
    padding: 4,
  },
  selectedPill: {
    backgroundColor: 'red',
    borderColor: 'black',
  },
  iconContainer: {
    marginRight: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
    backgroundColor: '#17202a',
  },
  restaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addressContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 5,
  },
  listContent: {
    backgroundColor: '#1c2833',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  offerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomInnerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#17202a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: 'black',
    marginVertical: 10,
    padding: 3,
  },
  offerContainer: {
    marginTop: 10,
    marginLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBtn: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    marginLeft: 5,
  },
  indicatorStyle: {
    backgroundColor: '#000',
    width: 100,
    height: 8,
    borderRadius: 4,
  },
  backgroundStyle: {
    backgroundColor: '#f0f0f0',
  },
  subHeading: {
    color: 'white',
    marginBottom: 4,
    fontSize: 14,
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
  },
  topIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#1c2833',
    padding: 15,
  },
  topIcon: {
    flexDirection: 'row',
  },
  bottomSheetContainer: {
    backgroundColor: '#1c2833',
    flex: 1,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    height: 55,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  inputContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 0,
    height: '100%',
  },
  inputStyle: {
    paddingHorizontal: 10,
    color: '#fff',
    paddingVertical: 0,
  },
  searchIcon: {
    marginRight: 8,
  },

  menuText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '600',
  },

  marginTop5: {
    marginTop: 5,
  },

  iconMarginRight: {
    marginRight: 8,
  },
});

export default RestaurantDetailsScreen;
