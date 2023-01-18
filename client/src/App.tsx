import { useEffect, useContext } from "react";
import { Context } from "./index";
import LoginForm from "./components/LoginForm";
import { observer } from "mobx-react-lite";

function App() {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div>
      <h1>
        {store.isAuth ? `Authorized ${store.user.email}` : "Not Authorized"}
      </h1>
      <button onClick={() => store.logout()}>Logout</button>
    </div>
  );
}

export default observer(App);
