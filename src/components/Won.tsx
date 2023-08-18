import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { FC } from "react";

interface Props {
  open: boolean;
  reset: (getNewCats: boolean) => void;
}

const Lost: FC<Props> = ({ open, reset }) => {
  return (
    <Dialog open={open} handler={() => {}}>
      <DialogHeader>You Won!</DialogHeader>
      <DialogBody divider className="flex-1">
        <img
          src="https://cdn.memegenerator.es/imagenes/memes/full/31/82/31820286.jpg"
          alt="cat"
          className="h-[300px] mx-auto"
        />
      </DialogBody>
      <DialogFooter>
        <Button color="light-green" onClick={() => reset(true)}>
          Restart!
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default Lost;
