import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import Toolbar from './toolbar.component';
import Gallery from './gallery.component';
import ResultPage from './result.page';


/*
create the view style for button that you like (we did it in app)
then put this code into the function to allow it to navigate to the results page

<View style={styles.button}>
  <Button
    onPress={() => {
      navigation.navigate('results')
    }}
    color="#841584"
    title="Results"
  />
</View>

*/
export default class CameraPage extends React.Component {
  constructor({navigation}) {
    super()
  }
    camera = null;

    state = {
      captures: [],
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
      this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

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

            {captures.length > 0 && <Gallery captures={captures}/>}

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
