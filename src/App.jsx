import React, {Component} from 'react';

import Input from './component/Input';
import ListItem from './component/ListItem';
import logo from './img/logo.png';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: "reading book"
      },
      {
        id:2,
        title: "how to cook ?"
      },
    ]
  }
  render(){
  const {todos} = this.state;
    return(
      <div className='container'>
          <div className='logo' >
            <img src={logo} alt="" />
          </div>
          <div className="list">
            {todos.map(item=>
              <ListItem key={item.id} todo={item.title}/>
            )}
          </div>
          <Input />
      </div>
    )
  }
}

export default App;
