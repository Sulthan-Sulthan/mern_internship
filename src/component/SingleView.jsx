import React ,{useEffect,useState}from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



export default function BasicCard() {
  let params = useParams();
  console.log(params)

  const [student,setStudent] =useState({})

  useEffect(()=>{
    let alldata =JSON.parse(localStorage.getItem("student"))
    let  singleStudent = alldata.filter((item,index)=>{ return index == params.id})
      console.log(singleStudent)
      setStudent(singleStudent[0])
       console.log(singleStudent,'alldata')
  },[])
 
  return (
    <Box sx={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      position : "relative",
      top: "165px"}}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {student.name}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {student.phone}
        </Typography>
        <Typography variant="body2">
          {student.email}
          <br />
          {student.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button ><Link to='/view'>view</Link></Button>
      </CardActions>
    </Card>
    </Box>
  
  );
}