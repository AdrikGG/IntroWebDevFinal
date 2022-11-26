import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="title">Adrik Gurganus</div>
      <CustomLink className="btn about" to="/">
        About
      </CustomLink>
      <CustomLink className="btn work" to="/work">
        Work
      </CustomLink>
      <CustomLink className="btn projects" to="/projects">
        Projects
      </CustomLink>
      <CustomLink className="btn contact" to="/contact">
        Contact
      </CustomLink>
    </div>
  );
};

const CustomLink = ({ to, className, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  className = className + (isActive ? ' active' : '');

  return (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  );
};

export default Header;
