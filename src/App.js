import AboutUs from "./About/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import FAQs from "./FAQs/FAQs";
import Footer from "./Footer/Footer";
import Homepage from "./Home/Homepage";
import Services from "./Services/Services";

function App() {
  return (
    <div>
      <Homepage />
      <AboutUs />
      <Services />
      {/* <Projects /> */}
      <ContactUs />
      <FAQs/>
      <Footer/>
    </div>
  );
}
export default App;
