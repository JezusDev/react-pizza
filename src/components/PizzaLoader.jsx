import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoader = (props) => (
  <ContentLoader
    speed={2}
    width={288}
    height={465}
    viewBox="0 0 288 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="319" rx="0" ry="0" width="288" height="93" />
  </ContentLoader>
);

export default PizzaLoader;
