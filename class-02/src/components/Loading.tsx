import React from "react";
import Card from "./Card";

const Loading = ({
  section,
  className,
}: {
  section: string;
  className?: string;
}) => {
  return <Card className={`${className}`}>Loading {section}...</Card>;
};

export default Loading;
