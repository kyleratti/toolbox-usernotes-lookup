import React from "react";

type LoadingProps = {
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({ message }) => (
  <div id="loading">{message || "Loading..."}</div>
);

export default Loading;
