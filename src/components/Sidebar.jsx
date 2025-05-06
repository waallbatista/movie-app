const Sidebar = ({ categories, selected, onSelect }) => (
    <aside className="sidebar">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={selected === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </aside>
  );
  
  export default Sidebar;
  