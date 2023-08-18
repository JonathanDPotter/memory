import {
  Menu,
  MenuHandler,
  IconButton,
  MenuList,
  MenuItem,
  Switch,
} from "@material-tailwind/react";
import { ReactComponent as Hamburger } from "../assets/hamburgerIcon.svg";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setNumberOfCats: Dispatch<SetStateAction<number>>;
  toggleDark: () => void;
  isDark: boolean;
  score: number;
}

const Header: FC<Props> = ({ setNumberOfCats, score, toggleDark, isDark }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 h-[10vh]">
      <h1 className="font-sans text-5xl">Memory </h1>
      <p className="text-xl font-bold">Score: {score}</p>
      <Switch onClick={toggleDark} defaultChecked crossOrigin={undefined} />
      <Menu placement="bottom-end">
        <MenuHandler>
          <IconButton variant="text" className="h-full">
            <Hamburger stroke={isDark ? "#fff" : "#000"} />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => setNumberOfCats(8)}>8 cats</MenuItem>
          <MenuItem onClick={() => setNumberOfCats(12)}>12 cats</MenuItem>
          <MenuItem onClick={() => setNumberOfCats(16)}>16 cats</MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};
export default Header;
