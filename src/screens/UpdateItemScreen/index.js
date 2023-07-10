/* eslint-disable react-hooks/exhaustive-deps */
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
import {Avatar, BottomSheet, CheckBox, Input} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'react-native-image-picker';
import {RESULTS, openSettings} from 'react-native-permissions';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {camera} from '../../Utils/functions/userPermissons';
import {colors, fonts, sizes} from '../../themes';
import Button from '../../components/Button';
import {
  getEmployeeById,
  getEmployeeByIdReset,
  updateEmployeeData,
  updateEmployeeReset,
} from '../../../globalStates/actions/employee';
import styles from './styles';

function UpdateItemScreen({route, navigation}) {
  const {
    // updateEmployee,
    updateEmployeeError,
    updateEmployeeLoading,
    updateEmployeeSuccess,
    data,
    // getEmployeeByIdLoading,
    getEmployeeByIdSuccess,
    getEmployeeByIdError,
  } = useSelector(
    ({
      updateEmployee,
      updateEmployeeLoading,
      updateEmployeeError,
      updateEmployeeSuccess,
      employeeByIdData,
      getEmployeeByIdSuccess,
      getEmployeeByIdError,
      getEmployeeByIdLoading,
    }) => ({
      updateEmployee,
      updateEmployeeError,
      updateEmployeeLoading,
      updateEmployeeSuccess,
      data: employeeByIdData,
      getEmployeeByIdSuccess,
      getEmployeeByIdLoading,
      getEmployeeByIdError,
    }),
    shallowEqual,
  );
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState();
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState();
  const [isVisible, setIsVisible] = useState();

  const dispatch = useDispatch();
  const {bottom} = useSafeAreaInsets();

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
            setImage(assets[0]?.uri);
            setIsVisible(false);
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
                  setImage(assets_[0]?.uri);
                  setIsVisible(false);
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
    setImage(assets[0]?.uri);
    setIsVisible(false);
  };

  const handleUpdateEmployee = () => {
    const data = {
      name,
      age,
      gender,
      phone_number: phoneNumber,
      image_uri: image,
      department,
    };
    dispatch(updateEmployeeData(data, route?.params?.id));
  };

  useEffect(() => {
    if (route?.params?.id) {
      dispatch(getEmployeeById(route?.params?.id));
    }
  }, [route?.params?.id]);

  useEffect(() => {
    if (getEmployeeByIdSuccess && data) {
      setName(data?.name);
      setAge(String(data?.age));
      setDepartment(data?.department);
      setGender(data?.gender);
      setImage(data?.image_uri);
      setPhoneNumber(data?.phone_number);
    }
    if (getEmployeeByIdError) {
      Alert.alert('Opps..', 'something went wrong, please try again', [
        {
          text: 'Okay',
          onPress: () => dispatch(getEmployeeByIdReset()),
        },
      ]);
    }
  }, [getEmployeeByIdSuccess, data]);

  useEffect(() => {
    if (updateEmployeeSuccess) {
      Alert.alert('Success', 'Employee data updated', [
        {
          text: 'close',
          onPress: () => {
            navigation.goBack();
            dispatch(updateEmployeeReset());
          },
        },
      ]);
    }
    if (updateEmployeeError) {
      Alert.alert('Opps..', 'something went wrong, please try again', [
        {
          text: 'Okay',
          onPress: () => dispatch(updateEmployeeReset()),
        },
      ]);
    }
  }, [updateEmployeeSuccess, updateEmployeeError]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: sizes.spaces.large,
            }}>
            <Avatar
              rounded
              size="xlarge"
              source={{uri: image}}
              onPress={() => setIsVisible(true)}
            />
          </View>
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
        </View>
      </ScrollView>
      <Button
        onPress={handleUpdateEmployee}
        disabled={
          !name || !phoneNumber || !age || !department || !gender || !image
        }
        loading={updateEmployeeLoading}
        title="Update"
        textStyle={{color: colors.white}}
        style={{width: responsiveWidth(75)}}
        round
      />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          flex: 1,
          backgroundColor: colors.black,
          opacity: 0.8,
        }}
        modalProps={{
          statusBarTranslucent: true,
          hardwareAccelerated: true,
          animationType: 'slide',
        }}>
        <View
          style={{
            backgroundColor: colors.white,
            borderTopLeftRadius: sizes.radius.medium,
            borderTopRightRadius: sizes.radius.medium,
            bottom: -bottom,
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: responsiveHeight(28),
              borderTopLeftRadius: sizes.radius.medium,
              borderTopRightRadius: sizes.radius.medium,
              padding: sizes.spaces.medium,
            }}>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{alignItems: 'flex-end'}}>
              <AntDesign name="close" size={fonts.sizes.big} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onOpenLibrary}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: sizes.spaces.medium,
              }}>
              <FontAwesome5 name="image" size={fonts.sizes.bigger} />
              <Text
                style={{
                  fontSize: fonts.sizes.normal,
                  fontWeight: '500',
                  paddingHorizontal: sizes.spaces.small,
                }}>
                Album
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onLaunchCamera}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 size={fonts.sizes.bigger} name="camera" />
              <Text
                style={{
                  fontSize: fonts.sizes.normal,
                  fontWeight: '500',
                  paddingHorizontal: sizes.spaces.small,
                }}>
                Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
export default UpdateItemScreen;
