const exchangeGermany = document.createElement("div");
exchangeGermany.classList.add("w-100");
exchangeGermany.id = "readmeCon";
exchangeGermany.style = "margin-top: 900px;";
exchangeGermany.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 id="readmeTitle" class="text-center">Exchange student in Germany</h5>
<p class="text-center">Hochschule Aalen</p> 

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Certification</summary>
<div class="text-center"><img class="w-80" src="./images/readme/aalen_score.jpg"></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>What I learnt</summary>
<p class="mb-0">Major-related</p>
<p class="mt-0">- By learning QA, QC, and Knowledge Management, learnt how to deal with Testcase and Information respectively.</p>
<p class="mb-0">Non-major related</p>
<p class="mt-0">- Gained knowledge outside of my major by taking courses on international human resource management and economics.</p>
<p class="mb-0">Language-related</p>
<p class="mt-0">- Took a German (A1) course, and in addition to that, all my classes were in English.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Impression</summary>
<p>In programming classes, I aimed to use a different language for each assignment,
Java, C++, Python, etc. to compare the characteristics of the languages and get feedback on them.</p>
</details>
`;
