let num = 1;
function add(){
    let obj = document.getElementsByTagName("main")[0];
    let tit = document.getElementById("title");
    let des = document.getElementById("desc");
    let importante = document.getElementById("imp");
    let value = obj.innerHTML;
    let random = Math.random();
    let valor = Math.round(random*10);
    if(importante.checked){
        if(valor>5){
            msg = "<img src=\"./img/star.png\">";
        }else{
            msg = "<img src=\"./img/pin.png\">";
        }
    }else{
        msg = "";
    }

    if(des.value!=""){

        if(tit.value.length==0){
            tit.value = "Nota "+num;
        }
        if(num>24){
            alert("Limite de 24 post-it alcançado.");
        }else if(num>1){
        obj.innerHTML = value + "<div class=\"postit "+cor(valor)+"\">"+
                            "<span class=\"title\">"+tit.value+"</span>"+msg+"<br>"+
                            "<span class=\"text\">"+des.value+"</span></div>";
        }else{
        
        obj.innerHTML = "<div class=\"postit "+cor(valor)+"\">"+
                            "<span class=\"title\">"+tit.value+"</span>"+msg+"<br>"+
                            "<span class=\"text\">"+des.value+"</span></div>";
        }
        num++;
        tit.value = "";
        des.value = "";
    }else{
        alert("Escreva a mensagem da nota.");
        des.style.border = "2px solid red";
        des.focus();
    }
}
function rem(){
    let obj = document.getElementsByTagName("main")[0];
    obj.innerHTML = "<div class=\"postit\">"+
                        "<span class=\"title\">Modelo</span>"+
                        "<img src=\"./img/pin.png\"><br>"+
                        "<span class=\"text\">Descrição da atividade que deve ser executada.</span>"+
                    "</div>";
    num = 1;
}
function cor(n){
    let option = "";
    if(n>=7){
        option = "cor0";
    }else if(n>=4){
        option = "cor1";
    }else{
        option = "cor2";
    }
    return option;
}