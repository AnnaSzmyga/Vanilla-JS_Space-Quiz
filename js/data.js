const initialQuestions = [
    {
        content: "Jaka jest największa planeta w Układzie Słonecznym?",
        goodAnswer: "Jowisz",
        answers: ["Jowisz", "Merkury", "Ziemia"]
    },
    {
        content: "Słońce jest: ",
        goodAnswer: "gwiazdą",
        answers: ["planetoidą", "gwiazdą", "planetą"]
    },
    {
        content: "Która planeta ma największy wulkan?",
        goodAnswer: "Mars",
        answers: ["Mars", "Ziemia", "Jowisz"]
    },
    {
        content: "Na której planecie panuje najwyższa temperatura?",
        goodAnswer: "na Wenus",
        answers: ["na Wenus", "na Saturnie", "na Merkurym"]
    },
    {
        content: "Która planeta w Układzie Słonecznym jest najmniejsza?",
        goodAnswer: "Merkury",
        answers: ["Merkury", "Mars", "Uran"]
    },
    {
        content: "Z ilu planet składa się Układ Słoneczny?",
        goodAnswer: "8",
        answers: ["8", "9", "10"]
    },
    {
        content: "Pluton jest: ",
        goodAnswer: "planetą karłowatą",
        answers: ["planetą", "planetą karłowatą", "księżycem"]
    },
    {
        content: "Ile księżyców ma Mars",
        goodAnswer: "2",
        answers: ["2", "4", "1"]
    },
    {
        content: "Która planeta znajduje się najbliżej Słońca?",
        goodAnswer: "Merkury",
        answers: ["Wenus", "Ziemia", "Merkury"]
    },
    {
        content: "Która planeta obraca się w przeciwnym kierunku niż pozostałe?",
        goodAnswer: "Wenus",
        answers: ["Saturn", "Wenus", "Ziemia"]
    },
    {
        content: "Deimos to księżyc:",
        goodAnswer: "Marsa",
        answers: ["Jowisza", "Marsa", "Urana"]
    },
    {
        content: "Na której planecie znajduje się Wielka Czerwona Plama?",
        goodAnswer: "na Jowiszu",
        answers: ["na Jowiszu", "na Marsie", "na Neptunie"]
    }
    ,
    {
        content: "Ile czasu potrzebuje Księżyc aby okrążyć Ziemię?",
        goodAnswer: "27 dni",
        answers: ["1 dzień", "1 rok", "27 dni"]
    },
    {
        content: "Jak wygląda Księżyc podczas nowiu?",
        goodAnswer: "niewidoczny",
        answers: ["niewidoczny", "kształt rogala", "okrągły"]
    },
    {
        content: "Jak nazywa się księżyc Plutona?",
        goodAnswer: "Charon",
        answers: ["Tytan", "Charon", "Pluton nie ma księżyca"]
    },
    {
        content: "Ile kwadr ma Księżyc?",
        goodAnswer: "4",
        answers: ["2", "6", "4"]
    },
    {
        content: "Jaka jest grawitacja na Księżycu w porównaniu z ziemską?",
        goodAnswer: "mniejsza",
        answers: ["mniejsza", "taka sama", "większa"]
    },
    {
        content: "Jaki kształt ma Księżyc podczas pełni?",
        goodAnswer: "koła",
        answers: ["półkola", "rogala", "koła"]
    },
    {
        content: "Na którą planetę została wystrzelona sonda kosmiczna Magellan?",
        goodAnswer: "na Jowisza",
        answers: ["na Jowisza", "na Marsa", "na Wenus"]
    },
    {
        content: "Która planeta obraca się najwolniej?",
        goodAnswer: "Wenus",
        answers: ["Ziemia", "Uran", "Wenus"]
    },
    {
        content: "Która z poniższych planet nie jest planetą skalistą?",
        goodAnswer: "Saturn",
        answers: ["Merkury", "Saturn", "Mars"]
    },
    {
        content: "Która z poniższych planet nie jest gazowym olbrzymem?",
        goodAnswer: "Mars",
        answers: ["Jowisz", "Mars", "Saturn"]
    },
    {
        content: "Na którą planetę został wysłany pojazd Curiosity?",
        goodAnswer: "na Marsa",
        answers: ["na Neptuna", "na Marsa", "na Saturna"]
    },
    {
        content: "Zczego jest zbudowany Jowisz?",
        goodAnswer: "z gazu",
        answers: ["ze skał", "z lodu", "z gazu"]
    },
    {
        content: "Jak nazywa się największy księżyc w Układzie Słonecznym?",
        goodAnswer: "Ganimedes",
        answers: ["Tytan", "Ganimedes", "Charon"]
    },
    {
        content: "Który z poniższych księżyców nie jest księżycem Jowisza?",
        goodAnswer: "Japet",
        answers: ["Io", "Japet", "Kallisto"]
    },
    {
        content: "Która planeta wiruje wokół osi poziomej?",
        goodAnswer: "Uran",
        answers: ["Uran", "Neptun", "Saturn"]
    },
    {
        content: "Jak nazywa się największy księżyc Saturna?",
        goodAnswer: "Tytan",
        answers: ["Enceladus", "Tytan", "Japet"]
    },
    {
        content: "Która planeta ma najmniejszą gęstość?",
        goodAnswer: "Saturn",
        answers: ["Jowisz", "Neptun", "Saturn"]
    },
    {
        content: "Z czego zbudowane są pierścienie Saturna?",
        goodAnswer: "z lodu",
        answers: ["z lodu", "ze skał", "z gazu"]
    },
    {
        content: "Która z wymienionych planet nie ma pierścieni?",
        goodAnswer: "Wenus",
        answers: ["Uran", "Neptun", "Wenus"]
    },
    {
        content: "Tryton to księżyc...",
        goodAnswer: "Neptuna",
        answers: ["Urana", "Saturna", "Neptuna"]
    },
    {
        content: "Gdzie znajduje się pas planetoid?",
        goodAnswer: "za Marsem",
        answers: ["za Marsem", "za Jowiszem", "za Plutonem"]
    },
    {
        content: "Gdzie znajduje się Pas Kuipera?",
        goodAnswer: "za Plutonem",
        answers: ["za Plutonem", "za Uranem", "za Jowiszem"]
    },
    {
        content: "Jaką gwiazdą jest Słońce?",
        goodAnswer: "ciągu głównego",
        answers: ["czerwony karzeł", "ciągu głównego", "olbrzym"]
    },
    {
        content: "Jaką nazwę ma nasza galaktyka?",
        goodAnswer: "Droga Mleczna",
        answers: ["Mgławica Andromedy", "Droga Mleczna", "Wielki Orion"]
    },
    {
        content: "Na którym księżycu występuje największa aktywność wulkaniczna?",
        goodAnswer: "na Io",
        answers: ["na Ganimedesie", "na Trytonie", "na Io"]
    },
    {
        content: "Ile księżyców Jowisza odkryto dotychczas?",
        goodAnswer: "67",
        answers: ["35", "67", "158"]
    },
    {
        content: "Eris to...",
        goodAnswer: "planetoida",
        answers: ["planeta karłowata", "księżyc Plutona", "planetoida"]
    },
    {
        content: "Fobos jest księżycem...",
        goodAnswer: "Marsa",
        answers: ["Merkurego", "Marsa", "Urana"]
    },
    {
        content: "Jaką wysokość ma Olympus Mons?",
        goodAnswer: "25km",
        answers: ["8km", "25km", "40km"]
    },
    {
        content: "Olympus Mons to...",
        goodAnswer: "wulkan",
        answers: ["góra", "wulkan", "satelita Marsa"]
    },
    {
        content: "Która planeta ma intensywnie błękitny kolor?",
        goodAnswer: "Neptun",
        answers: ["Saturn", "Neptun", "Merkury"]
    },
    {
        content: "Najzimniejsza planeta w Układzie Słonecznym to?",
        goodAnswer: "Neptun",
        answers: ["Neptun", "Uran", "Pluton"]
    }
];

