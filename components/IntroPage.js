import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import * as Animatable from 'react-native-animatable' 
import { connect } from 'react-redux'
import { initializeApp } from './login_actions'

class IntroPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        setTimeout(() => this.props.initializeApp(), 2000)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.authenticated) {
          this.props.navigation.navigate('WeLoggedIn')
        }
    }
    
    showError() {
        return (
           <div className="bg-gray-100 rounded-xl p-8">
             <h2 className="text-lg font-semibold">ToDo</h2>
             <div>
               <Input onChange={this.handleChange} />
               <p className="font-medium color-red-100">{this.state.error}</p>
               <ToDoList value={this.state.display} />
             </div>
           </div>
          );
    }

    render() {
        const { 
          container,
          appName,
          image, 
          text 
        } = styles
        return (
            <View style={container}>
                    <Image
                        style={image}
                        source={require('./logo.png')}
                    />
                    <Text 
                        style={appName}
                    >
                        SnapEx
                    </Text>
                    <Animatable.Text
                        style={text}
                        duration={1500}
                        animation="rubberBand"
                        easing="linear"
                        iterationCount="infinite"
                    >
                        Loading...
                    </Animatable.Text>
                    <Text> {(this.props.authenticated) ? 'LOGGED IN' : 'NOT LOGGED IN'} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0'
    },
    appName: {
      fontSize: 25,
      resizeMode: 'contain',
      color: '#000000'
    },
    image: {
        height: 110,
        resizeMode: 'contain'
    },
    text: {
        marginTop: 50,
        fontSize: 15,
        color: '#1A1A1A'
    },
    topNav: {
        height: 80,
        paddingTop: 35
    },
    topNavText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    galleryGrid: {
        width: windowWidth,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent'
    },
    ioSubmitButton: {
        width: '80%',
        height: 45,
        borderRadius: 50,
        backgroundColor: '#3366FF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 9,
        justifyContent: 'center'
    },
    ioStatusHolder: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'transparent', 
        alignItems: 'center',
        marginHorizontal: 15,
        width: '100%'
    },
    ioField: {
        height: Math.ceil(windowHeight * 0.29),
        color: '#24292E'
    }
})

const mapStateToProps = ({ auth }) => {
    return {
        authenticated: auth.isAuthenticated
    }
}

export default connect(mapStateToProps, { initializeApp })(IntroPage)
