let React = require('react');
let Router = require('react-router');
let { AppBar, AppCanvas, IconButton, Menu, Styles, Tab, Tabs } = require('material-ui');
let RouteHandler = Router.RouteHandler;
let { Colors, Typography } = Styles;
let ThemeManager = new Styles.ThemeManager();


class Master extends React.Component {

  constructor() {
    super();
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  getStyles() {
    let darkWhite = Colors.darkWhite;
    return {
      footer: {
        backgroundColor: Colors.grey900,
        textAlign: 'center'
      },
      a: {
        color: darkWhite
      },
      p: {
        margin: '0 auto',
        padding: '0',
        color: Colors.lightWhite,
        maxWidth: '335px'
      },
      iconButton: {
        color: darkWhite
      }
    };
  }

  render() {
    let styles = this.getStyles();
    let githubButton = (
      <IconButton
        iconStyle={styles.iconButton}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />);


    return (
      <AppCanvas>
        <AppBar
          title={"__L_e_e"}
          zDepth={0}
          iconElementRight={githubButton}/>
        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2>Tab One Template Example</h2>
              <p>
                This is an example of a tab template!
              </p>
              <p>
                You can put any sort of HTML or react component in here.
              </p>
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2>Tab Two Template Example</h2>
              <p>
                This is another example of a tab template!
              </p>
              <p>
                Fair warning - the next tab routes to home!
              </p>
            </div>
          </Tab>
          <Tab
            label="Item Three"
            route="home"/>
        </Tabs>
        <RouteHandler />
      </AppCanvas>
    );


  }

}

Master.contextTypes = {
  router: React.PropTypes.func
};

Master.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = Master;
