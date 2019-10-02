import React, {Component} from 'react'
import {View, Text} from 'native-base'

export default class Preview extends Component {
  static navigationOptions = (params: any) => {
    return {
      header: (props: any) => {
        return (
          <TitleHeader
            {...props}
            title={"Vista previa"}
            menu={{
              action: [
                {
                  id: 'CHECK_PREVIEW',
                  icon: 'checkmark'
                }
              ]
            }}
          />
        );
      }
    };
  };

  constructor(props){

  }

  render(){
    return (
      <View>
        <Text>Vista Previa</Text>
      </View>
    )
  }
}