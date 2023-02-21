import { signOut } from 'firebase/auth';
import {
  docGetProfile,
  saveProfile,
  updateName,
  updateprofileFields,
} from '../lib/index.js';
import { auth } from '../lib/model/firebase';

export const profileLogic = () => {
  const profileButtonLogout = document.getElementById('profile-button-logout');
  const profileForm = document.getElementById('profile-form');
  const profileProfession = document.getElementById('profile-profession');
  const profileLanguages = document.getElementById('profile-languages');
  const profileNameUser = document.getElementById('profile-nameUser');
  const profileNotNow = document.getElementById('profileNotNow');

  // firebase: cerrando sesion con un evento click
  profileButtonLogout.addEventListener('click', async () => {
    console.log('logout');
    await signOut(auth);
  });

  //para cuando se haga click en save
  profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const docFirebaseId = auth.currentUser.uid;
    console.log(docFirebaseId);

    const docSnap = await docGetProfile(docFirebaseId);
    let newNameUser = auth.currentUser.displayName;

    //que no hayan espacios vacíos ni en blanco
    if (profileNameUser.value.trim().length !== 0) {
      newNameUser = profileNameUser.value;
      updateName(auth.currentUser, newNameUser);
    }

    //que se actualice el mismo documento (en caso de que ya exista)
    if (docSnap.exists()) {
      console.log('actualizando');
      if (profileNameUser.value.trim().length !== 0) {
        updateprofileFields(docFirebaseId, { nameUser: newNameUser });
      }
      if (profileProfession.value.trim().length !== 0) {
        updateprofileFields(docFirebaseId, {
          profession: profileProfession.value,
        });
      }
      if (profileLanguages.value.trim().length !== 0) {
        updateprofileFields(docFirebaseId, {
          languages: profileLanguages.value,
        });
      }
      // se crea un perfil en caso de que no exista
    } else {
      console.log('entro');
      saveProfile(profileProfession.value, profileLanguages.value, newNameUser);
    }
    profileForm.reset();
  });

  //redirigiendo a home
  profileNotNow.addEventListener('click', () => {
    window.location.hash = '#/home';
  });
};
