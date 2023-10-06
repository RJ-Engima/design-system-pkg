import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Icon from '@mui/material/Icon';
import "./accordion.css";   

function ControlledAccordions(  
  { AccContent, arialabel, IconArrrow, className,  
    controlled,accordionbody,accordionheader,defaultExpanded,disabled,icon,customIcon}    
  ) {   
    const [expanded, setExpanded] = React.useState(false);    

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);  
    };  

    const renderAccordion = (item) => {     
        if(controlled) {  
         return ( 
          <Accordion className={className} expanded={expanded === item.id}  
          onChange={handleChange(item.id)} defaultExpanded={defaultExpanded = item.defaultExpanded}
          disabled={disabled = item.disabled}>
             <AccordionSummary className={accordionheader} 
              expandIcon={<span className={IconArrrow ? 'acc-up': ''} />} aria-controls={arialabel} id={item.id}>  
             {customIcon ? <Icon className="customIcon">{item.icon}</Icon> : ''}
               <Typography>{item.Accheader}</Typography>
             </AccordionSummary>  
             <AccordionDetails className={accordionbody}>   
                 <Typography>
                  {item.Accbody}    
                 </Typography>   
             </AccordionDetails>        
         </Accordion> 
         )  
        } else {  
          return (    
            <Accordion className={className} defaultExpanded={defaultExpanded = item.defaultExpanded}
            disabled={disabled = item.disabled}>   
             <AccordionSummary className={accordionheader}
              expandIcon={<span className={IconArrrow? 'acc-up': ''} />}
               aria-controls={arialabel} id={item.id}>    
               {customIcon ? <Icon className="customIcon">{item.icon}</Icon> : ''}
               <Typography>{item.Accheader}</Typography>
             </AccordionSummary>  
             <AccordionDetails className={accordionbody}> 
                 <Typography>     
                  {item.Nested ?         
                    <div>{item.Nested.map((sub) => {      
                      return (  
                        <Accordion className={className}  
                        defaultExpanded={defaultExpanded = item.defaultExpanded}
                        disabled={disabled = item.disabled}>         
                        <AccordionSummary className={accordionheader} 
                          expandIcon={<span className={IconArrrow? 'acc-up' : ''} />} 
                          aria-controls="panel1bh-content">  
                          {customIcon ? <Icon className="customIcon">{item.icon}</Icon> : ''}
                          <Typography>    
                              {sub.Subheader} 
                          </Typography>     
                        </AccordionSummary>
                        <AccordionDetails className={accordionbody}>
                          <Typography>   
                            {sub.Subbody}      
                          </Typography> 
                        </AccordionDetails>   
                      </Accordion>  
                      ) 
                    })}
                    </div>    
                  :
                    <div> 
                     <Typography>{item.Accbody}</Typography>
                    </div> }    
                 </Typography>    
             </AccordionDetails>   
         </Accordion>   
          );    
        }
    }

    return (
        <div>
            {AccContent.map((item) => { 
              {return  renderAccordion(item)}    
            })}
        </div>
    );
}

export default ControlledAccordions;  