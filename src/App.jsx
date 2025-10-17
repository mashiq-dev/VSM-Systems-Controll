import { Divider } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="px-16 py-12">
      <div className="h-screen ">
        <div>
          <HeaderComponent />
          <div className="my-4">
            <Divider className="bg-black" />
          </div>
        </div>
        <div className="h-[400px]">
          <MainComponent />
        </div>
        <div className="my-4">
          <Divider className="bg-black" />
        </div>
        <div>
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
