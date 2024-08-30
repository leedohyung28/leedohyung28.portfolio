const smartday = document.createElement("div");
smartday.classList.add("w-100");
smartday.id = "readmeCon";
smartday.style = "margin-top: 2600px;";
smartday.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">SMART DAY</h5> 
    <h5 class="text-center">Team Project (FrontEnd)</h5>
    <p class="text-center mb-0">Schedule homepage which enhance lifestyle</p>
    <p class="text-center mt-0">with manage TODO lists and Schedules</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://wonseungteamproject-smartday.netlify.app"><p>Smart Day Homepage</p></a>
    <a href="https://www.youtube.com/watch?v=XS_ZUwud-Hw"><p>Presentation Video</p></a>
    <a href="https://github.com/leedohyung28/smart-day"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>               
    <div class="form-row ml-3"><i class="devicon-react-original"></i><h6>React</h6></div>
    <div class="form-row ml-3"><i class="devicon-typescript-plain"></i><h6>TypeScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodejs-plain-wordmark"></i><h6>Node.js</h6></div>
    <div class="form-row ml-3"><i class="devicon-express-original-wordmark"></i><h6>Express</h6></div>
    <div class="form-row ml-3"><i class="devicon-mariadb-original-wordmark"></i><h6>MariaDB</h6></div>
    <div class="form-row ml-3"><i class="devicon-mysql-plain-wordmark"></i><h6>MySQL</h6></div>
    <div class="form-row ml-3"><i class="devicon-vitejs-plain"></i><h6>Vite</h6></div>
    <div class="form-row ml-3"><i class="devicon-axios-plain-wordmark"></i><h6>Axios</h6></div>
    <div class="form-row ml-3"><i class="devicon-redux-original"></i><h6>Redux</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Tasks and a Role in the project</summary>
    <p>Create some Components, Modals, and Pages (UI)</p>
    <p>Managing global data with Zustand</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p class="mb-0">Unnecessary rendering occurs when moving the page</p>
    <p class="mt-0">→ Use 'hasPageBeenRendered' and 'useRef' to prevent unnecessary rendering via Boolean</p>
    <p class="mb-0">'Props' are inefficient for using the same data on multiple pages</p>
    <p class="mt-0">→ Add/delete/initialize and manage data using global data 'Redux'</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>As I worked on the project, I realized the importance of branches and versioning while using Git in a BE/FE split</p>
    <p>The experience gained from interacting with BackEnd when connecting to API and DB and dealing with issues that arise during collaboration gives me the flexibility to deal with problems as they arise</p>
    <p>Able to deploy and connect FE, BE, and DB, and put the projects I create on a cloud server instead of localhost</p>
    <p>Participating in the FE part gave me knowledge about folder structure and global style management in React</p>
    </details>
</div>
`;
