import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.900" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box flex="1">
              <Heading as="h1" size="2xl" mb={4}>Ett modernt fastighetssystem</Heading>
              <Text fontSize="lg" mb={6}>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
              <Text fontSize="lg" mb={6}>kontakt@tenfast.se</Text>
              <Text fontSize="lg" mb={6}>08-199 552</Text>
              <Button colorScheme="teal" size="lg">Kom igång</Button>
            </Box>
            <Box flex="1" mt={{ base: 10, md: 0 }}>
              <Image src="/images/hero-image.png" alt="Hero Image" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Customer Logos */}
      <Box bg="blue.800" py={10}>
        <Container maxW="container.xl">
          <Image src="/images/customer-logos.png" alt="Customer Logos" />
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>Fastighetssystemet för din verksamhet</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="lg" mb={4}>Program för fastighetsägare, förvaltningsbolag och kommuner mm.</Text>
            <Text fontSize="lg" mb={4}><FaCheckCircle /> Webbaserat</Text>
            <Text fontSize="lg" mb={4}><FaCheckCircle /> Enkel prissättning</Text>
            <Text fontSize="lg" mb={4}><FaCheckCircle /> Automatisera din verksamhet</Text>
            <Text fontSize="lg" mb={4}><FaCheckCircle /> Allt i ett</Text>
          </Box>
          <Box>
            <Image src="/images/feature-image.png" alt="Feature Image" />
          </Box>
        </SimpleGrid>
      </Container>

      {/* Benefits Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>Det här får du med TenFAST</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box>
            <Heading as="h3" size="md" mb={4}>Avtalskapare med mallar</Heading>
            <Text>Välj bland färdiga mallar eller skapa egna. Signera digitalt med BankID eller med penna och papper.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Hyresgäst inloggning</Heading>
            <Text>Hyresgästen får en inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Bostadskö</Heading>
            <Text>Bostadskö för hyresgäster. Länka till ett formulär från din hemsida eller integrera med vårt API.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Bokföring</Heading>
            <Text>Hyresaviseringar och inbetalningar integrerat Fortnox, en påminnelse skickar till Svefaktura. Hämta och moms rapporter.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Statistik</Heading>
            <Text>Få en översikt av hyresintäkterna och vilka hyresobjekt som är problematiska.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Felanmälan</Heading>
            <Text>Samma felanmälan från hyresgäster och sätt upp flöden för åtgärda med entreprenör.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Automatiska inbetalningar</Heading>
            <Text>Ta emot betalningar via Bankgiro, Banköverföring, Autogiro eller Swish.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Öppet API</Heading>
            <Text>Öppet API för att integrera med andra system.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Pricing Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>Passar stora och små</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" p={6} textAlign="center">
            <Heading as="h3" size="lg" mb={4}>Free</Heading>
            <Text fontSize="lg" mb={4}>0 kr</Text>
            <Text fontSize="lg" mb={4}>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
            <Button colorScheme="teal" size="lg">Kom igång</Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" p={6} textAlign="center">
            <Heading as="h3" size="lg" mb={4}>Pro</Heading>
            <Text fontSize="lg" mb={4}>10 kr / hyresobjekt / månad</Text>
            <Text fontSize="lg" mb={4}>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
            <Button colorScheme="teal" size="lg">Kom igång</Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" p={6} textAlign="center" bg="gray.800" color="white">
            <Heading as="h3" size="lg" mb={4}>Enterprise</Heading>
            <Text fontSize="lg" mb={4}>Offert</Text>
            <Text fontSize="lg" mb={4}>För fastighetsbolag eller förvaltare från 10 till tusentals hyresobjekt.</Text>
            <Button colorScheme="teal" size="lg">Kontakta oss</Button>
          </Box>
        </SimpleGrid>
      </Container>

      {/* FAQ Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>Vanliga frågor</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Vad är TenFAST fastighetssystem?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Är TenFAST webbaserat?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Vad kostar systemet?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Funkar fastighetssystemet på mobilen?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ja, TenFAST är byggt för webben och fungerar på både dator och mobil.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Hur kan fastighetssystemet vara så billigt?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Varför kan jag använda det gratis?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>TenFAST är gratis för mindre hyresvärdar med upp till 5 hyresobjekt.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Vad räknas som ett hyresobjekt?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ett hyresobjekt är en enhet som hyrs ut, till exempel en lägenhet eller ett kontor.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Vilka funktioner finns i fastighetsprogrammet?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bokföring, statistik, felanmälan, automatiska inbetalningar och öppet API.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Kan jag skapa hyresavtal digitalt och signera digitalt?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ja, du kan skapa hyresavtal digitalt och signera dem med BankID eller med penna och papper.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Kan hyresgästen använda det?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ja, hyresgästen får en inloggning där hyresavtal, hyresavier och andra viktiga dokument kan hittas.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Indexering av hyra</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>TenFAST erbjuder indexering av hyra baserat på konsumentprisindex.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Hur gör jag med mina befintliga hyresavtal?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Du kan importera dina befintliga hyresavtal till TenFAST.</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">Kan jag få hjälp att komma i gång?</Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>Ja, vi erbjuder support via e-post och telefon för att hjälpa dig komma igång.</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
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