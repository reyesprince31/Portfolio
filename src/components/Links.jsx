import PropTypes from "prop-types";

function Links({ item }) {
  return (
    <div className="relative h-full flex items-center p-4 hover:bg-slate-400 hover:text-stone-600 transition-colors ease-in-out cursor-pointer">
      <span className="font-bold">{item}</span>
    </div>
  );
}

Links.propTypes = {
  item: PropTypes.string,
};

export default Links;
