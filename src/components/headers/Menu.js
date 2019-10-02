import React, { Component } from 'react';
import { View, Text, UIManager, findNodeHandle } from 'react-native';
import { Button, Icon } from 'native-base';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    console.log(props.options);
    this.state = {
      options: props.options && props.options.map((value)=>value.text)
    };
  }

  handleShowPopupError = () => {
    // show error here
  };

  handleMenuPress = () => {
    const {options} = this.state;

    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      options,
      this.handleShowPopupError,
      this.onPressOption,
    );
  };

  onPressOption = (e, i) =>{
    const { onPressMenuItem, options } = this.props;

    onPressMenuItem(options[i].id);

  }

  onPressAction(actionId){
    return () => {
      this.props.onPressMenuItem(actionId);
    }
  }

  renderActions(actions){
    return actions && actions.length != 0 && actions.map(({id, icon})=>{
      const props = typeof icon === 'string' ? {name: icon} : icon;
      return <Button key={id} transparent onPress={this.onPressAction(id)}>
        <Icon {...props}/>
      </Button>
    });    
  }

  renderOptions(options){
    return options && options.length != 0 && <Button transparent onPress={this.handleMenuPress}  ref="menu" >
      <Icon name={"more"}/>
    </Button>
  }

  render() {
    const {actions, options} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        {this.renderActions(actions)}
        {this.renderOptions(options)}
      </View>
    );
  }
}
