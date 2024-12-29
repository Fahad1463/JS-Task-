function Click() {
   
    let Name = document.getElementById("Idname").value;
    let Color = document.getElementById("Idcolor").value;

    if (Name && Color) {
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your Name is: <span style="color:${Color}">${Name}</span>`;
    } else {
        alert("Please enter both your name and a color.");
    }
}
