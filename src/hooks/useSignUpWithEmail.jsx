import { auth, firestore } from "../firebase/config"
import { setDoc, doc } from "firebase/firestore"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useShowToast } from "./useShowToast"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export const useSignUpWithEmail = () => {

    const [ createUserWithEmailAndPassword, loading, error ] = useCreateUserWithEmailAndPassword(auth),
          showToast = useShowToast(),
          navigate = useNavigate(),
          signInUser = useAuthStore(state => state.signin)

    const signup = async(inputs) =>{

        if(!inputs.email || !inputs.password || !inputs.fullName || !inputs.username){

            showToast("All fields are required", "Please fill in all fields", "error")
            
            return

        }
    
        try{
       
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)

            if(!newUser && error){

                showToast("Error", error.message, "error")

                return

            }
            
            
            if(newUser){

                const userDoc ={

                    username: inputs.username,
                    fullName: inputs.fullName,
                    email: inputs.email,
                    createdAt: Date.now(),
                    userId: newUser.user.uid,
                    following: [],
                    followers: [],
                    likes: [],
                    photos: [],
                    bio: '',
                    website: '',
                    profilePicURL: ''
                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)

                localStorage.setItem("user-info", JSON.stringify(userDoc))

                signInUser(userDoc)

                setTimeout(() => navigate("/"), 2000)
                
            }

       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }
    
    }
  
    return{ loading, error, signup }

}