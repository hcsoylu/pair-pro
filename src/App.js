// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import WarningSign from "./components/Alertcomp";
import MyBadge from "./components/Badgecomp";

function App() {
  return (
    <div>
      {/* <WarningSign message="Alert on a loop (NOT GOOD) Ex 1" /> */}
      <MyBadge text="exercise 2" color="primary" />
    </div>
  );
}

export default App;
