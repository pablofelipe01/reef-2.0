import React from "react";
import { Box, Text, Link, Stack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
  <Box
    bg="#333"
    color="white"
    py={6}
    px={2}
    textAlign="center"
    fontFamily="Arial, sans-serif"
  >
    <Text fontSize="xl" fontWeight="bold">
      &copy; {new Date().getFullYear()} Tok-Sol
    </Text>
    <Text mt={2}>
      Email: <Link color="teal.200" href="mailto:pablo@tocsol.io">pablo@tocsol.io</Link>
    </Text>

    <Text mt={4} fontSize="sm">
      The information presented here is for general informational purposes only and should not be considered as financial, investment, or professional advice. We are not financial advisors. Any action you take based on the information provided is at your own risk. Always consult a qualified financial advisor before making any investment decisions. We are not liable for any losses, injuries, or damages arising from the use of this information. Investments carry risks, and past performance is not indicative of future results.
    </Text>
   

    <Stack direction="row" mt={6} spacing={4}>
      <IconButton
        as={Link}
        href="https://github.com/pablofelipe01"
        target="_blank"
        aria-label="GitHub"
        icon={<FaGithub />}
        size="lg"
        variant="ghost"
      />
      <IconButton
        as={Link}
        href="https://twitter.com/tokensolutions"
        target="_blank"
        aria-label="Twitter"
        icon={<FaTwitter />}
        size="lg"
        variant="ghost"
      />
    </Stack>
  </Box>
);

export default Footer;
