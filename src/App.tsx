import "./App.css";

function App() {
  const name = "programming hero";
  const nameArr = name.split("");
  return (
    <div className="main">
      <div className="container">
        {nameArr.map((item, i) => (
          <span className="alphabet" style={{ transitionDelay: `${i * 30}ms` }}>
            {item}
          </span>
        ))}
      </div>

      {/* clip path transition  */}
      {/* <div className="card">
        <h1>heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi
          esse voluptatem voluptas quae ipsum officiis laborum.
        </p>
      </div> */}

      {/*
      // loading animation
       <div className="loading">
        <div className="glass"></div>
        <div className="box"></div>
         */}
      {/*<div className="box-1"></div>
      <div className="box-2"></div>
       <button className="btn">hover me</button> */}
    </div>
  );
}

export default App;
