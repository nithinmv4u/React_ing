import { Firebase } from "./config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
                 Firebase.firestore().collection('products').get().then((snapshot) => {
                  snapshot.forEach((obj)=>{
                    console.log(obj.data());
                  })
         }).catch((err) => {
          
         })
      }}>Get Data</button>
      <button onClick={()=>{
                 Firebase.firestore().collection('products').add({
                  name:'MI',
                  price:1200
                 })
      }}>Set Data</button>
      <button onClick={()=>{
                 Firebase.firestore().collection('products').doc('Yx8qUCaZIyBdcsQY4VT0').delete().then(()=>{
                  console.log("done: ");
                 })
      }}>Delete Data</button>
      <button onClick={()=>{
                 Firebase.firestore().collection('products').doc('QjpLR8WHzWFRLRcaguaC').set({
                  name:'updated'
                 })
      }}>Update Data</button>
      <div style={{marginTop:'40px'}}>
        <button onClick={()=>{
          const auth = getAuth(Firebase);
          createUserWithEmailAndPassword(auth, 'nithin@nithin.com', '123456')
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        }}>Sign Up</button>
      </div>

    </div>
  );
}

export default App;
