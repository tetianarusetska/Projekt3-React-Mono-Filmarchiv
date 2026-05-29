import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyADxi0Zp6pHMJxhyW08hZFBoHq4Zi2MYIM",
  authDomain: "fotoarchiv--mono.firebaseapp.com",
  projectId: "fotoarchiv--mono",
  appId: "1:712914217790:web:45e9614178b6088217da6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;