import boogieBrawlLogo from "./images/BoogieBrawlLogo.png"
import highStakesLogo from "./images/HighStakesLogo.jpg"
import boogiebrawl from "./music/BoogieBrawlMenuMusic.mp3"
import highstakes from "./music/HighStakesTitle.wav"
import dance from "./music/DanceOfAFeverishMind.wav"

export default [
    {
        id: 1,
        title: "experience",
        entries: [
            {
                entryTitle: "Teaching Assistant — Program Design with Data Structures and Algorithms",
                entryDescription: "yay money"
            },
        ]
    },
    {
        id: 2,
        title: "projects",
        entries: [
            {
                id: "gendo",
                entryTitle: "Gendo Taiko Website", 
                entryDescription: "Lol, prob wrote like 10 lines of code"
            },
            {
                id: "personal",
                entryTitle: "This Website lol",
                entryDescription: "pls give me a job"
            }
        ]
    },
    {
        id: 3,
        title: "music",
        entries: [
            {
                id: 1,
                entryTitle: "Boogie Brawl",
                entryDescription: `Composed and produced Title Screen and Results Screen themes for "Boogie Brawl", a 
                local 2-player rhythm fighting game made by Brown-RISD Game Developers.`,
                image: boogieBrawlLogo,
                audio: boogiebrawl,
            },
            {
                id: 2,
                entryTitle: "High Stakes",
                entryDescription: `Composed and prodouced all music for High Stakes, a turn-based strategy 
                game made by Brown-RISD Game Developers.`,
                image: highStakesLogo,
                audio: highstakes,
            },
            {
                id: 3,
                entryTitle: "Dance of a Feverish Mind",
                entryDescription: `Written in five days as part of the Boston Conservatory at Berklee: High School Composition Intensive (Jul. 2020),
                this string quartet is a musical representation of a perpetually spinning mind riddled with anxiety. 
                Performed by the Julius Quartet.`,
                audio: dance,
            }
        ]
    }
]