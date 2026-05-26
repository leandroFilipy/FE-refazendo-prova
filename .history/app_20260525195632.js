async function carregar6() {
    
    const  container = document.querySelector("#destaques-showcase")
    container.innerHTML = ""

    try{

        const resposta = await fetch ("https://api-restaurante-5iqb.onrender.com/api/produtos")
        const data = await resposta.json()


        for(let i =0; i<6; i++){

                container.innerHTML += `
                
                `
            }
        }
       

        

    }catch(error){
        console.log("erro foi: " + error)
    }

}