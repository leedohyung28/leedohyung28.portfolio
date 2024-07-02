const anythink = document.createElement("div");
anythink.classList.add("w-100");
anythink.id = "readmeCon";
anythink.style = "margin-top: 1300px;";
anythink.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 id="readmeTitle" class="text-center">Participate in startup Anythink</h5>
<p class="text-center mb-0">Healthcare Application (BeSports)</p>
<p class="text-center mt-0">selling hardware device about healthcare</p>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Environments</summary>
<div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
<div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
<div class="form-row ml-3"><i class="devicon-firebase-plain"></i><h6>Firebase</h6></div>
<div class="form-row ml-3"><i class="devicon-notion-plain"></i><h6>Notion</h6></div>
<div class="form-row ml-3"><i class="devicon-github-original"></i><h6>GitHub</h6></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Tasks and Roles</summary>
<p>Designing application screens with Dart/Flutter </p>
<p>Discussion of application features</p>
<p>Made functions of application (D-Day, exercise measurement ...)</p>
<p>Exercise recommendations with the OpenAI API</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Problems and Solutions</summary>
<p class="mb-0">Design a 'Header' that changes as you scroll to take advantage of responsive apps </p>
<p class="mt-0">→ We used a 'SliverAppBar' to respond to scrolling, rather than the 'appBar' we used on the other screens. </p>
<p class="mb-0">The size of the text and widget varies depending on the phone model/size.</p>
<p class="mt-0">→ Redesigned the size of all fonts and widgets to be based on their full width and height.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>What I learnt</summary>
<p>Being involved in startups has taught me about division of labour and debating ideas.</p>
<p>Setting my own deadlines and doing my own work has made me more responsible and proactive.</p>
<p>To leverage the API for commercial purposes, we used 'env' to secure keys when using Git.</p>
</details>
`;
