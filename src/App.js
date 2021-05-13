import "./sass/main.scss";
import Sidebar from "./commons/sidebar";
import Header from "./commons/header";
import Features from "./commons/features";
import Stories from "./commons/stories";
import Homes from "./commons/homes";
import Gallery from "./commons/gallery";
import Footer from "./commons/footer";
import Realtors from "./commons/realtors";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Stories />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
