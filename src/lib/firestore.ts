import { getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "./firebase";

export const firestore = getFirestore(firebaseApp);
