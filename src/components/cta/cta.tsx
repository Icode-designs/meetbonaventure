import React from "react";
import SectionWrapper from "../shared/sectionWrapper";
import { CtaArticle, CtaStyles } from "./cta.styles";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LinkButton } from "../button/button";
import ContactForm from "./contactForm";

const Cta = () => {
  return (
    <SectionWrapper variant="primary" id="contact">
      <CtaStyles>
        <CtaArticle>
          <span>
            <MdOutlineMarkEmailUnread />
          </span>
          <h1>Ready to engineer the next big thing?</h1>
          <p>
            {` Whether you need a full-stack developer to augment your team or a
            technical partner to build your product from scratch, I'm here to
            help.`}
          </p>
        </CtaArticle>

        <ContactForm />
      </CtaStyles>
    </SectionWrapper>
  );
};

export default Cta;
