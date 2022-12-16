"use strict";
const ROSTER_FILE_NAME = 'RosterList'
const rosterList = document.getElementById("test")
const addToRosterBtn = document.getElementById("addToRoster")
const showRosterBtn = document.getElementById("showRoster")
const rosterContainer = document.getElementById("rosterContainer")

const firstNameList = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Alexander", "Frank", "Patrick", "Raymond", "Jack", "Dennis", "Jerry", "Noah", "Liam", "Will", "Bill", "Jackson", "Oliver", "Leo", "Lucas", "Luca", "Ben", "Kai", "Micah", "Arlo", "Hugo", "Matteo", "Frans", "Elias", "Walter", "Oscar", "August", "Nils", "Theo", "Teddy", "Ted", "Otto", "Ludvig", "Arvid", "Elliot", "Malte", "Isak", "Maxim", "Artyom", "Mikail", "Ivan", "Danil", "Dmitriy", "Kirill", "Andrei", "Igor", "Ilya", "Alexei", "Matvey", "Timofey", "Novel", "Yaroslav", "Fedor", "Gleb",]
const lastNameList = ["SMITH", "JOHNSON", "WILLIAMS", "BROWN", "JONES", "GARCIA", "MILLER", "DAVIS", "RODRIGUEZ", "MARTINEZ", "HERNANDEZ", "LOPEZ", "GONZALEZ", "WILSON", "ANDERSON", "THOMAS", "TAYLOR", "MOORE", "JACKSON", "MARTIN", "LEE", "PEREZ", "THOMPSON", "WHITE", "HARRIS", "SANCHEZ", "CLARK", "Tremblay", "Roy", "Foy", "Schweitzer", "Singh", "Contreras", "Azevedo", "Candlin", "Gagnon", "Lee", "MacDonald", "Côté", "Bouchard", "Gauthier", "Morin", "Lavoie", "Fortin", "Gagné", "Johansson", "Andersson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson", "Pettersson", "Jonsson", "Jansson", "Hansson", "Bengtsson", "Jönsson", "Petersson", "Carlsson", "Magnusson", "Gustavsson", "Lindberg", "Olofsson", "Lindström", "Lindgren", "Axelsson", "Jakobsson", "Lundberg", "Bergström", "Lundgren", "Berg", "Berglund", "Fredriksson", "Mattsson", "Sandberg", "Henriksson", "Sjöberg", "Forsberg", "Håkansson", "Lindqvist", "Danielsson", "Engström", "Lind", "Lundin", "Eklund", "Fransson", "Gunnarsson", "Samuelsson", "Johnsson", "Holm", "Bergman", "Holmberg", "Nyström", "Lundqvist", "Arvidsson", "Isaksson", "Mårtensson", "Björk", "Nyberg", "Söderberg", "Nordström", "Lundström", "Wallin", "Eliasson", "Berggren", "Björklund", "Hermansson", "Ström", "Sandström", "Nordin", "Holmgren", "Åberg", "Sundberg", "Ekström", "Hedlund", "Sjögren", "Månsson", "Martinsson", "Dahlberg", "Öberg", "Jonasson", "Andreasson", "Strömberg", "Hellström", "Åkesson", "Norberg", "Blomqvist", "Blom", "Sundström", "Göransson", "Åström", "Ivarsson", "Ek", "Söderström", "Löfgren", "Lindholm", "Bergqvist", "Lund", "Nyman", "Dahl", "Ivanov", "Smirnov", "Kuznetsov", "Popov", "Petrov", "Sokolov", "Lebedev", "Volkova", "Ovechkin", "Robinson", "Robitaille", "Hull", "Karlsson", "Meier", "Couture", "Hertl", "Nolan", "Nabokov", "Pavelski", "Marleau", "Thornton"]

