import { Button } from '@mui/material'
import React from 'react'
import AddAlertIcon from '@mui/icons-material/AddAlert';

const MaterialButton = () => {
  return (
    <div>
    <div>
  <h1>variant</h1>
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>

</div>
<div>
    <h1>Colors</h1>
    <Button color="secondary">Secondary</Button>
    <Button color="success"> Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
</div>
<div>
<h1>Icons </h1>
<Button  startIcon={<AddAlertIcon />}>addalert</Button>
</div>

</div>
  )
}

export default MaterialButton