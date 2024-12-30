import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import LandingView from "../views/LandingView";
import HomeView from "../views/HomeView";
import BookView from "../views/BookView";
import NotFoundView from "../views/NotFoundView";
import CheckoutView from "../views/CheckoutView";

function GlobalRouter() {
    return (
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<LandingView />} />
          <Route path="/books" element={<Layout><HomeView /></Layout>} />
          <Route path="/books/:id" element={<Layout><BookView /></Layout>} />
          <Route path="/checkout" element={<Layout><CheckoutView /></Layout>} />
          <Route path="*" element={<Layout><NotFoundView /></Layout>} />
        </Routes>        
      </BrowserRouter>
    );
}

const Layout = ({children}) => (
  <>
      <Header />
      {children}
      <Footer />
  </>
);

export default GlobalRouter;
