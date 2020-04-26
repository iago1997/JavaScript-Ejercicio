function determinarPalindromo(){
    let palabra=document.getElementById("palabra").value;
    let palabraIntroducida=palabra.split("");
    let textoFinal="";
    let palabraAComparar="";
    
    for(let i=palabraIntroducida.length-1;i>=0;i--){
        if(palabraIntroducida[i]!=" "){
        textoFinal+=palabraIntroducida[i];
        }
    }
    for(let x=0;x<palabraIntroducida.length;x++){
        if(palabraIntroducida[x]!=" "){
        palabraAComparar+=palabraIntroducida[x]
        }
    }

   if(palabraAComparar.toLowerCase()==textoFinal.toLowerCase()){

        document.getElementById("respuesta").value="Es un palindromo"

   }else{

        document.getElementById("respuesta").value="No es un palindromo"

   }
}

function limpiar(){
    document.getElementById("respuesta").value=""
    document.getElementById("palabra").value=""

}

