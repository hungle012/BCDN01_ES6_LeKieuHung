const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let hienThi = () => {
    let content = "";
    colorList.map((color) => {
        content += `<button class="color-button ${color}" onclick="doiMau('${color}')"></button>`;

    });

    document.getElementById("colorContainer").innerHTML = content;
    document.querySelector(".color-button").classList.add("active");

}
hienThi();

let doiMau = (color) => {
    let listLop = document.querySelector(`.color-button` + `.${color}`).classList;
    // console.log([...listLop]);
    let count = 0;
    [...listLop].map((lop) => {
        if (lop === "active") {
            count += 1;
        }
    });
    // console.log(count);
    if (count != 0) {
        document.getElementById("house").className = "house " + color;
    } else {
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`.${color}`).classList.add("active");
        document.getElementById("house").className = "house " + color;
    }
}

