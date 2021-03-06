import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

export default function BasicMenu({title, option1, option2, option3}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant='contained'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/Adidas/'}><MenuItem onClick={handleClose}>{option1}</MenuItem></Link>
        <Link to={'/Nike/'}><MenuItem onClick={handleClose}>{option2}</MenuItem></Link>
        <Link to={'/Jordan/'}><MenuItem onClick={handleClose}>{option3}</MenuItem></Link>
      </Menu>
    </div>
  );
}
