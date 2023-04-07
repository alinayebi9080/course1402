const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return <header>HEADER</header>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Header />
      <Header />
    </div>
  );
};

root.render(<App />);
