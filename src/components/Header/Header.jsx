import "./Header.css";
function Header(props) {
  const { handleChange, handleClick, idea } = props;
  return (
    <header>
      <span>
        Compose a one sentence idea for a novel and we will come up with the
        title, cover art, and plot summary
      </span>
      <input id="idea" type="text" value={idea} onChange={handleChange} />
      <button className="btn" id="print-btn" onClick={handleClick}>
        Print My Novel
      </button>
    </header>
  );
}
export default Header;
