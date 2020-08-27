import React from 'react';
import './Header.css'
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


function Header({title,description}) {
 
      return (
    <nav className="header">    
            <h1>{title}</h1>
        <Tooltip title={description}>
        <IconButton aria-label="delete">
          <HelpIcon />
        </IconButton>
      </Tooltip>
   </nav>
    );
}

export default Header;