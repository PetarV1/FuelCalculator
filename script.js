function izracunaj() {
    let potrosnja = document.getElementById('potrosnja').value;
    let cijena = document.querySelector('#cijena').value;
    let udaljenost = document.querySelector('#udaljenost').value;
    var checkBox = document.getElementById("obasmjera");

    if((potrosnja == "") || (cijena == "") || (udaljenost == "")) return;

    let urediSpan = document.querySelector(".info-1 span:nth-child(2)");
    urediSpan.classList.add('circle');
    urediSpan.innerText = (100 / potrosnja).toFixed(2) + "km";

    urediSpan =  document.querySelector(".info-1 span:nth-child(1)");
    urediSpan.innerText = "("+cijena+"KM)";

    let litara_po_kilometru

    if (checkBox.checked != true) {
    litara_po_kilometru = (potrosnja / 100); //0.065
    }
    else {
    litara_po_kilometru = (potrosnja / 100); //0.13
    udaljenost = udaljenost * 2;
    }

    //koliko litara za udaljenost (u kilometrima)
    urediSpan = document.querySelector(".info-2 span")
    urediSpan.innerText = (litara_po_kilometru * udaljenost).toFixed(2);

    //udaljenost
    urediSpan = document.querySelector(".info-2 span:nth-child(2)")
    urediSpan.innerText = udaljenost;

    //cijena
    urediSpan = document.querySelector(".info-2 span:nth-last-child(1)")
    urediSpan.innerText = ((potrosnja / 100) * udaljenost * cijena).toFixed(2);
}