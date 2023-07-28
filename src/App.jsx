import React from "react";
import ReactDOM from "react-dom";
import ActivityFeed from "./components/ActivityFeed.jsx";

import Header from "./Header.jsx";

const App = () => {
  return (
    <div className="container" style={{ overflow: "auto" }}>
      <Header />

      {/* <div className="container-view">Some activities should be here</div> */}
      <ActivityFeed />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
