import React from "react";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} relative flex justify-center items-center m-3 p-24 shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
