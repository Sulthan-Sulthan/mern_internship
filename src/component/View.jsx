import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function View() {
    const [view,setView] = useState([])


    const [open, setOpen] = React.useState(false);
    const [deleteIndex,setDeleteIndex]=useState()
  const handleOpen = (index)=>{return setOpen(true), setDeleteIndex(index)};
  const handleClose = () => setOpen(false);
   useEffect(()=>{setView(JSON.parse(localStorage.getItem("student")))},[])
    console.log(view)


    const Delete=()=>{
       let newView = view.filter((item,index)=>{return index!==deleteIndex})
       setView(newView)
       localStorage.setItem("student", JSON.stringify(newView))
       handleClose()
    //    alert("delete")
    }
  return (
    <div>
        <h1>View</h1>
        <table border={1}>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Edit </th>
                <th>Delete </th>
            </tr>

            {view.map((item,i)=>{ 
                return(

                <tr>
                  <td>{++i}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td><button>Edit</button></td>
                  <td><Button onClick={()=>handleOpen(--i)}>Delete</Button></td>
                </tr>

            )})}




        </table>
         
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            are you sure
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Do you want to delete
          </Typography>
          <button onClick={Delete}>Yes</button>
          <button onClick={handleClose}>  No</button>
        </Box>
      </Modal>
    </div>
  )
}
