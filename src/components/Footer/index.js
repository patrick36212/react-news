import {FooterInfo, FooterWrapper} from "./syled";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectFullData} from "../../features/newsSlice";

const Footer = () => {
  const fullData = useSelector(selectFullData);
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
      {!!fullData &&
        <FooterInfo>
          Articles found: {fullData.totalResults === 0 ? 0 : fullData.totalResults}
        </FooterInfo>}
      <FooterInfo>{time.toLocaleTimeString()}</FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
