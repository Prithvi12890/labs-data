import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer,List,ListItem,ListItemText,IconButton} from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';


const SideBar = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
    const navButtons = [
        {id:0,name: "Home", link:"/labs-data/home"},
        {id:1,name: "Labs", link:"/labs-data/home"},
        {id:2,name: "Contribute", link:"/labs-data/home"},
        {id:3,name: "About", link:"/labs-data/home"},
    ];

  return (
      <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List sx={{width:'250px'}}>
            {
                navButtons.map((navButton) => (
                    <ListItem button key={navButton.name} >
                        <ListItemText>
                            <Link to={navButton.link}>{navButton.name}</Link>
                        </ListItemText>
                    </ListItem>
                ))
            }
        </List>
    </Drawer>
    <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon color='inherit'/>
    </IconButton>
    </>
  )
}

export default SideBar
