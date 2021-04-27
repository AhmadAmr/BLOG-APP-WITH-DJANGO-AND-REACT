import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./hocs/Layout";
import Blog from "./components/Blog";
import Home from "./components/Home";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";

const App = () => {
  return (
    <div >
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/category/:id" component={Category} />
            <Route exact path="/blog/:id" component={BlogDetail} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};


export default App;