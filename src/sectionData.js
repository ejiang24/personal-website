export default [
    {
        id: 1,
        title: "experience",
        entries: [
            {
                entryTitle: "Teaching Assistant — Program Design with Data Structures and Algorithms",
                entryDescription: `Taught data structures & algorithm fundamentals and debugged complex coding assignments at 
                office hours 4 hr/wk for a class of 59 students (Java, Python). Designed and maintained course website used to display course info (Jekyll).`,
                image: "/images/BrownLogo.png",
                imageAlt: "Brown University logo"
            },
        ]
    },
    {
        id: 2,
        title: "projects",
        entries: [
            // {
            //     id: "kebash",
            //     entryTitle: "Kebash",
            //     entryDescription:"",

            // },
            { 
                id: "connect-four",
                entryTitle: "Connect Four",
                entryDescription: `Developed full stack web application for popular board game Connect Four. Implemented multiplayer with private rooms and chat using web sockets for real-time
                gameplay as well as a win-detection algorithm using efficient array traversal. (React, Express, Socket.io)`
            },
            {
                id: "gendo",
                entryTitle: "Gendo Taiko Website", 
                entryDescription: `Coded several pages of Gendo Taiko's website
                using React and Material UI.`
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
                entryDescription: `Composed and produced Title Screen and Results Screen themes for "Boogie Brawl," a 
                local 2-player rhythm fighting game made by Brown-RISD Game Developers.`,
                image: "/images/BoogieBrawlLogo.png",
                imageAlt: "Boogie Brawl Cover Art",
                audio: "/music/BoogieBrawlMenuMusic.mp3",
            },
            {
                id: 2,
                entryTitle: "High Stakes",
                entryDescription: `Composed and prodouced all music for "High Stakes," a turn-based strategy 
                game made by Brown-RISD Game Developers.`,
                image: "/images/HighStakesLogo.jpg",
                imageAlt: "High Stakes Cover Art",
                audio: "/music/HighStakes.mp3",
            },
            {
                id: 3,
                entryTitle: "Dance of a Feverish Mind",
                entryDescription: `Written in five days as part of the Boston Conservatory at Berklee: High School Composition Intensive (Jul. 2020),
                this string quartet is a musical representation of a perpetually spinning mind riddled with anxiety. 
                Performed by the Julius Quartet.`,
                audio: "/music/HighStakes.mp3",
            }
        ]
    }
]