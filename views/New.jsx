const React = require('react');
class New extends React.Component {
  render() {
    return (

         <div>
          <h1>New Log</h1>
          <form action="/logs" method="POST">
            title: <input type="text" name="title" /><br />
            entry: <input type="text" name="entry" /><br />
            shipIsBroken: <input type="checkbox" name="shipIsBroken" /><br />
            <input type="submit" name="" value="New Log" />
    </form>
    </div>
 );
}
}

module.exports = New;
