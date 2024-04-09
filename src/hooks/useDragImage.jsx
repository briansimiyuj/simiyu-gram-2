import { useState } from "react"

export const useDraggableImagePreview = () =>{

    const [image, setImage] = useState(null),
          [dragPosition, setDragPosition] = useState({x: 0, y: 0})

    const handleDraggableImage = (imageFile) =>{

        const reader = new FileReader()

        reader.onloadend = () =>{

            const img = new Image()

            img.src = reader.result 

            img.onload = () =>{
 
                img.style.position = "absolute"
 
                img.style.left = `${dragPosition.x}px`
 
                img.style.top = `${dragPosition.y}px`
 
                setImage(img)

            }

        }

        reader.readAsDataURL(imageFile)

    }

    const handleDrag = (e) =>{

        setDragPosition({ x: e.clientX, y: e.clientY  })

    }

    return { image, setImage, handleDraggableImage, dragPosition, handleDrag }

}