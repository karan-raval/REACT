import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Product = () => {
  const [data,setData] = useState([])
  const [Delete,setDelete] = useState(true)

 useEffect(()=>{
     fetch(`https://mock-server-app-4tp9.onrender.com/product`)
     .then((Res)=>Res.json())
     .then((res)=>{
      setData(res)
     })
     .catch((err)=>{
       console.log(err)
     })
 },[Delete])

 const handleDelete = (id)=>{
     fetch(`https://mock-server-app-4tp9.onrender.com/product/${id}`,{
       method : "DELETE"
     })
     .then((res)=>res.json())
     .then((res)=>{
       console.log(res)
       setDelete(!Delete)
     })
     .catch((Err)=>console.log(Err))
 }

  return (
    <div className='products'>
        {
    
    data.map((el)=>{
      return (
        <div key={el.id}>
        <Link className='noline' to={`/product/${el.id}`} >
        <Card  className='cards'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={el.imageURL}
            alt={el.product}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {el.product}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {el.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             <del className='linethrough'>{el.strikedOffPrice}</del> - {el.price}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>handleDelete(el.id)}>
            DELETE
          </Button>
          
          <Link  to={`/product/edit/${el.id}`}><Button size="small" color="primary">Edit</Button></Link>
          
        </CardActions>
      </Card></Link></div>
      )
   })
 }
   
</div>
)
}
export default Product