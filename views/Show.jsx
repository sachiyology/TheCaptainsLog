const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',

};

class Show extends React.Component {
  render(){
    const log = this.props.log;
    return (
      <div style={myStyle}>
        <h1>Captaion's Logs</h1>
         <h2>{log.title}{log.entry}</h2>

         {/*
         <img src={pokemon.img + '.jpg'}></img>
         */}
        <br/>
        <a href='/logs'><font color="silver">back</font></a>
        </div>
    )
  }
}
module.exports = Show;
