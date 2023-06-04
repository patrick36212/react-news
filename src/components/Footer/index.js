import {
  FooterInfo,
  FooterInfoHeader,
  FooterInfoWrapper,
  FooterWrapper,
  StyledFooter,
} from "./syled";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <FooterWrapper>
      <StyledFooter>
        <FooterInfoWrapper>
          <FooterInfoHeader>Contact</FooterInfoHeader>
          <FooterInfo>patrick36212@gmail.com</FooterInfo>
        </FooterInfoWrapper>
        <FooterInfoWrapper>
          <FooterInfoHeader>About</FooterInfoHeader>
          <FooterInfo>Lorem ipsum </FooterInfo>
        </FooterInfoWrapper>
        <FooterInfoWrapper>
          <FooterInfoHeader>{time.toLocaleTimeString()}</FooterInfoHeader>
        </FooterInfoWrapper>
      </StyledFooter>
    </FooterWrapper>
  );
};

export default Footer;
