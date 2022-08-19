let country;
let select = document.getElementById("select");
document.getElementById("india").onclick = function () {
    select.innerText = "India";
    country = select.innerText;
};
document.getElementById("pakistan").onclick = function () {
    select.innerText = "Pakistan"
    country = select.innerText;
};
document.getElementById("london").onclick = function () {
    select.innerText = "London"
    country = select.innerText;
};
document.getElementById("chicago").onclick = function () {
    select.innerText = "Chicago"
    country = select.innerText;
};
document.getElementById("auckland").onclick = function () {
    select.innerText = "Auckland"
    country = select.innerText;
};
document.getElementById("tokyo").onclick = function () {
    select.innerText = "Tokyo"
    country = select.innerText;
};
document.getElementById("honolulu").onclick = function () {
    select.innerText = "Honolulu"
    country = select.innerText;
};
//defining variables useful for countries besides india
let a;
let date;
let time;
function calAlgo(day, month, year) {
    switch (month) {
        case 1:
            if (day > 31) {
                day = day - 31;
                month += 1;
            }
            break;
        case 2:
            if (year % 4 != 0) {
                if (day > 28) {
                    day -= 28;
                    month += 1;
                }
            }
            else {
                if (day > 29) {
                    day -= 29;
                    month += 1;
                }
            }
            break;
        case 3:
            if (day > 31) {
                day = day - 31;
                month += 1;
            }
            break;
        case 4:
            if (day > 30) {
                day -= 30;
                month += 1;
            }
            break;
        case 5:
            if (day > 31) {
                day -= 31;
                month += 1;
            }
            break;
        case 6:
            if (day > 30) {
                day -= 30;
                month += 1;
            }
            break;
        case 7:
            if (day > 31) {
                day -= 31;
                month += 1;
            }
            break;
        case 8:
            if (day > 31) {
                day -= 31;
                month += 1;
            }
            break;
        case 9:
            if (day > 30) {
                day -= 30;
                month += 1;
            }
            break;
        case 10:
            if (day > 31) {
                day -= 31;
                month += 1;
            }
            break;
        case 11:
            if (day > 30) {
                day -= 30;
                month += 1;
            }
        case 12:
            if (day > 31) {
                day -= 31;
                month += 1;
            }
            break;
        default:
            break;
    }
    if (month > 12) {
        month -= 12;
        year += 1;
    }
}

