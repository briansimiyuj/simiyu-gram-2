import { doc, getDoc } from "firebase/firestore"
import { auth, firestore } from "../firebase/config"
import { useShowToast } from "./useShowToast"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useAuthStore } from "../store/authStore"

export const useSignInWithEmail = () =>{

   const showToast = useShowToast(),
         [ signInWithEmailAndPassword, loading, error ] = useSignInWithEmailAndPassword(auth),
         signInUser = useAuthStore(state => state.signin)


    const signIn = async(inputs) =>{

        if(!inputs.email || !inputs.password){

            showToast("Error", "Please fill in all fields", "error")

            return

        }


        try{
       
            const userCredentials = await signInWithEmailAndPassword(inputs.email, inputs.password)

            if(userCredentials){

                const docRef = doc(firestore, "users", userCredentials.user.uid),
                      docSnap = await getDoc(docRef)

                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))

                signInUser(docSnap.data())

            }
       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }
       
    }

    return { signIn, loading, error }

}