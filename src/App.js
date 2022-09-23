import './App.css';
import LoginButton from "./component/LoginButton";
import LogoutButton from "./component/LogoutButton";
import Profile from "./component/Profile";

function App() {
  return (
      <div>
        <LoginButton />
        <LogoutButton />
          <Profile />
      </div>
  );
}

export default App;
