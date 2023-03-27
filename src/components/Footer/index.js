import { FooterInfo, FooterWrapper } from "./syled";
import { useSelector } from "react-redux";
import { selectArticles } from "../../features/News/newsSlice";
import { useEffect, useState } from "react";

const Footer = () => {
  const articles = useSelector(selectArticles);
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
      <FooterInfo>
        Articles found: {articles.length === 0 ? 0 : articles.length}
      </FooterInfo>
      <FooterInfo>{time.toLocaleTimeString()}</FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
