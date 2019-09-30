import React from 'react';
import {View, Text} from 'react-native';
import {db} from './dbConfig';
import * as firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {
  componentWillMount = () => {
    this.getInfo();
  };
  login = () => {
    db.app
      .auth()
      .signInWithEmailAndPassword('wasif.jameel1@gmail.com', '123123')
      .then(async data => {
        console.log('data', data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  getInfo = () => {
    firebase
      .firestore()
      .collection('bookings')
      .get()
      .then(querySnapshot => {
        let detail = [];
        querySnapshot.docs.forEach(doc => {
          detail.push(doc.data());
        });
        console.log('detail', detail);
      });
  };

  render = () => {
    return (
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello</Text>
      </View>
    );
  };
}
export default App;
