import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavMenu({ title, image, link, children }) {
  if (!children) {
    return (
      <li>
        <Link to={link}>{title}</Link>
      </li>
    );
  } else {
    if (image) {
      const imagez = <img className="w-6 mask mask-circle mr-1" src={image} />;
      return imagez;
    }
    return (
      <li>
        <details>
          <summary>
            <div className="flex flex-row items-center">
              {image}
              {title}
            </div>
          </summary>
          <ul className="rounded-none p-2 right-[0.125rem] bg-primary">{children}</ul>
        </details>
      </li>
    );
  }
}

NavMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default NavMenu;