document.getElementById("getTime").onclick = function () {
    if (country == "India") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Indian Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            time = a.toLocaleTimeString();
            date = a.toLocaleDateString();
            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "Pakistan") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Pakistan Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint - 30 < 0) {
                mint = mint + 60 - 30;
                hrs = hrs - 1;
            }
            else {
                mint = mint - 30;
            }


            time = hrs + ":" + mint + ":" + a.getSeconds();

            if (hrs == 23 && mint >= 30 && mint <= 59) {
                day -= 1;
            }
            calAlgo(day, month, year);
            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "London") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>London Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`

        //defining function for recursion in the clock
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint - 30 < 0) {
                if (hrs - 4 < 0) {
                    hrs += 19;
                    mint = mint + 60 - 30;
                }
                else {
                    //minutes affect hours
                    hrs -= 5;
                    mint = mint + 60 - 30;
                }
            }
            else {
                //hours dont affect minutes
                if (hrs - 4 < 0) {
                    hrs = hrs + 24 - 4;
                    mint -= 30;
                }
                else {
                    hrs -= 4;
                    mint -= 30;
                }
            }

            //correct time
            time = hrs + ":" + mint + ":" + a.getSeconds();
            //correction on the date
            if (hrs == 19 && mint >= 30 || hrs > 19) {
                day -= 1;
            }
            //calling calAlgo funtion for correct calendar
            calAlgo(day, month, year);

            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "Chicago") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Chicago Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`

        //defining function for recursion in the clock
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint - 30 < 0) {
                if (hrs - 10 < 0) {
                    hrs += 24 - 10 - 1;
                    mint = mint + 60 - 30;
                }
                else {
                    //minutes affect hours
                    hrs -= 11;
                    mint = mint + 60 - 30;
                }
            }
            else {
                //hours dont affect minutes
                if (hrs - 10 < 0) {
                    hrs = hrs + 24 - 10;
                    mint -= 30;
                }
                else {
                    hrs -= 10;
                    mint -= 30;
                }
            }

            //correct time
            time = hrs + ":" + mint + ":" + a.getSeconds();
            //correction on the date
            if (hrs == 13 && mint >= 30 || hrs > 13) {
                day -= 1;
            }
            //calling calAlgo funtion for correct calendar
            calAlgo(day, month, year);

            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "Auckland") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Auckland Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`

        //defining function for recursion in the clock
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint + 30 > 60) {
                if (hrs + 6 > 24) {
                    hrs -= 24 - 6 - 1;
                    mint = mint - (+ 60 - 30);
                }
                else {
                    //minutes affect hours
                    hrs += 6 + 1;
                    mint = mint - (+ 60 - 30);
                }
            }
            else {
                //hours dont affect minutes
                if (hrs + 6 > 24) {
                    hrs -= 24 - 6;
                    mint += 30;
                }
                else {
                    hrs += 6;
                    mint += 30;
                }
            }

            //correct time
            time = hrs + ":" + mint + ":" + a.getSeconds();
            //correction on the date
            if (hrs >= 0 && hrs < 6  || hrs == 6 && mint <=30) {
                day += 1;
            }
            //calling calAlgo funtion for correct calendar
            calAlgo(day, month, year);

            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "Tokyo") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Tokyo Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`

        //defining function for recursion in the clock
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint + 30 > 60) {
                if (hrs + 3 > 24) {
                    hrs -= 24 - 3 - 1;
                    mint = mint - (+ 60 - 30);
                }
                else {
                    //minutes affect hours
                    hrs += 3 + 1;
                    mint = mint - (+ 60 - 30);
                }
            }
            else {
                //hours dont affect minutes
                if (hrs + 3 > 24) {
                    hrs -= 24 - 3;
                    mint += 30;
                }
                else {
                    hrs += 3;
                    mint += 30;
                }
            }

            //correct time
            time = hrs + ":" + mint + ":" + a.getSeconds();
            //correction on the date
            if (hrs >= 0 && hrs < 3  || hrs == 3 && mint <=30) {
                day += 1;
            }
            //calling calAlgo funtion for correct calendar
            calAlgo(day, month, year);

            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
    else if (country == "Honolulu") {
        let html = `
        <div class="container-fluid py-5">
        <h1><b>Honolulu Time - </b></h1>
        <h1 class="display-5 fw-bold" id="clock"><span id="time"></span></span></h1>
        <button class="btn btn-primary btn-lg" type="button" id="back" >Back</button>
        </div>`

        //defining function for recursion in the clock
        document.getElementById("content").innerHTML = html;
        setInterval(() => {
            a = new Date();
            // date = a.toLocaleDateString();
            mint = a.getMinutes();
            hrs = a.getHours();
            day = a.getDate();
            month = a.getMonth() + 1;
            year = a.getFullYear();
            time = a.toLocaleTimeString();


            //conversion with the help of IST
            if (mint - 30 < 0) {
                if (hrs - 15 < 0) {
                    hrs += 24 - 15 - 1;
                    mint = mint + 60 - 30;
                }
                else {
                    //minutes affect hours
                    hrs -= 15 + 1;
                    mint = mint + 60 - 30;
                }
            }
            else {
                //hours dont affect minutes
                if (hrs - 15 < 0) {
                    hrs = hrs + 24 - 15;
                    mint -= 30;
                }
                else {
                    hrs -= 15;
                    mint -= 30;
                }
            }

            //correct time
            time = hrs + ":" + mint + ":" + a.getSeconds();
            //correction on the date
            if (hrs == 8 && mint >= 30 || hrs > 8) {
                day -= 1;
            }
            //calling calAlgo funtion for correct calendar
            calAlgo(day, month, year);

            date = day + "/" + month + "/" + year;

            document.getElementById("time").innerHTML = time + " on " + date;
        }, 1000);
        document.getElementById("back").onclick = function () {
            window.location.reload();
        }
    }
}