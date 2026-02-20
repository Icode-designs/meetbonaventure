import React from "react";
import { StyledOffersContent } from "./offers.styles";
import { StyledSection } from "@/app/global.style";

const Offers = () => {
  return (
    <StyledSection>
      <StyledOffersContent>
        <h2>My Offers</h2>
        <div>
          <div>
            <h3>Website Development</h3>{" "}
          </div>
          <div>
            <h3>Search Engine Optimization</h3>
          </div>
          <div>
            <h3>Social Media Advertisement</h3>
          </div>
          <div>
            <h3>Automation</h3>
          </div>
        </div>
      </StyledOffersContent>
    </StyledSection>
  );
};

export default Offers;
