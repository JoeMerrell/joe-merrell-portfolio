import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import navbarImage from "../../assets/images/rainbow4c.png";

function Nav(props) {
  const tabs = ['About', 'Projects', 'Gallery', 'Resume', 'Contact'];
  return (
    <div className="container-fluid">
      <img src={navbarImage} alt="rainbow-mountains" />
      <h1 className="container-fluid">Joe Merrell</h1>
      <ul className="nav">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link link-light decor' : 'link-light nav-link decor'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default Nav;



// function Nav(props) {
  //   const {
  //     categories = [],
  //     setCurrentCategory,
  //     contactSelected,
  //     currentCategory,
  //     setContactSelected,
  //   } = props;
  
  //   return (
  //     <header className="navbar">
  //       <img src={navbarImage} alt="rainbow-mountains" />
  //       <nav>
  //         <h1>JOE MERRELL</h1>
  //         <ul className="flex-row">
  //           <li className="mx-3">
  //             <a href="#about" onClick={() => setContactSelected(false)}>
  //               About me
  //             </a>
              
  //           </li>
  //           <li className="mx-3">
  //             <a href="#about" onClick={() => setContactSelected(false)}>
  //               Projects
  //             </a>
              
  //           </li>
  //           <li className={`mx-3 ${contactSelected && 'navActive'}`}>
  //             <span onClick={() => setContactSelected(true)}>Contact</span>
  //           </li>
  //           {categories.map((category) => (
  //             <li
  //               className={`mx-3 ${
  //                 currentCategory.name === category.name && !contactSelected && 'navActive'
  //                 }`}
  //               key={category.name}
  //             >
  //               <span
  //                 onClick={() => {
  //                   setCurrentCategory(category);
  //                   setContactSelected(false);
  //                 }}
  //               >
  //                 {capitalizeFirstLetter(category.name)}
  //               </span>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //     </header>
  //   );
  // }