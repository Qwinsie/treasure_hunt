let players = 0
let level = 0

const maxPlayers = 6
const levels = 1
const colors = ["red", "blue", "green", "yellow", "purple", "orange"]

init()
function init() {
    selectLevel()
}

function selectLevel() {
    let form = document.createElement('form')
    document.body.append(form)

    for (let i = 1; i < levels+1; i++) {
        let button = document.createElement('button');
        button.setAttribute('value',`${i}`);
        button.innerHTML = `Level ${i}`
        form.append(button)

        button.addEventListener('click', function selectedLevel(e) {
            e.preventDefault()
            level = e.target.value
            console.log("Chosen Level: " + level);
            form.remove()
            selectTotalPlayers(level)
        })
    }
}

function selectTotalPlayers(level) {
    let form = document.createElement('form')
    document.body.append(form)

    let backbtn = document.createElement('button');
    backbtn.innerHTML = `Back`
    form.append(backbtn)

    for (let i = 2; i < maxPlayers+1; i++) {
        let button = document.createElement('button');
        button.setAttribute('value',`${i}`);
        button.innerHTML = `${i} Players`
        form.append(button)

        button.addEventListener('click', function selectedTotalPlayers(e) {
            e.preventDefault()
            players = e.target.value
            console.log("Chosen Total Players: " + players);
            form.remove()
            selectColor(level, i)
        })
    }

    backbtn.addEventListener('click', function goBack(e) {
        e.preventDefault()
        form.remove()
        selectLevel()
    })
}

function selectColor(level, playerAmount) {
    let form = document.createElement('form')
    document.body.append(form)

    let backbtn = document.createElement('button');
    backbtn.innerHTML = `Back`
    form.append(backbtn)

    for (let i = 0; i < playerAmount; i++) {
        let btn = document.createElement('button');
        btn.setAttribute('value',`${colors[i]}`);
        btn.style.backgroundColor= colors[i]
        btn.innerHTML = `${colors[i]}`
        form.append(btn)

        btn.addEventListener('click', function selectedColor(e) {
            e.preventDefault()
            let color = e.target.value
            console.log("Chosen Color: " + color);
            form.remove()
            giveClues(level, playerAmount, color)
        })
    }

    backbtn.addEventListener('click', function goBack(e) {
        e.preventDefault()
        form.remove()
        selectTotalPlayers(level)
    })
}

function giveClues(level, playerAmount, color) {
    let clues = [1,2,3,4,5,6,7,8] // slice
    let clueAmount = clues.length / playerAmount

    let ul = document.createElement("ul")
    document.body.append(ul)
    console.log(playerAmount, color);

    let backbtn = document.createElement('button');
    backbtn.innerHTML = `Back`
    ul.append(backbtn)

    switch (playerAmount) {
        case 1:
            switch (color) {
                case "red":
                break;
                default:
                break;
            }
            break;
        case 2:
            switch (color) {
                case "red":
                    clues = clues.slice(0, 4)
                break;
                case "blue":
                    clues = clues.slice(4, 8)
                break;
                default:
                break;
            }
            break;
        case 3:
            switch (color) {
                case "red":
                    clues = clues.slice(0, 3)
                break;
                case "blue":
                    clues = clues.slice(3, 6)
                break;
                case "green":
                    clues = clues.slice(6, 8)
                break;
                default:
                break;
            }
            break;
        case 4:
            switch (color) {
                case "red":
                    clues = clues.slice(0, 2)
                break;
                case "blue":
                    clues = clues.slice(2, 4)
                break;
                case "green":
                    clues = clues.slice(4, 6)
                break;
                case "yellow":
                    clues = clues.slice(6, 8)
                break;
                default:
                break;
            }
            break;
        case 5:
            switch (color) {
                case "red":
                    clues = clues.slice(0, 2)
                break;
                case "blue":
                    clues = clues.slice(2, 4)
                break;
                case "green":
                    clues = clues.slice(4, 6)
                break;
                case "yellow":
                    clues = clues.slice(6, 7)
                break;
                case "purple":
                    clues = clues.slice(7, 8)
                break;
                default:
                break;
            }
            break;
        case 6:
            switch (color) {
                case "red":
                    clues = clues.slice(0, 2)
                break;
                case "blue":
                    clues = clues.slice(2, 4)
                break;
                case "green":
                    clues = clues.slice(4, 5)
                break;
                case "yellow":
                    clues = clues.slice(5, 6)
                break;
                case "purple":
                    clues = clues.slice(6, 7)
                break;
                case "orange":
                    clues = clues.slice(7, 8)
                break;
                default:
                break;
            }
        default:
        break;
    }

    for (const clue of shuffle(clues)) {
        console.log("clues "+ clues);
        const li = document.createElement("li")

        const img = document.createElement('img');
        img.setAttribute("src", `./src/clues/${clue}.png`)
        li.append(img)
        ul.append(li)
    }



    console.log("Clues given");

    let form = document.createElement('form')
    document.body.append(form)

    let notes = document.createElement('textarea');
    notes.ariaPlaceholder = `Write Notes...`
    notes.setAttribute("rows", 8)
    notes.setAttribute("cols", 40)
    form.append(notes)

    let breakEl = document.createElement('br')
    form.append(breakEl)

    let btn = document.createElement('button');
    btn.innerHTML = `Make Guess`
    form.append(btn)

    btn.addEventListener('click', function checkSolution(e) {
        e.preventDefault()
        ul.remove()
        form.remove()
        const solutions = [1,2,3]

        ul = document.createElement("ul")
        document.body.append(ul)
        for (const solution of shuffle(solutions)) {
            console.log("solutions "+ solutions);
            const li = document.createElement("li")
    
            const img = document.createElement('img');
            img.setAttribute("src", `./src/solutions/${solution}.png`)
            li.append(img)
            ul.append(li)
        }
    })

    backbtn.addEventListener('click', function goBack(e) {
        e.preventDefault()
        ul.remove()
        form.remove()
        selectColor(level, playerAmount)
    })
}

function checkGuess() {
    let form = document.createElement('form')
    document.body.append(form)

    let btn = document.createElement('button');
    btn.style.backgroundColor= colors[i]
    btn.innerHTML = `Check Guess`
    form.append(btn)

    btn.addEventListener('click', function selectedColor(e) {
        e.preventDefault()
        let color = e.target.value
        console.log("Chosen Color: " + color);
        form.remove()
        giveClues(level, playerAmount, color)
    })
}

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}
