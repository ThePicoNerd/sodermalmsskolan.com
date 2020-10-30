import { Hero } from ".";
import React from "react";
import { Base } from "../../grid/Base";
import styled from "styled-components";
import * as breakpoints from "../../../styles/breakpoints";
import { LeadText } from "../../basic/Typography";

const EpicHeroPane = styled.div`
  grid-column-end: span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: ${breakpoints.small}) {
    grid-column-end: span 10;
  }

  @media (min-width: ${breakpoints.large}) {
    grid-column-end: span 5;
    text-align: initial;
  }

  h1 {
    line-height: 1.1;
    letter-spacing: -0.04em;
    font-weight: 700;

    --size-sm: 3rem;
    --size-md: 4rem;
    --size-lg: 5rem;
    --size-xl: 6rem;
  }

  ${LeadText} {
    margin-bottom: 2rem;
  }
`;

const LeftPane = styled(EpicHeroPane)`
  grid-column-start: 1;

  @media (min-width: ${breakpoints.small}) {
    grid-column-start: 2;
  }
`;

const RightPane = styled(EpicHeroPane)`
  grid-column-start: 1;
  margin-top: var(--grid-gap);

  @media (min-width: ${breakpoints.small}) {
    grid-column-start: 2;
  }

  @media (min-width: ${breakpoints.large}) {
    margin-top: 0;
    grid-column-start: 7;
  }
`;

export const EpicHero: React.FunctionComponent<{
  left?: React.ReactNode;
  right?: React.ReactNode;
}> = ({ left, right }) => {
  return (
    <Hero>
      <Base>
        <LeftPane>{left}</LeftPane>
        <RightPane>{right}</RightPane>
      </Base>
    </Hero>
  );
};
