import React from "react";
import { DeleteButtonStyled } from "../../styles";

import movieStore from "../../stores/MovieStore";

const DeleteButton = ({ movieId }) => {
  const handleDelete = () => {
    movieStore.deleteMovie(movieId);
  };
  return (
    <>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </>
  );
};

export default DeleteButton;
