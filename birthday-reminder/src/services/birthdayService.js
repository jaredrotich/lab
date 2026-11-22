import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db, isFirebaseConfigured } from "./firebase";

function getBirthdayCollection(userId) {
  if (!isFirebaseConfigured || !db) {
    throw new Error("Firebase is not configured.");
  }

  if (!userId) {
    throw new Error("You must be logged in.");
  }

  return collection(db, "users", userId, "birthdays");
}

export async function addBirthday(userId, birthdayData) {
  const birthdaysRef = getBirthdayCollection(userId);

  const docRef = await addDoc(birthdaysRef, {
    ...birthdayData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getBirthdays(userId) {
  const birthdaysRef = getBirthdayCollection(userId);

  const birthdayQuery = query(
    birthdaysRef,
    orderBy("name")
  );

  const snapshot = await getDocs(birthdayQuery);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function updateBirthday(
  userId,
  birthdayId,
  birthdayData
) {
  const birthdaysRef = getBirthdayCollection(userId);

  const birthdayRef = doc(
    birthdaysRef,
    birthdayId
  );

  await updateDoc(birthdayRef, {
    ...birthdayData,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteBirthday(userId, birthdayId) {
  const birthdaysRef = getBirthdayCollection(userId);

  const birthdayRef = doc(
    birthdaysRef,
    birthdayId
  );

  await deleteDoc(birthdayRef);
}