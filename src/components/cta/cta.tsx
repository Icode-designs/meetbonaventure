import React from "react";
import SectionWrapper from "../shared/sectionWrapper";
import { CtaArticle, CtaStyles } from "./cta.styles";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LinkButton } from "../button/button";

const Cta = () => {
  return (
    <SectionWrapper variant="primary">
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
          <LinkButton variant="primary" href="/contact">
            Click To Start
          </LinkButton>
        </CtaArticle>
      </CtaStyles>
    </SectionWrapper>
  );
};

export default Cta;
