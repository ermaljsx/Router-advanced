/* Routing & 3-Side Routing Components */
import { useContext } from "react";
import {
  Switch,
  Redirect,
  Route
} from "react-router-dom";
/* APP Pages Components ( Sign-Up/Log-In ) */
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NewMeetupPage from "./pages/new-meetup/index";
/* App Server-Client Side Components Rendering */
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./components/store/auth-context";
import MeetupDetail from "./components/meetups/MeetupDetail";

function App () {

  const authCtx = useContext ( AuthContext );

  return (
    <Layout>
      <Switch>
        <Route path = "/" exact>
          <HomePage />
        </Route>
        
        { !authCtx.isLoggedIn && (
            <Route path = "/auth">
              <AuthPage />
            </Route>
          )
        }

        {/* { authCtx.isLoggedIn && (
            <Route path = "/profile">
              <UserProfile />
            </Route>
          )
        } */}
        
        <Route path = "/profile">
          { authCtx.isLoggedIn &&
            <UserProfile />
          }
          { !authCtx.isLoggedIn &&
            <Redirect to = "/auth" />
          }
        </Route>
        
        <Route path = "/meetups" exact>
          { authCtx.isLoggedIn &&
            <MeetupDetail />
          }
        </Route>

        <Route path = "/new-meetup">
          { authCtx.isLoggedIn &&
              <NewMeetupPage />
          }
        </Route>

        <Route path = "*">
          <Redirect to = "/auth" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;