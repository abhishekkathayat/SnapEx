import React from 'react';
import { SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { Layout, Text, Icon, Toggle, Button, OverflowMenu, MenuItem, Input } from '@ui-kitten/components';

import styles from './CameraStyles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const codeIcon = (props) => (
    <Icon {...props} name="code-outline" fill="#3366FF"/>
);

class CodeEditorPage extends React.Component {
	state = {
		checked: true,
		visible: false,
		errorvisible: false,
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
	setErrorVisible = (errorvisible) => { this.setState({ errorvisible: errorvisible }) };

	render() {
		const { checked, selectedLanguage, visible, supportLanguages, inputValue, errorvisible } = this.state;
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
					<TouchableOpacity onPress={() => {this.props.navigation.openDrawer()}} activeOpacity={0.5} style={{ position: "absolute", left: 10, top: 30 }}>
						<Icon name="menu-2-outline" style={{ height: 30, width: 30 }} fill="#000"/>
					</TouchableOpacity>
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
						textAlignVertical='top'
						placeholder='Write your code here...'
						textStyle={checked ? styles.textLight : styles.textDark}/>
				</Layout>
				<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={{ flex: 1 }}>
					<Layout style={{ position: 'absolute', bottom: 0, width: '100%' }}>
						<Layout style={styles.menuHolder}>
							<Toggle
								checked={checked} 
								onChange={this.onCheckChanged}>
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#585858' }}> {checked ? 'Dark' : 'Light'} </Text>
							</Toggle>
							<Layout style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
								<Text style={{ marginRight: 15, fontSize: 15, fontWeight: 'bold', color: '#585858' }}>Compile Status :</Text>
								<TouchableWithoutFeedback onPress={() => this.setErrorVisible(true)} activeOpacity={0.5}>
									<Icon name="alert-triangle-outline" style={{ height: 25, width: 25 }} fill="#9d9d9d"/>
								</TouchableWithoutFeedback>
							</Layout>
						</Layout>
						<Layout style={styles.buttonHolder}>
							<TouchableOpacity style={styles.codeEditorButton} activeOpacity={0.5}>
								<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15, marginRight: 5 }}> Build </Text>
								<Icon name="settings-outline" style={{ height: 20, width: 20 }} fill="#fff"/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.codeEditorButton} activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('Input and Output')}}>
								<Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}> Run </Text>
								<Icon name="arrow-right-outline" style={{ height: 25, width: 25 }} fill="#fff"/>
							</TouchableOpacity>
						</Layout>
					</Layout>
				</KeyboardAvoidingView>
				<Modal
				visible={errorvisible}>
					<Layout>
						<Layout style={styles.errorModalTopBar}>
						<Icon name="alert-triangle-outline" style={{ height: 20, width: 20 }} fill="#24292E"/>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#24292E' }}>Errors</Text>
							<TouchableOpacity onPress={() => this.setErrorVisible(false)} activeOpacity={0.5}>
								<Icon name="close-outline" fill="#24292E" style={{ height: 25, width: 25 }}/>
							</TouchableOpacity>	
						</Layout>
						<Layout>
							<Input
							scrollEnabled={true}
							style={styles.errorInput}
							multiline={true}
							textAlignVertical='top'
							editable={false}
							value='/!\ Compile Time Errors are shown here...'
							textStyle={styles.errorInputText}/>
						</Layout>
					</Layout>
				</Modal>
			</SafeAreaView>
		);
	};
};
export default CodeEditorPage;