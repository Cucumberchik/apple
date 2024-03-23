import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import type { Firestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;