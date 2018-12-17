/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import { paddingIPXBottom } from './utils/Constant'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator tabBarStyle={styles.tabBarStyle}>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'popular'}
            title="Popular"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabNavIcon} source={require('./res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.tabNavIcon, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')} />}
            style={styles.tabBarItemStyle}
            badgeText=""
            onPress={() => this.setState({ selectedTab: 'popular' })}
            style={styles.tabBarItemStyle}>
            <View style={styles.page}>
              <ScrollView>
                <Text>Page1</Text>
              </ScrollView>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'trending'}
            title="Trending"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabNavIcon} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.tabNavIcon, {tintColor: 'red'}]} source={require('./res/images/ic_trending.png')} />}
            badgeText=""
            onPress={() => this.setState({ selectedTab: 'trending' })}
            style={styles.tabBarItemStyle}>
            <View style={styles.page}><Text>Page2</Text></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'favorite'}
            title="Favorite"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabNavIcon} source={require('./res/images/ic_favorite.png')} />}
            renderSelectedIcon={() => <Image style={[styles.tabNavIcon, {tintColor: 'red'}]} source={require('./res/images/ic_favorite.png')} />}
            badgeText=""
            onPress={() => this.setState({ selectedTab: 'favorite' })}
            style={styles.tabBarItemStyle}>
            <View style={styles.page}><Text>Page2</Text></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'my'}
            title="My"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Image style={styles.tabNavIcon} source={require('./res/images/ic_my.png')} />}
            renderSelectedIcon={() => <Image style={[styles.tabNavIcon, {tintColor: 'red'}]} source={require('./res/images/ic_my.png')} />}
            badgeText=""
            onPress={() => this.setState({ selectedTab: 'my' })}
            style={styles.tabBarItemStyle}>
            <View style={styles.page}><Text>Page2</Text></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: paddingIPXBottom,
    backgroundColor: "#fff"
  },
  tabBarStyle: {
    height: 49,
    backgroundColor: "#fff"
  },
  tabBarItemStyle: {
    height: 49 + paddingIPXBottom,
    paddingBottom: paddingIPXBottom
  },
  titleStyle: {

  },
  selectedTitleStyle: {
    color: "#f00"
  },
  tabNavIcon: {
    width: 25,
    height: 25,
  }
});
