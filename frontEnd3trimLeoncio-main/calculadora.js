function Calcular(){
    let idadeCanina = prompt("Qual a idade do cachorrinho?");
    if(isNaN(idadeCanina)) {
        alert("Por favor insira um valor válido");
        return;
    }
    let calculo= idadeCanina * 7;
    alert("A idade do cachorro é igual á " + calculo + " anos humanos");
    let show = document.querySelector(".mostra-resultado")
    show.textContent = "Resultado: A idade humana do seu cachorro é " + calculo
    


    
}