import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';

import CameraPage from './CameraPage';
import { CodeEditor } from './CodeEditorPage';

const { Navigator, Screen } = createBottomTabNavigator();

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

const TabNavigator = () => (
	<Navigator tabBar = {props => <BottomTabBar {...props} />}>
		<Screen name='Camera' component={CameraPage}/>
		<Screen name='Code Editor' component={CodeEditor}/>
	</Navigator>
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

