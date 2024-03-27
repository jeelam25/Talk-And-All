import { Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import ChatPage from "./Components/ChatPage/ChatPage";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Route exact path="/" component={HomePage} />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
};

export default App;
