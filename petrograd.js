//$(document).on("load", start);
/*
window.addEventListener("load", start);



function start() {
    console.log("Start programmet");

    $.getJSON("personer.json", visPersonListen);

}

function visPersonInfo(listen)  {
    console.log(listen);
    // klon person-info templaten
    function visPersonInfo(person)  {
        var klon = document.querySelector("#personinfo_template").content.cloneNode(true);

        // sæt data ind i klonen
        klon.querySelector(".data_fornavn").innerHTML = person.fornavn;
        klon.querySelector(".data_efternavn").innerHTML = person.efternavn;

        //-----
        //$(document).on("load", start);
window.addEventListener("load", start);
*/



//$(document).on("load", start);
window.addEventListener("load", start);



function start() {
    console.log("Start programmet");

    $.getJSON("personer.json", visPersonListe);
}

function visPersonListe(listen) {
    console.table(listen);

    // gå igennem listen, og kald visPersonInfo for hver person
    listen.forEach(visPersonInfo);
}

function visPersonInfo(person)  {
    // klon person-info templaten

    var klon = document.querySelector("#personinfo_template").content.cloneNode(true);

    // sæt data ind i klonen
    klon.querySelector(".data_fornavn").innerHTML = person.fornavn;
    klon.querySelector(".data_efternavn").innerHTML = person.efternavn;

    klon.querySelector(".data_alder").innerHTML = person.alder;

    klon.querySelector(".data_stjerner").innerHTML = person.stjerner;


    klon.querySelector(".data_yndlingsfarve").style.backgroundColor = person.yndlingsfarve;

    /*
            klon.querySelector(".data_beskæftigelse").innerHTML = person.beskæftigelse;
            klon.querySelector(".data_vægt").innerHTML = person.vægt;
            klon.querySelector(".data_højde").innerHTML = person.højde;
            klon.querySelector(".data_øjenfarve").style.backgroundColor = person.øjenfarve;
            console.log("Vis info");
            console.log("fornavn: " + person.fornavn);
            console.log("efternavn: " + person.efternavn);
            console.log("stjernetegn: " + person.stjernetegn);
            console.log("yndlingsfarve: " + person.yndlingsfarve);
            console.log("øjenfarve: " + person.øjenfarve);
            console.log("beskæftigelse: " + person.beskæftigelse);
            console.log("vægt: " + person.vægt);
            console.log("højde: " + person.højde);*/

    klon.querySelector(".modal").id = "modal" + person.id;
    klon.querySelector(".modalknap").dataset.target = "#modal" + person.id;

    // sæt klonen ind i person-info div
    document.querySelector("#person_info").appendChild(klon);
}
