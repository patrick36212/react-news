import {
  FooterInfo,
  FooterInfoHeader,
  FooterInfoWrapper,
  FooterLink,
  FooterWrapper,
  StyledFooter,
} from "./syled";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

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

          <FooterLink href="mailto:patrick36212@gmial.com">
            <MailIcon />
            <FooterInfo>patrick36212@gmail.com</FooterInfo>
          </FooterLink>

          <FooterLink href="https://github.com/patrick36212" target="_blank">
            <GitHubIcon />
            <FooterInfo>GitHub</FooterInfo>
          </FooterLink>

          <FooterLink
            href="https://www.linkedin.com/in/patryk-krawczyk-js/"
            target="_blank"
          >
            <LinkedInIcon />
            <FooterInfo>LinkedIn</FooterInfo>
          </FooterLink>
        </FooterInfoWrapper>

        <FooterInfoWrapper>
          <FooterInfoHeader>About</FooterInfoHeader>
          <FooterInfo>
            R-NEWS is an application made with latest technology. Data comes
            from Newsdata.io, a News API that provides access to news articles
            from all over the world. By default the App shows real-time news for
            your country, but has 52 other - the choose is yours.
          </FooterInfo>
        </FooterInfoWrapper>

        <FooterInfoWrapper>
          <FooterInfoHeader>{time.toLocaleTimeString()}</FooterInfoHeader>
        </FooterInfoWrapper>
      </StyledFooter>
    </FooterWrapper>
  );
};

export default Footer;
