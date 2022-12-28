function moverPosiscionRandom(elm){
    elm.style.position = 'absolute'
    elm.style.top = Math.random() * (window.innerHeight - elm.
        offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.
            offsetWidth) + 'px';
}

let btnSI = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];


btnNo.addEventListener('mouseenter', function(e) {
    moverPosiscionRandom(e.target)
});

btnSI.addEventListener('click', function(e) {
    alert("Sabia que dirias que SI. Casemonos ya y tengamos hijos, TE AMO!!!! <3")

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\Audio_1.mpeg');
    //cancion.play();
});

//Crear elementos
divModoSexo.addEventListener('click', function(e){
    const img = document.createElement("img")
    img.src = "https://i.pinimg.com/736x/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.jpg"
    //divModoSexo.innerHTML = "<img src='https://i.pinimg.com/736x/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.jpg'>"
    console.log(img)
    divModoSexo.appendChild(img)
})

botones = document.getElementsByTagName("button");
console.log(botones);

window.addEventListener('beforeunload', (event) =>{
    event.preventDefault();
    event.returnValue = "";
});