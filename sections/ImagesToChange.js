const buc = document.querySelector(".buc");
const tim = document.querySelector(".tim");
const ora = document.querySelector(".ora");
const ara = document.querySelector(".ara");
const sib = document.querySelector(".sib");
const ias = document.querySelector(".ias");
const clu = document.querySelector(".clu");
const con = document.querySelector(".con");
const cra = document.querySelector(".cra");
const bra = document.querySelector(".bra");

const bar = document.querySelector(".bar");
const mad = document.querySelector(".mad");
const val = document.querySelector(".val");
const sev = document.querySelector(".sev");
const zar = document.querySelector(".zar");
const mal = document.querySelector(".mal");
const mur = document.querySelector(".mur");
const pam = document.querySelector(".pam");
const bil = document.querySelector(".bil");
const gra = document.querySelector(".gra");

const picture = (word) => {
    if(word === buc) {
        buc.style.visibility = "visible";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === tim) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "visible";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === ora) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "visible";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === ara) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "visible";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === sib) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "visible";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === ias) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "visible";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === clu) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "visible";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === con) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "visible";
        cra.style.visibility = "hidden";
        bra.style.visibility = "hidden";
    } else if (word === cra) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "visible";
        bra.style.visibility = "hidden";
    } else if (word === bra) {
        buc.style.visibility = "hidden";
        tim.style.visibility = "hidden";
        ora.style.visibility = "hidden";
        ara.style.visibility = "hidden";
        sib.style.visibility = "hidden";
        ias.style.visibility = "hidden";
        clu.style.visibility = "hidden";
        con.style.visibility = "hidden";
        cra.style.visibility = "hidden";
        bra.style.visibility = "visible";
    } else if (word === bar) {
        bar.style.visibility = "visible";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === mad) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "visible";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === val) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "visible";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === sev) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "visible";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === zar) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "visible";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === mal) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "visible";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === mur) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "visible";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === pam) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "visible";
        bil.style.visibility = "hidden";
        gra.style.visibility = "hidden";
    } else if (word === bil) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "visible";
        gra.style.visibility = "hidden";
    } else if (word === gra) {
        bar.style.visibility = "hidden";
        mad.style.visibility = "hidden";
        val.style.visibility = "hidden";
        sev.style.visibility = "hidden";
        zar.style.visibility = "hidden";
        mal.style.visibility = "hidden";
        mur.style.visibility = "hidden";
        pam.style.visibility = "hidden";
        bil.style.visibility = "hidden";
        gra.style.visibility = "visible";
    }
};






bucharest.addEventListener("click", () => {
    picture(buc);
});

timisoara.addEventListener("click", () => {
   picture(tim);
});

oradea.addEventListener("click", () => {
    picture(ora)
});

arad.addEventListener("click", () => {
   picture(ara)
});

sibiu.addEventListener("click", () => {
    picture(sib);
});

iasi.addEventListener("click", () => {
    picture(ias);
});

clujNapoca.addEventListener("click", () => {
    picture(clu);
});

constanta.addEventListener("click", () => {
    picture(con);
});

craiova.addEventListener("click", () => {
    picture(cra);
});

brasov.addEventListener("click", () => {
    picture(bra);
});



barcelona.addEventListener("click", () => {
    picture(bar)
});

madrid.addEventListener("click", () => {
    picture(mad)
});

valencia.addEventListener("click", () => {
   picture(val)
});

sevilia.addEventListener("click", () => {
   picture(sev)
});

zaragoza.addEventListener("click", () => {
picture(zar)
});

malaga.addEventListener("click", () => {
    picture(mal)
});

murcia.addEventListener("click", () => {
    picture(mur)
});

pamplona.addEventListener("click", () => {
    picture(pam)
});

bilbao.addEventListener("click", () => {
    picture(bil)
});

granada.addEventListener("click", () => {
    picture(gra)
});