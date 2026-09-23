/* =========================================================
   NEXT ORBIT SPEEDFEST
   GT4 Cup Championship Data
   ========================================================= */


/* ---------------------------------------------------------
   Championship points system
--------------------------------------------------------- */

const gt4PointsSystem = [
    25, // 1st
    22, // 2nd
    20, // 3rd
    18, // 4th
    17, // 5th
    16, // 6th
    15, // 7th
    14, // 8th
    13, // 9th
    12, // 10th
    11, // 11th
    10, // 12th
    9,  // 13th
    8,  // 14th
    7,  // 15th
    6,  // 16th
    5,  // 17th
    4,  // 18th
    3,  // 19th
    2   // 20th
];


/* ---------------------------------------------------------
   Fastest-lap bonus
--------------------------------------------------------- */

const gt4FastestLapBonus = 1;


/* ---------------------------------------------------------
   Race data

   Race status options:

   "Upcoming"  - Race has not yet taken place
   "Current"   - Race is currently active
   "Complete"  - Race has been completed


   Result status options:

   "Finished"  - Driver completed the race normally
   "DNF"       - Did Not Finish
   "DNS"       - Did Not Start
   "DSQ"       - Disqualified


   Fastest lap:

   fastestLap: true   - Driver received fastest lap
   fastestLap: false  - Driver did not receive fastest lap


   Publishing:

   A completed race can link to its classification page by
   setting published to true.

   Leave published as false until you are ready for visitors
   to access that race page.
--------------------------------------------------------- */

