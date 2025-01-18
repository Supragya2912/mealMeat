import React from 'react';
import {AirbnbRating} from 'react-native-ratings';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button, Icon} from '@rneui/base';

const FoodCard = (data: any) => {
  console.log('Data from food card', data);
  return (
    <View>
    <View style={styles.cardContainer}>
      <View style={styles.cardInfoContainer}>
        <Icon name="menu" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.foodText}>{data?.data?.title}</Text>
        <AirbnbRating
          count={5}
          reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
          defaultRating={data?.data?.ratings}
          size={20}
          selectedColor="yellow"
          reviewColor="yellow"
          showRating={false}
        />
        <Text style={styles.foodText}>{data?.data?.price}</Text>
        <Text style={styles.foodText}>{data?.data?.description}</Text>
      </View>
      <View>
      <View style={styles.imageWrapper}>
        <View style={styles.imageContainer}>
          <ImageBackground source={data?.data?.image} style={styles.image} />
        </View>
        <Button
          title="ADD"
          titleStyle={styles.addToCartButtonTitle}
          containerStyle={styles.addToCartButtonContainer}
          buttonStyle={styles.addToCartButton}
        />
      </View>
      <Text style={styles.customisableText}>Customisable</Text>
      </View>
    </View>
    <View style={styles.dotted}/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoContainer: {
    alignItems: 'flex-start',
  },
  icon: {
    marginBottom: 5,
  },
  foodText: {
    fontSize: 18,
    color: '#fff', // Example color, adjust as needed
    marginBottom: 5,
  },
  imageWrapper: {
    position: 'relative',
    width: 150,
  },
  dotted:{
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'gray',
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: 120, // Increased height
    borderRadius: 20,
    overflow: 'hidden', // Ensures the image respects the border radius
  },
  addToCartButtonTitle: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  addToCartButtonContainer: {
    position: 'absolute', // Enables overlapping
    bottom: -18, // Adjust to overlap slightly below the image
    left: 20,
    right: 7,
  },
  addToCartButton: {
    backgroundColor: '#8B0000',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#9A2A2A',
  },
  customisableText: {
    textAlign: 'center',
    marginTop: 20, // Adjust positioning below the button
    color: '#fff',
    fontSize: 12,
    paddingTop: 10,
  },
});

export default FoodCard;
