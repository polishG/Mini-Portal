let themeButton = document.getElementById('theme')
function toggleTheme() {
    document.body.classList.toggle('dark-mode')
}
themeButton.onclick = toggleTheme
let loginForm = document.querySelector('nav form')
let loginButton = document.getElementById('button')

function Login(event) {
    event.preventDefault() 
    // preventDefault zatrzymuje przeładowanie strony.
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username && password) {
        alert(`Welcome to the platform, ${username}!`)
    }
}
if (loginButton) {
    loginButton.onclick = Login
}
let table1 = ["Nothing's there", "O-06-20", "ALEPH threat", "Lobotomy Corporation", "nt.png", "Nothing There (O-06-20) is an Abnormality that does not resemble any sort of human being, but instead a creature made of varied human parts. It has a large rectangular head with 2 mouths - a pink tongue coming out of the biggest mouth. It has 4 blue/light-blue eyes on its face, and a light blue arm with sharp claws at the top of its head. It stands on 3 legs; the two front legs are made of bones and the hind leg is a red intestine in the form of a leg with a 'foot' at the end. Its torso is made of a transparent material, revealing red, blue, and green intestines. A dark liquid drips below it. The rest of its body is made of bones or muscles." ]
let table2 = ["Roland", "Black Silence", "Color Fixer", "Library of Ruina", "Roland.png", "Roland (롤랑, Lollang) is one of the main characters, a 'hero' of sorts in Library Of Ruina and the servant of Angela, following his story in the Library across the game. He used to be a Grade 9 Fixer of a one-man Office before he wandered into the Library. He is the first Librarian that the player can use, and becomes the Patron Librarian of the first Floor to be unlocked: the Floor of General Works." ]
let table3 = ["Kali", "Red Mist", "Color Fixer", "Library of Ruina", "redmist.png", "Kali (칼리, Kali) was a legendary Color Fixer titled The Red Mist from the Backstreets of District 23. She was renowned throughout the City for her immense strength and her sense of justice as a protector of the weak. After meeting Carmen, she joined the Seed of Light Project team, and through their research she gained the E.G.O. weapon Mimicry and became able to manifest her own E.G.O. as well. Kali was ultimately killed in the Outskirts defending the research team against an attack by the Head, though she killed two Claws and mortally wounded the Arbiter Garion in return. To the City, she simply disappeared, and is memorialized as a hero. Gebura is the 'reincarnation' of Kali, having been created from her remains and possessing her memories." ]
let table4 = ["Sinclair", "VOGEL", "Sinner #11", "Limbus Company", "Sinclair.png", "Emil Sinclair is designated Sinner #11 of Limbus Company's LCB department. More frequently known as just Sinclair, he is an anxious and self-conscious man with a blatantly empathetic nature. He was previously affiliated with the prosthetic-famous town of Calw, having lived and attended school there prior to joining Limbus Company. He is the focus character of Canto III: The Unconfronting." ]
let table5 = ["Erlking Heathcliff", "Wild Hunt", "Antagonist", "Limbus Company", "Erlking.png", "Erlking Heathcliff, also known as Dead Rabbits Boss and Heathcliff?, is the leader of the impostor Dead Rabbits Syndicate and the commander of The Wild Hunt, acting as a major antagonist in Canto VI: The Heartbreaking. The original Dead Rabbits Boss, known as Matthew (LCB Mirror World) or Matt (Erlking Mirror World), is a posthumous character who never makes an actual appearance."]
let funFacts = [
    "The Library of Ruina was originally planned as a mobile game before becoming a PC title.",
    "Angela was originally based on nervous system of Lobotomy Corporation worker, Carmen, who was a  person that worked at the company before her death.",
    "The abnormality 'Nothing There' is actually based on the concept of an empty, monstrous shell attempting to mimic humanity'.",
    "Project Moon's games are heavily inspired by the works of Franz Kafka and other existential literature.",
    "The game 'Lobotomy Corporation' was developed in 3 years and 3 months, starting in January 2015 and oficially released in April 2018.",
    "In Library of Ruina, each floor of the library represents a different literary genre, philosophical concept and virtue.",
    "Project Moon's logo features a The Project Moon logo, which features a crescent moon with a keyhole, is believed to represent a 'door' to a new world or an entryway into the deep, often painful, lore of their games. The design is heavily tied to the recurring themes of doors, thresholds, and unlocking hidden truths within their universe.",
    "The game 'WonderLab' was Project Moon's first commercial release before Lobotomy Corporation.",
    "Angela's voice actress in Library of Ruina is the same person who voices several abnormalities in Lobotomy Corporation.",
    "Project Moon games often include references to real philosophical concepts like 'The Library of Babel' by Jorge Luis Borges.",
    "The character Kali (Red Mist) was inspired by the Hindu goddess of destruction and time.",
    "In Limbus Company, each Sinner represents a different aspect of human psychology and trauma.",
    "The abnormality 'The Queen of Hatred' is based on the biblical figure of Lilith and themes of female rage.",
    "Project Moon's art style evolved from simple pixel art in WonderLab to the detailed illustrations in their later games.",
    "The game 'Distortion Detective' is a spin-off that explores psychological horror in a different format.",
    "Angela's design was inspired by classical automata and mechanical dolls from literature.",
    "The character Roland was named after the legendary Frankish hero Roland from medieval literature.",
    "Project Moon's games often explore themes of existentialism, identity, and the nature of reality.",
    "The character Sinclair's is reference to the novel 'Demian' by Hermann Hesse, which explores themes of self-discovery and duality.",
    "The character Erlking Heathcliff's name is a reference to the Erlking from German folklore and Heathcliff from Emily Brontë's novel 'Wuthering Heights'.",
    "The game 'Limbus Company' was developed in response to the popularity of Library of Ruina, with a focus on more action-oriented gameplay while still exploring deep narrative themes."
]
function displayRandomFunFact() {
    let funfact = document.getElementById('funfact')
    if (funfact && funFacts.length > 0) {
        let randomIndex = Math.floor(Math.random() * funFacts.length)
        funfact.innerHTML = `
            <h3>Random Project Moon Fact:</h3>
            <p>${funFacts[randomIndex]}</p>
        `
    }
}

