import React from "react";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function Counter(props) {
  const { value } = props;
  return (
    <div>
      <b>{value}</b>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </div>
  );
}

export default App;
