let userName = prompt("isim giriniz")

document.getElementById("myName").innerHTML = userName;

function showTime(){
    let date = new Date();
    let today = date.getDay();
    let gun;

    if(today==0){
        gun = "Pazartesi"
    }else if(today==1){
        gun = "Salı"
    }
    else if(today==2){
        gun = "Çarsamba"
    }
    else if(today==3){
        gun = "Perşembe"
    }
    else if(today==4){
        gun = "Cuma"
    }
    else if(today==5){
        gun = "Cumartesi"
    }
    else if(today==6){
        gun = "Pazar"
    }


    let time = date.toLocaleString('tr-TR');
    return document.getElementById("myClock").innerHTML = `${time} ${gun}`;
}

showTime();
setInterval(showTime, 1000);