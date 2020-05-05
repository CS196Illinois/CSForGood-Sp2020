import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  componentDidMount() {
    this.animation.play(0,50);
    // Or set a specific startFrame and endFrame with:
  }

  render() {
    return (
      <LottieView
        loop={false}
        onAnimationFinish={()=>{
          this.animation.play(0,50)
        }}
        speed={1}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./../assets/animation.json')}
        resizeMode='cover'
      />
    );
  }
}