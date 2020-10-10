import React from "react";

type ExternalLinkProps = {
  to: string;
  newTab?: boolean;
};

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  to,
  newTab,
  children,
}) => (
  <a href={to} target={newTab ? "_blank" : ""}>
    {children}
  </a>
);
