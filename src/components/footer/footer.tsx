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
            <a href="https://www.linkedin.com/in/icode-designs/">Linkedin</a>
          </li>
          <li>
            <a href="https://wa.me/2348133661252">whatsapp</a>
          </li>
          <li>
            <a href="https://x.com/Alexanderosakwe">X / Twitter</a>
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
