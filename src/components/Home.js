import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import TitleHeader from './headers/TitleHeader';

export default class Home extends Component {
  static navigationOptions = (params: any) => {
    return {
      header: (props: any) => {
        return (
          <TitleHeader
            {...props}
            title={"Smainn"}
          />
        );
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
           <Button onPress={()=>{
               this.props.navigation.navigate("Camera");
           }}>
               <Text>
                  Registrar resultados
                </Text>
            </Button>
      </View>
    );
  }
}
