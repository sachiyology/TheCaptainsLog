const React = require('react')

const myStyle = {
color: '#ffffff',
backgroundColor: '#000000',
};

class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    return (
      <div style={myStyle}>
        <h1>See All The Logs!</h1>
        <ul>
          {
            logs.map((log)=>{
              return(
                /*<li style={cap}>
                  <a href={`/pokemon/${i}`}><font color="silver">{`${i}`} {pokemon.name}</font></a>
                </li>*/

                <li key={log._id}>
                                  <a href={`/logs/${log._id}`}><font color="silver">{log.title}{log.entry}</font></a>

                                  <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                                  <input type="submit" value="DELETE"/>
                  </form>
                  <a href={`/logs/${log._id}/edit`}><font color="silver">Edit This Log</font></a>

                                </li>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = Index;
