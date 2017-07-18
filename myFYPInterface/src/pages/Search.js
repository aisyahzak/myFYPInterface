//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';

// create a component
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      area:'',
      no:''
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
                        <Input placeholder="Search bus by No" onChangeText={(area)=>this.setState({area})}/>
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
