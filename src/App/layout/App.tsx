import { Route, Switch } from "react-router-dom";
import { Container, } from "semantic-ui-react";
import CirqueDashboard from "../../features/cirque/CirqueDashboard";
import FormContacts from "../../features/FormContact/FormContacts";
import HomePage from "../../features/home/HomePage";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container>
              <Switch>
                <Route exact path="/principalPage" component={CirqueDashboard} />
                <Route path='/contact' component={FormContacts} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
