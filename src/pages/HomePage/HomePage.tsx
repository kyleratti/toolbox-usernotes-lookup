import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedOnly from "../../components/AuthenticatedOnly";
import PageContainer from "../../components/PageContainer";
import UnauthenticatedOnly from "../../components/UnauthenticatedOnly";
import { NotesProvider } from "../../context/NotesContext";
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
        This application will only request <code>wikiread</code>, to read the
        mod-only wiki page, and <code>mysubreddits</code>, to know which wiki
        pages to read. This means the tokens being used have a very limited
        scope. Regardless, please be mindful of the software and extensions
        running on your computer and if this is an unacceptable risk.
      </p>
    </UnauthenticatedOnly>

    <AuthenticatedOnly>
      <NotesProvider>
        <NotesWidget />
      </NotesProvider>
    </AuthenticatedOnly>
  </PageContainer>
);

export default HomePage;
