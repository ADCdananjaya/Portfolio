import components from "./components/index";

function App() {
  return (
    <div className="bg-lighter-gray">
      <components.Navbar />
      <components.HeroSection />
      <components.About />
      <components.WorkSection />
      <components.Contact />
      <components.Footer />
    </div>
  );
}

export default App;
