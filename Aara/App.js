import {View,StyleSheet,Text, ScrollView} from 'react-native';
import GradientBackground from './src/Components/Card';
import Image1 from './src/Components/Image';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Divider from './src/Components/Divider';
import Newlinear from './src/Components/Newlinear';
import ModalTitle from './src/Components/ModalTitle';
import Graph from './src/Components/Graph';


const App=()=>{
  return(
   <ScrollView style={styles.view}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <View style={{margin:10}}>
      <AntDesign  name='arrowleft' color="white" size={25}  />
      </View>
      <View>
        <Text style={styles.text}>Xcellence PVT LTD Company,Lucknow</Text>
      </View>
    </View>
    <Image1/>
    <GradientBackground/>
    <Divider/>
    <Newlinear/>
    <ModalTitle/>
    <Graph/>
     
   </ScrollView>
  )
}

export default App;

const styles=StyleSheet.create({
  view:{
   flex:1,
   backgroundColor:'#535454'
  },
  text:{
    color:'#ffff',
    marginLeft:30
  }
})