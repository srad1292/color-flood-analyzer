function getHtml() { 
return `
<div id="game" style="width: 280px; height: 280px; position:relative; border:solid black 8px;">
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 0px; left: 0px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 20px; left: 0px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 40px; left: 0px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 60px; left: 0px;"></div>
    <div style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 80px; left: 0px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 100px; left: 0px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 120px; left: 0px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 140px; left: 0px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 160px; left: 0px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 180px; left: 0px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 200px; left: 0px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 220px; left: 0px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 240px; left: 0px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 260px; left: 0px;"></div>
    <div style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 0px; left: 20px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 20px; left: 20px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 40px; left: 20px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 60px; left: 20px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 20px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 100px; left: 20px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 120px; left: 20px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 140px; left: 20px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 160px; left: 20px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 180px; left: 20px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 200px; left: 20px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 220px; left: 20px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 240px; left: 20px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 260px; left: 20px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 0px; left: 40px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 20px; left: 40px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 40px; left: 40px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 60px; left: 40px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 80px; left: 40px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 100px; left: 40px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 120px; left: 40px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 140px; left: 40px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 160px; left: 40px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 180px; left: 40px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 200px; left: 40px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 220px; left: 40px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 240px; left: 40px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 260px; left: 40px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 0px; left: 60px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 20px; left: 60px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 40px; left: 60px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 60px; left: 60px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 60px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 100px; left: 60px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 120px; left: 60px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 140px; left: 60px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 160px; left: 60px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 180px; left: 60px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 200px; left: 60px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 220px; left: 60px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 240px; left: 60px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 260px; left: 60px;">
    </div>
    <div style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 0px; left: 80px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 20px; left: 80px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 40px; left: 80px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 60px; left: 80px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 80px; left: 80px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 100px; left: 80px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 120px; left: 80px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 140px; left: 80px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 160px; left: 80px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 80px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 200px; left: 80px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 220px; left: 80px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 240px; left: 80px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 260px; left: 80px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 0px; left: 100px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 20px; left: 100px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 40px; left: 100px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 60px; left: 100px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 80px; left: 100px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 100px; left: 100px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 120px; left: 100px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 140px; left: 100px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 160px; left: 100px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 100px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 200px; left: 100px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 220px; left: 100px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 240px; left: 100px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 260px; left: 100px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 0px; left: 120px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 20px; left: 120px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 40px; left: 120px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 60px; left: 120px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 120px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 100px; left: 120px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 120px; left: 120px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 140px; left: 120px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 160px; left: 120px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 180px; left: 120px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 200px; left: 120px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 220px; left: 120px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 240px; left: 120px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 260px; left: 120px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 0px; left: 140px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 20px; left: 140px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 40px; left: 140px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 60px; left: 140px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 80px; left: 140px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 100px; left: 140px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 120px; left: 140px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 140px; left: 140px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 160px; left: 140px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 140px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 200px; left: 140px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 220px; left: 140px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 240px; left: 140px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 260px; left: 140px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 0px; left: 160px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 20px; left: 160px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 40px; left: 160px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 60px; left: 160px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 160px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 100px; left: 160px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 120px; left: 160px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 140px; left: 160px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 160px; left: 160px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 160px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 200px; left: 160px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 220px; left: 160px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 240px; left: 160px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 260px; left: 160px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 0px; left: 180px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 20px; left: 180px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 40px; left: 180px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 60px; left: 180px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 80px; left: 180px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 100px; left: 180px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 120px; left: 180px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 140px; left: 180px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 160px; left: 180px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 180px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 200px; left: 180px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 220px; left: 180px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 240px; left: 180px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 260px; left: 180px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 0px; left: 200px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 20px; left: 200px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 40px; left: 200px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 60px; left: 200px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 80px; left: 200px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 100px; left: 200px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 120px; left: 200px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 140px; left: 200px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 160px; left: 200px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 180px; left: 200px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 200px; left: 200px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 220px; left: 200px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 240px; left: 200px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 260px; left: 200px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 0px; left: 220px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 20px; left: 220px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 40px; left: 220px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 60px; left: 220px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 220px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 100px; left: 220px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 120px; left: 220px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 140px; left: 220px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 160px; left: 220px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 220px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 200px; left: 220px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 220px; left: 220px;"></div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 240px; left: 220px;">
    </div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 260px; left: 220px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 0px; left: 240px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 20px; left: 240px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 40px; left: 240px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 60px; left: 240px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 80px; left: 240px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 100px; left: 240px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 120px; left: 240px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 140px; left: 240px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 160px; left: 240px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 180px; left: 240px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 200px; left: 240px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 220px; left: 240px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 240px; left: 240px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 260px; left: 240px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 0px; left: 260px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 20px; left: 260px;"></div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 40px; left: 260px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 60px; left: 260px;">
    </div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 80px; left: 260px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 100px; left: 260px;"></div>
    <div style="background-color: cyan; position: absolute; width: 20px; height: 20px; top: 120px; left: 260px;"></div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 140px; left: 260px;"></div>
    <div
        style="background-color: rgb(255, 204, 102); position: absolute; width: 20px; height: 20px; top: 160px; left: 260px;">
    </div>
    <div style="background-color: yellow; position: absolute; width: 20px; height: 20px; top: 180px; left: 260px;">
    </div>
    <div style="background-color: purple; position: absolute; width: 20px; height: 20px; top: 200px; left: 260px;">
    </div>
    <div style="background-color: red; position: absolute; width: 20px; height: 20px; top: 220px; left: 260px;"></div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 240px; left: 260px;">
    </div>
    <div
        style="background-color: rgb(0, 187, 0); position: absolute; width: 20px; height: 20px; top: 260px; left: 260px;">
    </div>
</div>
`;
}

module.exports = getHtml;