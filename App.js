import React from 'react';
import {YaMap} from 'react-native-yamap';

console.log(YaMap);
YaMap.init('dfd8cef8-a61d-4204-8169-27ae99ffde42');

export default class App extends React.Component {
  render() {
    return (
      <YaMap
        style={{
          flex: 1,
        }}
      />
    );
  }
}
