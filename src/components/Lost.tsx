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
  score: number;
  reset: (getNewCats: boolean) => void;
}

const Lost: FC<Props> = ({ open, score, reset }) => {
  return (
    <Dialog open={open} handler={() => {}}>
      <DialogHeader>You Lost!</DialogHeader>
      <DialogBody divider className="flex-1">
        <p>Your Score was {score}</p>
      </DialogBody>
      <DialogFooter>
        <Button color="light-green" onClick={() => reset(false)}>
          Restart!
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default Lost;
