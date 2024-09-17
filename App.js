import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { api } from './src/services/api'; 
import { styles } from './src/styles/styles'; 

function App() {
  const [dados, setDados] = useState([]);
  const [inputValue, setInputValue] = useState(''); 

  async function searchDados() {
    const response = await api.get(`${inputValue}` + '/repos');
    console.log(response);
    setDados(response.data);
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Quem quer achar?"
          placeholderTextColor= "#fff"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Achar Indivíduo" onPress={searchDados} />
      </View>

      <FlatList
        style={styles.list}
        data={dados}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.itemList}>
            <Text style={styles.itemText}>ID: {item.id}</Text>
            <Text style={styles.itemText}>Node ID: {item.node_id}</Text>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Full Name: {item.full_name}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;


