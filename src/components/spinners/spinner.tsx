import React from "react";
import GridLoader from "react-spinners/GridLoader";
import { FullPageWrapper } from "../layout/Container";

const Spinner: React.FunctionComponent = () => {
  return <GridLoader color="currentColor" />;
};

export const FullPageSpinner: React.FunctionComponent = () => (
  <FullPageWrapper>
    <Spinner />
  </FullPageWrapper>
);

export default Spinner;