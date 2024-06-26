import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

export const useShowToast = () =>{

    const toast = useToast()

    // useCallback is used to prevent the function from being recreated on every render, by caching the function
    const showToast = useCallback((title, description, status) =>{
    
        toast({

            title,
            description,
            status,
            duration: 3000,
            isClosable: true,

        })
    
    }, [toast])

    return showToast

}