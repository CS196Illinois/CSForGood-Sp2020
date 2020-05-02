import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import App from './..';


//import styles from './styles';
import Toolbar from './toolbar.component';
//import Gallery from './gallery.component';
import ResultPage from './result.page';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class CameraPage extends React.Component {

    camera = null;

    state = {
      capture: [],
      //setting flash to be off by default
      flashMode: Camera.Constants.FlashMode.off,
      capturing: null,
      //start the back camera by default
      cameraType: Camera.Constants.Type.back,
      hasCameraPermission: null,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    handleShortCapture = async () => {
      const photoData = await this.camera.takePictureAsync();
      this.setState({ capturing: false, capture: [photoData] })
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    switchpage = () => {
      navigation.navigate('results');
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;
        const { navigation } = this.props;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
          <React.Fragment>
            <View>
                <Camera
                    type={cameraType}
                    flashMode={flashMode}
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                />
            </View>

            <Toolbar
              capturing={capturing}
              flashMode={flashMode}
              cameraType={cameraType}
              setFlashMode={this.setFlashMode}
              setCameraType={this.setCameraType}
              onCaptureIn={this.handleCaptureIn}
              onShortCapture={this.handleShortCapture}
              moveOn={this.switchpage}
            />
          </React.Fragment>

        );
    };
};

const styles = StyleSheet.create({
  preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
