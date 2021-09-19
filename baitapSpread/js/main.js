

let hienThi = ()=>{
    let text = document.querySelector(".heading").innerHTML;
    let content = "";
    [...text].map((char) => {
        if(char != " ") {
            content += `<span>${char}</span>`;
        }    
    });
    document.querySelector(".heading").innerHTML = content;
}
hienThi();