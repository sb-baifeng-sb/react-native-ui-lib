import React, {Component} from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Colors, View, Text, Hint, BorderRadiuses, Button, Constants} from 'react-native-ui-lib'; //eslint-disable-line
// import Hint from '../../../src/components/hint'

export default class PlaygroundScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View flex bg-dark80 center style={styles.container}>
        <Text>Unicorn Playground Screen</Text>
        <View pointerEvents={'box-none'} style={StyleSheet.absoluteFillObject} flex right bottom>
          <Animated.View
            pointerEvents={'box-none'}
            style={[{padding: 20, width: '100%'}, {transform: [{translateY: 0}]}]}
          >
            <Hint
              visible
              message={'Customize the about tabs'}
              position={Hint.positions.TOP}
              borderRadius={BorderRadiuses.br40}
              useSideTip={false}
            >
              <Button
                style={[
                  // Shadows.sh30.bottom,
                  {zIndex: 100},
                  {height: 56, width: undefined}
                ]}
                // iconSource={Assets.icons.general.grid}
                // testID={testIDs.CLUB_SCREEN_FAB}
                color={Colors.white}
                // backgroundColor={this.props.backgroundColor}
                label={'Manage'}
                size={Button.sizes.large}
                animateLayout
                enableShadow
                animateTo={'right'}
              />
            </Hint>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
