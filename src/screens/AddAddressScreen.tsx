import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import {Icon} from '@rneui/base';
import {Input} from '@rneui/themed';
import {ScrollView} from 'react-native-gesture-handler';

type AddAddressScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddAddressScreen'
>;

const AddAddressScreen: React.FC<AddAddressScreenProps> = () => {
  const [state, setState] = useState({
    type: '',
    houseNumber: '',
    floor: '',
    tower: '',
    landmark: '',
  });

  const [receiver, setReceiver] = useState({
    updateReceiver: false,
    receiverName: '',
    receiverPhone: '',
  });

  const handleSelectType = (type: string) => {
    setState(prevState => ({
      ...prevState,
      type,
    }));
  };

  const handleSaveReceiver = useCallback(() => {
    console.log('Save Receiver', receiver);
    setReceiver({
      updateReceiver: false,
      receiverName: '',
      receiverPhone: '',
    });
  }, [receiver]);

  const handleSaveAddress = useCallback(() => {
    console.log('Save Address', state);
    setState({
      type: '',
      houseNumber: '',
      floor: '',
      tower: '',
      landmark: '',
    });
  }, [state]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Icon name="arrow-back" size={20} color="white" />
        <Text style={styles.title}>Enter complete address</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.receiverInfo}
            onPress={() => setReceiver({...receiver, updateReceiver: true})}>
            <Text style={styles.receiverTitle}>
              Receiver's details for this address
            </Text>
            {receiver.updateReceiver ? (
              <>
                <View style={styles.receiverUpdateInfo}>
                  <Input
                    placeholder="Name"
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.input}
                    value={receiver.receiverName}
                    onChangeText={text =>
                      setReceiver({...receiver, receiverName: text})
                    }
                  />
                  <Input
                    placeholder="Phone"
                    inputContainerStyle={styles.inputContainerStyle}
                    style={styles.input}
                    value={receiver.receiverPhone}
                    onChangeText={text =>
                      setReceiver({...receiver, receiverPhone: text})
                    }
                  />
                </View>
                <View style={styles.receiverUpdateBtnsContainer}>
                  <TouchableOpacity
                    style={styles.receiverUpdateBtns}
                    onPress={() =>
                      setReceiver({...receiver, updateReceiver: false})
                    }>
                    <Text style={styles.receiverUpdateText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSaveReceiver}
                    style={styles.receiverUpdateBtns}>
                    <Text style={styles.receiverUpdateText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <View style={styles.contactDetails}>
                <Icon name="call" size={20} color="white" />
                <View style={styles.phoneContainer}>
                  <Text style={styles.receiverPhone}>Supragya, 9090909121</Text>
                  <Icon
                    name="keyboard-arrow-right"
                    size={20}
                    color="#9A2A2A"
                    type="material"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.addAddressContainer}>
            <Text style={styles.header}> Save address as *</Text>
            <View style={styles.addressType}>
              <TouchableOpacity
                style={[
                  styles.pills,
                  state.type === 'Home' && styles.selectedPill,
                ]}
                onPress={() => handleSelectType('Home')}>
                <Icon
                  name="home"
                  size={20}
                  color={state.type === 'Home' ? 'white' : '#9A2A2A'}
                />
                <Text
                  style={[
                    styles.pillText,
                    state.type === 'Home' && styles.selectedPillText,
                  ]}>
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pills,
                  state.type === 'Work' && styles.selectedPill,
                ]}
                onPress={() => handleSelectType('Work')}>
                <Icon
                  name="work"
                  size={20}
                  color={state.type === 'Work' ? 'white' : '#9A2A2A'}
                />
                <Text
                  style={[
                    styles.pillText,
                    state.type === 'Work' && styles.selectedPillText,
                  ]}>
                  Work
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.pills,
                  state.type === 'Other' && styles.selectedPill,
                ]}
                onPress={() => handleSelectType('Other')}>
                <Icon
                  name="location-on"
                  size={20}
                  color={state.type === 'Other' ? 'white' : '#9A2A2A'}
                />
                <Text
                  style={[
                    styles.pillText,
                    state.type === 'Other' && styles.selectedPillText,
                  ]}>
                  Other
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.addressContainer}>
              <View style={styles.address}>
                <Text style={styles.addressText}>
                  Westend Heights, Saint Thomas Marg, DLF Phase 5, Sector 53,
                  Gurugram
                </Text>
              </View>
              <View style={styles.chngBtnContainer}>
                <TouchableOpacity style={styles.chngBtn}>
                  <Text style={styles.chngBtnTxt}> Change</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.completeAddress}>
              <Input
                placeholder="House number"
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.input}
                value={state.houseNumber}
                onChangeText={text => setState({...state, houseNumber: text})}
              />
              <Input
                placeholder="Floor"
                value={state.floor}
                inputContainerStyle={styles.inputContainerStyle}
                style={styles.input}
                onChangeText={text => setState({...state, floor: text})}
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Tower / Block (optional)"
                style={styles.input}
                value={state.tower}
                onChangeText={text => setState({...state, tower: text})}
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Nearby landmark (optional)"
                style={styles.input}
                value={state.landmark}
                onChangeText={text => setState({...state, landmark: text})}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.addAddressBtnContainer}
          onPress={handleSaveAddress}>
          <Text style={styles.saveAddressBtn}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212f3c',
    paddingTop: 80,
    paddingBottom: 120,
  },
  receiverUpdateBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  receiverUpdateBtns: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    borderWidth: 1,
    borderColor: '#9A2A2A',
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
    backgroundColor: '#17202a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2,
    height: 80,
    backgroundColor: '#17202a',
  },
  receiverUpdateInfo: {
    marginTop: 20,
    flexDirection: 'column',
  },
  addressText: {
    color: 'white',
    fontSize: 14,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 1,
    borderColor: '#9A2A2A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  selectedPill: {
    backgroundColor: 'red',
    borderColor: 'black',
  },
  selectedPillText: {
    color: 'white',
  },
  receiverInfo: {
    backgroundColor: '#17202a',
    padding: 20,
    marginTop: 25,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  receiverTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  contactDetails: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  receiverPhone: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
  phoneContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  addAddressContainer: {
    backgroundColor: '#17202a',
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  header: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addressType: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  pills: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#9A2A2A',
  },
  pillText: {
    color: '#9A2A2A',
    fontSize: 12,
    marginLeft: 5,
  },
  addressContainer: {
    marginTop: 35,
    borderRadius: 15,
    backgroundColor: 'black',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  address: {
    color: 'white',
    fontSize: 14,
    padding: 10,
    width: '75%',
  },
  chngBtnTxt: {
    color: 'red',
    fontSize: 14,
    padding: 10,
  },
  chngBtn: {
    backgroundColor: 'black',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
  },
  chngBtnContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeAddress: {
    marginTop: 30,
  },
  saveAddressBtn: {
    color: 'white',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addAddressBtnContainer: {
    width: '90%',
    borderRadius: 10,
    height: 50,
  },
  receiverUpdateText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddAddressScreen;
