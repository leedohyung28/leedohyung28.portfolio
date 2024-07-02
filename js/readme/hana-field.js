const hanaField = document.createElement("div");
hanaField.classList.add("w-100");
hanaField.id = "readmeCon";
hanaField.style = "margin-top: 1500px;";
hanaField.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-extracurri">
<h5 class="text-center">HANA VISION TECH Co., Ltd.</h5>
<h5 id="readmeTitle" class="text-center">Field training</h5>
<p class="text-center">Implanting AI deep learning models in medical devices</p>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary >Environments</summary>
<div class="form-row ml-3"><i class="devicon-python-plain"></i><h6>Python</h6></div>
<div class="form-row ml-3"><i class="devicon-pytorch-original"></i><h6>PyTorch</h6></div>
<div class="form-row ml-3"><i class="devicon-opencv-plain"></i><h6>OpenCV</h6></div>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Tasks</summary>
<p>Collect AI training data (AI Hub, chessboard footage)</p>
<p>Labelling collected AI data - labelImg</p>
<p>Train AI Deep Learning model on labelled training data - YOLO</p>
<p>Compare performance with Vision Algorithms ported to existing devices and improve Deep Learning model</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Problems and Solutions</summary>
<p>Lower accuracy compared to Vision Algorithms in centring a chessboard</p>
<p>→ Improved accuracy by making Bounding Boxes the same size when labelling.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>What I learnt</summary>
<p>I gained a deeper understanding of deep learning and machine learning by putting my previous machine learning knowledge into practice.</p>
<p>After reading and applying several official documents, I became more confident in using the new technology.</p>
</details>

<hr style="border: 1px solid white; width: 100%;">
<details>
<summary>Inference Video</summary>
<iframe class="w-80" src="https://www.youtube.com/embed/xnjRw9AS4YA?si=dt1hNvJTxyVorAci&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe class="w-80" src="https://www.youtube.com/embed/hQR9XpzHGv4?si=385E95ar1ZgPErby&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</details>
`;
