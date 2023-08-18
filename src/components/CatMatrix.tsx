import { Card } from "@material-tailwind/react";
import { Cat } from "../App";
import { FC } from "react";

interface Props {
  cats: Cat[];
  handleCatClick: (id: string) => void;
}

const CatMatrix: FC<Props> = ({ cats, handleCatClick }) => {
  return (
    <div
      className={`grid grid-cols-4 gap-2 h-[90vh] ${
        cats.length === 8
          ? "grid-rows-2"
          : cats.length === 12
          ? "grid-rows-3"
          : "grid-rows-4"
      }`}
    >
      {cats &&
        cats.map((cat) => (
          <Card
            key={cat.id}
            onClick={() => handleCatClick(cat.id)}
            className={`bg-blue-gray-500`}
          >
            <img
              src={cat.url}
              alt="cat"
              className="h-full object-cover object-center"
            />
          </Card>
        ))}
    </div>
  );
};
export default CatMatrix;
