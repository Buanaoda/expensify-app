import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA8nT_rNkYLf0Mo01d0olD3-4whXeDxKuk",
  authDomain: "expensify-9fc31.firebaseapp.com",
  databaseURL: "https://expensify-9fc31-default-rtdb.firebaseio.com",
  projectId: "expensify-9fc31",
  storageBucket: "expensify-9fc31.appspot.com",
  messagingSenderId: "490247712055",
  appId: "1:490247712055:web:23f545c424c3b589bfbeb2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Tomato sauce',
//   note:'Elephant, very good.',
//   amount: 2.69,
//   createdAt: new Date()
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'One',
//   age: 27,
//   stressLevel: 7.753,
//   job: {
//     title: 'Software developer',
//     company: 'Jesuits'
//   },
//   location: {
//     city: 'Juiz de Fora',
//     region: 'Minas Gerais',
//     houseNumber: '20',
//     saintJosephPrayForUs: true
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });


// database.ref().update({
//   stressLevel: 9.897,
//   'job/company': 'Amazon',
//    'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data was updated');
// }).catch(() => {
//   console.log('Updating data failed', e);
// });

// database.ref('location/region')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch(() => {
//     console.log('Removing data failed', e);
//   });
 
export { firebase, database as default };