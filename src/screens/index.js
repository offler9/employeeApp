import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screen
import HomeScreen from './HomeScreen';
import AddItemScreen from './AddItemScreen';
import UpdateItemScreen from './UpdateItemScreen';
import {colors} from '../themes';

const Stack = createStackNavigator();

function AppContainer() {
  //   const { authUser } = useSelector(({ authUser }) => ({ authUser }), shallowEqual) // eslint-disable-line
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Employee list',
          headerStyle: {backgroundColor: colors.green},
          headerTitleStyle: {color: colors.white},
        }}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItemScreen}
        options={{
          headerTitle: 'Add employee',
          headerStyle: {backgroundColor: colors.green},
          headerTitleStyle: {color: colors.white},
        }}
      />
      <Stack.Screen
        name="UpdateItem"
        component={UpdateItemScreen}
        options={{
          headerTitle: 'Update employee data',
          headerStyle: {backgroundColor: colors.green},
          headerTitleStyle: {color: colors.white},
        }}
      />
    </Stack.Navigator>
  );
}

export default AppContainer;
