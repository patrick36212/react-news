import React from "react";
import ReactDom from "react-dom/client";
import App from "./core/App";
import { QueryClient, QueryClientProvider } from "react-query";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./core/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();
