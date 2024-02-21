function gravar(){
    let titulo = document.getElementById("titulo").value;

    let aluno =document.getElementById("aluno").value;

    let msg = document.getElementById("msg").value;

    


    //agora vamos gravar em algum lugar

    

    document.getElementById("assunto").innerText = titulo;
    document.getElementById("est").innerText = aluno;
    document.getElementById("text").innerText = msg;

    document.getElementById("titulo").value=" ";
    document.getElementById("aluno").value=" ";
    document.getElementById("msg").value=" ";
}

function excluir(){
    document.getElementById("assunto").innerTexte=" ";
    document.getElementById("est").innerText=" ";
    document.getElementById("text").innerText=" ";
}