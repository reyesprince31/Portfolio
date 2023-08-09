import PropTypes from "prop-types";

function SubLink({ subItem }) {
  return <span>{subItem}</span>;
}

SubLink.propTypes = {
  subItem: PropTypes.string,
};

export default SubLink;
