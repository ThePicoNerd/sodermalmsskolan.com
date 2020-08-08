import styled from "styled-components";
import { Layout } from "../components/basic/Layout";
import { AutoLink } from "../components/basic/Link";
import { MenuGrid } from "../components/menu/MenuGrid";
import { AdSection } from "../components/basic/Ad";
import { Section } from "../components/layout/Section";
import { Hero } from "../components/layout/Hero";
import { Row } from "../components/grid/Row";
import { Col } from "../components/grid/Col";
import { Navigation } from "../components/basic/Navigation";
import { Image } from "../components/basic/Image";
import {
  LeadText,
  GridTitleSection,
  GradientText,
} from "../components/basic/Typography";
import { TitleContainer } from "../components/layout/Hero/Title";

const HeroContent = styled(Row)`
  grid-auto-flow: dense;
`;

const TitlePane = styled.div`
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${TitleContainer} {
    text-align: center;
  }

  @media (min-width: 768px) {
    grid-column: 1 / span 7;

    ${TitleContainer} {
      text-align: inherit;
    }
  }

  @media (min-width: 992px) {
    grid-column: 1 / span 5;
  }
`;

const ImagePane = styled.div`
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: calc(var(--section-spacing) / 2);

  img {
    box-shadow: var(--shadow-medium);
  }

  @media (min-width: 576px) {
    grid-column: 2 / span 10;
  }

  @media (min-width: 768px) {
    grid-column: 8 / span 5;
    margin-bottom: 0;
  }
`;

const Page: React.FunctionComponent = () => {
  return (
    <Layout
      metadata={{
        title: "Meny",
        description:
          "I över ett år har vi fotat maten som Sodexo serverar och spridit bilderna på nätet. Vi kommer aldrig ge upp.",
      }}
    >
      <Navigation />
      <Hero>
        <HeroContent>
          <ImagePane>
            <Image src="https://cdn.discordapp.com/attachments/575993879837409290/666282862151991296/IMG_3695.JPG" />
          </ImagePane>
          <TitlePane>
            <TitleContainer>
              <h1>
                Vi visar upp{" "}
                <GradientText startColor="var(--color)" endColor="#00DFD8">
                  Sodexo
                </GradientText>{" "}
                för världen
              </h1>
              <LeadText>
                I över ett år har vi fotat maten som Sodexo serverar och delat
                bilderna online. Vi kommer aldrig att ge upp.
              </LeadText>
            </TitleContainer>
          </TitlePane>
        </HeroContent>
      </Hero>
      <AdSection />
      <Section>
        <Row>
          <Col xs={12}>
            <GridTitleSection title="Menyn" />
          </Col>
        </Row>
        <MenuGrid numberOfMenus={7} />
        <Row>
          <Col xs={12}>
            <p>
              Källa:{" "}
              <AutoLink href="https://skolmaten.se/sodermalmsskolan-gamla-maria/">
                skolmaten.se
              </AutoLink>
              .
            </p>
          </Col>
        </Row>
      </Section>
      <AdSection />
    </Layout>
  );
};

export default Page;
