import React, { useState } from "react";
import { AddButtonStyled } from "../../styles";

const AddButton = () => {
  const [Added, setAdded] = useState({ name: "", watched: false });

  return (
    <center>
      <form>
        <center>
          <div className="form-group row">
            <label></label>
            <input
              placeholder="Add new Movie"
              type="text"
              onChange={setAdded((name: event.target.value))}
            />
          </div>
          <AddButtonStyled>+Add</AddButtonStyled>
        </center>
      </form>
    </center>
  );
};

export default AddButton;

//searchbar
//movies access
//state

//onchange

{
  /* <form>
<div className="form-group row">
  <label></label>
  <input type="text" className="form-control" />
</div>
</form> */
}
