import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0a0000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      marginTop: 10,
      backgroundColor: '#f078e2',
      color: '#fff',
      marginBottom: 20,
      width: '80%',
    },
    list: {
      marginTop: 32,
      width: '80%',
      borderRadius: 7,
      borderColor: '#0a0000',
    },
    itemList: {
      padding: 24,
      borderRadius: 7,
      backgroundColor: '#f078e2',
      marginBottom: 16,
    },
    itemText: {
      color: '#fff',
    },
    inputContainer: {
      marginTop: 20,
      width: '80%', 
    },
    input:{
      height: 40, 
      borderColor: '#f078e2',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8, 
      color: '#f078e2', 
      marginTop: 50,
    }
  });