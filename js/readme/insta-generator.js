const instaGenerator = document.createElement("div");
instaGenerator.classList.add("w-100");
instaGenerator.id = "readmeCon";
instaGenerator.style = "margin-top: 2350px;";
instaGenerator.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">Instagram Name Generator</h5>
    <img class="w-100" src="./images/readme/ig_eng.jpg"> 
    <p class="text-center mt-1 mb-0">User nickname suggestion/creation site</p>
    <p class="text-center mt-0">for Instagram subscribers</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://ignamegenerator.netlify.app/"><p>ignamegenerator.netlify.app - English</p></a>
    <a href="https://instanamesuggest.netlify.app/"><p>instanamesuggest.netlify.app - Korean</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Types of Suggestions</summary>
    <p>Recommendations using Korean names (nicknames)</p>
    <p>Recommendations using English names (nicknames)</p>
    <p>Recommendations based on birth information</p>
    <p>Random recommendations (word combinations, pretty foreign words, proverbs, emojis, etc...)</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary >Environments</summary>
    <div class="form-row ml-3"><i class="devicon-html5-plain-wordmark"></i><h6>HTML5</h6></div>
    <div class="form-row ml-3"><i class="devicon-css3-plain-wordmark"></i><h6>CSS3</h6></div>
    <div class="form-row ml-3"><i class="devicon-javascript-plain"></i><h6>JavaScript</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodejs-plain-wordmark"></i><h6>Node.js</h6></div>
    <div class="form-row ml-3"><i class="devicon-nodemon-plain"></i><h6>Nodemon</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p>- Attempted to use conversational AI to convert typed letters, but put on hold due to creativity, economics</p> 
    <p>→ Separate and translate the input characters and then recombine them</p>
    <p>→ Adopted Naver Papago API but switched to paid after February, 2024</p>
    <p>→ Switched to the DeepL API.</p>
    </details>
    
    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>There were some limitations, such as API utilisation and security, but today you can develop with relative freedom from these issues.</p>
    <p>In addition to web development, I've grown my knowledge of SEO, RSS, and other areas of the web.</p>
    <p>Increased utilisation/proficiency with HTML5, CSS3, and JavaScript.</p>
    <p>Web publishing and hosting became easy.</p>
    </details>
</div>
`;
