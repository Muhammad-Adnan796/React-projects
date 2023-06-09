import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Navbar } from "./Components/Navbar";
import { PageNotFound } from "./Components/PageNotFound";
import { Products } from "./Components/Products";
import { Shirts } from "./Components/Shirts";
import { Jeans } from "./Components/Jeans";
import { Users } from "./Components/Users";
import { UsersDetail } from "./Components/UsersDetail";
import { Admin } from "./Components/Admin";
import { Search } from "./Components/Search";

function App() {
  // const navigate = useNavigate();
  // const NavigateTo = (url) => {
  //   navigate(url);
  // };

  // const NavigateToWhere = () => {
  //   let name = "Adnan1";
  //   if (name == "Adnan") {
  //     navigate("/about");
  //   } else {
  //     navigate("/contact");
  //   }
  // };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Shirts />} />
          <Route path="shirts" element={<Shirts />} />
          <Route path="jeanse" element={<Jeans />} />
        </Route>
        <Route path="/search" element={<Search/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />}>
          <Route path="/users/:id" element={<UsersDetail />} />
          <Route path="/users/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <button onClick={() => NavigateTo("/about")}>About</button>
      <button onClick={() => NavigateTo("/contact")}>Contact</button>
      <button onClick={() => NavigateTo("/products")}>Products</button> */}
      {/* <button onClick={() => NavigateToWhere()}>Click Me</button> */}
      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
    </>
  );
}

export default App;
