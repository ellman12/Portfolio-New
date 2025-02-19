export type Project = {
    name: string;
    repoLink?: string;
    briefDesc: string;
    longDesc: string;
    images: [string, string][];
    significance: number;
    startDate: Date;
    endDate?: Date;
}

const Projects: Project[] = [
    {
        name: "MemoryMosaic",
        repoLink: "https://github.com/ellman12/MemoryMosaic",
        briefDesc: "MemoryMosaic (MM) is a free and open source replacement for Google Photos intended to be used by a single person either on your computer, or on a server on the local network.",
        longDesc: `MemoryMosaic is a free and open source photo/video manager, powered by Blazor and PostgreSQL.<br/><br/>
            I started working on MemoryMosaic around October 2020, when Google Photos announced the end of their free tier in July 2021. I had been using it for years, so I needed an alternative, and a friend suggested to make my own app to fill that role. I quickly started learning HTML, CSS, JavaScript, Blazor, and PostgreSQL, and a few months later the first version was ready. The primary goal with MM was to have it mimic Photos, but with expanded features and simpler UX. This is one of my largest personal projects at over 2500 commits, and it has come a long way since V1.0. It has had two new versions to add features and ensure it will work for decades into the future.`,
        significance: 100,
        images: [
            ["MM/Home.png", "Home Page"],
            ["MM/Import.png", "Import Page"],
            ["MM/FullscreenViewer.png", "Viewing a Photo"],
            ["MM/VideoPlayer.png", "Viewing a Video"],
            ["MM/Memories.png", "Memories Page"],
            ["MM/Backups.png", "Backups Page"],
            ["MM/Collections.png", "Collections Page"],
            ["MM/Stormy Album.png", "Viewing an Album"],
            ["MM/Search.png", "Search Page"],
            ["MM/Settings.png", "Settings Page"]
        ],
        startDate: new Date("2020-10-16"),
        endDate: new Date("2024-2-2")
    },
    {
        name: "WingTech Bot Mk 2",
        repoLink: "https://github.com/ellman12/WingTechBot-Mk-2",
        briefDesc: "hi lol",
        longDesc: `WingTech Bot Mk 2 is a bot written in C# for a friend's private Discord server, providing features like a reaction tracking and karma system, games, and inside jokes.<br/><br/>
            The original bot was written by him a few years ago, and hosted on his PC; however, he wanted it moved to the cloud, something I wanted experience with. There were also some limitations with the original bot, primarily with its karma system. After some discussions about the minimum viable product, I spent a few weeks on the rewrite.<br/><br/>
            In addition to gaining AWS experience, I wanted more experience with automated testing. Mk 2 has extensive unit/integration tests which are very satisfying and ensure reliability.
            `,
        images: [],
        significance: 95,
        startDate: new Date("2024-12-22"),
        endDate: new Date("2025-02-11")
    },
    {
        name: "Graphical Photo Organizer ",
        repoLink: "https://github.com/ellman12/Graphical-Photo-Organizer",
        briefDesc: "A C# WPF utility for organizing folders of photos and videos based on when items were taken.",
        longDesc: "GPO is a WPF utility for organizing folders of photos and videos based on when they were taken. I created GPO as a tool to help family, friends, and other people organize their messy folders of photos and videos. GPO was designed to be very simple and easy to use, but also with plenty of customization and power user features. It can sort items either manually or automatically. I hope it can help more people to keep their memories organized now and in the future.",
        images: [
            ["GPO/GPO1.png", "Main Graphical Photo Organizer Window"],
            ["GPO/GPO2.png", "Graphical Photo Organizer Settings Window"]
        ],
        significance: 90,
        startDate: new Date("2022-2-21"),
        endDate: new Date("2022-6-14")
    },
    {
        name: "Dish Up",
        repoLink: "https://bitbucket.org/dpdsu/csc-470-project-repo/src/master/",
        briefDesc: "Blazor Server app for creating, storing, viewing, and sharing recipes with other users.",
        longDesc: ``,
        images: [
            ["Dish Up/Dish Up 2.png", "Viewing a Recipe"],
            ["Dish Up/Dish Up 3.png", "Editing a Recipe, and Showing Off Markdown Support"],
            ["Dish Up/Dish Up 4.png", "Viewing Your Folders and Adding a Recipe to a Folder"]
        ],
        significance: 80,
        startDate: new Date("2022-10-8"),
        endDate: new Date("2022-12-16")
    },
    {
        name: "AutoHotkey Scripts",
        repoLink: "https://github.com/ellman12/AutoHotkey-V2",
        briefDesc: "Extensive repository of AutoHotkey scripts automating many repetitive daily computer tasks.",
        longDesc: `In high school, I discovered the amazing tool that is AutoHotkey. Since then, I have created an insane amount of scripts for automating many aspects of Windows as well as programs like Firefox, JetBrains Rider, MS Word, etc. The structure of it is one main script that links together many other scripts, along with some other misc. scripts I use once in a blue moon. It has evolved a ton over the years. In its current form, it consists of my keyboard and mouse—with 18 and 14 extra buttons, respectively—and the newest addition, my Stream Deck XL. The Stream Deck is super nice as it not only has 32 buttons and those actions are different depending on the active program, but the buttons have screens so you know what each one does without having to memorize them. It's so nice in fact, that as soon as I got it, it immediately replaced the 18 buttons on my keyboard. Two other major things I've done is on my keyboard, I reprogrammed most of my F1–F12 keys and my NumPad keys to serve more useful purposes. The former switches between different types of windows, switches between tabs, etc. The NumPad controls music, YouTube videos, and even does a lot of common shortcuts in Rider like selecting text, moving between words, deleting lines, etc. One other thing I made is a GUI that lets me edit the Clipboard contents whenever I want. These scripts—especially the extra mouse buttons—have become so ingrained in my daily workflow and muscle memory that I can't live without them. They have helped me to become so much more efficient even when doing basic things like web browsing. My scripts are constantly evolving and changing as I think of new ideas for things to automate. I think this project is the reason my muscle memory is extremely good and my brain is always trying to optimize literally everything.`,
        images: [],
        significance: 70,
        startDate: new Date("2019-10-8"),
        endDate: undefined
    },
    {
        name: "Arcane Defense",
        repoLink: "https://github.com/ellman12/Arcane-Defense",
        briefDesc: "Final project for my GAME 222 class. Defend your house from an endless horde of enemies using your arsenal of magical attacks. Play the game <a style='color: cornflowerblue' target='_blank' href='https://simmer.io/@ellman13/arcane-defense'>here</a>!",
        longDesc: "Final project for my GAME 222 class. Defend your house from an endless horde of enemies using your arsenal of magical attacks. Play the game <a style='color: cornflowerblue' target='_blank' href='https://simmer.io/@ellman13/arcane-defense'>here</a>!",
        images: [],
        significance: 60,
        startDate: new Date("2023-3-22"),
        endDate: new Date("2023-5-2")
    },
    {
        name: "DateTakenExtractor (DTE)",
        repoLink: "https://github.com/ellman12/DateTakenExtractor",
        briefDesc: "Small, fast, simple NuGet library for reading and writing Date Taken metadata for photos and videos.",
        longDesc: "DateTakenExtractor is a small, fast, simple NuGet library for reading and writing Date Taken metadata for photos and videos, with the library consisting of only a single static C# class. DTE is part of what powers MemoryMosaic and Graphical Photo Organizer. Having these read/write operations abstracted away is very helpful for those projects. DTE is my first NuGet package, and currently has over 1,800 downloads which I'm very proud about.",
        images: [["DTE/DTE1.png", "Example of using Date Taken Extractor"]],
        significance: 40,
        startDate: new Date("2022-5-4"),
        endDate: new Date("2023-1-5")
    },
    {
        name: "Graphical Backup Program (GBP)",
        repoLink: "https://github.com/ellman12/Graphical-Backup-Program",
        briefDesc: "A C# WinForms utility for backing up groups of files and folders on a Windows PC.",
        longDesc: "Graphical Backup Program is a WinForms utility for backing up groups of folders and files, designed primarily to make it easy to backup items to an online service like Google Drive or OneDrive, and to make it easy to create groups of related items and give control of which of those groups are backed up. It can also compress backups to a .zip file, and open a web URL upon completion of a backup. GBP was my first experience creating a GUI project, and I'm very happy with how it turned out as I think the interface is simple enough for anyone to use and understand, while also giving the user a lot of customization and power.",
        images: [["GBP/GBP_GUI.png", "Main Graphical Backup Program Window"]],
        significance: 30,
        startDate: new Date("2021-7-24"),
        endDate: new Date("2022-2-21")

    },
    {
        name: "Password Generator and Guesser (PGG)",
        repoLink: "https://github.com/ellman12/Password-Generator-and-Guesser",
        briefDesc: "A highly-customizable, superfluous, and over-engineered C++ console application for generating and guessing strings of characters.",
        longDesc: "",
        images: [
            ["PGG/PGG 1.png", "PGG Help Output"],
            ["PGG/PGG 2.png", "Guessing a Password"],
            ["PGG/PGG 3.png", "Guessing a Password with Series Mode"],
            ["PGG/PGG 4.png", "Guessing a Password with Increment Mode"]
        ],
        significance: 20,
        startDate: new Date("2021-3-24"),
        endDate: new Date("2021-10-21")
    },
    {
        name: "TI-Basic Scripts",
        repoLink: "https://github.com/ellman12/TI-84-Plus-CE",
        briefDesc: "Various scripts to automate my Scripts to automate my TI-84 Plus CE graphing calculator",
        longDesc: "One of my oldest repos on GitHub, dedicated to storing all the little scripts I've written in <a style='color: cornflowerblue' href='https://www.wikiwand.com/en/TI-BASIC'>TI-Basic</a> for my graphing calculator. Most of the files there are no longer used, but are kept around for historical reasons, and in case someone else might find them useful.",
        images: [],
        significance: 10,
        startDate: new Date("2020-4-16"),
        endDate: new Date("2021-4-29")
    }
];

export default Projects;
