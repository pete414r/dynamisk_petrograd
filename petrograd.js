//*******TODO ME
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    //læs produktliste

    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
    // visProdukt();

}

document.querySelector(".filterknap_vegetar").addEventListener("click", filtrerVegetar);

document.querySelector(".filterknap_tilbud").addEventListener("click", filterTilbud);

document.querySelector(".filterknap_alkohol").addEventListener("click", filtrerAlkohol);

//SORTER FUNKTIONER
document.querySelector(".sorter_billigste").addEventListener("click", sorterBilligste);

document.querySelector(".sorter_dyreste").addEventListener("click", sorterDyreste);


//*******
//************
function filtrerVegetar(event) {
    console.log("Klik på vegetar-filter");
    //find alle

    var liste = document.querySelectorAll(".produkt:not(.vegetar)");
    //skjul all

    liste.forEach(div => div.classList.toggle("hide"));
    event.preventDefault();
    //  event.preventDefault();

}
//************


//***************

function filterTilbud(event) {
    console.log("Klik på tilbud-filter");
    var liste = document.querySelectorAll(".produkt:not(.tilbud)");
    liste.forEach(div => div.classList.toggle("hide"));
    event.preventDefault();
}

function filtrerAlkohol(event) {
    console.log("Klik på alkohol-filter");
    var liste = document.querySelectorAll(".produkt:not(.alkohol)");
    liste.forEach(div => div.classList.toggle("hide"));
    event.preventDefault();
}

function sorterBilligste(listen) {

    console.log("Klik på sorter billigste");
    var liste = document.querySelectorAll(".produkt:<(.produkt)");
    liste.forEach(div => div.classList.toggle("hide"));
    event.preventDefault();

}

function sorterdyreste(listen) {

    console.log("Klik på sorter billigste");
    var liste = document.querySelectorAll(".produkt:>(.produkt)");
    liste.forEach(div => div.classList.toggle("hide"));
    event.preventDefault();

}

function visProduktListe(listen) {
    console.log(listen);
    //filtrer udsolgte produkter fra
    //  listen = listen.filter(fjernUdsolgte);

    listen = listen.filter(produkt => !produkt.udsolgt);

    listen.forEach(visProdukt);
}
//**************

//    listen=listen.filter( function (produkt) {
//          return produkt.udsolgt;){};
//    listen.forEach(visProdukt);
//
//    var fjernUdsolgte =
//      function fjernudsolgte = function (produkt) {
//          return produkt.udsolgt;
//     }
//  }
//********
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

    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_kortbeskrivelse").innerHTML = produkt.kortbeskrivelse;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));

    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    klon.querySelector(".data_billede").src = "imgs/small/" + produkt.billede + "-sm.jpg";

    if (produkt.udsolgt == false) {
        var udsolgttekst = klon.querySelector(".udsolgttekst");
        udsolgttekst.parentNode.removeChild(udsolgttekst);

    } else {
        klon.querySelector(".pris").classList.add("udsolgt");
    }

    if (produkt.rabatsats == 0) {
        var rabatpris = klon.querySelector(".rabatpris");
        rabatpris.parentNode.removeChild(rabatpris);
    } else {
        klon.querySelector(".pris").classList.add("rabat");
    }

    klon.querySelector(".modalknap").dataset.produkt = produkt.id;

    klon.querySelector(".modalknap").addEventListener("click", modalKnapKlik);


    if (produkt.kategori == "forretter") {
        document.querySelector(".forretter").appendChild(klon);

    } else if (produkt.kategori == "hovedretter") {
        document.querySelector(".hovedretter").appendChild(klon);

    } else if (produkt.kategori == "desserter") {
        document.querySelector(".desserter").appendChild(klon);

        //    } else if (produkt.kategori == "drikkevare") {
        //        document.querySelector(".drikkevarer").appendChild(klon);
    } else {
        document.querySelector(".drikkevare").appendChild(klon);

    }

}

//MODAL
function modalKnapKlik(event) {
    console.log("knapklik", event);

    var produktId = event.target.dataset.produkt;
    console.log("klik på produkt: ", produktId);

    $.getJSON("http://petlatkea.dk/2017/dui/api/product?callback=?", {
        id: produktId
    }, visModalProdukt);
}

