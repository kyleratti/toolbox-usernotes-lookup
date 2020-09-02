import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedOnly from "../../components/AuthenticatedOnly";
import PageContainer from "../../components/PageContainer";
import UnauthenticatedOnly from "../../components/UnauthenticatedOnly";
import NotesWidget from "./components/NotesWidget";

const HomePage: React.FC = () => (
  <PageContainer>
    <UnauthenticatedOnly>
      <p>
        Please <Link to="/login">sign in via reddit</Link> to continue.
      </p>

      <p>
        <b>NOTE:</b> This application runs entirely in your browser. This means
        that while your reddit account's tokens are never passed to a third
        party, it does mean they are stored unsecured in your browser.
      </p>

      <p>
        This application will only request <code>wikiread</code> permissions
        from reddit, so the tokens being used have a very limited scope.
        Regardless, please be mindful of the software and extensions running on
        your computer.
      </p>
    </UnauthenticatedOnly>

    <AuthenticatedOnly>
      <NotesWidget />
    </AuthenticatedOnly>
  </PageContainer>
);

export default HomePage;
