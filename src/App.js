import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import ColorBox from "./features/ColorBox";
import PostFeature from "./features/Post";
import ClockFeature from "./features/Clock";
import MagicBoxFeature from "./features/MagicBox";
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import HomeFeature from "./features/Home";

function App() {
  return (
    <div className="App">
      <div>
        Header
        <p><NavLink to="/clock">Clock</NavLink></p>
        <p><NavLink to="/magic-box">Magic Box</NavLink></p>
        <p><NavLink to="/post">Post</NavLink></p>
        <p><NavLink to="/todo-list">Todo List</NavLink></p>
        <p><NavLink to="/albums">Albums</NavLink></p>
        <p><NavLink to="/counter">Counter</NavLink></p>
        <p><NavLink to="/color-box">Color Box</NavLink></p>
      </div>

      <Switch>
        <Redirect from="/home" to="/" />

        <Route path="/" component={HomeFeature} exact/>
        <Route path="/clock" component={ClockFeature}/>
        <Route path="/magic-box" component={MagicBoxFeature}/>
        <Route path="/post" component={PostFeature}/>
        <Route path="/todo-list" component={TodoFeature}/>
        <Route path="/albums" component={AlbumFeature}/>
        <Route path="/counter" component={CounterFeature}/>
        <Route path="/color-box" component={ColorBox}/>
      </Switch>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
