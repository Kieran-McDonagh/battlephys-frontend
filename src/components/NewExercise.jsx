import React, { useState } from "react";

const NewExercise = ({
  item,
  name,
  setName,
  number,
  setNumber,
  type,
  setType,
}) => {
  const [exerciseName, setExerciseName] = useState(name);
  const [exerciseNumber, setExerciseNumber] = useState(number);
  const [exerciseType, setExerciseType] = useState(type);

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setExerciseType(selectedType);
    setType(selectedType);
  };

  return (
    <>
      <div className="exercise-details">
        <label htmlFor={`exercise-name${item}`}>Exercise name: </label>
        <input
          className="exercise-name"
          id={`exercise-name${item}`}
          type="text"
          value={exerciseName}
          onChange={(event) => {
            setExerciseName(event.target.value);
            setName(event.target.value);
          }}
        />
        <label htmlFor={`exercise-type${item}`}>Type: </label>
        <select
          className="exercise-type"
          name={`exercise-type${item}`}
          id={`exercise-type${item}`}
          value={exerciseType}
          onChange={handleTypeChange}
        >
          <option value="Reps">Reps</option>
          <option value="Distance(m)">Distance(m)</option>
          <option value="Time(min)">Time(min)</option>
        </select>
        <label htmlFor={`exercise-number${item}`}>Number:</label>
        <input
          className="exercise-number"
          id={`exercise-number${item}`}
          type="number"
          value={exerciseNumber}
          onChange={(event) => {
            setExerciseNumber(event.target.value);
            setNumber(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default NewExercise;
