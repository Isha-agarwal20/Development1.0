import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

const App = () => {
  const [isPreview, setPreview] = useState(false);
  const[name,setName]=useState('');
  const[orgname,setOrgName]=useState('');
  const[empid,setEmpid]=useState('');
  const[mobno,setMobno]=useState('');
  const[emailid,setEmaildid]=useState('');
  const[errors,setError]=useState(false);
  const[successSubmit, setSuccessSubmit]=useState(false);

  const validatePreview=()=>{
    if(name.length>0 && orgname.length>0 && empid.length>0 && mobno.length>0 && emailid.length>0)
    {
      setPreview(true);
      
      setError(false);
    }
    else
    {
       setError(true);
    }
   
  }

  const validateSubmit=()=>{
    if(name.length>0 && orgname.length>0 && empid.length>0 && mobno.length>0 && emailid.length>0)
    {
      
      setSuccessSubmit(true);
      setError(false);
    }
    else
    {
       setError(true);
    }
  }
  const handleName=(e)=>{
    console.log(e);
  }

  return (
    <div id="form" >
      
      <form hidden={successSubmit}>
        <div className="form">
        <fieldset disabled={isPreview}>
          <label>
            <p className="font-color">Full Name</p>
            <input className="textfield" style={{color: "white"}} name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <span hidden={!errors} style={{color: "red"}}><p>This field is required</p></span>
          </label>
          <label className="font-color">
            <p>Organization Name</p>
            <input className="textfield" style={{color: "white"}} name="orgname" value={orgname} onChange={(e)=>setOrgName(e.target.value)}/>
            <span hidden={!errors} style={{color: "red"}}><p>This field is required</p></span>
          </label>
          <label className="font-color">
            <p>Employee ID </p>
            <input  className="textfield" style={{color: "white"}} name="empid" value={empid} onChange={(e)=>setEmpid(e.target.value)}/>
          </label>
          <span hidden={!errors} style={{color: "red"}}><p>This field is required</p></span>
          <label className="font-color">
            <p>Mobile No </p>
            <input  className="textfield" style={{color: "white"}} type="number" name="mobno" value={mobno} onChange={(e)=>setMobno(e.target.value)}/>
            <span hidden={!errors} style={{color: "red"}}><p>This field is required</p></span>
            <span hidden={mobno.length>0 && mobno.length==10} style={{color: "white"}}><p>length should be 10 digits</p></span>
          </label>
          <label className="font-color">
            <p>Email id </p>
            <input className="textfield" style={{color: "white"}} name="emailid" value={emailid} onChange={(e)=>setEmaildid(e.target.value)}/>
            <span hidden={!errors} style={{color: "red"}}><p>This field is required</p></span> 
          </label>
          <label className="font-color">
            <p>
              Uploading File
              <input className="textfield" type="file" name="uploadingfile" />
            </p>
          </label>
        </fieldset>
        </div>
        <div className="buttons">
        <Button
          style={{color: "white", backgroundColor:"orange"}}
          variant="outlined" 
          onClick={() => {
            validatePreview();
          }}
        >
          Preview
        </Button>
        <Button
          variant="outlined"
          style={{color: "white", backgroundColor:"red"}}
          type="submit"
          onClick={() => {
            validateSubmit()
          }}
        >
          Submit
        </Button>
        </div>
      </form>
      <div hidden={!successSubmit}>
          <h1>Registration no is 234647</h1>
      </div>
    </div>
  );
};
export default App;
