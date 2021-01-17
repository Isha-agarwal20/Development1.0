import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

const Form = () => {
  const [isPreview, setPreview] = useState(false);

  return (
    <div id="form" className="form">
      <form>
        <fieldset disabled={isPreview}>
          <label>
            <p>Full Name</p>
            <input name="name" />
          </label>
          <label>
            <p>Organization Name</p>
            <input name="orgname" />
          </label>
          <label>
            <p>Employee ID </p>
            <input name="empid" />
          </label>
          <label>
            <p>Mobile No </p>
            <input type="number" name="empid" />
          </label>
          <label>
            <p>Email id </p>
            <input name="emailid" />
          </label>
          <label>
            <p>
              Uploading File
              <input type="file" name="uploadingfile" />
            </p>
          </label>
        </fieldset>

        <Button
          variant="outlined"
          className="button-button"
          onClick={() => {
            setPreview(true);
          }}
        >
          Preview
        </Button>
        <Button
          variant="outlined"
          className="submit-button"
          type="submit"
          onClick={() => {
            window.open("./Registration.js");
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Form;
