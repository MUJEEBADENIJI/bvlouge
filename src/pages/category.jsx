import { useParams } from "react-router-dom";
import "./category.css";

function Category() {
  const { type } = useParams();

  return (
    <div className="container">
      <h1>{type} wears</h1>
    </div>
  );
}

export default Category;
