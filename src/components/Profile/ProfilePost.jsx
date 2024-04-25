import { GridItem, Flex, Text, Image, useDisclosure } from '@chakra-ui/react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import PostModal from './PostModal'
import { useState } from 'react'
import CreatePostModal from '../Menu/CreatePost/CreatePostModal'

const ProfilePost = ({ post, key, postImage }) =>{

    const { onOpen, isOpen, onClose } = useDisclosure(),
          [isEditing, setIsEditing] = useState(false),
          [image, setImage] = useState(postImage)

    return(

        <>
        
            <GridItem
                cursor={"pointer"}
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                position={"relative"}
                aspectRatio={1 / 1}
                onClick={onOpen}
            >

                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={"blackAlpha.700"}
                    transition={"all 0.3s ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >

                    <Flex alignItems={"center"} justifyContent={"center"} gap={50}>

                        <Flex>

                            <AiFillHeart size={20}/>

                            <Text fontWeight={"bold"} ml={2}>{post.likes.length}</Text>

                        </Flex>


                        <Flex>

                            <FaComment size={20}/>

                            <Text fontWeight={"bold"} ml={2}>{post.comments.length}</Text>
                        
                        </Flex>

                    </Flex>

                </Flex>


                <Image 
                    src={postImage} 
                    key={key}
                    alt='profile post' 
                    w={"100%"} 
                    h={"100%"} 
                    objectFit={"cover"} 
                />

            </GridItem>

            {

                isEditing ?(

                    <CreatePostModal 
                        isOpen={isOpen} 
                        onClose={onClose} 
                        img={postImage} 
                        postCaption={post.caption}
                        update={"update"}
                        isEditing={isEditing}
                        setImage={setImage}
                        image={image}
                        post={post}
                    />

                ):(
                    
                    <PostModal isOpen={isOpen} onClose={onClose} img={postImage} post={post} setIsEditing={setIsEditing}/>

                )

            }
        
        </>


    )

}
export default ProfilePost