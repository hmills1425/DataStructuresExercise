// Data Structures Exercise
// 1a
const jedi = []

// 1b
jedi[jedi.length] = `Luke`;
console.log(jedi);

// OR
// jedi[0] = `Luke`;

// 1c
jedi.push(`Obi-Wan Kenobi`);
console.log(jedi);

// 1d
jedi.unshift(`Yoda`);
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.slice(2);
console.log(jedi);

// OR

// const.force = jedi.pop();
// console.log(jedi);
// console.log(force);

// 1g
const yoda = jedi.shift();
console.log(jedi);
console.log(yoda);

// 2a
const sithLords = [
    `Darth Vader`,
    `Darth Sidious`,
    `Darth Maul`
];

// OR
// const sithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`];

// 2b
const imperialOfficers = [
    `Grand Moff Tarkin`,
    `Orson Krennic`
];

// OR
// cons imperialOfficers = [`Grand Moff Tarkin`, `Orson Krennic`];

// 2c
const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
console.log(starWarsVillians.slice(0,2));

// 3a
const droids = {
    astromech: `R2-D2`,
    protocol: `C-3PO`
    assassin: `IG-88`
};
console.log(droids);

// 3b
console.log(droids[`astromech`]);

// 3c
console.log(droids.protocol);

// 3d
droids.assassin = `IG-11`;
console.log(droids.assassin);
console.log(droids);

// BONUS
// 4
// console.log(starWarsVillians[0].slice(6,7));
// OR
console.log(starWarsVillians[0][6]);

// 5
console.log(sithLords.slice(-2,-1));

// 6a
const starWarsMovies = [
    {
        episodeOne: `The Phantom Menace`,
        episodeTwo: `Attack of the Clones`,
        episodeThree: `Revenge of the Sith`

    },
    {
        episodeFour: "A New Hope",
        episodeFive: "The Empire Strikes Back",
        episodeSixe: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens",
        episodeEight: "The Last Jedi",
        episodeNine: "The Rise of Skywalker"

    }
];

// 6b
starWarsMovies.splice(1,0, `Solo`, `Rogue One`);
console.log(starWarsMovies);

