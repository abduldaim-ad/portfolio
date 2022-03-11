import * as React from 'react';
import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AboutMe from './aboutme';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [items, setItems] = useState(AboutMe);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

          {
            items.map((elem)=>{
              const {id, title, data} = elem;
              return(
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                  

                    <Typography sx={{ width: '33%', flexShrink: 0 }}><b>{title}</b></Typography>
                    <Typography sx={{ color: 'text.secondary' }}>

                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <ul>
                      {
                        data.map((bullets)=>{
                          return (
                            <li>{bullets}</li>                          
                          )
                        })
                      }
                    </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>                 
              )
            })
          }

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Links</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
                <a href='https://github.com/ad551' target='_blank'><GitHubIcon/></a>
                <br/>
                <a href='https://www.linkedin.com/in/abdul-daim-972865208/' target='_blank'><LinkedInIcon/></a>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}