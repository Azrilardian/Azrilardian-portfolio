//! Get Time
function getTime() {
    const p = document.querySelectorAll("p.time");
    p[0].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[1].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[2].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[3].innerHTML = moment("06,04,2020", "DD,MM,YYYY").fromNow();
    p[4].innerHTML = moment().startOf("05:06").fromNow();
}
getTime();