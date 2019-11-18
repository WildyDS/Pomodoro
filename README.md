# Pomodoro App

### React-Native

### Prepare to run

Install [react-native-cli](https://facebook.github.io/react-native/docs/getting-started) and all dependencies.

### Run App

#### iOS
```
cd src
yarn
cd ios/
pod install
cd ..
yarn start
react-native run-ios
```

You may specify simulator if you want
```bash
react-native run-ios --simulator='iPhone 8'
```

#### Android
First make sure you have android emulator running. Then 
```bash
cd src
yarn
yarn start
react-native run-android
```

If everything's good you will see the app running:
![alt text][short_break]

[short_break]: images/short_break.png "App with short break started"
