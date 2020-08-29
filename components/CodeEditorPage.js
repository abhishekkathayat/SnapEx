import React from 'react';
import { SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Layout, Text, Icon, Toggle, Button, OverflowMenu, MenuItem, Input } from '@ui-kitten/components';

import styles from './CameraStyles';

const codeIcon = (props) => (
    <Icon {...props} name="code-outline" fill="#3366FF"/>
);

class CodeEditorPage extends React.Component {
	state = {
		checked: true,
		visible: false,
		inputValue: '',
		selectedLanguage: 'Language',
		supportLanguages: ['C', 'C++', 'Java', 'Python 2.8', 'Python 3.0', 'JavaScript']
	};
	
	onCheckChanged = (checked) => { 
		this.setState({ checked: checked })
	};
	setVisible = (visible) => { this.setState({ visible: visible }) };
	setSelectedLanguage = (language) => { 
		this.setState({ selectedLanguage: language })
		this.setVisible(false) 
	};
	setInputText = (text) => { this.setState({ inputValue: text }) };

	render() {
		const { checked, selectedLanguage, visible, supportLanguages, inputValue } = this.state;
		const renderToggleButton = () => (
			<TouchableOpacity
				style={styles.languageButton}
				activeOpacity={0.5}
				onPress={() => this.setVisible(true)}>
					<Text style={{ color: '#7d7d7d', marginStart: 10, fontWeight: 'bold' }}>{selectedLanguage}</Text>
					<Icon name="arrow-down-outline" fill="#7d7d7d" style={{ width: 20, height: 20, marginRight: 10 }}/>
			</TouchableOpacity>
		);
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Layout style={styles.topNavCodeEditor}>
					<Text style={styles.topNavTextCodeEditor}> Code Editor </Text>
				</Layout>
				<Layout style={{ backgroundColor: 'transparent', alignItems: 'center'}}>
					<OverflowMenu
						anchor={renderToggleButton}
						visible={visible}
						fullWidth={true}
						onBackdropPress={() => this.setVisible(false)}>
							{supportLanguages.map((language, index) => (
								<MenuItem style={{ paddingVertical: 15 }} key={index} title={language} onPress={() => this.setSelectedLanguage(language)}/>
							))}
					</OverflowMenu>
					<Input
						scrollEnabled={true}
						onChangeText={(text) => this.setInputText(text)}
						value={inputValue}
						style={checked ? styles.textInputDark : styles.textInputLight}
						multiline={true}
						spellCheck={false}
						autoCorrect={false}
						placeholder='Write your code here...'
						textStyle={checked ? styles.textLight : styles.textDark}/>
				</Layout>
				<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}>
					<Layout style={{ position: 'absolute', bottom: 0, width: '100%' }}>
						<Layout style={styles.menuHolder}>
							{/**/}
							<Toggle
								checked={checked} 
								onChange={this.onCheckChanged}>
								{checked ? 'Dark' : 'Light'}
							</Toggle>
							<Layout style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
								<Text style={{ marginRight: 15, fontSize: 15 }}>Status :</Text>
								<Icon name="alert-triangle-outline" style={{ height: 25, width: 25 }} fill="#9d9d9d"/>
							</Layout>
						</Layout>
						
						<Layout style={styles.buttonHolder}>
							<TouchableOpacity style={styles.codeEditorButton} activeOpacity={0.5}>
								<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15, marginRight: 5 }}> Build </Text>
								<Icon name="settings-outline" style={{ height: 20, width: 20 }} fill="#fff"/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.codeEditorButton} activeOpacity={0.5}>
								<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}> Run </Text>
								<Icon name="arrow-right-outline" style={{ height: 25, width: 25 }} fill="#fff"/>
							</TouchableOpacity>
						</Layout>
					</Layout>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	};
};
export default CodeEditorPage;