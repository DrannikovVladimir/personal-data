import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import FormPage from './components/FormPage';
import PreviewPage from './components/PreviewPage';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalFonts from './fonts/font-style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <GlobalFonts />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route path="/preview">
            <PreviewPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Container>
  )
}

export default App;
