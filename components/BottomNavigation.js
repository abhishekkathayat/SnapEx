import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

import CameraPage from './CameraPage';
import GalleryPage from './GalleryPage';
import { CodeEditor } from './CodeEditorPage';

const StackNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

const CameraIcon = (props) => (
	<Icon {...props} name='camera-outline'/>
);

const CodeEditorIcon = (props) => (
	<Icon {...props} name='code-outline'/>
);

const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation
		style = {styles.bottomNavigation}
		selectedIndex = {state.index}
		onSelect = {index => navigation.navigate(state.routeNames[index])}>
			<BottomNavigationTab title='Camera' icon={CameraIcon}/>
			<BottomNavigationTab title='Code Editor' icon={CodeEditorIcon}/>
	</BottomNavigation>
);

const StackNavigator = () => (
	<StackNavigation.Navigator headerMode='none'>
		<StackNavigation.Screen name='Home' component={CameraPage}/>
		<StackNavigation.Screen name='Gallery' component={GalleryPage}/>
	</StackNavigation.Navigator>
)

const TabNavigator = () => (
	<TabNavigation.Navigator tabBar = {props => <BottomTabBar {...props} />}>
		<TabNavigation.Screen name='Camera' component={StackNavigator}/>
		<TabNavigation.Screen name='Code Editor' component={CodeEditor}/>
	</TabNavigation.Navigator>
);

const styles = StyleSheet.create({
	bottomNavigation: {
		height: 75,
	}
})

export const AppNavigator = () => (
	<NavigationContainer>
		<TabNavigator/>
	</NavigationContainer>
);

