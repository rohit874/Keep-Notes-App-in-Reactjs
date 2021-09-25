
function Header(props) {
  return (
    <div>
        <nav>
      <h3>G Keep</h3>
      <div className="nav-right">
        <span className="theme-icon">&#9728;</span>
        <label className="switch">
          <input onChange={props.Changetheme} type="checkbox" />
          <span className="slider round"></span>
      </label>
      </div>
      </nav>
    </div>
  );
}

export default Header;
