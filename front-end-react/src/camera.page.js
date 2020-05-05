import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Toolbar from './toolbar.component';
import ResultPage from './result.page';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

//** modified the following tutorial:
// "https://www.codementor.io/@foysalit/building-a-camera-app-with-react-native-r8up5685v"

//funcion that calls CameraPageClass so that we could access navigation
export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return <CameraPageClass {...props} navigation={navigation} route={route}/>;
}

class CameraPageClass extends React.Component {

    camera = null;

    state = {
      //no picture saved initially
      capture: null,
      //setting flash to be off by default
      flashMode: Camera.Constants.FlashMode.off,
      //not taking a photo initially
      capturing: null,
      //start the back camera by default
      cameraType: Camera.Constants.Type.back,
      //camera permissions initialized to null
      hasCameraPermission: null,
    };

    //these functions are all called when their respective buttons are pressed (see <Toolbar> below)
    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });
    handleShortCapture = async () => {
      //saves photo data
      const photoData = await this.camera.takePictureAsync();
      this.setState({ capturing: false, capture: photoData })

      const { navigation } = this.props;
      const { route } = this.props;
      const { textinfo } = route.params;
      //navigates to the results
      navigation.navigate('Results', {
        picture: this.state.capture,
        expectedString: textinfo,
      });
    };

    //requests permissions from user
    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, capture } = this.state;
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
