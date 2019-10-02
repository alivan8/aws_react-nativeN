import React, {Component} from 'react';
import {Image, Text,UIManager,findNodeHandle, StatusBar} from 'react-native'
import { Header, Body, Title, Left, Right, Button, Icon, View} from 'native-base';
import Menu from './Menu';

type Props = {
  menu: Array
};
export default class TransparentHeader extends Component<Props> {

  goBack = () => {
    Actions.pop();
  }
  
  render() {
    const {navigation} = this.props;
    const {menu, onPressMenuItem, noLeft} = this.props;
    const {state: {params: {title}}} = navigation;
    console.log(title);
    return (
      <Header transparent style={{
          //position: 'absolute',
          // zIndex: 100,
          opacity: 0.85,
          //top: -StatusBar.currentHeight,
          // left: 0,
          // right: 0
        }}>
        {!noLeft && <Left style={{marginRight: 20}}>
          <Button transparent onPress={this.goBack}>
            <Icon name={"arrow-back"}/>
          </Button>
        </Left>}
        <Body>
          <Title>{title}</Title>
        </Body>
        {menu &&<Right>
          <Menu {...menu} onPressMenuItem={onPressMenuItem}/>
        </Right>}        
      </Header>
    );
  }
}

//export default connect()(TransparentHeader);