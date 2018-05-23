import * as firebase from 'firebase';
import config from '../constants';

firebase.initializeApp(config.firebaseConfig);

const provider = new firebase.auth.FacebookAuthProvider();

export function signIn (token) {
  const credential = provider.credential(token);
  credential.accessToken = credential.idToken;
  return firebase.auth().signInAndRetrieveDataWithCredential(credential);
}
