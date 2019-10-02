import React, {Component} from 'react';
import {Image, Text} from 'react-native'
import { Header, Body, Right} from 'native-base';
import Menu from './Menu';
import { logo1 } from '../../../../resources/images';
import {connect} from 'react-redux';

type Props = {
};
class MainHeader extends Component<Props> {

  
  render() {
    const {navigation} = this.props;
    const {menu, onPressMenuItem} = this.props;
    return (
      <Header>
        <Body>
            <Image source={logo1} style={{width:130, height:60 }}/>
        </Body>
        <Right>
          <Menu {...menu} onPressMenuItem={onPressMenuItem}/>
        </Right>
      </Header>
    );
  }
}

export default connect()(MainHeader);