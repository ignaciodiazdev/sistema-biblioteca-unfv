import { initializeApp } from "firebase/app";
import { getStorage, ref,uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOKoP8-O0G1HVH9IQX9o4hu4Yl4zU7CDo",
  authDomain: "react-firebase-images-c0c54.firebaseapp.com",
  projectId: "react-firebase-images-c0c54",
  storageBucket: "react-firebase-images-c0c54.appspot.com",
  messagingSenderId: "691091437608",
  appId: "1:691091437608:web:3350ff62df5e9b43681d1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file, nameDefault) {
  const storageRef = ref(storage, 'usuarios/perfil-foto/' + nameDefault);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url
}