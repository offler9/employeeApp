/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Avatar, CheckBox, Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import {RESULTS, openSettings} from 'react-native-permissions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {camera} from '../../Utils/functions/userPermissons';

import {colors, fonts, sizes} from '../../themes';
import Button from '../../components/Button';
import {
  addEmployeeData,
  addEmployeeReset,
} from '../../../globalStates/actions/employee';
import styles from './styles';

function AddItemScreen(props) {
  const {
    addEmployee,
    addEmployeeError,
    addEmployeeLoading,
    addEmployeeSuccess,
  } = useSelector(
    ({
      addEmployee,
      addEmployeeLoading,
      addEmployeeError,
      addEmployeeSuccess,
    }) => ({
      addEmployee,
      addEmployeeError,
      addEmployeeLoading,
      addEmployeeSuccess,
    }),
    shallowEqual,
  );
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState();

  const dispatch = useDispatch();

  const onLaunchCamera = async () => {
    await camera.permissionStatus().then(async result => {
      switch (result) {
        case RESULTS.GRANTED:
          const {assets} = await ImagePicker.launchCamera({
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.8,
            maxWidth: 600,
            maxHeight: 600,
          });
          if (assets) {
            setImage(assets);
            // setShowImagePreview(Boolean(assets[0]?.uri));
          }
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            'Camera Permission',
            'We need access to your camera to take photo.',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: '', onPress: () => openSettings()},
            ],
          );
          break;
        case RESULTS.DENIED:
          await camera.askPermission().then(async result_ => {
            switch (result_) {
              case RESULTS.GRANTED:
                const {assets: assets_} = await ImagePicker.launchCamera({
                  mediaType: 'photo',
                  includeBase64: true,
                  quality: 0.8,
                  maxWidth: 600,
                  maxHeight: 600,
                });
                if (assets_) {
                  setImage(assets_);
                }
                break;
              default:
                Alert.alert(
                  'Camera Permission',
                  'We need access to your camera to take photo.',
                  [
                    {
                      text: 'cancel',
                      onPress: () => null,
                      style: 'cancel',
                    },
                    {text: 'Open', onPress: () => openSettings()},
                  ],
                );
                break;
            }
          });
          break;
        default:
          break;
      }
    });
  };

  const onOpenLibrary = async () => {
    const {assets, errorCode} = await ImagePicker.launchImageLibrary({
      quality: 0.8,
      mediaType: 'photo',
      includeBase64: true,
      maxWidth: 600,
      maxHeight: 600,
    });
    if (errorCode === 'permission') {
      return Alert.alert(
        'Storage Permission',
        'Go to setting to enable the permission.',
        [
          {
            text: 'cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'open', onPress: () => openSettings()},
        ],
      );
    }
    if (!assets?.length) {
      return;
    }
    setImage(assets);
  };

  const handleAddEmployee = () => {
    const data = {
      name,
      age,
      gender,
      phone_number: phoneNumber,
      image_uri: image[0]?.uri,
      department,
    };
    dispatch(addEmployeeData(data));
  };

  useEffect(() => {
    if (addEmployeeSuccess) {
      Alert.alert('Success', addEmployee, [
        {
          text: 'close',
          onPress: () => {
            props.navigation.goBack();
            dispatch(addEmployeeReset());
          },
        },
      ]);
    }
    if (addEmployeeError) {
      Alert.alert('Opps..', 'something went wrong, please try again', [
        {
          text: 'Okay',
          onPress: () => dispatch(addEmployeeReset()),
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addEmployeeSuccess, addEmployeeError]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Input
            value={name}
            autoCapitalize="none"
            onChangeText={e => setName(e)}
            style={{fontSize: fonts.sizes.medium}}
            placeholder="name"
          />
          <Input
            value={phoneNumber}
            autoCapitalize="none"
            onChangeText={e => setPhoneNumber(e)}
            style={{fontSize: fonts.sizes.medium}}
            placeholder="phone number"
          />
          <Input
            value={age}
            autoCapitalize="none"
            onChangeText={e => setAge(e)}
            style={{fontSize: fonts.sizes.medium}}
            placeholder="age"
          />
          <Input
            value={department}
            autoCapitalize="none"
            onChangeText={e => setDepartment(e)}
            style={{fontSize: fonts.sizes.medium}}
            placeholder="department"
          />
          <View style={styles.genderContentWrapper}>
            <Text
              style={{
                fontSize: fonts.sizes.normal,
                color: colors.midGray,
                fontWeight: '400',
              }}>
              gender
            </Text>
            <CheckBox
              checked={gender === 'male'}
              onPress={() => setGender('male')}
              center
              title="Male"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
            <CheckBox
              checked={gender === 'female'}
              onPress={() => setGender('female')}
              center
              title="Female"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          {image && (
            <View
              style={{
                alignItems: 'center',
                paddingVertical: sizes.spaces.large,
              }}>
              <Avatar rounded size="xlarge" source={{uri: image[0]?.uri}} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>{image[0]?.fileName || ''}</Text>
                <FontAwesome5
                  onPress={() => setImage()}
                  name="trash-alt"
                  size={fonts.sizes.upsize}
                  color={colors.niceRed}
                  style={{paddingHorizontal: sizes.spaces.small}}
                />
              </View>
            </View>
          )}
          {!image && (
            <View style={{padding: sizes.spaces.small}}>
              <Text
                style={{
                  fontSize: fonts.sizes.normal,
                  color: colors.midGray,
                  fontWeight: '400',
                  padding: sizes.spaces.tiny,
                }}>
                upload your photo
              </Text>
              <TouchableOpacity
                onPress={onOpenLibrary}
                style={{
                  borderWidth: 0.5,
                  borderRadius: sizes.radius.medium,
                  padding: sizes.spaces.large,
                  alignItems: 'center',
                }}>
                <FontAwesome5 name="image" size={fonts.sizes.big} />
                <Text>select photo</Text>
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: fonts.sizes.medium,
                  color: colors.gray,
                }}>
                or
              </Text>
              <Button
                onPress={onLaunchCamera}
                icon={
                  <FontAwesome5
                    name="camera"
                    size={fonts.sizes.big}
                    color={colors.niceBlack}
                  />
                }
                title="open camera"
                textStyle={{
                  color: colors.happyGreen,
                  paddingHorizontal: sizes.spaces.small,
                }}
                style={{
                  backgroundColor: colors.happyGreenLite,
                  width: responsiveWidth(70),
                }}
                round
              />
            </View>
          )}
        </View>
      </ScrollView>
      <Button
        onPress={handleAddEmployee}
        disabled={
          !name || !phoneNumber || !age || !department || !gender || !image
        }
        loading={addEmployeeLoading}
        title="Submit"
        textStyle={{color: colors.white}}
        style={{width: responsiveWidth(75)}}
        round
      />
    </SafeAreaView>
  );
}
export default AddItemScreen;
