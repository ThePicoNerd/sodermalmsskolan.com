import React from "react";
import { Layout } from "../components/basic/Layout";
import { MonthViewer } from "../components/menu/MonthViewer";
import { Section, GridArea } from "../components/basic/Grid";
import { Header } from "../components/basic/Header";
import { D3 } from "../components/basic/Typography";

export default class Menu extends React.Component {
  render() {
    return (
      <Layout title="Meny">
        <Header>
          <D3>Meny</D3>
        </Header>
        <Section>
          <GridArea spanMobile={4} spanDesktop={12}>
            <MonthViewer />
          </GridArea>
        </Section>
      </Layout>
    );
  }
}