import "./App.css";
import { makeStyles, useTheme } from "@material-ui/core";
import Navbar from "./components/navbar";
import ProjectCarousel from "./components/Carousel.js";
import Project from "./components/Project.js";
import {
  fgpa,
  discord,
  research,
  competition,
  evil,
} from "./components/Images.js";
import { Box, Grid } from "@mui/material";
import LogoGrid from "./components/LogoGrid.js";
const constants = [
  {
    title: "underrgrad1",
    text: "ssss",
  },
];
function App() {
  return (
    <>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box mt={8} display="flex" flexDirection="column" alignItems="center">
            <p>
              My name is Keandre Webb, and I am a third year Honors Bachelor of
              Computer Engineering student at York University. As a passionate
              software developer, I am currently seeking opportunities to
              further develop my skills and knowledge through co-op and
              internship experiences. My drive to learn and grow has led me to
              pursue this field, and I am excited to take on new challenges and
              collaborate with professionals in the industry.
            </p>{" "}
          </Box>
        </Grid>
      </Grid>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        Experience{" "}
      </h2>
      <Project
        title="Undergraduate Research Assistant"
        text="As an Undergraduate Research Assistant at York University from May 2022 to Present, I worked with Graduate students on research projects, 
        learning new skills and utilizing programming APIs such as TensorFlow. I also utilized Microsoft PowerPoint to create weekly presentations
        for my supervisors, communicating regularly with Graduate students and other research assistants to ensure project success. At a reputable research conference, I presented an update on the progress and future plans of the research project.
        "
      />
      <ProjectCarousel items={research} />
      <Project
        title="York Programming Competition - 2nd Place"
        text="During the York University Programming Competition, I had the opportunity to work with a talented team of individuals to solve a challenging programming problem in a 
        limited amount of time.Collaborating closely, we developed a comprehensive solution and a polished presentation to impress the judges.Our hard work paid off, as we earned second place in the competition.I was proud to demonstrate our solution and showcase our success to the judges.
        "
      />
      <ProjectCarousel items={competition} />
      <Project
        title="Evil People Card Game (WIP)"
        text="I'm currently working on the Evil People Card Game, an engaging online multiplayer card game built using React, HTML, CSS, and JavaScript with the Material-UI (MUI) framework. 
        As a collaborative effort within a team, we integrated a Python JSON database, enabling efficient management of player data, game state, and card deck configurations.Additionally, we developed a highly scalable game server architecture that facilitates hosting multiple game instances simultaneously, accommodating up to 10 players per game.
        "
      />
      <ProjectCarousel items={evil} />
      <Project
        title="FGPA Calculator"
        text="As part of a challenging project, I undertook the design and implementation of an updated calculator with enhanced functionalities using Verilog HDL and Quartus. The primary objective was to create a versatile calculator that could efficiently perform addition, subtraction, multiplication, and division operations. The project utilized the DE10-Lite board's built-in clock and various input components, such as push buttons, switches, and 7-segment displays."
      />
      <ProjectCarousel items={fgpa} />
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Technical Skills
      </h2>
      <h3 style={{ display: "flex", justifyContent: "center" }}>Languages</h3>
      <LogoGrid />
    </>
  );
}

export default App;
