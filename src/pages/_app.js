import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "@/styles/Antd.scss";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
