import React,{useState} from 'react';
import {StyleSheet,Text,View,Button, TextInput,ScrollView, FlatList,TouchableOpacity,} from 'react-native';

import Header from './components/header';

export default function App(){
    const[name,setName]=useState('shaun');
    const[person,setPerson]=useState({name:'mario',age:40});
    const[age,setAge]=useState(30)
    const[todos,settodos]=useState([
        {text:'buy coffe', key:1},
        {text:'create an app',key:2},
        {text:'play on the switch',key:3}

    ]),
    const[people,setPeople]=([
        {name:'mario',id:1},
        {name:'maria',id:2},
        {name:'mariu',id:3 },
        {name:'marie',id:4},
        {name:'marii',id:5},


    ]);
    const clickHandler=()=>{
        setName('Chun-li');
        setPerson({name:'lui-gi',age:45});
    },
    const pressHandler=(id)=>{
      console.log(id);
      setPeople((PrevPeople)=>{
            return PrevPeople.filter(person=>person.id!=id)
      });
    }
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                    data={todos}
                    renderItem={({item})=>(
                        <Text>{item.text}</Text>
                    )}
                    />
                    </View>
                </View>
            </View>
        /*
        <View style={styles.container}>
            <FlatList
              numColumns={2}
              keyExtractor={(item)=>item.id}
              data={people}
              renderItem={({ item})=>(
                  <TouchableOpacity onPress={()=>pressHandler(item.id)}>
                   <Text style={styles.item}>{item.name}</Text>
                  </TouchableOpacity>
              )
            }
            />
            </View>
            */
        /*
     <View style={styles.container}>
         <Text>My name is {name}</Text>
         <Text>My name is :</Text>
         <TextInput multiline
          style={styles.input}
                     placeholder='Eg-John doe'
                     onChangeText={(val)=>setName(val)}/>
         <Text>My age is :</Text>
         <TextInput
          keyboardType="numeric"
           style={styles.input}
                     placeholder='Eg-20'
                     onChangeText={(val)=>setAge(val)}/> 
         <Text>My name is {person.name} and age is {person.age}</Text>
         <View style={styles.buttonContainer}>
             <Button title="click me" onPress={clickHandler}/>
         <ScrollView>
            {
                people.map((item)=>
                {
                    return
                    (
                        <View key={item.key}>
                            <text style={styles.item}>{item.name}</text>
                        </View>
                    )
                })
            }
         </ScrollView>
        </View>
         
     </View>
*/
    );
}

const styles=StyleSheet.create({
   container: {
       flex: 1, 
       backgroundColor:'#ffff',
       alignItems:'center',
       justifyContent:'center',
   },
   buttonContainer:{
       marginTop:20
   },
   input:{
       borderWidth: 1,
       borderColor: '#777',
       padding:8,
       margin:10,
       width:200,

   },
   item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24,

   },
   content:{
      padding:40
   }
   list:{
         marginTop:20
   }
});