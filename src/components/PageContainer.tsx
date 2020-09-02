import React from "react";
import Header from "./Header";

const PageContainer: React.FC = ({ children }) => (
  <>
    <Header />

    <section>{children}</section>
  </>
);

export default PageContainer;
