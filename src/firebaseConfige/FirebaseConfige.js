import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA9aGRT1InUMLxGIl-LAxlTCwwgd3tnpg0",
  authDomain: "signup-464c9.firebaseapp.com",
  databaseURL: "https://signup-464c9-default-rtdb.firebaseio.com",
  projectId: "signup-464c9",
  storageBucket: "signup-464c9.appspot.com",
  messagingSenderId: "281913219820",
  appId: "1:281913219820:web:d7e806f575bbccbadee3c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export const fbsignUp = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fbSignIn = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        resolve(response.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/* This function is used for the user checking when user is logedIn 
then go to next page if user not available then go to signIn page. */

export const fbAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject("User Not found");
      }
    });
  });
};

export const fbPutDataRTDB = (key, data,id) => {
  return new Promise((resolve, reject) => {
    const dataId = push(ref(db, `${key}/`)).key;

    set(ref(db, `${key}/${id ?? dataId}`), data)
      .then(() => {
        resolve(`Data SuccessFully Added`);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const fbGetDataRTDB = (key, id) => {
  return new Promise((resolve, reject) => {
    onValue(
      ref(db, `${key}/${id ?? ""}`),
      (data) => {
        if (data.exists()) {
          const dataa = Object.values(data.val())
          resolve(data);
          console.log(data)
        } else {
          reject(`No data found`);
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const fbSignOut = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
