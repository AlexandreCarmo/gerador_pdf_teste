const btnGenerate = document.querySelector("#generate-pdf-btn");


// Events

btnGenerate.addEventListener("click", () => {

    //conteudo do pdf
    const content = document.querySelector("#pdf-content");

    //config do arquivo final
    const options = {
        margin: [10,10,10,10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    //Gerar e baixar PDF
    html2pdf().set(options).from(content).save();

})