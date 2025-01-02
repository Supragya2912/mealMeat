import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type SavedAddressCardProps = {
  address: string;
  phone: string;
  onEdit: () => void;
  onDelete: () => void;
};

const SavedAddressCard: React.FC<SavedAddressCardProps> = ({
  phone,
  address,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Icon name="home" size={20} color="white" />
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={styles.phone}>
        <Icon name="call" size={20} color="white" />
        <Text style={styles.address}>{phone}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Icon name="pencil" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Icon name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  phone:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  address: {
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SavedAddressCard;