let allTables = [table1, table2, table3, table4, table5]
let tableElements = ['table1content', 'table2content', 'table3content', 'table4content', 'table5content']


function search() {
    let searchInput = document.getElementById('search')
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterAndDisplay(e.target.value)
        })
    }
}
function filterAndDisplay(searchTerm = '') {
    let searchLower = searchTerm.toLowerCase()
    let filteredTables = allTables.filter(table => table.some(element => element.toString().toLowerCase().includes(searchLower)))
    tableElements.forEach(elementId => {
        document.getElementById(elementId).innerHTML = ''
    })
    filteredTables.forEach((tableData) => {
        let originalIndex = allTables.indexOf(tableData)
        if (originalIndex !== -1) {
            displayTable(tableData, tableElements[originalIndex])
        }
    })
}
function tables() {
    table1content.innerHTML = `
        <div class="info-box">
            <h3>${table1[0]}</h3>
            <p><strong>ID:</strong> ${table1[1]}</p>
            <p><strong>Classification:</strong> ${table1[2]}</p>
            <p><strong>Game:</strong> ${table1[3]}</p>
            <p><strong>Image:</strong> <img src="${table1[4]}" alt="${table1[0]}"></p>
            <p>${table1[5]}</p>
        </div>`
    table2content.innerHTML =`
        <div class="info-box">
            <h3>${table2[0]}</h3>
            <p><strong>ID:</strong> ${table2[1]}</p>
            <p><strong>Classification:</strong> ${table2[2]}</p>
            <p><strong>Game:</strong> ${table2[3]}</p>
            <p><strong>Image:</strong> <img src="${table2[4]}" alt="${table2[0]}"></p>
            <p>${table2[5]}</p>
        </div>`
    table3content.innerHTML =`
        <div class="info-box">
            <h3>${table3[0]}</h3>
            <p><strong>ID:</strong> ${table3[1]}</p>
            <p><strong>Classification:</strong> ${table3[2]}</p>
            <p><strong>Game:</strong> ${table3[3]}</p>
            <p><strong>Image:</strong> <img src="${table3[4]}" alt="${table3[0]}"></p>
            <p>${table3[5]}</p>
        </div>`
        table4content.innerHTML =`
        <div class="info-box">
            <h3>${table4[0]}</h3>
            <p><strong>ID:</strong> ${table4[1]}</p>
            <p><strong>Classification:</strong> ${table4[2]}</p>
            <p><strong>Game:</strong> ${table4[3]}</p>
            <p><strong>Image:</strong> <img src="${table4[4]}" alt="${table4[0]}"></p>
            <p>${table4[5]}</p>
        </div>`
        table5content.innerHTML =`
        <div class="info-box">
            <h3>${table5[0]}</h3>
            <p><strong>ID:</strong> ${table5[1]}</p>
            <p><strong>Classification:</strong> ${table5[2]}</p>
            <p><strong>Game:</strong> ${table5[3]}</p>
            <p><strong>Image:</strong> <img src="${table5[4]}" alt="${table5[0]}"></p>
            <p>${table5[5]}</p>
        </div>`
}