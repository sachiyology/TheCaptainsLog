const React = require('react');
class New extends React.Component {
  render() {
    return (

         <div>
          <h1>New Log</h1>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" /><br />
            Entry: <input type="text" name="entry" /><br />
            Ship is broken: <input type="checkbox" name="shipIsBroken" /><br />
            <input type="submit" name="" value="New Log" />
    </form>
    </div>
 );
}
}

module.exports = New;
