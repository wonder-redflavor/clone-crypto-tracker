import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>,

  document.getElementById("root")
);
