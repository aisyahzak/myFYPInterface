//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button,ListItem,List, Grid,Col,Row,Picker } from 'native-base';

// create a component
class ListByArea extends Component {
  static navigationOptions = {
    title: 'List Bus Area',
  };
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value) {
        this.setState({
            selected1 : value
        });
    }
    onValueChange1 (value) {
        this.setState({
            selected2 : value
        });
    }
    onValueChange2 (value) {
        this.setState({
            selected3 : value
        });
    }
  render() {
    return (
      
      <Container>
        
        <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Item label="Choose State" value="null" />
                        <Item label="Perak" value="key1" />
                        <Item label="Negeri Sembilan" value="key2" />
                        <Item label="Selangor" value="key3" />
                   </Picker>
        <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange1.bind(this)}>
                        <Item label="Choose District" value="null" />
                        <Item label="Tmn Melawati" value="key1" />
                        <Item label="Ampang" value="key2" />
                        <Item label="Cheras" value="key3" />
                   </Picker>
        <Picker
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange2.bind(this)}>
                        <Item label="Choose Area" value="null" />
                        <Item label="Wangsa Maju" value="key1" />
                        <Item label="Keramat" value="key2" />
                        <Item label="Setiawangsa" value="key3" />
                   </Picker>
        <Grid>
          <Row style={{height:100}}>

            <Col style={styles.col}>
              <Row style={styles.col}><Text>T305</Text></Row>
            </Col>
            <Col style={styles.col}>
              <Row>
              <Text>LRT SRI RAMPAI</Text>
              </Row>
              <Row>
              <Text>ETA 25 MIN</Text>
              </Row>
              <Row>
              <Text>CURRENT: AU1</Text>
              </Row>
            </Col>

          </Row>

          <Row style={{height:100}}>
            <Col>
              <Row><Text>T305</Text></Row>
            </Col>
            <Col style={styles.col}>
              <Row>
              <Text>LRT SRI RAMPAI</Text>
              </Row>
              <Row>
              <Text>ETA 25 MIN</Text>
              </Row>
              <Row>
              <Text>CURRENT: AU1</Text>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row><Text>T305</Text></Row>
            </Col>
            <Col style={styles.col}>
              <Row>
              <Text>LRT SRI RAMPAI</Text>
              </Row>
              <Row>
              <Text>ETA 25 MIN</Text>
              </Row>
              <Row>
              <Text>CURRENT: AU1</Text>
              </Row>
            </Col>
          </Row>
          
        </Grid>
        
        
      </Container>
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  col:{
    height:75
  }
});

//make this component available to the app
export default ListByArea;
