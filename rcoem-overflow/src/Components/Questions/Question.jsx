import "./index.css";
import ResponsiveAppBar from "./Components/Navbar";
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionsPage from "./QuestionsPage";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <QuestionsPage/>
      <Footer/>
    </div>
  );
}
