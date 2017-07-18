//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button,ListItem,List, Grid,Col,Row } from 'native-base';



// create a component
class ListBus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows:<Text></Text>
    }
  }
  componentWillMount() {
    var rows1 = [];
    var {state,navigate} = this.props.navigation
    console.log('http://54.255.192.154:8000/searchBus/'+state.params.area);
      fetch('http://54.255.192.154:8000/searchBus/'+state.params.area, {
         method: 'GET'
      })

      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         {responseJson.map(function(object, i){
           console.log(i);
          rows1.push(
            <Row style={{height:100}} key={i}>
            <Col style={styles.col}>
              <Row style={styles.col}>
                <Button light onPress={()=>navigate('Info',{bus_no:object.bus_no})}><Text>{object.bus_no}</Text></Button>
              </Row>
            </Col>
            <Col style={styles.col}>
              <Row>
              <Text>Start: {object.RouteStart}</Text>
              </Row>
              <Row>
              <Text>End: {object.RouteEnd}</Text>
              </Row>
              <Row>
              <Text>ETA {object.est} MIN</Text>
              </Row>
              <Row>
              <Text>CURRENT: {object.bus_location}</Text>
              </Row>
            </Col>
          </Row>
          )
        })
        this.setState({rows:rows1})
      }
      })

      .catch((error) => {
         console.error(error);
      });
  }
  static navigationOptions = {
    title: 'List Bus',
  };
  
  render() {

    return (
      <Container>

        <Grid>
        {this.state.rows}
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
export default ListBus;
