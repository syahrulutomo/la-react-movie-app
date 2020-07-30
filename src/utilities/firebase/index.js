import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBhYhP9crKXH-KgMUL-DwEBHfGonY6r5Ng',
  authDomain: 'meetup-clone-c61b7.firebaseapp.com',
  databaseURL: 'https://meetup-clone-c61b7.firebaseio.com',
  projectId: 'meetup-clone-c61b7',
  storageBucket: 'gs://meetup-clone-c61b7.appspot.com/',
  messagingSenderId: '204365400805',
});

export const getImage = async (path, fileName) => {
  // Points to the root reference
  const storageRef = app.storage().ref();
  // Points to 'images'
  const imagesRef = storageRef.child(path);
  // Points to 'images/space.jpg'
  // Note that you can use variables to create child values
  const spaceRef = imagesRef.child(fileName);

  const url = await spaceRef.getDownloadURL();
  return url;
};
