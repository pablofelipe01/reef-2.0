import React from "react";
import {
  Box,
  Center,
  HStack,
  Text,
  Link,
  LinkProps,
} from "@chakra-ui/react";
import {
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

interface IMenuItemProps extends LinkProps {
  isLast?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
  ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link href={href} {...rest}>
      {children}
    </Link>
  </Text>
);

export const Header: React.FC = () => (
  <Center
    w="full"
    px={[2, 10]} // Adjust these values for mobile and desktop padding
    py={2}
    flexDirection="column" // Stack content vertically on mobile
    alignItems="center"
    color="Blue"
    bg="#ffffff1c"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      padding: "10px 20px", // Adjust padding for mobile and desktop
      borderRadius: "20px",
    }}
  >
    {/* <a
      href="https://onramp.pokoapp.xyz/?apiKey=734c4a23-e256-46c4-b917-974f759a6aee&userId=poko_prod&cryptoList=SOL-solana,USDC-solana"
      rel="noreferrer"
      target="_blank"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <img
        src="https://i.imgur.com/m1Ld8vi.png"
        alt="Sol"
        style={{ width: "150px" }}
      />
    </a> */}

    <img
      src="https://i.imgur.com/pN6CQaq.png"
      alt="Sol"
      style={{ width: "350px", margin: "10px 0" }} // Add margin for spacing
    />

    <WalletMultiButton
      style={{
        width: "100px",
        height: "100px",
        padding: "10px",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px", // Add space between images and button
      }}
    >
      <img
        src="https://i.imgur.com/d4TTFAz.png"
        alt="Your logo"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </WalletMultiButton>
    
    {/* ... Other components ... */}
  </Center>
);
