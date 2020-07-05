

import React,{ Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import data from'./component/data.json'

class App extends Component {
	render() {
		return (
      <View style={styles.container}>
        <ScrollView>
        {
          data.map((item) => {
            return (
              <View style={styles.itemStyle}>
                <Image
                  style={styles.logo}
                  source={{
                  uri:item.image,}}/>
                  <View style={styles.textStyle}>
                    <Text >{item.name}</Text>
                    <Image 
                    style={styles.likeStyle}
                    source={require('./like.png')}>
                    </Image>
                    <Text style={{flex:1}} >{item.likes}</Text>      
                  </View>
                  <View style={{flexDirection:'row',backgroundColor:'#dfe6e9'}}>
                    <Text style={{fontSize: 12}}>{item.location}</Text>
                  </View>
              </View>
            );
          })
        } 
        </ScrollView>
      </View>
    );
  }
}  


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    flex: 1
  },
  itemStyle:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/2.5,
    resizeMode: "cover",
    justifyContent:'flex-start',
    padding:10,

  },
  textStyle:{
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor:'#dfe5e6'
  },
  likeStyle:{
    width:20,
    height:20,
    marginLeft:215
  }
});

export default App;