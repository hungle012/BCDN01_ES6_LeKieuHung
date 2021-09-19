let tinhDTB = (...scores) =>{
    let sum = 0;
    let ave = 0;
    scores.map((score,index) =>{
        sum += score;
        ave = sum / (index+1);
    });
    console.log(ave);
    return ave;
}
let layDuLieu = (id) =>{
    return document.getElementById(id);
}

layDuLieu("btnKhoi1").addEventListener("click",()=>{
    let toan = Number(layDuLieu("inpToan").value);
    let ly = Number(layDuLieu("inpLy").value);
    let hoa = Number(layDuLieu("inpHoa").value);

    let score = tinhDTB(toan,ly,hoa);
    layDuLieu("tbKhoi1").innerHTML = score.toFixed(2);
});

layDuLieu("btnKhoi2").addEventListener("click",()=>{
    let van = Number(layDuLieu("inpVan").value);
    let su = Number(layDuLieu("inpSu").value);
    let dia = Number(layDuLieu("inpDia").value);
    let english = Number(layDuLieu("inpEnglish").value);

    let score = tinhDTB(van,su,dia,english);
    layDuLieu("tbKhoi2").innerHTML = score.toFixed(2);
});