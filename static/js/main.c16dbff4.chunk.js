(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(62)},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(27),o=n.n(r),l=n(28),s=n(1);const c=s.a.nav`
  position: fixed;
  top: 0;
  left: 0; /* Ensure it starts from the left edge */
  right: 0; /* Ensure it stretches to the right edge */
  background: #f0f4f8; /* Light gray */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem; /* Uniform padding */
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,d=s.a.h2`
  color: #2c3e50; /* Dark blue */
  font-size: 1.5rem;
  font-weight: bold;
`,m=s.a.div`
  display: flex;
  gap: 1rem; /* Spacing between links */
  align-items: center; /* Vertical alignment */
  /* Removed flex-grow and margin-left */
`,u=Object(s.a)(l.Link)`
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50; /* Dark blue */
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #1abc9c; /* Teal */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;var p=()=>i.a.createElement(c,null,i.a.createElement(d,null,"Keandre Webb"),i.a.createElement(m,null,i.a.createElement(u,{to:"about",smooth:!0,duration:500},"About Me"),i.a.createElement(u,{to:"experience",smooth:!0,duration:500},"Experience"),i.a.createElement(u,{to:"projects",smooth:!0,duration:500},"Projects"),i.a.createElement(u,{to:"contact",smooth:!0,duration:500},"Contact")));const g={aboutMe:{name:"Keandre Webb",phone:"289-654-7008",email:"keandrewinston@gmail.com",linkedin:"https://www.linkedin.com/in/keandre-webb",github:"https://github.com/Keandre",bio:"Bachelor of Engineering in Computer Engineering student at York University with hands-on experience in technical roles, research, and software development. Skilled in various programming languages and tools, with a strong foundation in data analysis, machine learning, and digital systems design.",photo:"../../images/linkedin_profile_picture.jpeg"},experience:[{title:"Senior Technical Student",company:"Toronto Hydro",location:"Toronto, ON",duration:"September 2023 \u2013 August 2024",description:["Utilized SAP ERP and BMC Remedy Ticketing System for the generation of purchase requests and management of invoice receipts.","Leveraged Microsoft Excel for diverse operational tasks, including progress tracking, financial data analysis, and graphical data presentation.","Developed detailed user manuals and instructional guides on SAP, Excel, and other software applications. Enhanced workflow optimization through PowerShell scripting, increasing team proficiency and workflow efficiency.","Led and motivated team meetings and work-related projects by creating and assigning tasks to other Planning Analysts and communicating with stakeholders to ensure timely and successful completion."]},{title:"Undergraduate Research Assistant",company:"York University",location:"Toronto, ON",duration:"May 2022 \u2013 September 2023",description:["Assisted in writing the 2023 paper \u201cAerosol Transmission of COVID-19 and Other Airborne Diseases in Office Environments Using Computational Fluid Dynamic Modeling and Machine Learning\u201d published in York University\u2019s repository.","Led the programming efforts, including data formatting and machine learning model training with TensorFlow and other APIs for the aforementioned paper, providing critical insights into airborne disease transmission in office environments.","Created weekly presentations to inform supervisors on project and task development and communicated with graduate students on progress and next steps.","Presented research progress and future plans at a reputable research conference to other professors and answered questions about research."]}],projects:[{name:"York University Programming Competition | 2nd Place",date:"October 2020",description:"Delivered a comprehensive presentation to a panel of judges, outlining our optimized solution for a complex algorithmic challenge involving Conway\u2019s Game of Life. Spearheading the team project, I designed a robust object-oriented approach in Python that utilized effective data structures to manage large grid sizes while adhering to memory constraints. I led the team in debugging and refactoring the code to enhance efficiency and ensure accuracy, all while meeting competition standards. Our efforts culminated in a second-place finish among a dozen competing teams.",images:["https://i.imgur.com/oEMo76F.png","https://i.imgur.com/zBISGYv.png","https://imgur.com/woH7vCc.png","https://i.imgur.com/LA7EMRx.png"]},{name:"FPGA Calculator",date:"December 2022",description:"Planned and assisted in the development of a fully functional calculator on the FPGA DE-10 Lite, utilizing Verilog for efficient hardware programming and demonstrating a comprehensive understanding of digital systems design. I implemented user interaction features, allowing users to select numbers and perform various arithmetic operations through switches. Additionally, I skillfully utilized 7-segment displays to provide clear, real-time representations of input numbers and computation results, showcasing my adeptness in hardware interfacing and data representation techniques.",images:["https://i.imgur.com/xziizeW.png","https://i.imgur.com/N892NMV.png"]}],coursework:["Digital Systems Engineering","Advanced Object Oriented Programming","Fundamentals of Data Structures","Introduction to Database Systems","Design and Analysis of Algorithms","Digital Logic Design"],technicalSkills:{languages:["Java","Python","C/C++","C#","RISC-V","R","HTML/CSS","JavaScript","Verilog","SQL"],general:["Linux","LaTeX","Microsoft 365 Suite"],frameworks:["JUnit","unittest","React"],developmentTools:["Git","Google CoLab","GitHub","VS Code","PyCharm","IntelliJ","Eclipse","Quartus","JIRA"],libraries:["TensorFlow","Keras","NumPy","MatPlotLib"]}},h=s.a.section`
  padding: 100px 20px 50px 20px;
  background: #ffffff; /* White */
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=s.a.div`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,b=s.a.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`,E=s.a.div`
  flex: 1;
  color: #2c3e50; /* Dark blue */
  font-family: 'Roboto', sans-serif;
`;var x=()=>{const{aboutMe:e}=g;return i.a.createElement(h,{id:"about"},i.a.createElement("h2",null,"About Me"),i.a.createElement(f,null,i.a.createElement(b,{src:e.photo,alt:"Profile"}),i.a.createElement(E,null,i.a.createElement("p",null,e.bio),i.a.createElement("p",null,i.a.createElement("strong",null,"Contact:")," ",e.phone," | ",e.email),i.a.createElement("p",null,i.a.createElement("strong",null,"Links:")," ",i.a.createElement("a",{href:e.linkedin,target:"_blank",rel:"noopener noreferrer"},"LinkedIn")," ","|"," ",i.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"GitHub")))))},y=n(16),v=(n(53),n(3));const k=s.a.section`
  padding: 50px 20px;
  background: #f7f9fc; /* Light gray */
`;var w=()=>{const{experience:e}=g;return i.a.createElement(k,{id:"experience"},i.a.createElement("h2",null,"Professional Experience"),i.a.createElement(y.VerticalTimeline,null,e.map((e,t)=>i.a.createElement(y.VerticalTimelineElement,{key:t,date:e.duration,iconStyle:{background:"#1abc9c",color:"#fff"},icon:i.a.createElement(v.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company,", ",e.location),i.a.createElement("ul",null,e.description.map((e,t)=>i.a.createElement("li",{key:t},e)))))))},S=(n(54),n(32));const P=s.a.section`
  padding: 50px 20px;
  background: #ffffff; /* White */
`,A=s.a.div`
  max-width: 1000px;
  margin: 0 auto;
`,L=s.a.div`
  margin-bottom: 50px;
`,C=s.a.h3`
  color: #2c3e50; /* Dark blue */
`,D=s.a.p`
  color: #34495e; /* Slightly lighter dark blue */
`,j=s.a.div`
  border: 2px solid #2c3e50; /* Dark blue border */
  border-radius: 8px; /* Optional: Rounded corners */
  padding: 10px; /* Optional: Padding inside the border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
`;var M=()=>{const{projects:e}=g;return i.a.createElement(P,{id:"projects"},i.a.createElement("h2",null,"Projects & Accomplishments"),i.a.createElement(A,null,e.map((e,t)=>i.a.createElement(L,{key:t},i.a.createElement(C,null,e.name," | ",e.date),i.a.createElement(j,null,i.a.createElement(S.Carousel,{showThumbs:!1,autoPlay:!0,infiniteLoop:!0,interval:3e3,stopOnHover:!0},e.images.map((t,n)=>i.a.createElement("div",{key:n},i.a.createElement("img",{src:t,alt:`${e.name} screenshot ${n+1}`}))))),i.a.createElement(D,null,e.description)))))};const z=s.a.section`
  padding: 50px 20px;
  background: #f7f9fc; /* Light gray */
  text-align: center;
`,T=s.a.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`,O=s.a.a`
  color: #2c3e50; /* Dark blue */
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: #1abc9c; /* Teal */
  }
`;var I=()=>{const{aboutMe:e}=g;return i.a.createElement(z,{id:"contact"},i.a.createElement("h2",null,"Contact"),i.a.createElement(T,null,i.a.createElement(O,{href:e.linkedin,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(v.d,null)),i.a.createElement(O,{href:e.github,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(v.c,null)),i.a.createElement(O,{href:`mailto:${e.email}`},i.a.createElement(v.b,null))))};const R=s.a.div`
  font-family: 'Roboto', sans-serif;
  background: #f0f4f8; /* Light gray background */
  padding-top: 80px; /* Adjust this based on the height of the navbar */
`;var U=function(){return i.a.createElement(R,null,i.a.createElement(p,null),i.a.createElement("main",null,i.a.createElement(x,null),i.a.createElement(w,null),i.a.createElement(M,null),i.a.createElement(I,null)))};n(61);o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)))}},[[33,1,2]]]);
//# sourceMappingURL=main.c16dbff4.chunk.js.map