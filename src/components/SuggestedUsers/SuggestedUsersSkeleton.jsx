import { Flex, Skeleton, SkeletonCircle} from "@chakra-ui/react"

const SuggestedUsersSkeleton = () =>{

    return(

        <>

            <Flex gap={4} marginTop={20} w={"full"} alignItems={"center"} position="absolute"
      left={{ base: 130, md: 300 }}>

                <SkeletonCircle h={10} w='10'/>


                <Flex gap={1} flexDir={"column"}>

                    <Skeleton height={2} width={100} />

                    <Skeleton height={2} width={50} />

                </Flex>

            </Flex>
        
        </>

    )

}

export default SuggestedUsersSkeleton