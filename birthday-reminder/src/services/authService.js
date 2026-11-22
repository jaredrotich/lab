import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth, isFirebaseConfigured } from "./firebase";

function requireAuth() {
  if (!isFirebaseConfigured || !auth) {
    throw new Error(
      "Firebase is not configured. Check your .env file."
    );
  }
}

export async function registerUser(email, password) {
  requireAuth();

  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return result.user;
}

export async function loginUser(email, password) {
  requireAuth();

  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return result.user;
}

export async function loginWithGoogle() {
  requireAuth();

  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);

  return result.user;
}

export async function logoutUser() {
  requireAuth();

  await signOut(auth);
}

export function observeAuthState(callback) {
  requireAuth();

  return onAuthStateChanged(auth, callback);
}

export async function resetPassword(email) {
  requireAuth();

  await sendPasswordResetEmail(auth, email);
}