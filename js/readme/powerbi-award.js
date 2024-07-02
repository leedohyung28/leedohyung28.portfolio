const powerBI = document.createElement("div");
powerBI.classList.add("w-100");
powerBI.id = "readmeCon";
powerBI.style = "margin-top: 850px;";
powerBI.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-award">
<h5 id="readmeTitle" class="text-center">Microsoft Power BI Hackthon</h5> 
<h5 class="text-center">2nd Place</h5>
<p class="text-center">Braincourt GmbH, Germany</p> 

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Certification</summary>
<div class="text-center"><img class="w-45" src="./images/readme/hackathon.jpg"></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>What I learnt</summary>
<p>Analysed and derived information (economic information about Netflix users and Netflix works) using new tools with culturally and linguistically diverse colleagues,
discuss and present possible solutions to the given problem.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<a href="https://drive.google.com/file/d/12sffkSZ1SkmT55imFJsTucgeR6XlPWW1/view?usp=sharing"><p>Presentation PDF File</p></a>
`;
