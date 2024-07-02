const eipCertification = document.createElement("div");
eipCertification.classList.add("w-100");
eipCertification.id = "readmeCon";
eipCertification.style = "margin-top: 1500px;";
eipCertification.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-award">
<h5 id="readmeTitle" class="text-center">Engineer Information Processing</h5> 
<p class="text-center mb-0">reg No. 23201080408V</p>
<p class="text-center mt-0">HRD Service of Korea</p> 

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Certification</summary>
<div class="text-center"><img class="w-45" src="./images/readme/eip.jpg"></div>
</details>
`;
