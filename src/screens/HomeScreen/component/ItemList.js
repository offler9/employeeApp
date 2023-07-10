/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Text, View, RefreshControl} from 'react-native';
import {Avatar} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, fonts, sizes} from '../../../themes';

const ItemList = props => {
  return (
    <FlatList
      data={props.data}
      style={{
        marginVertical: sizes.spaces.small,
      }}
      refreshing={props.refreshing}
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
          colors={colors.black}
        />
      }
      ListEmptyComponent={
        <Text
          style={{
            fontSize: fonts.sizes.normal,
            alignSelf: 'center',
          }}>
          no data found
        </Text>
      }
      renderItem={({item}) => (
        <View
          style={{
            padding: sizes.spaces.standard,
            borderWidth: 0.2,
            borderRadius: sizes.radius.small,
            marginVertical: sizes.spaces.small,
            borderColor: colors.green,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="person" size={fonts.sizes.big} />
                <Text
                  style={{
                    fontSize: fonts.sizes.upsize,
                    fontWeight: '500',
                    paddingHorizontal: sizes.spaces.small,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: fonts.sizes.normal,
                    left: -sizes.spaces.small,
                  }}>
                  {`(${item.age})`}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: sizes.spaces.standard,
                }}>
                <AntDesign name="mobile1" size={fonts.sizes.big} />
                <Text
                  style={{
                    fontSize: fonts.sizes.normal,
                    fontWeight: '500',
                    paddingHorizontal: sizes.spaces.small,
                  }}>
                  {item.phone_number}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: sizes.spaces.micro,
                }}>
                <FontAwesome5 name="building" size={fonts.sizes.big} />
                <Text
                  style={{
                    fontSize: fonts.sizes.normal,
                    fontWeight: '500',
                    paddingHorizontal: sizes.spaces.standard,
                  }}>
                  {item.department}
                </Text>
              </View>
            </View>
            <Avatar rounded size="large" source={{uri: item?.image_uri}} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: sizes.spaces.standard,
              justifyContent: 'flex-end',
            }}>
            <AntDesign
              onPress={() => props.handleDelete(item?.id)}
              name={'delete'}
              color={colors.niceRed}
              size={fonts.sizes.medium}
              style={{paddingRight: sizes.spaces.standard}}
            />
            <AntDesign
              onPress={() => props.editItem(item.id)}
              name={'edit'}
              color={'black'}
              size={fonts.sizes.medium}
            />
          </View>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default ItemList;
