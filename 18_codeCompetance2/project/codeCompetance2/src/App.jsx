// src/App.js
import Header from "./components/header";
import AboutUs from "./components/aboutUs";
import Form from "./components/form";
import Footer from "./components/footer";
import WelcomePage from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <AboutUs />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
