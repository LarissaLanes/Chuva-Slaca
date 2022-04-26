import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function AccordionComponents() {
  return (
    <div>
      <Accordion>
          <AccordionSummary >
              <Typography sx={{width: "100%", flexShrink: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. 
              Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. 
              Fusce auctor eros sed magna ultricies gravida. 
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. 
              Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  
              Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...ver mais
              </Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography sx={{width: "95%", flexShrink: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. 
              Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. 
              Fusce auctor eros sed magna ultricies gravida. 
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. 
              Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  
              Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant.
            </Typography>
          </AccordionDetails>
           <AccordionDetails>
             <Typography sx={{width: "95%", flexShrink: 0}} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. 
              Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. 
              Fusce auctor eros sed magna ultricies gravida. 
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. 
              Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  
              Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
             <Typography sx={{width: "95%", flexShrink: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. 
              Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. 
              Fusce auctor eros sed magna ultricies gravida. 
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. 
              Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  
              Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. 
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  
              Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant.
            </Typography>
          </AccordionDetails>
       
      </Accordion>
    </div>
  );
}
