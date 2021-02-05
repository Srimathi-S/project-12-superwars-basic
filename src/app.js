const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    let strength_setter=40;
    type_setter='hero';
    for(let number=0; number<players.length;number++)
    {
        let playersDetails=
        {
            name:PLAYERS[number],
            strength:strength_setter,
            image:"images/super-"+(number+1)+".png",
            type:type_setter

        };
        detailedPlayers.push(playersDetails);
        if(type_setter=='hero')type_setter='villan';
        else type_setter='hero';
        strength_setter++;

    }
    console.log(detailedPlayers);
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    //console.log(Math.ceil(Math.random()*100));
    min=1;
    max=100;
    return Math.ceil(Math.random()*(max - min + 1))+min;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(var i=0;i<players.length;i++)
    {
    fragment+='<div class="player"><img src=\"'+players[i].image+'\" alt=""><div class="name">'+players[i].name+'</div><div class="strength">'+players[i].strength+'</div></div>'
    }
    console.log(fragment);
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}