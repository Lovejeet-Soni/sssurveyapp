import AboutUs from "./About/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import FAQs from "./FAQs/FAQs";
import Footer from "./Footer/Footer";
import Homepage from "./Home/Homepage";
import NavigationBar from "./Nav/NavigationBar";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <NavigationBar />
      <Homepage />
      <Services />
      <Projects />
      <AboutUs />
      <ContactUs />
      <FAQs/>
      <Footer/>
    </div>
  );
}
export default App;