function visModalProdukt(produkt) {

    console.log("vis modal for ", produkt);

    var klon = document.querySelector("#modal_template").content.cloneNode(true);

    if (produkt.rabatsats) {
        klon.querySelector(".pris").classList.add("rabat");
    } else if (produkt.rabatsats == false) {
        klon.querySelector(".rabatpris").classList.add("ingenrabat");
    }

    klon.querySelector(".data_navn").innerHTML = produkt.navn;

    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    klon.querySelector(".data_rabatpris").innerHTML = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));

    klon.querySelector(".data_billede").src = "imgs/medium/" + produkt.billede + "-md.jpg";

    klon.querySelector(".data_langbeskrivelse").innerHTML = produkt.langbeskrivelse;

    klon.querySelector(".data_oprindelsesregion").innerHTML = produkt.oprindelsesregion;

    klon.querySelector(".data_allergener").innerHTML = produkt.allergener;

    klon.querySelector(".data_alkoholprocent").innerHTML = produkt.alkoholprocent;

    klon.querySelector(".data_stjerner").innerHTML = produkt.stjerner;

    document.querySelector(".modal-content").innerHTML = "";

    document.querySelector(".modal-content").appendChild(klon);

}
//******
//
//
////$(document).ready(function () {
////    console.log("start");
////    $('.lukkeklik').click(function () {
////        var navbar_toggle = $('.navbar-toggle');
////        if (navbar_toggle.is(':visible')) {
////            navbar_toggle.trigger('click');
////        }
////    });
////
////});
//
////*******TODO ME
//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("siden vises");
//    //læs produktliste
//    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);
//    // visProdukt();
//    document.querySelector(".vegetarknap_vegetar").addEventListener("click", filtrerVegetar);
//}
////*******
////************
//function filtrerVegetar(event) {
//    console.log("klik på vegetar-filter");
//    //find alle
//    var liste = document.querySelectorAll(".produkt:not(.vegetar)");
//    //skjul all
//    liste.forEach(div => div.classList.toggle("hide"));
//    //  event.preventDefault();
//}
////************
//
//
////***************
//function visProduktListe(listen) {
//    console.table(Listen);
//    //filtrer udsolgte produkter fra
//    //  listen = listen.filter(fjernUdsolgte);
//    listen.forEach(visProdukt);
//
//    function fjernUdsolgte(produkt) {
//        if (produkt.udsolgt == true) {
//            return false;
//        } else {
//            return true;
//
//        }
//    }
//    listen = listen.filter(produkt => !produkt.udsolgt);
//    listen.forEach(visProdukt);
//}
////**************
//
////    listen=listen.filter( function (produkt) {
////          return produkt.udsolgt;){};
////    listen.forEach(visProdukt);
////
////    var fjernUdsolgte =
////      function fjernudsolgte = function (produkt) {
////          return produkt.udsolgt;
////     }
////  }
////********
//function visProdukt(produkt) {
//    console.log("produkt", produkt);
//    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
//
//    klon.querySelector(".data_navn").textContent = produkt.navn;
//    klon.querySelector(".data_pris").innerHTML = produkt.pris;
//
//    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
//    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;
//
//    klon.querySelector(".date_billede").src = "imgs/small/" + produkt.billede + "-sm.jpg";
//}
////******
//
//
//
//
////    if (produkt.udsolgt == false) {
////        var udsolgttekst = klon.querySelector(".udsolgttekst");
////        udsolgttekst.parentNode.removeChild(udsolgttekst);
////    } else {
////        klon.querySelector(".pris").classList.add("udsolgt");
////
////    if (produkt.vegetar == true) {
////        document.querySelector(".produkt").classList.add("vegetar");
////        {
////    if (produkt.udsolgt) {
////        document.querySelector(".produkt").classList.add("udsolgt");
////        {
////    if (produkt.rabatsats > 0) {
////        document.querySelector(".produkt").classList.add("tilbud");
////        {
////    if (produkt.alkoholdprocent > 0) {
////        document.querySelector(".produkt").classList.add("alkohol");
////        {
//
//
//
////******produkt id
//klon.querySelector(".modalknap").dataset.produkt = produkt.id;
////******registrer klik
//
//klon.querySelector(".modalknap") addEventListener("click", modalknapklik);
////******append .produktliste
//
//dokument.querySelector(".produktliste").appendChild(klon);
////******
//
////document.querySelector(".produktliste").appendChild(klon);
//if (produkt.kategori == "forretter") {
//    document.querySelector(".forretliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".hovedretliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".desertliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".drikkevareliste").appendChild(klon);
//} else if (produkt_kategori == "hovedretter") {
//    dokument.querySelector(".sideordreliste").appendChild(klon);
//}
//
////******
//
////******
////******
//
//if (produkt.udsolgt == true || produkt.rabatsats == 0) {
//    var rabatpris = klon.querySelector(".rabatpris");
//    rabatpris.parentNode.removeChild(rabatpris);
//} else {
//    klon.querySelector(".pris").classList.add("rabat");
//}
//if (produkt.vegetar == true) {
//    klon.querySelector("produkt").classList.add("vegetar");
//}
//if (produkt.udsolgt) {
//    klon.querySelector("produkt").classList.add("udsolgt");
//}
//if (produkt.udsolgt) {
//    klon.querySelector("produkt").classList.add("tilbud");
//}
//if (produkt.rabatsats > = 0) {
//    klon.querySelector("produkt").classList.add("alkohol");
//}
////    if (produkt.alkoholprocent > 0) {
////        klon.querySelector("produkt").classList.add("alkohol");
////    }
////******
//
//
//
//
//
//
//// hvis kattegori var forret append til forretliste
//
//
//
//
//
//// hvis kategori var hovedret append til hovedret
//
//
//
//
//////$(document).on("load", start);
/////*
////window.addEventListener("load", start);
////
////
////
////function start() {
////    console.log("Start programmet");
////
////    $.getJSON("personer.json", visPersonListen);
////
////}
////
////function visPersonInfo(listen)  {
////    console.log(listen);
////    // klon person-info templaten
////    function visPersonInfo(person)  {
////        var klon = document.querySelector("#personinfo_template").content.cloneNode(true);
////
////        // sæt data ind i klonen
////        klon.querySelector(".data_fornavn").innerHTML = person.fornavn;
////        klon.querySelector(".data_efternavn").innerHTML = person.efternavn;
////
////        //-----
////        //$(document).on("load", start);
////window.addEventListener("load", start);
////*/
////
////
////
//////$(document).on("load", start);
////window.addEventListener("load", start);
////
////
////
////function start() {
////    console.log("Start programmet");
////
////    $.getJSON("personer.json", visPersonListe);
////}
////
////function visPersonListe(listen) {
////    console.table(listen);
////
////    // gå igennem listen, og kald visPersonInfo for hver person
////    listen.forEach(visPersonInfo);
////}
////
////function visPersonInfo(person)  {
////    // klon person-info templaten
////
////    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
////
////    // sæt data ind i klonen
////    klon.querySelector(".data_kategori").innerHTML = person.kategori;
////    klon.querySelector(".data_navn").innerHTML = person.navn;
////
////    klon.querySelector(".data_pris").innerHTML = person.pris;
////
////    klon.querySelector(".data_rabatpris").innerHTML = person.rabatpris;
////    //    klon.querySelector(".data_stjerner").innerHTML = person.stjerner;
////    //
////    //
////    //    klon.querySelector(".data_yndlingsfarve").style.backgroundColor = person.yndlingsfarve;
////    /*
////            klon.querySelector(".data_beskæftigelse").innerHTML = person.beskæftigelse;
////            klon.querySelector(".data_vægt").innerHTML = person.vægt;
////            klon.querySelector(".data_højde").innerHTML = person.højde;
////            klon.querySelector(".data_øjenfarve").style.backgroundColor = person.øjenfarve;
////            console.log("Vis info");
////            console.log("fornavn: " + person.fornavn);
////            console.log("efternavn: " + person.efternavn);
////            console.log("stjernetegn: " + person.stjernetegn);
////            console.log("yndlingsfarve: " + person.yndlingsfarve);
////            console.log("øjenfarve: " + person.øjenfarve);
////            console.log("beskæftigelse: " + person.beskæftigelse);
////            console.log("vægt: " + person.vægt);
////            console.log("højde: " + person.højde);*/
////
////    klon.querySelector(".modal").id = "modal" + person.id;
////    klon.querySelector(".modalknap").dataset.target = "#modal" + person.id;
////
////    // sæt klonen ind i person-info div
////    document.querySelector("#person_info").appendChild(klon);
////}
//function givEtNavn({
//        return "Peter"
//    }
//
//    function udskriv({
//            var navn = givEtNavn();
//            alert("Jeg fik navnet! " + navn);
//        }
