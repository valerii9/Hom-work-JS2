for (let i = 0; i < 10; ++i) {
    for (let spase = (10 - i); spase > 0; spase--) {
        document.write("&nbsp;");
    }
    for (let j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}

// priamokutnyk
for (var i = 0; i < 10; ++i) {
    for (let k = 0; k <= i; k++) {
        document.write("*")
    }
    document.write("<br/>");
}

// romb;

for (let i = 0; i < 10; ++i) {
    for (let spase = (10 - i); spase > 0; spase--) {
        document.write("&nbsp;");
    }
    for (let j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}
for (let i = 0; i < 10; ++i) {
    for (let j = 0; j <= i; j++) {
        document.write("&nbsp;")
    }
    for (let spase = (10 - i); spase > 0; spase--) {
        document.write("*");
    }

    document.write("<br>")
}


let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
document.write(`${styles}</br>`);

const midlStyle = Math.floor(styles.length / 2);


styles.splice(midlStyle, 1, "Класика");
document.write(`${styles}</br>`);


let styles_sh = styles.shift(0);
document.write(`${styles_sh}</br>`);

let styles_f = styles.unshift('Реп', 'Реггі');
document.write(`${styles_f}</br>`);
document.write(`${styles}</br>`);




