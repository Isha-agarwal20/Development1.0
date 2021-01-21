import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Remove from '@material-ui/icons/Remove';
import image from '../images/shahi-paneer.jfif';
import dalmakhni from '../images/dal-makhni.jpg';
import noodles from '../images/noodles.jfif';
import momos from '../images/momos.jpg';
import friedrice from '../images/shezwanfriedrice.jfif';
import chillipotato from '../images/chillypotato.jpg';
const App = () => {
  const [isPreview, setPreview] = useState(false);
  const[name,setName]=useState('');
  const[orgname,setOrgName]=useState('');
  const[empid,setEmpid]=useState('');
  const[mobno,setMobno]=useState('');
  const[emailid,setEmaildid]=useState('');
  const[errors,setError]=useState(false);
  const[successSubmit, setSuccessSubmit]=useState(false);
  const[foodlist, setFoodList]=useState(false);
  const[count, setCount]=useState(0);
  const[payment,setPayment]=useState(false);
 
  const tileData = [
       {
         img: image,
         title: 'Shahi-Paneer',
         price: 'Rs. 200 /-',
       },
       {
        img: dalmakhni,
        title: 'Dal-Makhani',
        price: 'Rs. 150 /-',
       },
       {
        img: noodles,
        title: 'Noodles',
        price: 'Rs. 350 /-',
       },
       {
        img: momos,
        title: 'Momos',
        price: 'Rs. 100 /-',
       },
       {
        img: friedrice,
        title: 'Shezwan Fried Rice',
        price: 'Rs. 170 /-',
       },
       {
        img: chillipotato,
        title: 'Chilly Potato',
        price: 'Rs. 140 /-',
       }
     ];
   

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
     // backgroundColor: theme.palette.success.light,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
  const classes = useStyles();
  
 
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
    <div id="form" className="form">
      
      <form hidden={successSubmit}>
        <div >
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
          onClick={() => {
            validateSubmit()
          }}
        >
          Submit
        </Button>
        </div>
      </form>
      <div hidden={!successSubmit || foodlist}>
          <h1 style={{color: "white"}}>Thankyou for registering </h1>
          <p style={{color: "white"}}>Your Registration no is 234647</p>
          <Button
          variant="outlined"
          style={{color: "white", backgroundColor:"red"}}
          onClick={() => {
            setFoodList(true)
          }}
        >
          Click Me
        </Button>
          
      </div>
      <div hidden={!foodlist}>
      <div  className={classes.root}>
      {/* <img src={'../images/background4.jpg'} width="100" height="50"/> */}
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <h1 style={{color:"white"}}>FoodItem List</h1>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  
                  <AddCircle onClick={()=>setCount(count+1)}/>
                  
                  <Remove onClick={()=>{count<0?setCount(0):setCount(count-1)}}/>
                  
              
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      
      </div>
      <Button
          variant="outlined"
          style={{color: "white", backgroundColor:"green"}}
          onClick={() => {
            setPayment(true)
          }}
        >
          Pay
          {count<0?0:count}
        </Button>
        
      </div>
    </div>
  );
};
export default App;
