import './App.css';

import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="lorem ipsum dolor sit amet" animationDuration={600}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, iste hic ducimus perspiciatis quae quibusdam voluptates repellendus reiciendis consequatur nulla necessitatibus velit ex. Earum cupiditate nesciunt saepe alias ad quas ex doloribus at quae amet optio iste facilis, eaque dicta. Maxime dolorem, enim ducimus natus perferendis dolor voluptate velit dignissimos.</p>
      </Tooltip>
      <Tooltip position="top" content="lorem ipsum">
        <button>top</button>
      </Tooltip>
      <Tooltip position="bottom" content="lorem ipsum">
        <button>bottom</button>
      </Tooltip>
      <Tooltip position="left" content="lorem ipsum">
        <button>left</button>
      </Tooltip>
      <Tooltip position="right" content="lorem ipsum">
        <button>right</button>
      </Tooltip>
      <Tooltip position="top-left" content="lorem ipsum">
        <button>top left</button>
      </Tooltip>
      <Tooltip position="top-right" content="lorem ipsum">
        <button>top right</button>
      </Tooltip>
      <Tooltip position="bottom-left" content="lorem ipsum">
        <button>bottom left</button>
      </Tooltip>
      <Tooltip position="bottom-right" content="lorem ipsum">
        <button>bottom right</button>
      </Tooltip>
      <Tooltip position="left-top" content="lorem ipsum">
        <button>left top</button>
      </Tooltip>
      <Tooltip position="left-bottom" content="lorem ipsum">
        <button>left bottom</button>
      </Tooltip>
      <Tooltip position="right-top" content="lorem ipsum">
        <button>right top</button>
      </Tooltip>
      <Tooltip position="right-bottom" content="lorem ipsum">
        <button>right bottom</button>
      </Tooltip>
    </div>
  );
}

export default App;
