import React from "react";
import { arrayOf, oneOfType, node, string, shape } from "prop-types";

const PageBase = (props) => {
  return (
    <main role="main">
      <div className="container">{props.children}</div>
    </main>
  );
};

PageBase.propTypes = {
  breadcrumbs: arrayOf(
    shape({
      title: string,
      url: string,
    })
  ).isRequired,
  uniqueErrors: arrayOf(oneOfType([string])).isRequired,
  children: node.isRequired,
};

export default PageBase;
