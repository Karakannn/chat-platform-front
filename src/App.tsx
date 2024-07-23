import { Route, Routes } from "react-router-dom";
import RegisterContainer from "./containers/register";
import LoginContainer from "./containers/login";
import "./App.css";
import ConversationContainer from "./containers/conversation";
import ConversationChannelContainer from "./containers/conversation-channel";
import MainLayout from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/conversations" element={<MainLayout />}>
        <Route index element={<ConversationContainer />} />
        <Route path=":id" element={<ConversationChannelContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
