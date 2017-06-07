//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button,Grid,Col } from 'native-base';


// create a component
class Info extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Grid>
                        <Col>
                            <Text>T305</Text>
                        </Col>
                        <Col>
                            <Text>Sri Rampai</Text>
                            <Text>           |</Text>
                            <Text>           |  5 minutes</Text>
                            <Text>           |</Text>
                            <Text>          V</Text>
                            <Text>Wangsa Walk Mall</Text>  
                            <Text>           |</Text>
                            <Text>           |  3 minutes</Text>
                            <Text>           |</Text>
                            <Text>          V</Text> 
                            <Text>AU 5</Text>
                            <Text>           |</Text>
                            <Text>           |  4 minutes</Text>
                            <Text>           |</Text>
                            <Text>          V</Text>
                            <Text>Lembah Keramat</Text>                         
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
