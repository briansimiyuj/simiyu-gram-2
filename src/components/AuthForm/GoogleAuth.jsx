import { Flex, Image, Text } from '@chakra-ui/react'
import google from '../../../img/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../firebase/config'
import { useShowToast } from '../../hooks/useShowToast'
import { useAuthStore } from '../../store/authStore'
import { doc, getDoc, setDoc } from 'firebase/firestore'
const GoogleAuth = ({ prefix }) =>{

    const [signInWithGoogle, error] = useSignInWithGoogle(auth),
          showToast = useShowToast(),
          signInUser = useAuthStore(state => state.signin)      

    const handleGoogleAuth = async() =>{
        
        try{
       
            const newUser = await signInWithGoogle()

          
            if(!newUser && error){

                showToast(error.message, "error")

                return

            }

           const userRef = doc(firestore, "users", newUser.user.uid),
                 userSnap = await getDoc(userRef)


            if(userSnap.exists()){

                const userDoc = userSnap.data()

                localStorage.setItem("user-info", JSON.stringify(userDoc))

                signInUser(userDoc)

            }else{

                const userDoc ={

                    username: newUser.user.email.split("@")[0],
                    fullName: newUser.user.displayName,
                    email: newUser.user.email,
                    createdAt: Date.now(),
                    userId: newUser.user.uid,
                    following: [],
                    followers: [],
                    likes: [],
                    photos: [],
                    bio: '',
                    website: '',
                    profilePicURL: newUser.user.photoURL

                }

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)

                localStorage.setItem("user-info", JSON.stringify(userDoc))

                signInUser(userDoc)

            }
       
        }catch(error){
       
           showToast(error.message, "error")
       
        }

    }

    return(

        <>
        
            <Flex 
                alignItems={"center"} 
                justifyContent={"center"} 
                cursor={"pointer"}
                onClick={handleGoogleAuth}
            >

                <Image src={google} w={5} alt="Google Logo"/>                        

                <Text mx={2} color={"blue.500"}>{prefix} with Google</Text>

            </Flex>
        
        </>

    )

}

export default GoogleAuth