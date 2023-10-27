import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ textTransform: "none" }}
      >
        Create a new workout
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        <DialogContent>
          <div className="exercise-details">
            <label htmlFor="exercise1">Exercise name: </label>
            <input id="exercise1" type="text" />
            <label htmlFor="reps1"> reps: </label>
            <input id="reps1" type="number" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ textTransform: "none" }}>
            Create workout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
