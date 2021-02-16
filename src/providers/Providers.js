import React from "react";
import { node } from "prop-types";
import { QueryClientProvider } from "react-query";
import queryClient from "../utils/query";
import LanguageProvider from "./LanguageProvider";

const Providers = ({ children }) => (
  <LanguageProvider defaultSprak="nb">
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </LanguageProvider>
);

Providers.propTypes = {
  children: node.isRequired,
};

export default Providers;