const gt4RaceResults = [
    /* =====================================================
       ROUND ONE
    ===================================================== */

    {
        id: "round-1",

        round: 1,

        title: "Round One",

        track: "The Black Hawk Coffee Bean There, Won That GP",

        date: "13 September 2026",

        status: "Complete",

        published: true,

        page: "races/round-1.html",

        description:
            "Official results from Round One of the Next Orbit Speedfest GT4 Cup.",

        results: [

            {
                position: 1,
                driver: "Ray Larson",
                team: "ASCEND",
                status: "Finished",
                fastestLap: true,

                startingPosition: 1,
                bestLap: "02:02:271",
            },

            {
                position: 2,
                driver: "Charlie Marlow",
                team: "Wicked Motors",
                status: "Finished",
                fastestLap: false,

                startingPosition: 2,
                bestLap: "02:02:806",
            },
            
            {
                position: 3,
                driver: "Levi Grayson",
                team: "Grayson Motorsports x Meadow House",
                status: "Finished",
                fastestLap: false,

                startingPosition: 3,
                bestLap: "02:03:234",
            },
            
            {
                position: 4,
                driver: "James Barber",
                team: "PDM Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 4,
                bestLap: "02:04:071",
            },

            {
                position: 5,
                driver: "Esther Hendrix",
                team: "ASCEND",
                status: "Finished",
                fastestLap: false,

                startingPosition: 9,
                bestLap: "02:04:603",
            },
            
            {
                position: 6,
                driver: "Jason Tanners",
                team: "Wicked Motors",
                status: "Finished",
                fastestLap: false,

                startingPosition: 5,
                bestLap: "02:04:464",
            },
            
            
            {
                position: 7,
                driver: "Geoffrey Davenport",
                team: "Pit Stop",
                status: "Finished",
                fastestLap: false,

                startingPosition: 8,
                bestLap: "02:04:732",
            },

            {
                position: 8,
                driver: "Vermillion Pietra",
                team: "Senora Sap",
                status: "Finished",
                fastestLap: false,

                startingPosition: 6,
                bestLap: "02:06:619",
            },

            {
                position: 9,
                driver: "Samuel Copeland",
                team: "OC Motorsports",
                status: "Finished",
                fastestLap: false,

                startingPosition: 10,
                bestLap: "02:07:023",
            },
            
            {
                position: 10,
                driver: "Chris Romano",
                team: "Striking Photography",
                status: "Finished",
                fastestLap: false,

                startingPosition: 15,
                bestLap: "02:06:076",
            },
            
            {
                position: 11,
                driver: "Jack Wixx",
                team: "Grayson Motorsports x Meadow House",
                status: "Finished",
                fastestLap: false,

                startingPosition: 12,
                bestLap: "02:06:618",
            },

            {
                position: 12,
                driver: "Daniel Rogers",
                team: "PDMosleys Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 20,
                bestLap: "02:05:515",
            },
            
            {
                position: 13,
                driver: "Mikey Jones",
                team: "PDMosleys Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 7,
                bestLap: "02:06:848",
            },

            {
                position: 14,
                driver: "Wylie Whitlow",
                team: "Team NOS",
                status: "Finished",
                fastestLap: false,

                startingPosition: 11,
                bestLap: "02:05:547",
            },
                                    
            {
                position: 15,
                driver: "Damien Lopez",
                team: "OC Motorsports",
                status: "Finished",
                fastestLap: false,

                startingPosition: 13,
                bestLap: "02:06:596",
            },

            {
                position: 16,
                driver: "Rae Davis",
                team: "Wildcards",
                status: "Finished",
                fastestLap: false,

                startingPosition: 16,
                bestLap: "02:09:161",
            },
            
            {
                position: 17,
                driver: "Ricardo Luis",
                team: "The Asylum",
                status: "Finished",
                fastestLap: false,

                startingPosition: 18,
                bestLap: "02:09:285",
            },
        
            {
                position: 18,
                driver: "Maeve Holiday",
                team: "Boba Babes",
                status: "Finished",
                fastestLap: false,

                startingPosition: 17,
                bestLap: "02:09:217",
            },

            {
                position: 19,
                driver: "Shaun Barnes",
                team: "BBC",
                status: "Finished",
                fastestLap: false,

                startingPosition: 22,
                bestLap: "02:07:477",
            },
                                     
            {
                position: 20,
                driver: "Penny Martin",
                team: "PDM Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 24,
                bestLap: "02:12:588",
            },
            
            {
                position: 21,
                driver: "April Storm",
                team: "Striking Photography",
                status: "Finished",
                fastestLap: false,

                startingPosition: 23,
                bestLap: "02:14:541",
            },
            
            {
                position: 22,
                driver: "Michael Peerson",
                team: "Wildcards",
                status: "DNF",
                fastestLap: false,

                startingPosition: 19,
                bestLap: "02:10:817",
            },
            
            {
                position: 23,
                driver: "Dorian Riley",
                team: "Sip Happens",
                status: "DNF",
                fastestLap: false,

                startingPosition: 21,
                bestLap: "02:09:177",
            },
            
            {
                position: 24,
                driver: "Davy Longmire",
                team: "Team NOS",
                status: "DNF",
                fastestLap: false,

                startingPosition: 14,
                bestLap: "02:06:490",
            },

        ]
    },


    /* =====================================================
       ROUND TWO
    ===================================================== */

    {
        id: "round-2",

        round: 2,

        title: "Round Two",

        track: "Cooks Auto Flat Out GP",

        date: "13 September 2026",

        status: "Complete",

        published: true,

        page: "races/round-2.html",

        description:
            "Official results from Round Two of the Next Orbit Speedfest GT4 Cup.",

        results: [

            {
                position: 1,
                driver: "Ray Larson",
                team: "ASCEND",
                status: "Finished",
                fastestLap: true,

                startingPosition: 1,
                bestLap: "01:14:672",
            },

            {
                position: 2,
                driver: "Levi Grayson",
                team: "Grayson Motorsports x Meadow House",
                status: "Finished",
                fastestLap: false,

                startingPosition: 2,
                bestLap: "01:14:703",
            },
            
            {
                position: 3,
                driver: "James Barber",
                team: "PDM Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 3,
                bestLap: "01:15:243",
            },
            
            {
                position: 4,
                driver: "Jason Tanners",
                team: "Wicked Motors",
                status: "Finished",
                fastestLap: false,

                startingPosition: 4,
                bestLap: "01:15:550",
            },

            {
                position: 5,
                driver: "Wylie Whitlow",
                team: "Team NOS",
                status: "Finished",
                fastestLap: false,

                startingPosition: 9,
                bestLap: "01:15:376",
            },
            
            {
                position: 6,
                driver: "Jacqueline Bellerose",
                team: "Pixiedust Motorsports",
                status: "Finished",
                fastestLap: false,

                startingPosition: 5,
                bestLap: "01:15:245",
            },
            
            
            {
                position: 7,
                driver: "Esther Hendrix",
                team: "ASCEND",
                status: "Finished",
                fastestLap: false,

                startingPosition: 8,
                bestLap: "01:15:637",
            },

            {
                position: 8,
                driver: "Geoffrey Davenport",
                team: "Pit Stop",
                status: "Finished",
                fastestLap: false,

                startingPosition: 6,
                bestLap: "01:15:545",
            },

            {
                position: 9,
                driver: "Jessica Valentino",
                team: "PDM Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 10,
                bestLap: "01:16:056",
            },
            
            {
                position: 10,
                driver: "Jack Wixx",
                team: "Grayson Motorsports x Meadow House",
                status: "Finished",
                fastestLap: false,

                startingPosition: 15,
                bestLap: "01:16:437",
            },
            
            {
                position: 11,
                driver: "Davy Longmire",
                team: "Team NOS",
                status: "Finished",
                fastestLap: false,

                startingPosition: 12,
                bestLap: "01:16:228",
            },

            {
                position: 12,
                driver: "Mikey Jones",
                team: "PDMosleys Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 20,
                bestLap: "01:16:364",
            },
            
            {
                position: 13,
                driver: "Samuel Copeland",
                team: "OC Motorsports",
                status: "Finished",
                fastestLap: false,

                startingPosition: 7,
                bestLap: "01:16:992",
            },

            {
                position: 14,
                driver: "Chris Romano",
                team: "Striking Photography",
                status: "Finished",
                fastestLap: false,

                startingPosition: 11,
                bestLap: "01:16:273",
            },
                                    
            {
                position: 15,
                driver: "Elliot Greene",
                team: "Sip Happens",
                status: "Finished",
                fastestLap: false,

                startingPosition: 13,
                bestLap: "01:16:081",
            },

            {
                position: 16,
                driver: "Daniel Rogers",
                team: "PDMosleys Racing",
                status: "Finished",
                fastestLap: false,

                startingPosition: 16,
                bestLap: "01:16:393",
            },
            
            {
                position: 17,
                driver: "Maeve Holiday",
                team: "Boba Babes",
                status: "Finished",
                fastestLap: false,

                startingPosition: 18,
                bestLap: "01:16:522",
            },
        
            {
                position: 18,
                driver: "Ricardo Luis",
                team: "The Asylum",
                status: "Finished",
                fastestLap: false,

                startingPosition: 17,
                bestLap: "01:17:958",
            },

            {
                position: 19,
                driver: "Shaun Barnes",
                team: "BBC",
                status: "Finished",
                fastestLap: false,

                startingPosition: 22,
                bestLap: "01:17:120",
            },
                                     
            {
                position: 20,
                driver: "Lorenzo Jackson",
                team: "Sip Happens",
                status: "Finished",
                fastestLap: false,

                startingPosition: 24,
                bestLap: "01:17:157",
            },
            
            {
                position: 21,
                driver: "April Storm",
                team: "Striking Photography",
                status: "Finished",
                fastestLap: false,

                startingPosition: 23,
                bestLap: "01:19:773",
            },
            
            {
                position: 22,
                driver: "Rae Davis",
                team: "Wildcards",
                status: "Finished",
                fastestLap: false,

                startingPosition: 19,
                bestLap: "01:18:966",
            },
            
            {
                position: 23,
                driver: "Billie Doherty",
                team: "Wildcards",
                status: "Finished",
                fastestLap: false,

                startingPosition: 21,
                bestLap: "01:19:602",
            },
            
        ]
    },


    /* =====================================================
       ROUND THREE
    ===================================================== */

    {
        id: "round-3",

        round: 3,

        title: "Round Three",

        track: "Yellowjack Rum Runner GP",

        date: "27 September 2026",

        status: "Upcoming",

        published: false,

        page: "races/round-3.html",

        description:
            "Round Three of the Next Orbit Speedfest GT4 Cup.",

        results: []
    },


    /* =====================================================
       ROUND FOUR
    ===================================================== */

    {
        id: "round-4",

        round: 4,

        title: "Round Four",

        track: "Handlebar Haven Hot Lap GP",

        date: "4 October 2026",

        status: "Upcoming",

        published: false,

        page: "races/round-4.html",

        description:
            "Round Four of the Next Orbit Speedfest GT4 Cup.",

        results: []
    },


    /* =====================================================
       ROUND FIVE
    ===================================================== */

    {
        id: "round-5",

        round: 5,

        title: "Round Five",

        track: "Ohana GP",

        date: "11 October 2026",

        status: "Upcoming",

        published: false,

        page: "races/round-5.html",

        description:
            "Round Five of the Next Orbit Speedfest GT4 Cup.",

        results: []
    },


    /* =====================================================
       ROUND SIX
    ===================================================== */

    {
        id: "round-6",

        round: 6,

        title: "Round Six",

        track: "Trade and Treasure's Final Round",

        date: "18 October 2026",

        status: "Upcoming",

        published: false,

        page: "races/round-6.html",

        description:
            "The final round of the Next Orbit Speedfest GT4 Cup.",

        results: []
    }

];