import { auth, db, st } from "./Firebase";
import firebase from "firebase";

export const signIn = async (email, password) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  return user.user;
};
export const createUser = async (newUser) => {
  const userCrendtial = await auth.createUserWithEmailAndPassword(
    newUser.email.trim(),
    newUser.password.trim()
  );
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

export const addToFavorite = async (userId, post) => {
  await db
    .collection("users")
    .doc(userId)
    .collection("favorite")
    .doc(post.id)
    .set({
      title: post.title,
      price: post.price,
      category: post.category[1],
      image: post.images[0],
      product: post,
    });
};

export const removeFavorite = async (postId) => {
  const { uid } = auth.currentUser;
  await db
    .collection("users")
    .doc(uid)
    .collection("favorite")
    .doc(postId)
    .delete();
};

export const addToLikedProducts = async (userId, post) => {
  await db
    .collection("users")
    .doc(userId)
    .collection("liked")
    .doc(post.id)
    .set({
      id: post.id,
    });
};

export const removeLiked = async (postId) => {
  const { uid } = auth.currentUser;
  await db
    .collection("users")
    .doc(uid)
    .collection("liked")
    .doc(postId)
    .delete();
};

export const getUser = async () => {
  const doc = await db.collection("users").doc(auth.currentUser.uid).get();
  return Promise.resolve(doc.data());
};

export const filter = async (data) => {
  var itemsRef = db.collection("products").where("city", "==", data.city);
  
  // filter by category
  if (data.category !="*" ) {
    console.log('cat');
    itemsRef = itemsRef.where("category", "array-contains", data.category);
  }

  // filter by category brand
  if (data.brand != "*") {
    console.log('fuel');
    itemsRef = itemsRef.where("marqueVoiture", "==", data.brand);
  }

  // filter by fuel
  if (data.fuel != "*") {
    console.log('fuel');
    itemsRef = itemsRef.where("carburant", "==", data.fuel);
  }

  // filter by etat
  if (data.state != "*") {
    itemsRef = itemsRef.where("state", "==", data.state);
  }

  const querySnap = await itemsRef.get();
  const results = querySnap.docs
    .filter((doc) => doc.data().price >= data.minPrice)
    .filter((doc) => doc.data().price <= data.maxPrice)
    .map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  return await Promise.all(results);
};
export const updateUser = async (data) => {
  const { uid } = auth.currentUser;
  await db.collection("users").doc(uid).update({
    firstName: data.firstName,
    lastName: data.lastName,
    address: data.address,
    phone: data.phone,
    type: data.type,
  });
};
