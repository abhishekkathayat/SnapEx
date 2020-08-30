import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout, Icon, Text, TopNavigation, TopNavigationAction, Divider, Input, Modal } from '@ui-kitten/components';

import styles from './CameraStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackArrow = (props) => (
    <Icon {...props} name="arrow-ios-back-outline"/>
);

class CodeIOPage extends React.Component {
    state = {
        inputValue: '',
        outputValue: '',
        errorvisible: false
    }

    setInputText = (text) => {this.setState({ inputValue: text }) };
    setErrorVisible = (visible) => { this.setState({ errorvisible: visible }) };

    render() {
        const { inputValue, outputValue, errorvisible } = this.state;
        const navigateBack = () => {
            this.props.navigation.navigate('Code Editor Home');
        };
        const backAction = () => (
            <TopNavigationAction icon={BackArrow} onPress={navigateBack}/>
        );
        return (
            <SafeAreaView style={{ flex: 1 }}>
                 <TopNavigation
                    title={<Text style={styles.topNavText}>Input and Output</Text>}
                    accessoryLeft={backAction}
                    style={styles.topNav}
                />
                <Divider/>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Layout style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <Icon name="log-in-outline" fill="#585858" style={{ height: 25, width: 25 }}/>
                        <Text style={{ fontSize: 18, color: '#585858', fontWeight: 'bold' }}> Input </Text>
                    </Layout>
                    <Input
                    value={inputValue}
                    onChangeText={(text) => this.setInputText(text)}
                    style={{ borderColor: '#585858', marginHorizontal: 15 }}
                    scrollEnabled={true}
                    multiline={true}
                    textAlignVertical='top'
                    textStyle={styles.ioField}
                    spellCheck={false}
                    autoCorrect={false}
                    placeholder='Inputs go here...'/>
                </Layout>
                <Layout style={styles.ioStatusHolder}>
                    <Layout style={{ flexDirection: 'row', backgroundColor: 'transparent', width: '40%' }}>
                        <Text style={{ marginLeft: 5, marginRight: 10, fontWeight: 'bold', color: '#585858' }}>Runtime Status:</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {this.setErrorVisible(true)}}>
                            <Icon name="alert-triangle-outline" style={{ height: 25, width: 25 }} fill="#9d9d9d"/>
                        </TouchableOpacity>
                    </Layout>
                    <Layout style={{ backgroundColor: 'transparent', width: '40%' }}>
                    <TouchableOpacity style={styles.ioSubmitButton} activeOpacity={0.5}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15, marginRight: 5 }}> Submit </Text>
                        <Icon name="cloud-upload-outline" style={{ height: 20, width: 20 }} fill="#fff"/>
                    </TouchableOpacity>
                    </Layout>
                </Layout>
                <Layout style={{ backgroundColor: 'transparent' }}>
                    <Layout style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <Icon name="log-out-outline" fill="#585858" style={{ height: 25, width: 25 }}/>
                        <Text style={{ fontSize: 18, color: '#585858', fontWeight: 'bold' }}> Output </Text>
                    </Layout>
                    <Input
                    value={outputValue}
                    style={{ borderColor: '#585858', marginHorizontal: 15 }}
                    scrollEnabled={true}
                    multiline={true}
                    textAlignVertical='top'
                    textStyle={styles.ioField}
                    editable={false}
                    placeholder='Outputs come here...'/>
                </Layout>
                <Modal
				visible={errorvisible}
                style={{ width: '100%' }}>
					<Layout>
						<Layout style={styles.errorModalTopBar}>
						<Icon name="alert-triangle-outline" style={{ height: 20, width: 20 }} fill="#24292E"/>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#24292E' }}>Runtime Errors</Text>
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
							value='/!\ Run Time Errors are shown here...'
							textStyle={styles.errorInputText}/>
						</Layout>
					</Layout>
				</Modal>
            </SafeAreaView>
        );
    };
};
export default CodeIOPage;