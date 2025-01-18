import {Icon} from '@rneui/base';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FoodCard from './FoodCard';
import { Restaurant } from '../interface/RestaurantDetail';

type CustomListProps = {
    data: Restaurant;
}

const CustomList:React.FC<CustomListProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  console.log(data,"xx");

  const handleOnPress = () => {
    setOpen(!open);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress} style={styles.touchable}>
        <Text style={styles.title}>Custom List</Text>
        <Icon name="chevron-right" color={'white'} />
      </TouchableOpacity>
      {open && (
        <>{
            data.items.map((item:any) => {
                return (
                    <FoodCard data={item} key={item.id}/>
                )
        }
        )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 5,
    borderBottomWidth: 1,
    backgroundColor: 'black',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700', // This is valid for TextStyle
    color: 'white',
  },
  listContent: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});

export default CustomList;
