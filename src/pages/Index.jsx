import { Box, Button, Container, Flex, Heading, IconButton, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box bg="blue.900" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">TenFAST</Heading>
            <Flex>
              <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Fastighetssystem</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Om oss</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Pris</Button>
              <Button variant="ghost" colorScheme="whiteAlpha" mr={4}>Support</Button>
              <Button colorScheme="whiteAlpha" variant="outline" mr={4}>Logga in</Button>
              <Button colorScheme="whiteAlpha" variant="solid">Kom igång</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.900" color="white" py={20}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={5}>
              <Heading as="h2" size="2xl">Ett modernt fastighetssystem</Heading>
              <Text fontSize="lg">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
              <Text>kontakt@tenfast.se</Text>
              <Text>08-199 552</Text>
              <Button colorScheme="whiteAlpha" size="lg">Kom igång</Button>
            </VStack>
            <Image src="/images/hero-image.png" alt="Hero Image" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Clients Section */}
      <Box bg="blue.900" color="white" py={10}>
        <Container maxW="container.xl">
          <Text textAlign="center" mb={4}>Några nöjda kunder</Text>
          <Flex justify="center" align="center" wrap="wrap" spacing={10}>
            <Image src="/images/client1.png" alt="Client 1" mx={4} />
            <Image src="/images/client2.png" alt="Client 2" mx={4} />
            <Image src="/images/client3.png" alt="Client 3" mx={4} />
            <Image src="/images/client4.png" alt="Client 4" mx={4} />
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" textAlign="center" mb={10}>Fastighetssystemet för din verksamhet</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={5}>
              <Text fontSize="lg">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</Text>
              <Text fontSize="lg">Webbaserat</Text>
              <Text>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd din dator eller mobilen!</Text>
              <Text fontSize="lg">Enkel prissättning</Text>
              <Text>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</Text>
              <Text fontSize="lg">Automatisera din verksamhet</Text>
              <Text>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, mm.</Text>
              <Text fontSize="lg">Allt i ett</Text>
              <Text>Få all relevant data till din verksamhet samlat i ett system och få stenkoll på aviseringar.</Text>
            </VStack>
            <Image src="/images/features-image.png" alt="Features Image" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" textAlign="center" mb={10}>Det här får du med TenFAST</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Avtalskapare med mallar</Heading>
              <Text>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller med penna och papper.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Hyresgäst inloggning</Heading>
              <Text>Hyresgästen får en egen inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Bostadskö</Heading>
              <Text>Bostadskö för hyresgäster. Länka till ett formulär från din hemsida eller integrera med vårt API.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Bokföring</Heading>
              <Text>Bokföring och integration mot bokföringssystemet Fortnox, så hela processen är digital. Se till- & frånkoppling och moms och mycket mer.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Statistik</Heading>
              <Text>Få en översikt av hyresintäkterna och vilka hyresobjekt som är problematiska.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Felanmälan</Heading>
              <Text>Samla felanmälan från hyresgäster och sätt upp flöden för åtgärda med relevanta personer.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Automatiska inbetalningar</Heading>
              <Text>Ta emot betalningar via Bankgiro, Banköverföring, Autogiro eller Swish.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading as="h4" size="md">Öppet API</Heading>
              <Text>Öppet API för att integrera med andra system.</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" textAlign="center" mb={10}>Passar stora och små</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack align="start" spacing={5} p={5} border="1px" borderColor="gray.200" borderRadius="md">
              <Heading as="h4" size="md">Free</Heading>
              <Text>0 kr</Text>
              <Text>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
              <Button colorScheme="blue" variant="outline">Kom igång</Button>
              <Text>Alla funktioner</Text>
              <Text>Support via e-post</Text>
            </VStack>
            <VStack align="start" spacing={5} p={5} border="1px" borderColor="gray.200" borderRadius="md">
              <Heading as="h4" size="md">Pro</Heading>
              <Text>10 kr / hyresobjekt / månad</Text>
              <Text>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
              <Button colorScheme="blue" variant="outline">Kom igång</Button>
              <Text>Alla funktioner</Text>
              <Text>Support via e-post</Text>
              <Text>Reducerat pris</Text>
            </VStack>
            <VStack align="start" spacing={5} p={5} border="1px" borderColor="gray.200" borderRadius="md">
              <Heading as="h4" size="md">Enterprise</Heading>
              <Text>Offer</Text>
              <Text>För fastighetsbolag eller förvaltare från 10 till tusentals hyresobjekt.</Text>
              <Button colorScheme="blue" variant="outline">Kontakta oss</Button>
              <Text>Alla funktioner</Text>
              <Text>Prioriterad support</Text>
              <Text>Utbildning</Text>
              <Text>Verktyg</Text>
              <Text>Anpassning</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" textAlign="center" mb={10}>Vanliga frågor</Heading>
          <VStack align="start" spacing={5}>
            <Text>Vad är TenFAST fastighetssystem?</Text>
            <Text>Är TenFAST webbaserat?</Text>
            <Text>Vad kostar systemet?</Text>
            <Text>Funkar fastighetssystemet på mobilen?</Text>
            <Text>Hur kan fastighetssystemet vara så billigt?</Text>
            <Text>Varför kan jag använda det gratis?</Text>
            <Text>Vad räknas som ett hyresobjekt?</Text>
            <Text>Vilka funktioner finns i fastighetsprogrammet?</Text>
            <Text>Kan jag skapa hyresavtal och signera digitalt?</Text>
            <Text>Kan hyresgästen använda det?</Text>
            <Text>Indexering av hyra</Text>
            <Text>Hur gör jag med mina befintliga hyresavtal?</Text>
            <Text>Kan jag få hjälp att komma i gång?</Text>
          </VStack>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box py={10} bg="gray.200">
        <Container maxW="container.xl" textAlign="center">
          <Text>Logga in</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Text>Sankt Eriksgatan 114, 113 32 Stockholm</Text>
          <Text>© TenFAST AB 2024</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;