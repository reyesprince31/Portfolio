function NavLink({ text, sticky }) {
  return (
    <a
      href={`#${text}`}
      className={`block font-semibold capitalize ${
        sticky ? "hover:bg-gray-300" : "hover:bg-gray-800"
      } mt-1 px-2 py-1 sm:ml-2`}
    >
      {text}
    </a>
  );
}

export default NavLink;
