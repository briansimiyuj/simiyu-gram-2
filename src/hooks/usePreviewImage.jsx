import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { useDraggableImagePreview } from "./useDragImage"

export const usePreviewImage = () => {

   const [selectedFile, setSelectedFile] = useState(null),
         showToast = useShowToast(),
         maxFileSizeInBytes = 2 * 1024 * 1024,
         { image, setImage, handleImageChange: handleDraggableImage, dragPosition, handleDrag } = useDraggableImagePreview()


    const handleImageChange = (e) => {
    
       const file = e.target.files[0]

        if(file && file.type.startsWith("image/")){

            if(file.size > maxFileSizeInBytes){

                showToast("Error", "File size must be less than 2MB", "error")

                setSelectedFile(null)

                return

            }

            const reader = new FileReader()

            reader.onloadend = () => {

                setSelectedFile(reader.result)

                setImage(setSelectedFile(reader.result))

            }

            reader.readAsDataURL(file)

        }else{
           
           showToast("Error", "Please select an image file", "error")

           setSelectedFile(null)

        }
    
    }


    return { selectedFile, setSelectedFile, handleImageChange, image, setImage, handleDraggableImage, dragPosition, handleDrag }

}