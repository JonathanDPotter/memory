import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { FC } from "react";

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const Modal: FC<Props> = ({ open, handleOpen }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Welcome to the memory game!</DialogHeader>
      <DialogBody divider className="flex-1">
        <p>
          This is a game that will test your memory with images of cats. in each
          round you will click on a cat image and the images will be shuffled
          around. Don't click the same cat twice! You earn a point for each
          unique cat that you click, but you lose if you click a cat for the
          second time.
        </p>
        <img
          src="https://cdn2.thecatapi.com/images/LIQSvUemz.jpg"
          alt="maine coon"
          className="max-w-[100%] mx-auto my-3 max-h-[300px] rounded-lg shadow-md shadow-blue-gray-700"
        />
      </DialogBody>
      <DialogFooter>
        <Button color="light-green" onClick={handleOpen}>
          Start!
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default Modal;
