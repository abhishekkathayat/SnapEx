import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './components/DrawerNavigation';

const loadFonts = () => {
	return Font.loadAsync({
		'Consolas': require('./assets/fonts/Consolas.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);
	if(!fontLoaded) {
		return (
			<AppLoading
				startAsync={loadFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.error(err)}
			/>
		);
	}
	return (
	<>
		<IconRegistry icons={EvaIconsPack}/>
		<ApplicationProvider {...eva} theme={eva.light}>
		<AppNavigator/>
		</ApplicationProvider>
	</>
	);
}
