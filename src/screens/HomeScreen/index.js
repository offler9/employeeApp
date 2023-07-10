/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import {colors, fonts} from '../../themes';
import {
  deleteEmployeeData,
  deleteEmployeeReset,
  getEmployeeData,
} from '../../../globalStates/actions/employee';
import ItemList from './component/ItemList';
import styles from './styles';

function HomeScreen(props) {
  const {
    data,
    getEmployeeError,
    getEmployeeLoading,
    getEmployeeSuccess,
    deleteEmployeeSuccess,
    deleteEmployeeError,
    deleteEmployee,
  } = useSelector(
    ({
      employeeData,
      getEmployeeLoading,
      getEmployeeError,
      getEmployeeSuccess,
      deleteEmployee,
      deleteEmployeeSuccess,
      deleteEmployeeError,
      deleteEmployeeLoading,
    }) => ({
      data: employeeData,
      getEmployeeLoading,
      getEmployeeSuccess,
      getEmployeeError,
      deleteEmployee,
      deleteEmployeeError,
      deleteEmployeeSuccess,
      deleteEmployeeLoading,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const handleDeleteEmployee = id => {
    Alert.alert('', 'Are you sure to delete this data?', [
      {
        text: 'Yes',
        onPress: () => dispatch(deleteEmployeeData(id)),
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  useEffect(() => {
    dispatch(getEmployeeData());
  }, [isFocused]);

  useEffect(() => {
    if (deleteEmployeeSuccess) {
      Alert.alert('', deleteEmployee, [
        {
          text: 'Close',
          onPress: () => dispatch(deleteEmployeeReset()),
        },
      ]);
      dispatch(getEmployeeData());
    }
    if (deleteEmployeeError) {
      Alert.alert('Ops...', 'something went wrong, please try again.', [
        {
          text: 'Close',
          onPress: () => dispatch(deleteEmployeeReset()),
        },
      ]);
    }
  }, [deleteEmployeeSuccess, deleteEmployeeError]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {getEmployeeError && (
          <Text
            style={{
              fontSize: fonts.sizes.normal,
              color: colors.niceRed,
              alignSelf: 'center',
            }}>
            {data}
          </Text>
        )}

        {getEmployeeSuccess && (
          <ItemList
            data={data}
            refreshing={getEmployeeLoading}
            onRefresh={() => getEmployeeData()}
            handleDelete={e => handleDeleteEmployee(e)}
            editItem={e =>
              props.navigation.navigate('UpdateItem', {
                id: e,
              })
            }
          />
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => props.navigation.navigate('AddItem')}>
          <FontAwesome5
            name="user-plus"
            size={fonts.sizes.big}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
