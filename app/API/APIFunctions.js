import { auth, db, st } from "./Firebase";
import firebase from "firebase";
import * as Notifications from 'expo-notifications'

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();

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
    })
    .then(async () => {
      var like = await getLikes(post.id);
      await db
        .collection("products")
        .doc(post.id)
        .update({ likes: like + 1 });
    });
};
export const getLikes = async (productId) => {
  const prod = await db.collection("products").doc(productId).get();
  return prod.data()?.likes || 0;
};

export const removeLiked = async (postId) => {
  const { uid } = auth.currentUser;
  await db
    .collection("users")
    .doc(uid)
    .collection("liked")
    .doc(postId)
    .delete()
    .then(async () => {
      var like = await getLikes(postId);
      await db
        .collection("products")
        .doc(postId)
        .update({ likes: like - 1 });
    });
};

export const getUser = async () => {
  const doc = await db.collection("users").doc(auth.currentUser.uid).get();
  return Promise.resolve({
    uid: doc.id,
    ...doc.data(),
  });
};

export const filter = async (data,limit) => {
  var itemsRef = db.collection("products");
  if (data.city != "*") {
    itemsRef = db.collection("products").where("city", "==", data.city);
  }

  // filter by category
  if (data.category != "Toutes les catégories") {
    itemsRef = itemsRef.where("category", "array-contains", data.category);
  }

  // filter by category brand
  if (data.brand != "*") {
    itemsRef = itemsRef.where("marqueVoiture", "==", data.brand);
  }

  // filter by fuel
  if (data.fuel != "*") {
    itemsRef = itemsRef.where("carburant", "==", data.fuel);
  }
  
  // filter by etat
  if (data.state != "*") {
    itemsRef = itemsRef.where("state", "==", data.state);
  }

  const querySnap = await itemsRef
    .orderBy("createdDate", "desc")
    .limit(limit)
    .get();
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

export const getUserItems = async () => {
  const uid = auth.currentUser?.uid;
  const snapShot = await db
    .collection("products")
    .where("owner.uid", "==", uid)
    .get();
  const promises = snapShot.docs.map((doc) => {
    return {
      key: doc.id,
      ...doc.data(),
    };
  });

  return promises;
};

export const editProduct = async (product) => {
  await db
    .collection("products")
    .doc(product.key)
    .update({
      title: product.title,
      price: product.price,
      description: product.description || "",
      etat: product.etat,
    });
};
export const deleteProduct = async (prodID) => {
  await db.collection("products").doc(prodID).delete();
};

export const deleteProdImages = async (prodId) => {
  const uid = auth.currentUser?.uid;
  var listRef = await st.ref(`images/${uid}/${prodId}`).listAll();
  listRef.items.forEach((item) => item.delete());
};

export const fecthItems = async (snapShot) => {
  const promises = snapShot.docs.map((doc) => {
    return {
      key: doc.id,
      ...doc.data(),
    };
  });
  return Promise.all(promises);
};

export const registerForPushNotification = async ()=>{
  let token;
  
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
}

export const sendNotification = async (expoPushNotif,message)=>{
  var messages = []
  console.log(expoPushNotif);
  messages.push({
      "to":expoPushNotif,
      "title":"Vous avez reçu un message",
      "body": message,
      "android": {
          "sound": true
        },
  })
  await Promise.all(messages)

  await fetch('https://exp.host/--/api/v2/push/send', {
      method:'POST',
      headers:{
          "Accept":"application/json",
          "Content-Type":"application/json",
          'Accept-encoding': 'gzip, deflate'
      },
      body:JSON.stringify(messages)
      })
}
