import logo from './logo.svg';
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import ColorBox from "./features/ColorBox";
import PostFeature from "./features/Post";
import ClockFeature from "./features/Clock";
import MagicBoxFeature from "./features/MagicBox";

function App() {
  return (
    <div className="App">
      <ClockFeature/>
      <hr/>
      <MagicBoxFeature/>
      <hr/>
      <PostFeature/>
      <hr/>
      {/*<TodoFeature/>*/}
      {/*<hr/>*/}
      {/*<AlbumFeature/>*/}
      {/*<hr/>*/}
      {/*<CounterFeature/>*/}
      {/*<hr/>*/}
      {/*<ColorBox/>*/}
    </div>
  );
}

export default App;
