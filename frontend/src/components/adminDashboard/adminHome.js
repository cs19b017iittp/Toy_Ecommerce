// import logo from "./logo.svg";
// // import "./App.css";
import Header from "./header";
import Menu from "./sidebar";
import Dashboard from "./Dashboard";
import Footer from "./footer";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
