import { Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const ProfileHeaderMobileSkeleton = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={-5} direction="column">
      <Flex gap={{ base: 6, sm: 10 }} alignItems="center">
        <SkeletonCircle size={45}/>
        
        <Flex gap={4} alignItems="center" justifyContent="center">

          <Skeleton height="30px" width="30px" mt={2} />
          <Skeleton height="30px" width="30px" mt={2} />
          <Skeleton height="30px" width="30px" mt={2} />

        </Flex>
      </Flex>

        <Skeleton height="20px" width="150px" mt={4} />

      <Flex gap={4} alignItems="center" justifyContent="center" mt={6} mb={-5}>
        <Skeleton height="40px" width="120px" />
        <Skeleton height="40px" width="120px" />
      </Flex>
    </Flex>
  );
};

export default ProfileHeaderMobileSkeleton;
