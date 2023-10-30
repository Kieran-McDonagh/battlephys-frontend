import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import NewExercise from "./NewExercise";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [countArray, setCountArray] = useState([0]);
  const [workoutDetails, setWorkoutDetails] = useState({});
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("Reps");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddExercise = () => {
    setCount((prevCount) => prevCount + 1);
    setCountArray((prevCountArray) => [...prevCountArray, count]);
    setWorkoutDetails((prevDetails) => ({
      ...prevDetails,
      [name]: {
        [type]: number,
      },
    }));
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
            maxWidth: "80%",
          },
        }}
      >
        <DialogContent>
          <label
            className="workout-description-label"
            htmlFor="workout-description"
          >
            Workout description:{" "}
          </label>
          <input
            id="workout-description"
            type="text"
            value={workoutDetails.workoutDescription || ""}
            onChange={(event) => {
              setWorkoutDetails((prevDetails) => ({
                ...prevDetails,
                workoutDescription: event.target.value,
              }));
            }}
          />
          {countArray.map((item) => {
            return (
              <NewExercise
                name={name}
                setName={setName}
                number={number}
                setNumber={setNumber}
                item={item}
                key={item}
                workoutDetails={workoutDetails}
                setWorkoutDetails={setWorkoutDetails}
                type={type}
                setType={setType}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddExercise} sx={{ textTransform: "none" }}>
            Add exercise
          </Button>
          <Button
            onClick={() => {
              handleAddExercise;
              console.log(workoutDetails);
              // post workout here then optimistically render
              handleClose();
            }}
            sx={{ textTransform: "none" }}
          >
            Create workout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
