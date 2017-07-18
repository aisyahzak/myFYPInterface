//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button,Grid,Col } from 'native-base';


// create a component
class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
             rows:<Text></Text>
        }
    }
    
    static navigationOptions = {
    title: 'Info',
  };
  componentWillMount() {
    var rows1 = [];
    var {state,navigate} = this.props.navigation
    console.log('http://54.255.192.154:8000/information/'+state.params.bus_no);
      fetch('http://54.255.192.154:8000/information/'+state.params.bus_no, {
         method: 'GET'
      })

      .then((response) => response.json())
      .then((responseJson) => {
         console.log('responseJsonkot',responseJson);
         {responseJson.res.map(function(object, i){
           console.log(i);
          rows1.push(<View key={i}>
            <Text>{object.current_Stop}</Text>
            <Text>           |</Text>
            <Text>           |  {object.bus_time} minutes</Text>
            <Text>           |</Text>
            <Text>          V</Text>
            </View>
          )
        })
        this.setState({rows:rows1})
      }
      })

      .catch((error) => {
         console.error(error);
      });
  }
    render() {
        const { navigate,state } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col>
                            <Text>{state.bus_no}</Text>
                        </Col>
                        <Col>
                            {this.state.rows}
                        </Col>
                    </Grid>
                </Content>
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
});

//make this component available to the app
export default Info;
