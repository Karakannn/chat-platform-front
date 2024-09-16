import { Route, Routes } from "react-router-dom";
import RegisterContainer from "./containers/register";
import LoginContainer from "./containers/login";
import ConversationContainer from "./containers/conversation";
import ConversationChannelContainer from "./containers/conversation-channel";
import AuthenticationRoute from "./components/auth/authenticated-route";
import { useState } from "react";
import { User } from "./types";
import { AuthContext } from "./context/auth";

import useDialog from "./hooks/dialogs";
import "./App.css";

function App() {
  const [user, setUser] = useState<User | undefined>();
  const { dialogs } = useDialog();
  console.log("dialogs", dialogs);

  return (
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <Routes>
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route
            path="/conversations"
            element={
              <AuthenticationRoute>
                <ConversationContainer />
              </AuthenticationRoute>
            }
          >
            <Route path=":id" element={<ConversationChannelContainer />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
  );
}

export default App;
