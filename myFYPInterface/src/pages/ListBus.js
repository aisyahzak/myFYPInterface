//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button,ListItem,List, Grid,Col,Row } from 'native-base';

// create a component
class ListBus extends Component {
  render() {
    return (
      
      <Container>
        
        
        <Grid>
          <Row style={{height:50}}>

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

          <Row style={{height:50}}>
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
    height:50
  }
});

//make this component available to the app
export default ListBus;
