//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';

// create a component
class Search extends Component {
  render() {
    return (
      <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="From" />
                        </Item>
                        <Item last>
                            <Input placeholder="To" />
                        </Item>
                        <Button style={{alignSelf:'flex-end'}}>
                          <Text>Search</Text>
                        </Button>
                    </Form>
                    
                    <Text></Text>
                    
                    <Form>
                      <Item>
                        <Input placeholder="Search bus by Area"/>
                      </Item>
                    </Form>
                    
                    <Text></Text>
                    
                    <Form>
                      <Item>
                        <Input placeholder="Search bus by bus no"/>
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
