import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyAtU8OINHTdoUvxP64Pk3tAPXqpngjjfqo',
    authDomain: 'milo-chat-61f8b.firebaseapp.com',
    projectId: 'milo-chat-61f8b',
    storageBucket: 'milo-chat-61f8b.appspot.com',
    messagingSenderId: '36929902340',
    appId: '1:36929902340:web:aa553c934a532a09d1e251',
  })
  .auth()
