import React from "react";
import * as Icons from "react-icons/fa";

export const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) { // Return a default one
    return <Icons.FaBeer />;
  }

  return <IconComponent />;
};