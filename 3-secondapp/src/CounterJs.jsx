const CounterJs = () => {
  const handleClick = () => {
    const count = document.getElementById("count").innerText;
    document.getElementById("count").innerText = +count + 1;
  };
  return (
    <div>
      <p id="count">0</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default CounterJs;
