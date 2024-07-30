import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show'); // Collapse the navbar
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
      <FontAwesomeIcon
          icon={faGraduationCap}
          className="me-2"
          style={{ height: "35px", padding: "0 8px" }}
        />
        <Link className="navbar-brand" to="/#home">Springdale Public School</Link>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto p-2">
            <li className="nav-item">
              <Link className="nav-link active" smooth to="/#home" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#about-us" onClick={closeNavbar}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#academics" onClick={closeNavbar}>Academics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#admissions" onClick={closeNavbar}>Admissions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#faculty" onClick={closeNavbar}>Faculty</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#students" onClick={closeNavbar}>Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#gallery" onClick={closeNavbar}>Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" smooth to="/#contact-us" onClick={closeNavbar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






// const Navbar = () => {
//   return (
//     <>
//       <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <div className="container-fluid">
//           <Link className="navbar-brand d-flex align-items-center" to="/">
//             <FontAwesomeIcon
//               icon={faGraduationCap}
//               className="me-2"
//               style={{ height: "35px" }}
//             />
//             <span>Springdale Public School</span>
//           </Link>
//           <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about-us">
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/academics">
//                   Academics
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admissions">
//                   Admissions
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/faculty">
//                   Faculty
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/students">
//                   Students
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/gallery">
//                   Gallery
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact-us">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;