import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <Header></Header>

      <div className="flex flex-col justify-center items-center">
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
