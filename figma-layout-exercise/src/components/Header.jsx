import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const header = (props) => {
  return (
    <div className="header">
      <FaApple style={{ fontSize: "3rem"}} />
      <nav>
        <ul>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iWatch</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <CiSearch style={{ fontSize: "1.5rem"}}/>
        <p style={{ fontWeight: "bold"}}>|</p>
        <FiShoppingBag style={{ fontSize: "1.5rem"}}/>
      </div>
    </div>
  );
};

export default header;
