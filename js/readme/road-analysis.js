const roadAnalysis = document.createElement("div");
roadAnalysis.classList.add("w-100");
roadAnalysis.id = "readmeCon";
roadAnalysis.style = "margin-top: 2000px;";
roadAnalysis.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">Road analysis system using Deep Learning</h5> 
    <h5 class="text-center">Graduation project</h5>
    <p class="text-center mb-0">Detect hazards on the road (potholes, animals, etc.) </p>
    <p class="text-center mt-0">with a portable device (Jetson Nano)</p>
    
    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://youtu.be/wzvoA-IFcv0"><p>System Operating Video</p></a>
    <a href="https://docs.google.com/presentation/d/1ySndXvCGiuINXmhP5D2NEmW8uISMpP7e/edit?usp=sharing&ouid=111824440384685428415&rtpof=true&sd=true"><p>Project Presentation File</p></a>
    <a href="https://github.com/leedohyung28/road-hazard-detect-system"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Project Poster (Korean)</summary>
    <img class="w-100" src="./images/readme/road_analysis.jpg">
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>
    <div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>
    <div class="form-row ml-3"><i class="devicon-pytorch-original"></i><h6>PyTorch</h6></div>
    <div class="form-row ml-3"><i class="devicon-opencv-plain"></i><h6>OpenCV</h6></div>
    <div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
    <div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
    <div class="form-row ml-3"><i class="devicon-firebase-plain"></i><h6>Firebase</h6></div>
    <div class="form-row ml-3"><i class="devicon-ubuntu-plain-wordmark"></i><h6>Ubuntu</h6></div>
    <div class="form-row ml-3"><i class="devicon-amazonwebservices-plain-wordmark"></i><h6>AWS</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Tasks</summary>
    <p>After AI data selection and labelling, select an AI deep learning model and finetune it</p>
    <p>Porting finetuned AI deep learning models to Jetson Nano devices and improving performance/speed</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p class="mb-0">Poor performance on Jetson Nano device</p>
    <p class="mt-0">→ We trained on Windows and ported model to device.</p>
    <p class="mb-0">Dependency issues crash when porting to a device</p>
    <p class="mt-0">→ We modified the version of the pipeline individually.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>What I learnt</summary>
    <p>I gained a better understanding of deep learning models by comparing and selecting performance among several image detection deep learning models myself.</p>
    <p>It was an opportunity to find criteria for comparing and selecting not only model performance, but also portability, speed, and more.</p>
    </details>
</div>
`;
