import React, {Component} from 'react';
import {Image, Text,UIManager,findNodeHandle} from 'react-native'
import { Header, Body, Title, Left, Right, Button, Icon, View} from 'native-base';
import Menu, { Props as MenuProps } from './Menu';
import { NavigationInjectedProps } from 'react-navigation';

type Props = {
  menu: MenuProps,
  title: string,
} & NavigationInjectedProps;

export default class TitleHeader extends Component<Props> {

  goBack = () => {
    console.log("back");
    this.props.navigation.pop();
  }
  
  render() {
    const {title, menu, navigation} = this.props;
    console.log(navigation.state);
    const noLeft = navigation.state.index === 0;
    return (
      <Header>
        {!noLeft && <Left >
          <Button transparent onPress={this.goBack}>
            <Icon type='Fontawesome' name='home'/>
          </Button>
        </Left>}
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Menu {...menu}/>
        </Right>
      </Header>
    );
  }
}