import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, IndexPath, Icon, Layout, Divider, Text } from '@ui-kitten/components';

import CameraPage from './CameraPage';
import CodeIOPage from './CodeIOPage';
import GalleryPage from './GalleryPage';
import CodeEditorPage from './CodeEditorPage';

const StackNavigation = createStackNavigator();
const DrawerNavigation = createDrawerNavigator();

const CameraIcon = (props) => (
	<Icon {...props} name='camera-outline'/>
);

const CodeEditorIcon = (props) => (
	<Icon {...props} name='code-outline'/>
);

const Header = (props) => (
	<React.Fragment>
		<Layout style={styles.header}>
			<Image source={require('../assets/Snapexlogo.png')} style={[props.style, styles.headerLogo]}/>
			<Text style={[props.style, styles.headerText]}>SnapEx</Text>
			<Divider/>
		</Layout>
	</React.Fragment>
);

const Footer = (props) => (
	<React.Fragment>
		<Layout style={styles.footer}>
			<Text style={[props.style, styles.footerText]}>v1.0</Text>
		</Layout>
	</React.Fragment>
);

const DrawerContent = ({ navigation, state }) => (
	<Drawer
		header = {Header}
		footer = {Footer}
		selectedIndex = {new IndexPath(state.index)}
		onSelect = {index => navigation.navigate(state.routeNames[index.row])}>
			<DrawerItem
				title='Camera' 
				accessoryLeft={CameraIcon}
			/>
			<DrawerItem 
				title='Code Editor' 
				accessoryLeft={CodeEditorIcon}
			/>
	</Drawer>
);

const StackNavigator = () => (
	<StackNavigation.Navigator headerMode='none'>
		<StackNavigation.Screen name='Home' component={CameraPage}/>
		<StackNavigation.Screen name='Gallery' component={GalleryPage}/>
	</StackNavigation.Navigator>
);

const CEStackNavigator = () => (
	<StackNavigation.Navigator headerMode='none'>
		<StackNavigation.Screen name='Code Editor Home' component={CodeEditorPage}/>
		<StackNavigation.Screen name='Input and Output' component={CodeIOPage}/>
	</StackNavigation.Navigator>
);

const DrawerNavigator = () => (
	<DrawerNavigation.Navigator drawerContent = {props => <DrawerContent {...props} />}>
		<DrawerNavigation.Screen name='Camera' component={StackNavigator}/>
		<DrawerNavigation.Screen name='Code Editor' component={CEStackNavigator}/>
	</DrawerNavigation.Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<DrawerNavigator/>
	</NavigationContainer>
);

const styles = StyleSheet.create({
	header: {
		height: 220,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
		marginBottom: 20
	},
	footer: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerLogo: {
		height: 100,
		width: 100
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#3366FF'
	},
	footerText: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#7d7d7d'
	}
})

