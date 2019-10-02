import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleHeader from './headers/TitleHeader';

export default class Camera extends Component {
    static navigationOptions = (params: any) => {
        return {
          header: (props: any) => {
            return (
              <TitleHeader
                {...props}
                title={"Camera"}
              />
            );
          }
        };
      };
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate("Preview", {
        imageUri: null,
        rectangleCoordinates: []
      })
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text> Camera </Text>
      </View>
    );
  }
}
