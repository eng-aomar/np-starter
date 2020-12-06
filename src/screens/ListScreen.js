import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
   const firends =[
       {name: 'Firend #1'},
       {name: 'Firend #2'},
       {name: 'Firend #3'},
       {name: 'Firend #4'},
       {name: 'Firend #5'},
       {name: 'Firend #6'},
       {name: 'Firend #7'},
       {name: 'Firend #8'},
       {name: 'Firend #9'},
       {name: 'Firend #10'}    
   ];
     return (
        <FlatList
             data={firends}
             keyExtractor ={(friend) =>friend.name}
             renderItem={({item}) => {
                 // element === {item :{name: "Firend #1"}, index:0}
             return <Text>{item.name}</Text>;
                }}
        />
     );
    
};

const style = StyleSheet.create({
    styleText :{
        fontSize:30
    }
});
export default ListScreen;