const ATTRIBUTES_LIST = {
    "Genius": {Offense: 3, Defense: 3, Agility: 1},
    "Strong": {Offense: 2, Defense: 2, Agility: 1},
    "Stupid": {Offense: -2, Defense: -2, Speed: -2, Agility: -2},
    "Weak": {Offense: -2, Defense: -2},
    "Giant": {Offense: 1, Defense: 2, Speed: -1, Agility: -2},
    "Left-Handed": {Offense: 2, Defense: 2},
    "Brawny": {Offense: 1, Defense: 2, Speed: -1, Agility: -1},
    "Frail": {Offense: -2, Defense: -2, Speed: -2, Agility: -2},
    "Nimble": {Speed: 2, Agility: 2},
    "Careful Shooter": {Offense: 2, Speed: -1, Agility: 1},
    "Trigger-happy": {Offense: -1, Speed: 2, Agility: 2},
}

const POSITION_LIST = [
    "Goalie",
    "Center",
    "Left Wing",
    "Right Wing",
    "Left Defense",
    "Right Defense",
    // "Captain"
]

const STATS_LIST = [ "Offense", "Defense", "Speed", "Agility" ]

const PORTRAITS = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Winnipeg_Jets_Logo_2011.svg/800px-Winnipeg_Jets_Logo_2011.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/1200px-Penn_State_Nittany_Lions_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Seton_Hall_Pirates_logo.svg/1200px-Seton_Hall_Pirates_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/SanJoseSharksLogo.svg/1200px-SanJoseSharksLogo.svg.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Ottawa_Senators_2020-2021_logo.svg/800px-Ottawa_Senators_2020-2021_logo.svg.png",
    "https://img.athleticbusiness.com/files/base/abmedia/all/image/2022/11/Louisville_Cardinals_logo.svg__1_.63651c229ca3a.png?auto=format%2Ccompress&fit=max&q=70&w=1200",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Buffalo_Sabres_Logo.svg/640px-Buffalo_Sabres_Logo.svg.png",
]

const DEFAULT_BONUS = 0.10

const TACTICS = {
    "Default": {Offense: 0, Defense: 0, Speed: 0},
    "Counter": {Offense: -(DEFAULT_BONUS), Defense: (DEFAULT_BONUS), Speed: (DEFAULT_BONUS)},
    "Fortify": {Offense: (DEFAULT_BONUS), Defense: (DEFAULT_BONUS), Speed: -(DEFAULT_BONUS)},
    "Aggressive": {Offense: (DEFAULT_BONUS), Defense: -(DEFAULT_BONUS), Speed: (DEFAULT_BONUS)}
}

