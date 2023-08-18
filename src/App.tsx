import axios from "axios";
import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import shuffle from "./utils/shuffle";
import Lost from "./components/Lost";
import CatMatrix from "./components/CatMatrix";
import Won from "./components/Won";
import api from "./api";

export interface Cat {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
}

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [numberOfCats, setNumberOfCats] = useState(12);
  const [cats, setCats] = useState<Cat[]>([]);
  const [picked, setPicked] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [lost, setLost] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [won, setWon] = useState(false);

  const toggleDark = () => setIsDark((prev) => !prev);

  const handleCatClick = (id: string) => {
    picked.includes(id) ? setLost(true) : setPicked((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    setCats((prev) => shuffle(prev));
  };

  const reset = (getNewCats: boolean) => {
    setWon(false);
    setLost(false);
    setScore(0);
    setPicked([]);
    console.log(getNewCats);
    getNewCats && getCats();
  };

  const getCats = async () => {
    setCats(await api.getCats(numberOfCats));
  };

  useEffect(() => {
    getCats();
  }, [numberOfCats]);

  useEffect(() => {
    score === numberOfCats && setWon(true);
  }, [score, numberOfCats]);

  return (
    <div
      className={`h-screen flex flex-col ${
        isDark ? "bg-black text-white" : ""
      }`}
    >
      <Header {...{ score, setNumberOfCats, toggleDark, isDark }} />
      <CatMatrix {...{ cats, handleCatClick }} />
      <Welcome open={welcome} handleOpen={() => setWelcome((prev) => !prev)} />
      <Lost open={lost} {...{ score, reset }} />
      <Won open={won} {...{ reset }} />
    </div>
  );
};
export default App;
