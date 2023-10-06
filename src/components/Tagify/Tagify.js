import React ,{useState} from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '../Buttons/Button';
import InfoBadge from '../InfoBadges/InfoBadge';
import './tagify.css';


function Tags(props) {

    const {label,labelfor,placeholder,onChange,id,className} = props;

    const [open,setOpen] = useState(false);         

    return (
     <Box>
      <Autocomplete
        className={className}
        multiple={true}
        id={id}
        onChange={onChange} 
        open={open}
        onOpen={() => {   ///default close autoComplete popper  
            setOpen(false);
        }}      
        {...props}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((value, index) => (
            <Chip variant="filled"  label={value} {...getTagProps({ index })} />        
          ))
        }   
        renderInput={(params) => (
           <Box>
            <label className="labelClass" for={labelfor}>{label}</label>
            <TextField
            {...params}
            variant="filled"
            // label="freeSolo" 
            placeholder={placeholder}
          />
        </Box>
        )}
      />    
      </Box>    
  );
}

export default Tags;