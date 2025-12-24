import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/mainlayout";

import Landing from "./pages/landing";
import Category from "./pages/category";
import Cart from "./pages/cart";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Landing />} />
          <Route path="category/:type" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
