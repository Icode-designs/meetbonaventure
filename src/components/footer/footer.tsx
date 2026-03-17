import React from "react";
import {
  FooterAccreditation,
  FooterContentBox,
  FooterStyles,
} from "./footer.styles";
import Logo from "../logo/logo";

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContentBox>
        <article>
          <Logo />
          <p>Full-Stack Developer and king julians mentor</p>
        </article>

        <ul>
          <h3>contact links</h3>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">whatsapp</a>
          </li>
          <li>
            <a href="">X / Twitter</a>
          </li>
        </ul>
      </FooterContentBox>
      <FooterAccreditation>
        <p>© 2023 Bonaventure Ifechukwu. All rights reserved.</p>
      </FooterAccreditation>
    </FooterStyles>
  );
};

export default Footer;
