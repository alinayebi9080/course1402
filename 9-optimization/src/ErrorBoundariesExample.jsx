import { Component, useState } from "react";

const ErrorBound = () => {
  return (
    <div>
      <p>Ali</p>
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    </div>
  );
};

class ErrorBoundary extends Component {
  state = { isError: false };

  componentDidCatch(e) {
    this.setState({ isError: true });
  }

  render() {
    return <div>{this.state.isError ? <p>ERROR</p> : this.props.children}</div>;
  }
}

const Child = () => {
  const [count, setCount] = useState(0);

  if (count > 5) throw new Error("ERRRROOR");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click</button>
    </div>
  );
};

export default ErrorBound;
