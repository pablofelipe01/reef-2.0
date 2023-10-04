import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image, AspectRatio, Button } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";
import zoom from '../components/images/zoom.gif'


export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  const id = usePublicKey(idRaw);

  const buttonStyles = {
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "#fdfdfd",
    color: "#054912",
    fontWeight: "bold",
    marginBottom: "10px",
    border: "1px solid #054912",
    width: "65%",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.5)",
    fontfamily: 'Orbitron, sans-serif',
    
  };

  const handleButton1Click = () => {
    // Logic to handle button 1 click
    window.open("https://pin.ski/3YGNEzJ", "_blank");
  };

  const handleButton2Click = () => {
    // Logic to handle button 2 click
    window.open("https://pin.ski/46dW8By", "_blank");
  };

  const handleButton3Click = () => {
    const email = "toksol@toksol.io";
    const subject = "Hello";
    const body = "I'm interested in your product. Please send me more information.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  // const handleButton5Click = () => {
  //   const phoneNumber = "+573024878295";
  //   window.open(`tel:${phoneNumber}`);
  // };

  const handleButton5Click = () => {
    // Logic to handle button 4 click
    window.open("https://www.youtube.com/playlist?list=PL42rPG0c72CfONUxJWYAqT63UmSc-BI8E", "_blank");
  };
  const handleButton4Click = () => {
    // Logic to handle button 4 click
    window.open("https://www.toksol.io/", "_blank");
  };
  const handleButton6Click = () => {
    // Logic to handle button 4 click
    window.open("https://onramp.pokoapp.xyz/?apiKey=734c4a23-e256-46c4-b917-974f759a6aee&userId=poko_prod&cryptoList=SOL-solana,USDC-solana", "_blank");
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Foldit:wght@300;500&family=Orbitron:wght@500&display=swap');
      

    
  `}
      </style>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {publicKey ? (
          <>
            <Lbc id={id} />
            <Button style={{ ...buttonStyles, marginTop: "10px" }} onClick={handleButton1Click}>White Paper</Button>
            {/* <Button style={buttonStyles} onClick={handleButton3Click}>Get in Touch Now</Button> */}
            <Button style={buttonStyles} onClick={handleButton5Click}>Video Tutorials</Button>
            <Button style={buttonStyles} onClick={handleButton4Click}>Developers</Button>
            <Button style={buttonStyles} onClick={handleButton2Click}>DECK</Button>
            <Button style={buttonStyles} onClick={handleButton6Click}>BUY USDC</Button>
          </>
        ) : (
          <>
            <Image src={zoom.src} alt="Token" 
  style={{
    paddingBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    width: "65%",
    borderRadius: "10px",
  }}
/>

            <Button style={{ ...buttonStyles, marginTop: "10px" }} onClick={handleButton1Click}>White Paper</Button>
            {/* <Button style={buttonStyles} onClick={handleButton3Click}>E-mail Us</Button> */}
            <Button style={buttonStyles} onClick={handleButton5Click}>Video Tutorials</Button>
            <Button style={buttonStyles} onClick={handleButton4Click}>Developers</Button>
            <Button style={buttonStyles} onClick={handleButton2Click}>DECK</Button>
            <Button style={buttonStyles} onClick={handleButton6Click}>Buy USDC</Button>
          </>
        )}
      </div>
    </>
  );
}

function useVariables(): { id: any; } {
  return { id: "5pMztYTmnPd2mT4PFsxh6xXJwzoN2pbKZBmWTFagV2Pf"};
}
