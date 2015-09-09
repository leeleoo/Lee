let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
let Master = require('./components/master');
let Home = require('./components/home');
let Card = require('./components/card');



/** Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
  *
  * Routes are used to declare your view hierarchy.
  *
  * Say you go to http://material-ui.com/#/components/paper
  * The react router will search for a route named 'paper' and will recursively render its
  * handler and its parent handler like so: Paper > Components > Master
  */

let AppRoutes = (
  <Route name="root" path="/" handler={Master}>
    <Route name="home" handler={Home} />
    <Route name="card" handler={Card} />
  </Route>
);

module.exports = AppRoutes;
