# React Native Waiting Wheel

If you need make you user wait som time we cam help you

A progress wheel to whating for some thing in your application

- Checkout the [example/](https://github.com/victorcosta/react-native-waiting-wheel/tree/master/examples) folder for use example.

## Features

- Good fit for loading situations
- Good fit for waiting timers like sms
- Smooth animations
- Highly customizable
- Very lightweight

## Installation

Open a Terminal in the project root and run:

```sh
npm install react-native-waiting-wheel
```

OR

```sh
yarn add react-native-waiting-wheel
```

## Quick Start

```js
import React from "react";
import { View, Text } from "react-native";
import ProgressWheel from "react-native-waiting-wheel";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginBottom: 20 }}>Default with 3000ms</Text>
        <ProgressWheel duration={10000} size={50} />
      </View>
    </View>
  );
};
export default App;
```

### Props

##### `size` - integer (`Default - 35`)

Sets the size of the wheel.

##### `background` - string (`Default - #F3F3F3`)

Sets the background color of the wheel.

##### `progressColor` - string (`Default - #BBBBBB`)

Sets the first color of wheel

##### `duration` - integer (`Default - 3000`)

Sets the time of animation.
