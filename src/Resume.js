import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Personal Information</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>30th January, 2002</li>
            <li>Address: House#DN-304, Street#5, Sector 4A, Amin Town, Khayaban-e Sir Syed, Rawalpindi</li>
            <li>Mobile No: +92 347 6794931</li>
            <li>EEmail: gdaim551@gmail.com</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Objective</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>A highly determined and hard-working individual looking for a challenging position 
          to contribute to the success of the company and gain practical experience as well.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Technical Skills</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Languages: Reactjs, JavaScript, HTML/CSS/Bootstrap/Material-UI, Java, C++, C</li>
            <li>Wordpress Development</li>
            <li>Software Usage: MS Office, VS Code, Adobe Illustrator, Adobe XD</li>
            <li>Typing Speed: 43 WPM</li>
            <li>Major Courses: OOP, Data Structures, Database, Software Engineering, Software </li>
            <li>Requirement Engineering, Human Computer Interaction, Operating Systems</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Education</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>BS Software Engineering (6th Semester)</li>
            <li>FSc. Pre-Engineering</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Strengths</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Good written and communication skills</li>
            <li>Creative thinker</li>
            <li>Team leading abilities</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}><b>Achievements</b></Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Did internship of 6 weeks at Invictus360 and gained experience of mobile and web designing</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
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
