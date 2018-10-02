const clickFunction = () => {
    var str = $("#ipText").val();
    var num = parseInt(str);

    

    for(let i=1; i<num; i++){

        let ar = i.toString().split("");
        let sum = 0;

        for(let j=0; j<ar.length; j++){
            let number = parseInt(ar[j]);
            sum = sum + Math.pow(number, (j+1));
        }
        
        if(sum === i){
            var para = document.createElement("p");
            para.innerHTML = "Disarium Numbers "+ i;
            document.getElementById('opText').appendChild(para);
        }
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
