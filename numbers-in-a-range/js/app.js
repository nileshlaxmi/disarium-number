const clickFunction = () => {
    var str = $("#ipText").val();
    console.log(str);

    let ar = str.split("");
    let sum = 0;

    for(let i=0; i<ar.length; i++){
        let num = parseInt(ar[i]);
        sum = sum + Math.pow(num, (i+1));
    }

    if(sum === parseInt(str)){
        $("#opText").text("Disarium Number");
    }
    else{
        $("#opText").text("Not a Disarium Number");
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
