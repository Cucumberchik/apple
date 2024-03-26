import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import type { Firestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

type TypeFirebase = {
  apiKey: string,
  authDomain:string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string
}

const firebaseConfig: TypeFirebase = {
  apiKey: "AIzaSyAoMe9ju9NQ8mq-hhm7zN-2KoZQABBnYyE",
  authDomain: "apple-7ee76.firebaseapp.com",
  projectId: "apple-7ee76",
  storageBucket: "apple-7ee76.appspot.com",
  messagingSenderId: "107253775490",
  appId: "1:107253775490:web:becc519b4e9418280e089b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;