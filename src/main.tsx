import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import DialogProvider from "./providers/dialog.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <DialogProvider />
    </BrowserRouter>
  </Provider>
);
