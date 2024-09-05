document.querySelector("button").addEventListener("click", function() {
    const searchQuery = document.getElementById("search-input").value;
    const materialQuery = document.getElementById("material-input").value;
    
    console.log("Pesquisa geral: " + searchQuery);
    console.log("Material para reciclar: " + materialQuery);
    
    // Aqui você pode implementar a lógica para realizar a pesquisa ou exibir os resultados
});
