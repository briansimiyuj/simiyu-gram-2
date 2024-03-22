import { auth } from "../firebase/config"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"

export const useSignUpWithEmail = () => {

    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth)
  
    return{ loading, error, signup }

}