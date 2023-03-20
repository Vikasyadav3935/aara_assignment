import { View, Text, Dimensions } from 'react-native'
import React ,{useEffect,useState}from 'react';
import { LineChart } from 'react-native-chart-kit';

const Graph = () => {
 
    const [data,setData]=useState();
    const [dots,setDots]=useState([]);
    const [created,setCreated]=useState([]);

  
    const url = 'http://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?user_profile=500';
    const token = 'c3fb04334a7c647338cdfd500e2997bb9898cf52';
   
    useEffect(() => {
         
fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setData(data)
     const dots=data.moodalytics.map(el=>el.emoji_point);
      setDots(dots);
      const creat=data.moodalytics.map(el=>el.created_at)
      setCreated(creat)
    console.log(data,'29')

  })
  .catch(error => console.error('Fetch Error:', error));

    
    
    }, [])

 const arr=[1,2,3,4,5,6]
    
 
console.log(dots,'39')
  return (
    <View style={{height:300}}>
   
     { data.moodalytics.length>0 && <LineChart
    data={{
      labels: created,
      datasets: [
        {
          data:dots
          
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#535454",
      backgroundGradientFrom: "#535454",
      backgroundGradientTo: "#535454",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        
      },
     

      propsForDots: {
        r: "4",
        strokeWidth: "2",
        stroke: "green"
      },
     
    }}
    // bezier
    verticalLabelRotation={-35}
    style={{
      marginVertical: 8,
      borderRadius: 16,
      marginLeft:-20
    }}
  />
}
    </View>
  )
}

export default Graph