function trennen() {
    // console.log("test")
    let input = document.getElementById("input").value
    // console.log(input)
    let kette = document.getElementById("kette").value
    //console.log(kette)
    let index1 = input.indexOf(kette)
    // console.log(index1)
    let length = kette.length
    // console.log(length)
    let index2 = index1 + length
    // console.log(index2)
    let string1
    let string2
    console.log(davor.checked)
    if (index1 == -1) {
        console.log("-1?")
        document.getElementById("vorderer").innerHTML = "Das Zeichnen konnte leider nicht gefunden werden"
        document.getElementById("hinterer").innerHTML = input
    } else {
        if (davor.checked) {
            string1 = input.slice(0, index1)
            console.log(input)
            document.getElementById("vorderer").innerHTML = string1
            string2 = input.slice(index1)
            document.getElementById("hinterer").innerHTML = string2
        } else {
            string1 = input.slice(0, index2)
            console.log(input)
            document.getElementById("vorderer").innerHTML = string1
            string2 = input.slice(index2)
            document.getElementById("hinterer").innerHTML = string2
        }
    }
}