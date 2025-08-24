const inputValue = document.querySelector("#input")
const searchBtn = document.querySelector("#search")
const produtos = document.querySelector("#products")
const filterBtn = document.querySelectorAll(".button-value")

const produtosLista = [
    {
        nome: "Jaqueta de couro preta",
        categoria: "Jacket",
        image: "assets/black-leather-jacket.jpg"
    },
     {
        nome: "Jaqueta Marrom",
        categoria: "Jacket",
        image: "assets/brown-jacket.jpg"
    },
     {
        nome: "Calça moletom cinza",
        categoria: "Bottom",
        image: "assets/comfy-gray-pants.jpg"
    },
     {
        nome: "Cropped lã",
        categoria: "Top",
        image: "assets/knitted-top.jpg"
    },
     {
        nome: "calça rosa",
        categoria: "Bottom",
        image: "assets/pink-trousers.jpg"
    },
     {
        nome: "Saia",
        categoria: "Bottom",
        image: "assets/short-skirt.jpg"
    },
     {
        nome: "SmartWatch",
        categoria: "Acessories",
        image: "assets/sporty-smartwatch.jpg"
    },
     {
        nome: "Camiseta branca",
        categoria: "Top",
        image: "assets/white-tshirt.jpg"
    }
]

function mostrarProdutos(produtosLista){
    produtos.innerHTML = ""

    produtosLista.forEach(produto =>{
        const cardProduto = document.createElement("div")
        cardProduto.classList.add("card")

        const cardImage = document.createElement("div")
        cardImage.classList.add("image-container")

        const image = document.createElement("img")

        image.setAttribute("src", produto.image)

        const container = document.createElement("div")
        container.classList.add("container")

        const texto = document.createElement("p")
        texto.textContent = produto.nome

        cardImage.append(image)
        container.append(texto)
        cardProduto.append(cardImage, container)
        produtos.append(cardProduto)
    })
}

mostrarProdutos(produtosLista)

filterBtn.forEach(botao => {
    botao.addEventListener("click", handleAddActiveClass)
})

function handleAddActiveClass(event){
    filterBtn.forEach(botao =>{
        botao.classList.remove("active")
    })
    event.target.classList.toggle("active")
    
}