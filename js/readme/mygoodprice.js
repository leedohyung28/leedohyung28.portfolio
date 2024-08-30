const mygoodprice = document.createElement("div");
mygoodprice.classList.add("w-100");
mygoodprice.id = "readmeCon";
mygoodprice.style = "margin-top: 2600px;";
mygoodprice.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">MY GOOD PRICE</h5> 
    <h5 class="text-center">Team Project (BackEnd)</h5>
    <p class="text-center mb-0">User Good Price stores</p>
    <p class="text-center mt-0">and analysis your picked stores</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://mygoodprice-programmersteamproject.netlify.app"><p>My Good Price</p></a>
    <a href="https://github.com/leedohyung28/MyGoodPrice-BE"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>
    <div class="form-row ml-3"><i class="devicon-nestjs-original"></i><h6>NestJS</h6></div>
    <div class="form-row ml-3"><i class="devicon-mongodb-plain-wordmark"></i><h6>MongoDB</h6></div>
    <div class="form-row ml-3"><i class="devicon-firebase-plain-wordmark"></i><h6>Firebase</h6></div>
    <div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>         
    <div class="form-row ml-3"><i class="devicon-react-original"></i><h6>React</h6></div>
    <div class="form-row ml-3"><i class="devicon-typescript-plain"></i><h6>TypeScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-tailwindcss-original"></i><h6>TailwindCSS</h6></div>
    <div class="form-row ml-3"><i class="devicon-axios-plain-wordmark"></i><h6>Axios</h6></div>
    <div class="form-row ml-3"><i class="devicon-redux-original"></i><h6>Redux</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Tasks and a Role in the Project</summary>
    <p>Deploy and connect between Database and BackEnd</p>
    <p>Made API of Login and "Liked"(Add/Delete/Analysis picked stores)</p>
    <p>Add Google login by Firebase</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p class="mb-0">Difficult to normalize data due to different number of menus per store</p>
    <p class="mt-0">→ We put hard-to-normalize data into a Collection using MongoDB, a document-based DBMS</p>
    <p class="mb-0">Social sign-in integration issues</p>
    <p class="mt-0">→ passport-google-oauth20 encountered an error after deployment, so we reconfigured with Firebase</p>
    <p class="mb-0">Cyclic dependency issues when importing modules from each other in NestJS</p>
    <p class="mt-0">→ Resolved a dependency issue by using 'forwardRef' to defer references</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>I spent a lot of time on the social login part, and I realized the importance of efficient design and task distribution through constant communication between the parts</p>
    <p>Working with NestJS and MongoDB has helped me develop my skills which can be used in future</p>
    <p>Gained knowledge and solutions to various issues, including cookies, that arose while implementing social sign-in</p>
    </details>
</div>
`;
