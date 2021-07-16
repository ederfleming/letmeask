import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          {/* <Main description="This is the About Page" /> */}
        </Route>
      </Switch>
    </Router>
  )
}
