import { auth } from './Firebase'
export const signIn = async(email, password) => {
   const user = await auth.signInWithEmailAndPassword(email,password)
   return user.user
}