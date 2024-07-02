const koreatechour = document.createElement("div");
koreatechour.classList.add("w-100");
koreatechour.id = "readmeCon";
koreatechour.style = "margin-top: 1600px;";
koreatechour.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">KOREATECHOUR</h5> 
    <h5 class="text-center">Team project</h5>
    <p class="text-center">Graduation Credit/Requirement Calculation Programme</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://github.com/leedohyung28/BestWebProgramming/releases/tag/koreatechour"><p>KOREATECHOUR Release File</p></a>
    <a href="https://docs.google.com/presentation/d/1MO7cMex_dfrHO-jVGk0_3T0wfxXYI5CP/edit?usp=sharing&ouid=111824440384685428415&rtpof=true&sd=true"><p>Project Presentation File</p></a>
    <a href="https://github.com/leedohyung28/BestWebProgramming"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Development charts (Korean)</summary>
    <div class="text-center"><img class="w-100" src="./images/readme/koreatechour_schedule.png"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Project design goals</summary>
    <p>Design students' timetables and conveniently calculate graduation credits</p>
    <p>The timetable design is based on the <a href="https://hanpyo.com/">'HANPYO'</a></p>
    <p>Able to calculate different graduation credits for different faculties and grades </p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>
    <div class="form-row ml-3"><i class="devicon-csharp-plain"></i><h6>C#</h6></div>
    <div class="form-row ml-3"><i class="devicon-nuget-original"></i><h6>Nuget</h6></div>
    <div class="form-row ml-3"><i class="devicon-mysql-plain-wordmark"></i><h6>MySQL</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p class="mb-0">Different names and types of major in different faculties depending on the year of admission </p>
    <p class="mt-0">→ Designing and implementing branches to appear different via conditional statements</p>
    <p class="mb-0">NuGet installability and UI changes depending on Visual Studio version</p>
    <p class="mt-0">→ We've documented the version and how to install it on 'GitHub' and 'Release'. </p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>While C# has limitations for BE/FE design, I found that NuGet packages allowed me to implement more of it.</p>
    <p>In my role as a leader, I learnt how to set schedules, dictate division of labour, and lead a team with flexibility.</p>
    </details>
</div>
`;
