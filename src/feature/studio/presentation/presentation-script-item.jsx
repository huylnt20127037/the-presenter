import React from "react";
import AppContainer from "../../../core/components/container";

const PresentationScriptItem = ({ presentationAction }) => {
  return <AppContainer>{presentationAction.description}</AppContainer>;
};

export default PresentationScriptItem;
