interface NavLink {
  href: string;
  title: string;
}
const NavLink = ({ href, title }: NavLink) => {
  return (
    <a
      href={href}
      className="block text-base py-2 transition-all duration-300 hover:text-amber-300 md:text-lg lg:text-xl"
    >
      {title}
    </a>
  );
};

export default NavLink;
