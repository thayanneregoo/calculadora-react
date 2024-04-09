import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button'
import Row from './components/Button'
import calculator, {initalState} from './util/calculator';
import { Component } from 'react';


export default class App extends Component{
state= initalState;

HandleTap =(type, value) =>{
  this.setState((state) => calculator(type, value, state));
};
render(){
  return(
    <View style={style.container}>
      <SafeAreaView>
        <Text style={styles.value}>
        {parseFloat(this.state.currentValue).toLocaleString()}
        </Text>
      </SafeAreaView>
    </View>
  )
}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
