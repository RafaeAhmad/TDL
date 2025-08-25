import { safelyDecodeURIComponent } from "expo-router/build/fork/getStateFromPath-forks";
import { FlatList, Text,StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from '@expo/vector-icons';
// import {useFonts} from 'expo-font'
import { Card, CardContent } from "../components/card";;


export default function Index() {
  
//   const [fontsLoaded] = useFonts({
//   'myCustomFont':require('../assets/fonts/SpaceMono-Regular.ttf')
// })

  const toDoData = [ //create an array of todos data 
    {
      id: 1,
      title: "Todo 1",
      isDone: false
    },
     {
      id: 2,
      title: "Todo 2",
      isDone: false
    },
     {
      id: 3,
      title: "Todo 3",
      isDone: false
    },
     {
      id: 4,
      title: "Todo 4",
      isDone: false
    },
     {
      id: 5,
      title: "Todo 5",
      isDone: false
    },
     {
      id: 6,
      title: "Todo 6",
      isDone: false
    },
     {
      id: 7,
      title: "Todo Test",
      isDone: false  
    },
  ]
  return (
    <SafeAreaView
      style={styles.container}> 
          <Ionicons name = "menu" size={24} color="black" />   
      <FlatList data = {toDoData} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
       <Card style={{ width: 250 }}>
        <CardContent>
          <Text>{item.title}</Text>
        </CardContent>
      </Card>
      )} 
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({ //this will be used in our safeAreaView, it will be our layout
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
  }
});

const styleBox = StyleSheet.create({ 
  container: {
    backgroundColor: '#f800f8',  // Light gray background color
  }
});





                            //quick recap//
// SafeAreaView is used to render everything inside a safe area.
// We have an object called toDoData, this object has id title and the isDone variables
// to render Iterator, we use key item pairs, we can replace the word item with anything we want, it is just a variable name
// so KeyExtractor is used to generate a unique key for each item in the list, which is important for performance and to avoid rendering issues.
// renderItem is a function that renders each item you give Iterator. 
// lastly we have view which will display the title of each todoData item.
//in react when we use {} to write javascript code inside of it. In this case we have two {{}} for font family, because thats a javascript object inside javascript code, hence why ite.title only has one {}, TDLR you have to use {} to let react know we're writing js code and for js objects
// <Text style = {{fontFamily:'myCustomFont'}} > {item.title}</Text>
