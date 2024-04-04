import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
// import EncryptedStorage from 'react-native-encrypted-storage/lib/typescript/EncryptedStorage';

Reactotron.configure({
    name:"Demo",
    host:'192.168.0.20'
})
// .setAsyncStorageHandler(EncryptedStorage)
.useReactNative()
.connect()
const oldeConsoleLog = console.log;
console.log = (...args) => {
  oldeConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default Reactotron;