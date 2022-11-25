import { useState } from "react";
import { routerNoAuth } from "./noauth/routerNoAuth";
import { routerAuth } from "./auth/routerAuth";
import {RouterProvider,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState({"mail":"carlos@espanta.com"});

  return (
    <div>
      {user?<RouterProvider router={routerAuth(user)} />:<RouterProvider router={routerNoAuth} />}
    </div>
  );
}

export default App;
