import React from 'react'
import { Typography } from '@mui/material'

const Typographye = () => {
  return (
    <>
    <Typography variant="h2" gutterBottom color="textSecondary" align='center'  component="h4">
  h1. Heading
</Typography>

<Typography variant="h4" color="secondary" align='right' noWrap  component="h6">
this paragraph  containt nowarap 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique mollitia et qui aut ducimus, minima molestiae, harum quas quibusdam vero. Nihil vitae nobis velit ut, harum error sapiente iste.
</Typography>
<br /><br /><br /><br />
<Typography variant="h4" color="secondary" align='right'   component="h6">
    this paragraph not containt nowarap 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus iure dolorem voluptates facilis perferendis esse ab aliquid itaque quaerat fuga eaque rerum dolorum eius, obcaecati odio eveniet atque est suscipit.
</Typography>
    </>
  )
}

export default Typographye