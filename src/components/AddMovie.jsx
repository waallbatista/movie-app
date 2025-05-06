import { useState } from "react";
import { categories } from "../data/movies";

const AddMovie = ({ setMovies }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleAdd = () => {
    if (!title.trim()) return;
    setMovies((prev) => [
      ...prev,
      { id: Date.now(), title, category },
    ]);
    setTitle("");
  };

  return (
    <div className="add-movie">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Novo filme"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
};

export default AddMovie;
