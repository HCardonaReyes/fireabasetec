//inicializar Firebase
import { initializeApp } from 'firebase/app';
//inicializar Firestone
import { getFirestore, doc, getDocs, collection,  addDoc } from 'firebase/firestore/lite';
//inicializar RemoteConfig
import {activate, fetchConfig, getRemoteConfig, getValue} from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBl4slNHotjyuiS4uLNf7rPOj3uMDVCZwI",
    authDomain: "tecnmcurso.firebaseapp.com",
    projectId: "tecnmcurso",
    storageBucket: "tecnmcurso.appspot.com",
    messagingSenderId: "359033810449",
    appId: "1:359033810449:web:647e6dbdd8d4817c084bb0",
    measurementId: "G-05J0RCD13P"
  });

  //configurar remoteconfig
  const remoteConfig = getRemoteConfig(firebaseApp);
  remoteConfig.settings.minimumFetchIntervalMillis = 1000;  

  fetchAndActivate(remoteConfig)
  .then(() => {
    //
    console.log("Activado");
    let parametro = getValue(remoteConfig, "parametro1");
    console.log(parametro);
    document.getElementById("parametro1").innerHTML = parametro.asString();

    let parametro2 = getValue(remoteConfig, "parametro2");
    console.log(parametro2);
    document.getElementById("parametro2").innerHTML = parametro2.asString();

    let parametro3 = getValue(remoteConfig, "parametro3");
    console.log(parametro3);
    document.getElementById("parametro3").innerHTML = parametro3.asString();

  })
  .catch((err) => {
    // ...
  });

  //configurar Firestone
 const db = getFirestore(firebaseApp);  

//Agregar documento
try {
    const docRef = await addDoc(collection(db, "Usuarios"), {
      first: "Hector",
      last: "Cardona",
      born: 1982
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


// leer datos
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});  