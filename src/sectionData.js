export default [
    {
        id: 1,
        title: "experience",
        entries: [
            {
                entryTitle: "Undergraduate Teaching Assistant",
                entryDescription: `Taught data structures & algorithm fundamentals and debugged complex coding assignments at 
                office hours; answered online questions and graded assignments for Program Design with Data Structures and Algorithms, a class of 61 students. Designed and maintained course website used to display course info.`,
                image: "/images/BrownLogo.png",
                imageAlt: "Brown University logo",
                tools: "Java, Python, Jekyll"
            },
        ]
    },
    {
        id: 2,
        title: "projects",
        entries: [
            {
                id: "kebash",
                entryTitle: "Kebash",
                entryDescription: `Implemented timer functionality, player death counts, and object pooling; designed core game
                mechanics; performed testing for a local multiplayer party game.`,
                tools: "Unity, C#, Miro"

            },
            { 
                id: "connect-four",
                entryTitle: "Connect Four",
                entryDescription: `Developed full stack web application for popular board game Connect Four. Implemented multiplayer with private rooms and chat using web sockets for real-time
                gameplay as well as a win-detection algorithm using efficient array traversal.`,
                tools: "React.js, Node.js, Socket.io"
            },
            {
                id: "gendo",
                entryTitle: "Gendo Taiko Website", 
                entryDescription: `Collaborated with the Gendo Taiko ensemble to coded several pages of their website.`,
                tools: "React.js, Material UI"
            },
            {
                id: "sketchy",
                entryTitle: "Sketchy",
                entryDescription: `Developed a drawing app featuring creation, editing, and deletion of lines and shapes. Implemented undo and redo functionality using stacks as well as resize and moving
                functionality using mouse events.`,
                tools: "Java"
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
                tools: "MuseScore, Cubase"
            },
            {
                id: 2,
                entryTitle: "High Stakes",
                entryDescription: `Composed and prodouced all music for "High Stakes," a turn-based strategy 
                game made by Brown-RISD Game Developers.`,
                image: "/images/HighStakesLogo.jpg",
                imageAlt: "High Stakes Cover Art",
                audio: "/music/HighStakes.mp3",
                tools: "MuseScore, Cubase"
            },
            {
                id: 3,
                entryTitle: "Dance of a Feverish Mind",
                entryDescription: `Written in five days as part of the Boston Conservatory at Berklee: High School Composition Intensive (Jul. 2020),
                this string quartet is a musical representation of a perpetually spinning mind riddled with anxiety. 
                Performed by the Julius Quartet.`,
                audio: "/music/DanceOfAFeverishMind.mp3",
                tools: "MuseScore"
            }
        ]
    }
]