// Utilities
const getRandomNumber = function (min, max) {
    // Inclusive
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

const randValueFromArray = function (stringOptions) {
    let index = getRandomNumber(0, stringOptions.length - 1)
    return stringOptions[index]
}

const getRandomName = function () {
    return `${firstNameList[Math.floor(Math.random() * firstNameList.length)].toUpperCase()} ${lastNameList[Math.floor(Math.random() * lastNameList.length)].toUpperCase()}`
}

const getRandNumberFromDistribution = function (values, distributions) {
    // Values example: [0, 1, 2]
    // Distributions examples: [25, 50, 25]
    // 0 = 25%, 1 = 50%, 2 = 25%

    // Get random number
    let num = getRandomNumber(0, 100)

    // Loop through distributions until you reach the amount specified
    let total = 0

    for (let i = 0; i <= values.length; i++) {
        total += distributions[i]
        if (num <= total) {
            return values[i]
        }
    }
}

const getRandAttribute = function () {
    return randValueFromArray(Object.keys(ATTRIBUTES_LIST))
}

const generateTeamName = function () {
    let cityNames = ["NYC", "LA", "Chicago", "Houston", "Phoenix", "Philly", "San Antonio", "San Diego", "Dallas", "San Jose"]
    let teamNames = ["Tigers", "Lions", "Jets", "Sharks", "HockeyTeam", "Sabres"]
    return `${cityNames[getRandomNumber(0, cityNames.length - 1)]} ${teamNames[getRandomNumber(0, teamNames.length - 1)]}`

}

const tempPlayerFigure = function (playerWindow = 200) {
    const STROKE_WIDTH = 4
    const WEIGHT = {
        "Skinny" : 37,
        "Normal" : 45,
        "Large"  : 60,
    }

    const HEIGHT = {
        "Short" : 50,
        "Normal": 60,
        "Tall"  : 70,
    }

    const SMARTNESS = {
        "Dumb" : 27,
        "Normal": 37,
        "Smart" : 42,
    }

    const bodySize = WEIGHT["Normal"] * (playerWindow / 200)
    const bodyHeight = HEIGHT["Normal"] * (playerWindow / 200)
    const headSize = SMARTNESS["Normal"] * (playerWindow / 200)


    return `<svg height="${playerWindow}" width="${playerWindow}"">
        <ellipse
            cx="${playerWindow / 2}"
            cy="${playerWindow - (bodyHeight + STROKE_WIDTH)}"
            rx="${bodySize}"
            ry="${bodyHeight}"
            stroke-width="${STROKE_WIDTH}" />
        <circle
            cx="${playerWindow / 2}"
            cy="${playerWindow - (bodyHeight * 2) - (headSize * .75)}"
            r="${headSize}"
            stroke-width="${STROKE_WIDTH}" />
    </svg>`
}



class Player {
    constructor(name = getRandomName()) {
        this.isCaptain = false
        this.currentPosiion = null
        this.team = null
        this.level = 0
        this.experience = 0
        this.newStatPoints = 0
        this.stats = {
            "Offense": 0,
            "Defense": 0,
            "Speed": 0,
            "Agility": 0,
        }
        this.attributes = new Set ()
        this.positions = new Set ()
        this.name = name
        this.figure = tempPlayerFigure(90)
    }

    get totalStats () {
        return this.stats["Offense"] + this.stats["Defense"] + this.stats["Speed"] + this.stats["Agility"]
    }

    levelUp () {
        this.level++
        this.newStatPoints += 2
        this.distributeStats()
    }

    addAttribute (attribute) {
        if (!this.attributes.has(attribute)) {
            this.attributes.add(attribute)
            for (const effect in ATTRIBUTES_LIST[attribute]) {
                let statChange = ATTRIBUTES_LIST[attribute][effect]
                this.changeStat(effect, statChange)
            }
        }
    }

    addPositionExperience (position, amount) {
        this.positions[position] += amount
    }

    addPlayerExperience (amount) {
        // TODO redesign experience system
        this.experience += amount
        // if (Math.pow(this.experience / 0.03, 2) > 1) {
        //     levelUp()
        // }
        if (this.experience >= 100) {
            this.levelUp()
            this.experience -= 100
        }
    }

    changePosition (newPosition) {
        if (!POSITION_LIST.includes(newPosition)) {
            console.log(`${newPosition} does not exist`);
            return
        }

        this.positions.add(newPosition)
        this.currentPosiion = newPosition
    }

    changeStat (stat, amount) {
        // TODO check that the stat does not go below 0
        this.stats[stat] += amount
    }

    distributeStats () {
        for (let i = 0; i < this.newStatPoints; i++) {
            // Select a random stat field
            let stat = randValueFromArray(STATS_LIST)
            this.changeStat(stat, 1)
        }
        this.newStatPoints = 0
    }

    generateNewPlayerStats () {
        // Level (75% chance of 0, 25% chance of 1)
        if (getRandomNumber(0, 100) >= 75) {
            this.levelUp()
        }

        // Stats (0 - 2, 75%, 20%, 5%)
        this.newStatPoints += getRandNumberFromDistribution([0, 1, 2], [75, 20, 5])

        // Attributes (25% chance of 0, 50% chance of 1, 25% chance of 2)
        let newAttributes = getRandNumberFromDistribution([0, 1, 2], [25, 50, 25])
        for (let i = 0; i < newAttributes; i++) {
            this.addAttribute(getRandAttribute())
        }

        // Position (1)
        this.changePosition(randValueFromArray(POSITION_LIST))

        this.distributeStats()
    }

    get details () {
        return this
    }

    get profile () {
        return this.figure
    }
}

class Team {
    constructor (name) {
        this.name = name
        this.portrait = PORTRAITS[getRandomNumber(0, PORTRAITS.length - 1)]
        this.roster = []
        this.record = {
            "Wins": 0,
            "Losses": 0,
            "Ties": 0
        }
        this.currentTactic = "Default"
        this.points = 0
    }

    add (player) {
        if (!this.roster.includes(player)) {
            player.team = this.name
            this.roster.push(player)
        }
    }

    remove (player) {
        player.team = null
        this.roster.delete(player)
        return player
    }

    show () {
        for (let teammember of this.roster) {
            console.log(teammember.name);
            console.log(teammember);
        }
    }

    scored () {
        this.points++
    }

    result (gameResult) {
        console.log(`${this.name} got a ${gameResult}`);
        let experienceGain = 0
        switch (gameResult) {
            case "Win":
                this.record.Wins += 1
                experienceGain = 25
                break;
            case "Tied":
                this.record.Ties += 1
                experienceGain = 15
                break;
            case "Loss":
                this.record.Losses += 1
                experienceGain = 5
                break;
        }

        for (let player of this.roster) {
            player.addPlayerExperience(experienceGain * this.points)
        }

        this.points = 0
    }

    set tactic (newTactic) {
        if (Object.keys(TACTICS).includes(newTactic)) {
            this.currentTactic = newTactic
        }
    }

    get stats () {
        let attackSum = 0
        let defenseSum = 0
        let speedSum = 0

        // Collect the stats of each teammember
        for (let teammember of this.roster) {
            attackSum += teammember.stats.Offense
            defenseSum += teammember.stats.Defense
            speedSum += teammember.stats.Speed
        }

        // Modify the stats based on the tactic being used
        attackSum += Math.round(Math.abs(attackSum) * TACTICS[this.currentTactic].Offense)
        defenseSum += Math.round(Math.abs(defenseSum) * TACTICS[this.currentTactic].Defense)
        speedSum += Math.round(Math.abs(speedSum) * TACTICS[this.currentTactic].Speed)

        // Return the stats as an object
        return { "attack": attackSum, "defense": defenseSum, "speed": speedSum }
    }
}

class League {
    constructor () {
        this.roster = []
        this.teamList = []
    }

    isEmpty() {
        return this.roster.length > 0 ? false : true
    }

    addToRoster(player) {
        this.roster.push(player)
    }

    addToTeamList(team) {
        this.teamList.push(team)
    }

    removeFromRoster(removePlayer) {
        let newRoster = this.roster.filter(player => player.name != removePlayer.name)
        this.roster = newRoster
    }

    removeFromTeamList(removeTeam) {
        let newTeamList = this.teamList.filter(team => team.name != removeTeam.name)
        this.teamList = newTeamList
    }

    saveRosterToStorage() {
        window.localStorage.clear()
        window.localStorage.setItem(ROSTER_FILE_NAME, JSON.stringify(this.roster))
    }

    getRosterFromStorage() {
        try {
            // const jsonStorageData = JSON.parse(window.localStorage.getItem(ROSTER_FILE_NAME))
            // for (let player of jsonStorageData) {
            //     this.roster.push(player)
            // }
            this.roster = JSON.parse(window.localStorage.getItem(ROSTER_FILE_NAME))
        } catch (e) {
            console.log(e);
        }
    }
}

class Game {
    constructor (league) {
        // this.league = league
        this.league = []
        this.playerList = []
    }

    addPlayerToPlayerList (player) {
        this.playerList.push(player)
        return player
    }

    addTeamToLeague (team) {
        this.league.push(team)
        return team
    }

    setup () {
        // Get data from local storage
        this.league.getRosterFromStorage(ROSTER_FILE_NAME)
    }

    draft () {
        // View Player
    }

    displayPlayer (player, slot) {
        const playerContainer = document.getElementById(slot)
        playerContainer.innerHTML = ""
        const template = document.getElementById("playerCard")
        const clone = template.content.cloneNode(true)

        clone.querySelectorAll('#playerName')[0].textContent = player.name
        clone.querySelectorAll('#playerLevel')[0].textContent = player.level
        clone.querySelectorAll('#playerExperience')[0].value = player.experience
        clone.querySelectorAll('#playerPosition')[0].textContent = player.currentPosiion
        clone.querySelectorAll('#playerOffense')[0].textContent = player.stats["Offense"]
        clone.querySelectorAll('#playerDefense')[0].textContent = player.stats["Defense"]
        clone.querySelectorAll('#playerSpeed')[0].textContent = player.stats["Speed"]
        clone.querySelectorAll('#playerAgility')[0].textContent = player.stats["Agility"]
        clone.querySelectorAll('#playerAgility')[0].textContent = player.stats["Agility"]
        for (let attribute of Array.from(player.attributes.values())) {
            clone.querySelectorAll('ul')[0].innerHTML += `<li>${attribute}</li>`
        }
        playerContainer.appendChild(clone)
    }

    faceoff (team1, team2) {
        // Whoever has a higher speed stat wins the faceoff
        let total = team1.stats["speed"] + team2.stats["speed"]
        let rand = getRandomNumber(0, total)
        let result = rand <= team1.stats["speed"]
        return result ? [team1, team2] : [team2, team1]
    }

    offenseScores (offense, defense) {
        let total = offense.stats.attack + defense.stats.defense
        let rand = getRandomNumber(0, total)
        return rand <= offense.stats.attack
    }

    match (homeTeam, awayTeam) {
        let offense, defense, outcome, loops, i

        loops = 0
        for (i = 0; i < 10; i++) {
            loops++
            [offense, defense] = this.faceoff(homeTeam, awayTeam)
            while (true) {
                loops++
                if (this.offenseScores(offense, defense)) {
                    offense.scored()
                    break
                } else {
                    i++
                    [offense, defense] = [defense, offense]
                }
            }
        }
        console.log(loops);
        console.log(`${homeTeam.name} got ${homeTeam.points} points`);
        console.log(`${awayTeam.name} got ${awayTeam.points} points`);

        if (homeTeam.points > awayTeam.points) {
            homeTeam.result("Win")
            awayTeam.result("Loss")
        } else if (homeTeam.points < awayTeam.points) {
            homeTeam.result("Loss")
            awayTeam.result("Win")
        } else if (homeTeam.points == awayTeam.points) {
            homeTeam.result("Tied")
            awayTeam.result("Tied")
        }
    }

    nextOpponent () {
        let myTeam, nextOpponent
        myTeam = this.league.shift()
        nextOpponent = this.league.shift()
        this.league.push(nextOpponent)
        this.league.unshift(myTeam)
        return nextOpponent
    }
}

const drawPlayer = function () {
    const STROKE_WIDTH = 4
    const WEIGHT = {
        "Skinny" : 37,
        "Normal" : 45,
        "Large"  : 60,
    }

    let weightTest = getRandomNumber(37, 60)
    let heightTest = getRandomNumber(50, 70)
    let smartTest = getRandomNumber(27, 45)

    const HEIGHT = {
        "Short" : 50,
        "Normal": 60,
        "Tall"  : 70,
    }

    const SMARTNESS = {
        "Dumb" : 27,
        "Normal": 37,
        "Smart" : 42,
    }

    // let bodySize = WEIGHT["Large"]
    // let bodyHeight = HEIGHT["Short"]
    // let headSize = SMARTNESS["Smart"]
    let bodySize = weightTest
    let bodyHeight = heightTest
    let headSize = smartTest
    let bodyPositionX = Math.max(bodySize, headSize) + STROKE_WIDTH
    bodyPositionX = 100
    let bodyPositionY = bodyHeight + STROKE_WIDTH + headSize

    let playerWindow = 200
    playerWindow = 50

    return `<svg height="${playerWindow}" width="${playerWindow}">
        <ellipse
            cx="${bodyPositionX}"
            cy="${playerWindow - (bodyHeight + STROKE_WIDTH)}"
            rx="${bodySize}"
            ry="${bodyHeight}"
            stroke-width="${STROKE_WIDTH}" />
        <circle
            cx="${bodyPositionX / playerWindow}"
            cy="${playerWindow - (headSize * 0.25 + bodyHeight * 2 + STROKE_WIDTH)}"
            r="${headSize}"
            stroke-width="${STROKE_WIDTH}" />
    </svg>`
}

class ViewWindow {
    constructor () {
        this.window
        this.content = document.getElementById("content")
        this.game = new Game()
    }

    setup () {
        const topNavTemplate = document.getElementById("topNav").content.cloneNode(true)

        document.body.insertBefore(topNavTemplate, this.content)
    }

    buttonClick (event) {

    }

    clear (DOMelement) {
        DOMelement.innerHTML = ""
    }

    set draftPlayerContainer (cardNode) {
        this.clear(document.getElementById("draftPlayerContainer"))
        document.getElementById("draftPlayerContainer").appendChild(cardNode)
    }


    createStatBox (statTitle, statAmount, isModifiable) {
        const statItemClone = document.getElementById("statItem").content.cloneNode(true)

        statItemClone.querySelector(".statTitle").innerText = statTitle
        statItemClone.querySelector(".statAmount").innerText = statAmount

        if (isModifiable) {
            let statClassModifier = ""

            if (statTitle == "ATK")
                statClassModifier = "attackStatModifier"
            if (statTitle == "DEF")
                statClassModifier = "defenseStatModifier"
            if (statTitle == "SPD") {
                statClassModifier = "speedStatModifier"
            }

            let element = `<span class="${statClassModifier} percentage statModifier">${statAmount}</span>`
            statItemClone.querySelector(".statItem").innerHTML += element
        }

        return statItemClone
    }

    updateTeamCard(team) {
        let stats = team.stats
        let teamCard = document.querySelector("#slot1").querySelector(".teamStatsContainer")

        teamCard.querySelectorAll(".statAmount")[0].innerText = stats.attack
        teamCard.querySelectorAll(".statAmount")[1].innerText = stats.defense
        teamCard.querySelectorAll(".statAmount")[2].innerText = stats.speed

        // Convert to a percentage by multiplying by 100
        let attackStatModifier = TACTICS[team.currentTactic].Offense * 100
        let defenseStatModifier = TACTICS[team.currentTactic].Defense * 100
        let speedStatModifier = TACTICS[team.currentTactic].Speed * 100

        // Use Ternary Operator to check if stat modifier is positive
        teamCard.querySelector(".attackStatModifier").innerText = (attackStatModifier > 0) ? `+${attackStatModifier}` : attackStatModifier
        teamCard.querySelector(".defenseStatModifier").innerText = (defenseStatModifier > 0) ? `+${defenseStatModifier}` : defenseStatModifier
        teamCard.querySelector(".speedStatModifier").innerText = (speedStatModifier > 0) ? `+${speedStatModifier}` : speedStatModifier

        // Update Wins-Losses-Ties
        document.querySelector(".teamRecord").innerText = `${team.record.Wins}-${team.record.Losses}-${team.record.Ties}`
    }

    tempshowteamcard = function (team, user = "Player") {
        const playerCardContainer = document.getElementById("slot1")
        const computerCardContainer = document.getElementById("slot2")
        this.clear(computerCardContainer)

        const clone = document.getElementById("teamCard").content.cloneNode(true)

        clone.querySelector(".teamRecord").innerText = `${team.record.Wins}-${team.record.Losses}-${team.record.Ties}`
        clone.querySelector("img").src = team.portrait
        clone.querySelector(".teamName").innerText = team.name

        let stats = team.stats

        if (user === "CPU") {
            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("ATK", stats.attack, false))
            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("DEF", stats.defense, false))
            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("SPD", stats.speed, false))
        }


        if (user === "Player") {
            const tactics = document.getElementById("teamCardTacticsBtns").content.cloneNode(true)

            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("ATK", stats.attack, true))
            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("DEF", stats.defense, true))
            clone.querySelector(".teamStatsContainer").appendChild(this.createStatBox("SPD", stats.speed, true))

            tactics.getElementById("counterTactic").addEventListener("change", event => {
                team.tactic = event.target.value
                this.updateTeamCard(team)
            })
            tactics.getElementById("fortifyTactic").addEventListener("change", event => {
                team.tactic = event.target.value
                this.updateTeamCard(team)
            })
            tactics.getElementById("aggressiveTactic").addEventListener("change", event => {
                team.tactic = event.target.value
                this.updateTeamCard(team)
            })

            clone.querySelector(".teamTactic").appendChild(tactics)
            playerCardContainer.appendChild(clone)
            return
        }
        computerCardContainer.appendChild(clone)
    }

    createSimplePlayerCard (player) {
        const simplePlayerCardTemplate = document.getElementById("simplePlayerCard").content.cloneNode(true)

        if (player.currentPosiion == "Left Wing" || player.currentPosiion == "Right Wing" || player.currentPosiion == "Center") {
            simplePlayerCardTemplate.querySelector('span').innerHTML = `<i class="fa-solid fa-play"></i> ${player.currentPosiion}`
        }
        if (player.currentPosiion == "Left Defense" || player.currentPosiion == "Right Defense") {
            simplePlayerCardTemplate.querySelector('span').innerHTML = `<i class="fa-solid fa-square"></i> ${player.currentPosiion}`
        }
        if (player.currentPosiion == "Goalie") {
            simplePlayerCardTemplate.querySelector('span').innerHTML = `<i class="fa-solid fa-circle"></i> ${player.currentPosiion}`
        }

        simplePlayerCardTemplate.querySelector('.attackStat').innerText = player.stats["Offense"]
        simplePlayerCardTemplate.querySelector('.defenseStat').innerText = player.stats["Defense"]
        simplePlayerCardTemplate.querySelector('.speedStat').innerText = player.stats["Speed"]

        return simplePlayerCardTemplate
    }

    createPlayerCard (player) {
        const playerCardTemplate = document.getElementById("playerCardListItem").content.cloneNode(true)

        // Player Profile
        playerCardTemplate.querySelector("figure").innerHTML = player.profile
        let firstname, surname
        [firstname, surname] = player.name.split(" ")
        playerCardTemplate.querySelector(".playerName").innerText = `${firstname.charAt(0)}. ${surname}`
        playerCardTemplate.querySelector(".playerPosition").innerText = player.currentPosiion
        playerCardTemplate.querySelector(".playerLevel").innerText = player.level
        playerCardTemplate.querySelector(".playerExperience").value = player.experience
        // playerCardTemplate.querySelector(".newXP").innerText = `+100 xp`

        // Stats
        playerCardTemplate.querySelector(".playerStatsContainer").appendChild(this.createStatBox("ATK", player.stats.Offense, false))
        playerCardTemplate.querySelector(".playerStatsContainer").appendChild(this.createStatBox("DEF", player.stats.Defense, false))
        playerCardTemplate.querySelector(".playerStatsContainer").appendChild(this.createStatBox("SPD", player.stats.Speed, false))

        return playerCardTemplate
    }

    tempshowplayerlistcard (player) {
        const results = document.getElementById("resultsContainer")
        const clone = document.getElementById("playerCardListItem").content.cloneNode(true)

        // Player Profile
        clone.querySelector("figure").innerHTML = player.profile
        let firstname, surname
        [firstname, surname] = player.name.split(" ")
        clone.querySelector(".playerName").innerText = `${firstname.charAt(0)}. ${surname}`
        clone.querySelector(".playerPosition").innerText = player.currentPosiion
        clone.querySelector(".playerLevel").innerText = player.level
        clone.querySelector(".playerExperience").value = player.experience
        clone.querySelector(".newXP").innerText = `+100 xp`

        // Stats
        clone.querySelector(".playerStatsContainer").appendChild(this.createStatBox("ATK", player.stats.Offense, false))
        clone.querySelector(".playerStatsContainer").appendChild(this.createStatBox("DEF", player.stats.Defense, false))
        clone.querySelector(".playerStatsContainer").appendChild(this.createStatBox("SPD", player.stats.Speed, false))

        results.appendChild(clone)
    }

    createVerticalTeamCard (team) {
        const verticalTeamCardTemplate = document.getElementById("teamCardVerticalListItem").content.cloneNode(true)

        verticalTeamCardTemplate.querySelector("img").src = team.portrait
        verticalTeamCardTemplate.querySelector("figcaption").innerText = team.name
        verticalTeamCardTemplate.querySelector('div').setAttribute('id', `${team.name.replaceAll(" ", "")}`)
        for (let player of team.roster) {
            verticalTeamCardTemplate.querySelector('.playerContainer').appendChild(this.createSimplePlayerCard(player))
        }

        return verticalTeamCardTemplate
    }

    index () {

    }

    draft (teamList) {

        // create draft container
        this.clear(this.content)
        const draftContainer = document.getElementById("draftContainer").content.cloneNode(true)

        // Create UI
        const buttonContainer = draftContainer.querySelector('div').querySelector('div')
        buttonContainer.innerHTML = `
        <button type="button" id="skipPlayer">Skip Player</button>
        <button type="button" id="addPlayer">Add Player</button>
        `

        // Create team cards
        for (let teamIndex in teamList) {
            draftContainer.querySelector(".teamContainer").appendChild(this.createVerticalTeamCard(teamList[teamIndex]))
        }
        this.content.appendChild(draftContainer)

        // Show Player
        const draftPlayerContainer = document.getElementById('draftPlayerContainer')



        let player = new Player()
        player.generateNewPlayerStats()
        draftPlayerContainer.appendChild(this.createPlayerCard(player))

        document.getElementById("skipPlayer").addEventListener('click', () => {
            const playerContainer = document.getElementById("MyTeam").querySelector(".playerContainer")

            player = new Player()
            player.generateNewPlayerStats()

            this.clear(draftPlayerContainer)
            draftPlayerContainer.appendChild(this.createPlayerCard(player))
        })

        document.getElementById("addPlayer").addEventListener('click', () => {
            const playerContainer = document.getElementById("MyTeam").querySelector(".playerContainer")

            playerContainer.appendChild(this.createSimplePlayerCard(player))
            player = new Player()
            player.generateNewPlayerStats()
            this.clear(draftPlayerContainer)
            draftPlayerContainer.appendChild(this.createPlayerCard(player))
        })
    }
}

