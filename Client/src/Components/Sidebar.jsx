import React from "react";
import "../Assets/fontawesome-free-6.2.1-web/css/solid.css";
import "../Assets/fontawesome-free-6.2.1-web/css/all.css";
import "../Assets/fontawesome-free-6.2.1-web/css/brands.css";
import "../Assets/fontawesome-free-6.2.1-web/css/fontawesome.css";
import Form from "./Form";
// import { Link } from "react-router-dom";
// import Toggle from "./Toggle";
// import { useUser } from "../context/UserContext";

function Sidebar({ show, close }) {
  //   const [active, setActive] = useState("dashboard");
  //   useEffect(() => {
  //     setActive(window.location.pathname);
  //   }, []);

  //   const { user, loading } = useUser();
  //   if (loading) return <div>Loading...</div>;
  return (
    <>
      <section>
        <aside
          className="hidden md:block fixed top-0 left-0 md:w-80 lg:w-96 h-full md:overflow-x-hidden"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto overflow-x-hidden hidden md:block py-5 pl-3 lg:px-4 h-full bg-gray-300 border-r border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <Form />
          </div>
        </aside>
      </section>
    </>
  );
}

export default Sidebar;
