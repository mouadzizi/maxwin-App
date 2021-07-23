import { auth, db, st } from "./Firebase";
import firebase from 'firebase'

export const signIn = async (email, password) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  return user.user;
};
export const createUser = async (newUser) => {
  const userCrendtial = await auth.createUserWithEmailAndPassword(
    newUser.email.trim(),
    newUser.password.trim()
  );
  if (userCrendtial.user) {
    addNewUser(userCrendtial.user, newUser);
  }
  return userCrendtial.user;
};
export const signOut = async () => {
  return auth.signOut();
};
export const anonymouslySignIn = async () => {
  const user = await auth.signInAnonymously();
  return user.user;
};

export const addProduct = async (product) => {
  const docRef = await db.collection("products").add({
    ...product,
    createdDate: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return docRef;
};

export const updateProduct = async (docID, product) => {
  await db.collection("products").doc(docID).set(product);
};

export const uploadImages = async (images, docID, userID) => {
  let imagesLinks = [];
  for (const image of images) {
    const response = await fetch(image.uri);
    const blob = await response.blob();
    var ref = st
      .ref()
      .child("images")
      .child(userID)
      .child(docID)
      .child(image.name);
    const snapShot = await ref.put(blob);
    const link = await snapShot.ref.getDownloadURL();
    imagesLinks.push(link);
  }
  return Promise.all(imagesLinks);
};

export const getItemsByCollection = async (collection, limit) => {
  let items = [];
  const snap = await db
    .collection("products")
    .where("category", "array-contains", collection)
    .orderBy("createdDate", "desc")
    .limit(limit)
    .get();
  snap.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

export const getItemsByCategory = async (category, limit) => {
  let items = [];
  const snap = await db
    .collection("products")
    .where("category", "array-contains", category)
    .orderBy("createdDate", "desc")
    .limit(limit)
    .get();
  snap.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

const addNewUser = async (FBuser, user) => {
  await db.collection("users").doc(FBuser.uid).set(user);
};
export const addToFavorite = async (userId, post) => {
  await db.collection("users").doc(userId).collection("favorite").doc(post.id).set({
    title: post.title,
    price: post.price,
    category: post.category[1],
    image: post.images[0],
  });
};

export const removeFavorite = async (postId)=>{
  const {uid}=auth.currentUser
  await db.collection('users').doc(uid).collection('favorite').doc(postId).delete()
}

