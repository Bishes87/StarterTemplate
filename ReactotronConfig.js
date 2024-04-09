import Reactotron, { networking } from 'reactotron-react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

Reactotron.configure({
    name:"Demo",
    host:'192.168.0.41'
})
.setAsyncStorageHandler(EncryptedStorage)
.useReactNative()
.connect()
const oldConsoleLog = console.log;
console.log = (...args) => {
  oldConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default Reactotron;