const main = function (pageName) {
    const gameWindow = new ViewWindow ()
    gameWindow.setup()
    const hockey = new Game(new League())
    const myTeam = new Team("MyTeam")
    hockey.addTeamToLeague(myTeam)


    // TEMP Generate League
    for (let teamNum = 0; teamNum < 9; teamNum++) {
        let newTeam = hockey.addTeamToLeague(new Team (generateTeamName()))

        // Generate Players for that team
        for (let i = 0; i < 6; i++) {
            let player = hockey.addPlayerToPlayerList(new Player ())
            player.generateNewPlayerStats()
            newTeam.add(player)
        }
    }

    if (pageName === "index") {
        gameWindow.index()
    }
    if (pageName === "draft") {
        gameWindow.draft(hockey.league)
    }

    //
    //
    // document.getElementById("playerBattle").addEventListener("click", function () {
    //     let will = new Player()
    //     let bret = new Player()
    //     will.generateNewPlayerStats()
    //     bret.generateNewPlayerStats()
    //     hockey.displayPlayer(will, "slot1")
    //     hockey.displayPlayer(bret, "slot2")
    //
    //     console.log(will);
    //     console.log(bret);
    //     console.log(`starting battle between ${will.name} and ${bret.name}`);
    //
    //
    //     console.log(`Total stats of ${will.name}: ${will.totalStats}`);
    //     console.log(`Total stats of ${bret.name}: ${bret.totalStats}`);
    //     console.log("\n");
    //     let willxp = getRandomNumber(10, 100)
    //     let bretxp = getRandomNumber(10, 100)
    //     will.addPlayerExperience(willxp)
    //     bret.addPlayerExperience(bretxp)
    //     console.log(`${will.name} + ${willxp} xp, total xp: ${will.experience}`);
    //     console.log(`${bret.name} + ${bretxp} xp, total xp: ${bret.experience}`);
    //     hockey.displayPlayer(will, "slot1")
    //     hockey.displayPlayer(bret, "slot2")
    // })
    //
    // document.getElementById("teamBattle").addEventListener("click", function (event) {
    //     let awayTeam = hockey.nextOpponent()
    //
    //     gameWindow.tempshowteamcard(hockey.nextOpponent(), "CPU")
    //     hockey.match(myTeam, awayTeam)
    //     gameWindow.updateTeamCard(myTeam)
    //
    //     for (let player of myTeam.roster) {
    //         gameWindow.tempshowplayerlistcard(player)
    //     }
    // })
}


const init = function (pageName) {
    main(pageName)
}
