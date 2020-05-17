import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Funnel from "./pages/Funnel";
import Signin from "./pages/Signin";
import SignupHelper from "./pages/SignupHelper";
import SignupCharity from "./pages/SignupCharity";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateProfile from "./pages/PrivateProfile";
import PublicProfile from "./pages/PublicProfile";
import Error404 from "./pages/Error404";
import UIComponents from "./pages/UIComponents";
import "./fonts/bodoni/BodoniFLF-Roman.ttf";
import CreateProfileHelper from "./pages/CreateProfileHelper";

function App() {
  return (
    <div className='App'>
      <NavMain />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Funnel} />
        <Route exact path='/signup/helper' component={SignupHelper} />
        <Route exact path='/signup/charity' component={SignupCharity} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/helpers/create/:id' component={CreateProfileHelper} />


        <Route exact path="/ui" component={UIComponents} />

        {/* Routing to the public profile page */}
        <Route exact path='/profile' component={PublicProfile} />

        {/* Routing to your own profile page */}
        <ProtectedRoute
          exact
          path='/private-profile'
          component={PrivateProfile}
        />

        <Route path='' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
