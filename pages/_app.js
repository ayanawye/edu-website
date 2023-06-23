import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/Antd.scss";
import '../styles/loader.scss';
import { Provider } from "react-redux";
import store from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";
import Load from "../components/Load/Load";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Load/>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}
