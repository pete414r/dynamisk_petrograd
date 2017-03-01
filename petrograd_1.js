window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //læs produktliste
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
    //    visProdukt();
}
document.querySelector(".filterKnap_vegetar").addEventListener("click", filtrerVegetar);
document.querySelector(".filterknap_tilbud").addEventListener("click", filterTilbud);

document.querySelector(".filterknap_alkohol").addEventListener("click", filtrerAlkohol);

//SORTER FUNKTIONER
document.querySelector(".sorter_billigste").addEventListener("click", sorterBilligste);

document.querySelector(".sorter_dyreste").addEventListener("click", sorterDyreste);

function filtrerVegetar(event) {
    console.log("klik på vegetar-filter");
    //find alle
    var liste = document.querySelectorAll(".produkt:not(.vegetar)");
    //skjul all
    liste.forEach(produkt => div.classList.toggle("hide"));
    event.preventDefault();
}

function filterTilbud(event) {
    console.log("klik på tilbud-filter");
    //find alle
    var liste = document.querySelectorAll(".produkt:not(.tilbud)");
    //skjul all
    liste.forEach(produkt => div.classList.toggle("hide"));
    event.preventDefault();
}

function filtrerAlkohol(event) {
    console.log("klik på alkohol-filter");
    //find alle
    var liste = document.querySelectorAll(".produkt:not(.alkohol)");
    //skjul all
    liste.forEach(produkt => div.classList.toggle("hide"));
    event.preventDefault();
}

function sorterBilligste(listen) {

    console.log("Klik på sorter efter billigste -> dyreste");


}
//function visProduktListe ( listen ) {
//    console.log(listen);
//
//    // filtrer udsolgte produkter fra...
//    // For hvert produkt sender den produktet ind i beregningen og returnerer
//    listen = listen.filter ( produkt => !produkt.udsolgt );
//
//    listen.forEach(visProdukt);
//}

function visProduktListe(listen) {
    //console.table(Listen);
    //  filtrer udsolgte produkter fra
    listen = listen.filter(fjernUdsolgte);
    listen.forEach(visProdukt);

    function fjernUdsolgte(produkt) {
        if (produkt.udsolgt == true) {
            return false;
        } else {
            return true;

        }
    }
    listen = listen.filter(produkt => !produkt.udsolgt);
    listen.forEach(visProdukt);
}

function visProdukt(produkt) {
    console.log(produkt);
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    if (produkt.vegetar) {
        klon.querySelector(".produkt").classList.add("vegetar");
    }
    if (produkt.rabatsats) {
        klon.querySelector(".produkt").classList.add("tilbud");
    }
    if (produkt.alkoholprocent) {
        klon.querySelector(".produkt").classList.add("alkohol");
    }
    klon.querySelector(".data_kortbeskrivelse").innerHTML = produkt.kortbeskrivelse;
    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    klon.querySelector(".date_billede").src = "imgs/small/" + produkt.billede + "-sm.jpg";

    if (produkt.udsolgt == false) {
        var udsolgttekst = klon.querySelector(".udsolgttekst");
        udsolgttekst.parentNode.removeChild(udsolgttekst);
    } else {
        klon.querySelector(".pris").classList.add("udsolgt");

    }
    if (produkt.udsolgt == true || produkt.rabatsats == 0) {
        var rabatpris = klon.querySelector(".rabatpris");
        rabatpris.parentNode.removeChild(rabatpris);
    } else {
        klon.querySelector(".pris").classList.add("rabat");
    }
    // tilføj produkt-id til modalknap
    klon.querySelector(".modalknap").dataset.produkt = produkt.id;

    // registrer klik på modalknap
    klon.querySelector(".modalknap").addEventListener("click", modalKnapKlik);

    // append klon til .produkt_liste

    if (produkt.kategori == "forretter") {
        document.querySelector(".forretter").appendChild(klon);
    } else if (produkt.kategori == "hovedretter") {
        document.querySelector(".hovedretter").appendChild(klon);
    } else if (produkt.kategori == "desserter") {
        document.querySelector(".desserter").appendChild(klon);
    } else {
        document.querySelector(".drikke_og_sideorders").appendChild(klon);
    }

}

document.querySelector(".produktliste").appendChild(klon);

}
//MODAL
function modalKnapKlik(event) {
    console.log("knapklik", event);

    // find det produkt id, hvis knap derr blev trykket på
    var produktId = event.target.dataset.produkt;
    console.log("klik på produkt: ", produktId);

    $.getJSON("http://petlatkea.dk/2017/dui/api/product?callback=?", {
        id: produktId
    }, visModalProdukt);
}

function visModalProdukt(produkt) {

    /*var rabatpris = Math.ceil( produkt.pris - (produkt.pris*produkt.rabatsats/100 ) );
    klon.querySelector(".data_rabatpris").innerHTML = produkt.rabatpris;*/

    console.log("vis modal for ", produkt);

    // find modal_template - klon den
    var klon = document.querySelector("#modal_template").content.cloneNode(true);

    if (produkt.rabatsats) {
        klon.querySelector(".pris").classList.add("rabat");
    } else if (produkt.rabatsats == false) {
        klon.querySelector(".rabatpris").classList.add("ingenrabat");
    }

    // put data i klonen
    klon.querySelector(".data_navn").innerHTML = produkt.navn;


    // PRIS
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    // RABATPRIS
    klon.querySelector(".data_rabatpris").innerHTML = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));

    // BILLEDE
    klon.querySelector(".data_billede").src = "images/medium/" + produkt.billede + "-md.jpg";

    // LANG BESKRIVELSE
    klon.querySelector(".data_langbeskrivelse").innerHTML = produkt.langbeskrivelse;

    // OPRINDELSE
    klon.querySelector(".data_oprindelsesregion").innerHTML = produkt.oprindelsesregion;

    // ALLERGIER
    klon.querySelector(".data_allergener").innerHTML = produkt.allergener;


    // ALKOHOLPROCENT
    klon.querySelector(".data_alkoholprocent").innerHTML = produkt.alkoholprocent;


    // STJERNER
    klon.querySelector(".data_stjerner").innerHTML = produkt.stjerner;

    // sletter det der stod i modal-content
    document.querySelector(".modal-content").innerHTML = "";

    //appen klonen til modal-content
    document.querySelector(".modal-content").appendChild(klon);

}