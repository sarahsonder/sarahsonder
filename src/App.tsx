import { Flex, Title, Text } from '@mantine/core';

export default function App() { // read up on ways to define a react component
  return (
    <>
      {/* Section 1 */}
      <Flex
        bg='#84A387'
        h='100vh'
        justify="center"
        ta="center"
      >
        <Flex
          gap="md"
          direction="column"
          c="#FFFAEB"
          mt='20vh'
        >
          <Title size="5rem">Hello hello!<br/>I'm Sarah Wang</Title>
          <Text size="1.5rem" w='50vw' lh="md">
            I’m an aspiring software developer,
            exploring the world of tech through the lens of social impact.
          </Text>
          <Text size="1.25rem" fw={300} mt="3rem">
            More coming soon, I promise!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}