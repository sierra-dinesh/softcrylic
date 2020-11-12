import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Redirect } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'row'
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    buttonSpace:{
      margin:"30px 20px"
    }
  }));
function Dashboard() {
    const classes = useStyles();
    const [state, setstate] = useState({result:""})
    const [redirect, setredirect] = useState(false);
    const handleChange = (event) => {
      setstate({...state,
        [event.target.name] : parseInt(event.target.value)
      })
    }
    useEffect(() => {
      setTimeout(function() {
        console.log("done")
        setredirect(true)
      },1000*300)
      
    }, [])
    const handleCalc = (type) => {
      if(state.input1 && state.input2){
        if(type === "add") {
          setstate({...state,
            result : state.input1 + state.input2
          })
        }else if(type ==="sub"){
          setstate({...state,
            result : state.input1 - state.input2
          })
        }else if(type ==="mul"){
          setstate({...state,
            result : state.input1 * state.input2
          })
        }else{
          setstate({...state,
            result : state.input1 / state.input2
          })
        }
      }

    }
    if(redirect){
      return <Redirect  to="/"/>
    }
    return (
        <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4} lg={4}>  
          <TextField 
            variant="outlined"
            margin="normal"
            required
            
            label="Input"
            name="input1"
            
            autoFocus
            onChange={(e)=>handleChange(e)}
          />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="input2"
            label="Input 1"
            type="text"
            
            onChange={(e)=>handleChange(e)}
          />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField
            variant="outlined"
            margin="normal"
            disabled
            name="result"
            label="Result"
            type="text"
            value={state.result}
          />
          </Grid>
          
            <Grid item xs={6} sm={2} md={2} lg={2}>
              <Button 
              variant="contained"
              color="primary"
              className={classes.buttonSpace}
              onClick={()=>handleCalc("add")}
              >Add</Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2}>
            <Button 
              variant="contained"
              color="primary"
              className={classes.buttonSpace}
              onClick={()=>handleCalc("sub")}
              >Sub</Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2}>
            <Button 
              variant="contained"
              color="primary"
              className={classes.buttonSpace}
              onClick={()=>handleCalc("mul")}
              >Mul</Button>
            </Grid>
            <Grid item xs={6} sm={2} md={2} lg={2}>
            <Button 
              variant="contained"
              color="primary"
              className={classes.buttonSpace}
              onClick={()=>handleCalc("div")}
              >Div</Button>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}>

            </Grid>
          </Grid>
          </div>
          </Container>
    )
}

export default Dashboard
