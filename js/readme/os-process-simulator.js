const osSimulator = document.createElement("div");
osSimulator.classList.add("w-100");
osSimulator.id = "readmeCon";
osSimulator.style = "margin-top: 100px;";
osSimulator.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">Scheduler Simulator</h5> 
    <h5 class="text-center">Team project</h5>
    <p class="text-center mb-0">Program to run 6 scheduling algorithms</p>
    <p class="text-center mt-0">in multicore (P-core, E-core)</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject/releases"><p>Simulator Release File</p></a>
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Workflow</summary>
    <div class="form-row justify-content-around"><img class="w-40" src="./images/readme/fcfs.gif"/><img class="w-40" src="./images/readme/wtq.gif"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Development charts (Korean)</summary>
    <div class="text-center"><img class="w-80" src="https://user-images.githubusercontent.com/91319157/209250019-99c7ec9e-d074-4230-9ac4-522ef864b760.png"/></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Project design goals</summary>
    <p>Operating Algorithm :
    <a href="https://github.com/leedohyung28/OS-Scheduling-Algorithm-TeamProject?tab=readme-ov-file#wtqwaiting-time-quantum_new-algorithm">Self-made algorithm</a>, 
    
    <a href="https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)">FCFS</a>, 
    <a href="https://en.wikipedia.org/wiki/Round-robin_scheduling">RR</a>, 
    <a href="https://en.wikipedia.org/wiki/Shortest_job_next">SPN</a>, 
    <a href="https://en.wikipedia.org/wiki/Shortest_remaining_time">SRTN</a>, 
    <a href="https://en.wikipedia.org/wiki/Highest_response_ratio_next">HRRN</a></p>
    <p>Study 6 algorithms in total and implement them to work in multi-core (P-core, E-core) situations </p>
    <p>Visual representation of how an algorithm simulates on multiple cores in an arbitrary TestCase </p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>
    <div class="form-row ml-3"><i class="devicon-python-plain ml-2"></i><h6>Python</h6></div>
    <div class="form-row ml-3"><i class="devicon-python-plain ml-1"></i></i><h6>Python Tkinter</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p class="mb-0">Difficulty connecting with existing created modules when calculating Ratio when implementing HRRN algorithm</p>
    <p class="mt-0">→ learnt to have a baseline for modularising the parts of my modules that I'm struggling with.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>We didn't use a server, but we learned how to pass the algorithm result to FrontEnd.</p>
    <p>We learnt how to divide up the work, communicate with the other parts, and format team activities.</p>
    </details>
</div>
`;
