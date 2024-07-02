const playball = document.createElement("div");
playball.classList.add("w-100");
playball.id = "readmeCon";
playball.style = "margin-top: 1950px;";
playball.innerHTML = `
<div class="toolbar">
<i class="fa-solid fa-circle ml-2 btn-close" style="color: #FF0000;"></i>
<i class="fa-solid fa-circle ml-2 btn-min" style="color: #FF4000;"></i>
<i class="fa-solid fa-circle ml-2 btn-max" style="color: #04B404;"></i></div>
<div class="readme-border content-project">
    <h5 id="readmeTitle" class="text-center">PLAYBALL</h5> 
    <h5 class="text-center">Term project</h5>
    <div class="text-center"><img class="w-100" src="./images/readme/playball.png"/></div>
    <p class="text-center mt-1 mb-0">A web app aimed at revitalising the baseball market</p>
    <p class="text-center mt-0">in the post-coronavirus downturn</p>

    <hr style="border: 1px solid white; width: 100%;">
    <a href="https://leedohyung28.github.io/PlayBall.io/"><p>PLAYBALL Homepage</p></a>
    <a href="https://github.com/leedohyung28/PlayBall"><p>GitHub Readme</p></a>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Project design goals</summary>
    <p class>Web App to boost baseball markets</p>
    <p class>Introduce KBO(Korea Baseball Organization) information/history and link to ticketing page</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Environments</summary>
    <div class="form-row ml-3"><i class="devicon-dart-plain"></i><h6>Dart</h6></div>
    <div class="form-row ml-3"><i class="devicon-flutter-plain"></i><h6>Flutter</h6></div>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Tasks</summary>
    <p class>Design a properly sized and designed UI for responsive web apps </p>
    <p class>Playing and linking to external videos with Packages</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>Problems and Solutions</summary>
    <p>We used the<a href="https://pub.dev/packages/youtube_player_iframe">youtube_player_iframe package</a> to enable external video (Youtube) autoplay.</p>
    <p>Used the <a href="https://pub.dev/packages/pointer_interceptor">pointer_interceptor package</a> because the external image was interfering with touch in other areas.</p>
    <p>I couldn't crop the footage I imported using the package, so it popped out, so I zoomed in on another part of the video to make sure it was hidden on any device.</p>
    </details>

    <hr style="border: 1px solid white; width: 100%;">
    <details>
    <summary>배운점</summary>
    <p>Flutter/Dart에서 다양한 패키지를 활용하게 되었습니다.</p>
    <p>Dart에서 원하는 디자인에 맞는 적절한 Widget을 사용할 수 있게 되었습니다..</p>
    </details>
</div>
`;
