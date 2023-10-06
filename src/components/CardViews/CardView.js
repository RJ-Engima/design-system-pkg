import * as React from 'react';
import './cardview.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';
  
 function Cards(props) {
  const {className,showLeftIcon,showRightIcon,leftIcon,rightIcon,captionText,bodyText} = props;
  return (
    <Card className={className ? `dsCard ${className}` : 'dsCard'}>  
      {showLeftIcon ? <IconButton className='leftIcon'>{leftIcon}</IconButton> : ''}
      <Box>
        <CardContent sx={{ flex: '1 0 auto' }}> 
          <p>{captionText}</p>
          <h5>{bodyText}</h5> 
        </CardContent>
      </Box>
      {showRightIcon ? <IconButton className='rightIcon'>{rightIcon}</IconButton> : ''}
    </Card>
  );
}

export default Cards;