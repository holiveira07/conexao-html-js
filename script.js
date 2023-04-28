const post02 = document.getElementById("post02");
  console.log(post02)

const formulario = document.getElementById("formulario");
  console.log(formulario)

const posts = document.getElementById("posts");
  console.log(posts)

const postData = document.getElementsByClassName ("post-data");
  console.log(postData)

 const texto01 = document.querySelector("#post01 .post-texto");
   console.log(texto01)

 const texto02 = document.querySelector("#post02 .post-texto");
  console.log(texto02)

const linkNotexto = document.getElementById("linknotexto");
  console.log(linkNotexto.innerText)

const palavra = document.getElementById ("palavra1");
  console.log(palavra.textContent)

const nomeform = document.getElementsByTagName("h2");
  console.log(nomeform[1].innerText)

const linksredes = document.querySelector("aside");
  console.log(linksredes)

const linksNavs = document.getElementById("links_nav");
   console.log(linksNavs.innerText)

const autoresdatas = document.querySelectorAll("p");
   console.log(autoresdatas [0].textContent)
   console.log(autoresdatas [1].innerText)
   console.log(autoresdatas [3].textContent)
   console.log(autoresdatas [4].textContent)

 let listasResdesFooter = document.querySelectorAll("footer .lista_redes li");
   console.log(listasResdesFooter)


   function percorrerArray(lista){
  for ( let i = 0; i < lista.length; i++){
     console.log(lista[i]);
  }
  }
  percorrerArray(postData);
 