//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

// create a component
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area:'',
      no:'',
      list:[]
    }
  }

  static navigationOptions = {
    title: 'Search Bus',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
                <Content>
                    <Form>
                      <Item last>
                        {/*<Input placeholder="Search bus by No" onChangeText={(area)=>this.setState({area})}/>*/}
                        <Select
                          width={250}
                          ref="SELECT1"
                          optionListRef={this._getOptionList.bind(this)}
                          defaultValue="Select a Province in Canada ..."
                          onSelect={this._canada.bind(this)}>
                          <Option>Alberta</Option>
                          <Option>British Columbia</Option>
                          <Option>Manitoba</Option>
                          <Option>New Brunswick</Option>
                          <Option>Newfoundland and Labrador</Option>
                          <Option>Northwest Territories</Option>
                          <Option>Nova Scotia</Option>
                          <Option>Nunavut</Option>
                          <Option>Ontario</Option>
                          <Option>Prince Edward Island</Option>
                          <Option>Quebec</Option>
                          <Option>Saskatchewan</Option>
                          <Option>Yukon</Option>
                        </Select>

          <Text>Selected provicne of Canada: {this.state.canada}</Text>
          
          <OptionList ref="OPTIONLIST"/>
                        <Text>{this.state.area}</Text>
                        <Button style={{alignSelf:'flex-end',marginTop:10}} onPress={()=>navigate('ListBus',{area:this.state.area})}>
                          <Text>Search</Text>
                        </Button>
                      </Item>
                    </Form>
       
                    
                </Content>
            </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

//make this component available to the app
export default Search;
