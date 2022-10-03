import react from 'react';
import Paper from '@material-ui/core/Paper';



function Header() {
  return (
    <Paper style={{padding:"5px",display:"flex"}}square elevation={3}>
      <img style={{width:"60px"}} src="https://cdn.pixabay.com/photo/2017/02/05/04/18/question-2039120_1280.png"></img>
      <h1 style={{ margin:"0"}}>Blog</h1>
    </Paper>
  );
}

export default Header