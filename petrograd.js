//$(document).ready(function () {
//    console.log("start");
//    $('.lukkeklik').click(function () {
//        var navbar_toggle = $('.navbar-toggle');
//        if (navbar_toggle.is(':visible')) {
//            navbar_toggle.trigger('click');
//        }
//    });
//
//});



window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //læs produktliste
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe);

    visProdukt();
}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);
}

function visProdukt(produkt) {
    console.log(produkt);
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    document.querySelector(".produktliste").appendChild(klon);

}

////$(document).on("load", start);
///*
//window.addEventListener("load", start);
//
//
//
//function start() {
//    console.log("Start programmet");
//
//    $.getJSON("personer.json", visPersonListen);
//
//}
//
//function visPersonInfo(listen)  {
//    console.log(listen);
//    // klon person-info templaten
//    function visPersonInfo(person)  {
//        var klon = document.querySelector("#personinfo_template").content.cloneNode(true);
//
//        // sæt data ind i klonen
//        klon.querySelector(".data_fornavn").innerHTML = person.fornavn;
//        klon.querySelector(".data_efternavn").innerHTML = person.efternavn;
//
//        //-----
//        //$(document).on("load", start);
//window.addEventListener("load", start);
//*/
//
//
//
////$(document).on("load", start);
//window.addEventListener("load", start);
//
//
//
//function start() {
//    console.log("Start programmet");
//
//    $.getJSON("personer.json", visPersonListe);
//}
//
//function visPersonListe(listen) {
//    console.table(listen);
//
//    // gå igennem listen, og kald visPersonInfo for hver person
//    listen.forEach(visPersonInfo);
//}
//
//function visPersonInfo(person)  {
//    // klon person-info templaten
//
//    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
//
//    // sæt data ind i klonen
//    klon.querySelector(".data_kategori").innerHTML = person.kategori;
//    klon.querySelector(".data_navn").innerHTML = person.navn;
//
//    klon.querySelector(".data_pris").innerHTML = person.pris;
//
//    klon.querySelector(".data_rabatpris").innerHTML = person.rabatpris;
//    //    klon.querySelector(".data_stjerner").innerHTML = person.stjerner;
//    //
//    //
//    //    klon.querySelector(".data_yndlingsfarve").style.backgroundColor = person.yndlingsfarve;
//    /*
//            klon.querySelector(".data_beskæftigelse").innerHTML = person.beskæftigelse;
//            klon.querySelector(".data_vægt").innerHTML = person.vægt;
//            klon.querySelector(".data_højde").innerHTML = person.højde;
//            klon.querySelector(".data_øjenfarve").style.backgroundColor = person.øjenfarve;
//            console.log("Vis info");
//            console.log("fornavn: " + person.fornavn);
//            console.log("efternavn: " + person.efternavn);
//            console.log("stjernetegn: " + person.stjernetegn);
//            console.log("yndlingsfarve: " + person.yndlingsfarve);
//            console.log("øjenfarve: " + person.øjenfarve);
//            console.log("beskæftigelse: " + person.beskæftigelse);
//            console.log("vægt: " + person.vægt);
//            console.log("højde: " + person.højde);*/
//
//    klon.querySelector(".modal").id = "modal" + person.id;
//    klon.querySelector(".modalknap").dataset.target = "#modal" + person.id;
//
//    // sæt klonen ind i person-info div
//    document.querySelector("#person_info").appendChild(klon);
//}
