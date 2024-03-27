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
  apiKey: "YOURTOKEN",
  authDomain: "YOURTOKEN",
  projectId: "YOURTOKEN",
  storageBucket: "YOURTOKEN",
  messagingSenderId: "YOURTOKEN",
  appId: "YOURTOKEN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
