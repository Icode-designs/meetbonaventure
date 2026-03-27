import React from "react";
import {
  FooterAccreditation,
  FooterContentBox,
  FooterStyles,
} from "./footer.styles";
import Logo from "../logo/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyles>
      <FooterContentBox>
        <article>
          <Logo size="100px" />
          <p>
            Building digital experiences that don’t just look good, but work.
            Every project is crafted with attention to detail, performance, and
            user experience, because your online presence should do more than
            exist, it should convert
          </p>
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
        <Link href="/dashboard">
          © 2023 Bonaventure Ifechukwu. All rights reserved.
        </Link>
      </FooterAccreditation>
    </FooterStyles>
  );
};

export default Footer;
