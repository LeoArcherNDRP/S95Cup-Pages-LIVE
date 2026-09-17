/* =========================================================
   NEXT ORBIT SPEEDFEST
   S95 Cup Championship Data
   ========================================================= */


/* ---------------------------------------------------------
   S95 Cup race data

   Race status:

   "Complete"


   Result fields:

   position
        Finishing position in the race.

   team
        Championship entry / team.

   driver
        Driver who competed for the team in that round.

   points
        Official championship points awarded in the
        original S95 Cup results.

   startingPosition
        Starting/grid position.

   bestLap
        Driver's best lap during the race.

   fastestLap
        true  = fastest lap of the race
        false = did not set fastest lap

   status
        "Finished"
--------------------------------------------------------- */

const s95RaceResults = [


    /* =====================================================
       ROUND ONE
       Serenade Music Shoppe Scramble
    ===================================================== */

    {
        id: "round-1",

        round: 1,

        title: "Serenade Music Shoppe Scramble",

        status: "Complete",

        published: true,

        page: "races/round-1.html",

        description:
            "Official results from Round One of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 25,
                startingPosition: 1,
                bestLap: "0:46.752",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 2,
                team: "Ascend",
                driver: "Ray Larson",
                points: 20,
                startingPosition: 3,
                bestLap: "0:46.720",
                fastestLap: true,
                status: "Finished"
            },

            {
                position: 3,
                team: "NOS Team",
                driver: "Jacqueline Bellerose",
                points: 15,
                startingPosition: 7,
                bestLap: "0:47.751",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 12,
                startingPosition: 2,
                bestLap: "0:47.053",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "The Misfits",
                driver: "Jordan Hendrix",
                points: 10,
                startingPosition: 4,
                bestLap: "0:47.581",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "Sprunk Motor Association",
                driver: "Jeremy Santorini",
                points: 8,
                startingPosition: 9,
                bestLap: "0:48.100",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "Sub Zero Racing",
                driver: "Rampt Bobton",
                points: 6,
                startingPosition: 6,
                bestLap: "0:48.390",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "Yokai Racing",
                driver: "Walter Jones",
                points: 4,
                startingPosition: 8,
                bestLap: "0:49.912",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "PDM Racing",
                driver: "Penny Martin",
                points: 2,
                startingPosition: 11,
                bestLap: "0:50.257",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 10,
                team: "Last Rites Motorsports",
                driver: "Danny Murphy",
                points: 1,
                startingPosition: 10,
                bestLap: "0:49.100",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 11,
                team: "Great Bear Customs Racing",
                driver: "Connor Mcginty",
                points: 0,
                startingPosition: 12,
                bestLap: "0:50.500",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 12,
                team: "SAFA Racing",
                driver: "Valerie Cooper-Bennett",
                points: 0,
                startingPosition: 6,
                bestLap: "0:00.000",
                fastestLap: false,
                status: "Finished"
            }

        ]
    },


    /* =====================================================
       ROUND TWO
       Benefactor Motors Circuit
    ===================================================== */

    {
        id: "round-2",

        round: 2,

        title: "Benefactor Motors Circuit",

        status: "Complete",

        published: true,

        page: "races/round-2.html",

        description:
            "Official results from Round Two of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Ascend",
                driver: "Ray Larson",
                points: 27,
                startingPosition: 2,
                bestLap: "1:15.169",
                fastestLap: true,
                status: "Finished"
            },

            {
                position: 2,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 18,
                startingPosition: 1,
                bestLap: "1:15.324",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 3,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 15,
                startingPosition: 3,
                bestLap: "1:16.277",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "Kings Motorsports",
                driver: "Jimmy Forrester",
                points: 12,
                startingPosition: 6,
                bestLap: "1:16.659",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "NOS Team",
                driver: "Jacqueline Bellerose",
                points: 10,
                startingPosition: 4,
                bestLap: "1:16.488",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "Last Rites Motorsports",
                driver: "Remington Steele",
                points: 8,
                startingPosition: 7,
                bestLap: "1:16.555",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "Great Bear Customs Racing",
                driver: "Albie Franzese",
                points: 6,
                startingPosition: 9,
                bestLap: "1:17.446",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "The Misfits",
                driver: "Jordan Hendrix",
                points: 4,
                startingPosition: 10,
                bestLap: "1:18.038",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "SAFA Racing",
                driver: "Claire Halsey",
                points: 2,
                startingPosition: 8,
                bestLap: "1:17.397",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 10,
                team: "PDM Racing",
                driver: "Reiter Zugraub",
                points: 1,
                startingPosition: 11,
                bestLap: "1:17.263",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 11,
                team: "Sub Zero Racing",
                driver: "Daigo Kimura",
                points: 0,
                startingPosition: 12,
                bestLap: "1:19.757",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 12,
                team: "Sprunk Motor Association",
                driver: "Leif Enoki",
                points: 0,
                startingPosition: 5,
                bestLap: "1:19.149",
                fastestLap: false,
                status: "Finished"
            }

        ]
    },


    /* =====================================================
       ROUND THREE
       Beekers Garage Walled Circuit
    ===================================================== */

    {
        id: "round-3",

        round: 3,

        title: "Beekers Garage Walled Circuit",

        status: "Complete",

        published: true,

        page: "races/round-3.html",

        description:
            "Official results from Round Three of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Ascend",
                driver: "Ray Larson",
                points: 27,
                startingPosition: 2,
                bestLap: "01:06.841",
                fastestLap: true,
                status: "Finished"
            },

            {
                position: 2,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 18,
                startingPosition: 1,
                bestLap: "01:07.035",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 3,
                team: "The Misfits",
                driver: "Jordan Hendrix",
                points: 15,
                startingPosition: 3,
                bestLap: "01:08.016",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 12,
                startingPosition: 5,
                bestLap: "01:07.928",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "Kings Motorsports",
                driver: "Chris Romano",
                points: 10,
                startingPosition: 4,
                bestLap: "01:08.731",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "Sprunk Motor Association",
                driver: "Xhang Zu-Chen",
                points: 8,
                startingPosition: 7,
                bestLap: "01:08.327",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "Last Rites Motorsports",
                driver: "Danny Murphy",
                points: 6,
                startingPosition: 6,
                bestLap: "01:08.431",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "Sub Zero Racing",
                driver: "Rampt Bobton",
                points: 4,
                startingPosition: 10,
                bestLap: "01:08.706",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "SAFA Racing",
                driver: "Claire Halsey",
                points: 2,
                startingPosition: 8,
                bestLap: "01:08.615",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 10,
                team: "PDM Racing",
                driver: "Penny Martin",
                points: 1,
                startingPosition: 9,
                bestLap: "01:11.306",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 11,
                team: "Yokai Racing",
                driver: "Walter Jones",
                points: 0,
                startingPosition: 12,
                bestLap: "01:10.260",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 12,
                team: "NOS Team",
                driver: "Shane Vale",
                points: 0,
                startingPosition: 11,
                bestLap: "01:09.534",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 13,
                team: "Great Bear Customs Racing",
                driver: "Connor McGinty",
                points: 0,
                startingPosition: 13,
                bestLap: "01:12.337",
                fastestLap: false,
                status: "Finished"
            }

        ]
    },


    /* =====================================================
       ROUND FOUR
       Last Rites Meadery Maddness
    ===================================================== */

    {
        id: "round-4",

        round: 4,

        title: "Last Rites Meadery Maddness",

        status: "Complete",

        published: true,

        page: "races/round-4.html",

        description:
            "Official results from Round Four of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Ascend",
                driver: "Ray Larson",
                points: 27,
                startingPosition: 2,
                bestLap: "01:15.819",
                fastestLap: true,
                status: "Finished"
            },

            {
                position: 2,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 18,
                startingPosition: 1,
                bestLap: "01:16.544",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 3,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 15,
                startingPosition: 4,
                bestLap: "01:16.891",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "NOS Team",
                driver: "Jacqueline Bellerose",
                points: 12,
                startingPosition: 5,
                bestLap: "01:17.348",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "Last Rites Motorsports",
                driver: "Remington Steele",
                points: 10,
                startingPosition: 7,
                bestLap: "01:18.230",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "The Misfits",
                driver: "Jordan Hendrix",
                points: 8,
                startingPosition: 9,
                bestLap: "01:18.230",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "PDM Racing",
                driver: "James Barber",
                points: 6,
                startingPosition: 3,
                bestLap: "01:17.646",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "Sub Zero Racing",
                driver: "Rampt Bobton",
                points: 4,
                startingPosition: 8,
                bestLap: "01:18.167",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "SAFA Racing",
                driver: "Donnie Damino",
                points: 2,
                startingPosition: 6,
                bestLap: "01:17.209",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 10,
                team: "Great Bear Customs Racing",
                driver: "Albie Franzese",
                points: 1,
                startingPosition: 12,
                bestLap: "01:19.007",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 11,
                team: "Kings Motorsports",
                driver: "Dex Ford",
                points: 0,
                startingPosition: 12,
                bestLap: "01:19.490",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 12,
                team: "Sprunk Motor Association",
                driver: "Leif Enoki",
                points: 0,
                startingPosition: 10,
                bestLap: "01:19.914",
                fastestLap: false,
                status: "Finished"
            }

        ]
    },


    /* =====================================================
       ROUND FIVE
       Great Bear Customs Bash
    ===================================================== */

    {
        id: "round-5",

        round: 5,

        title: "Great Bear Customs Bash",

        status: "Complete",

        published: true,

        page: "races/round-5.html",

        description:
            "Official results from Round Five of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 25,
                startingPosition: 1,
                bestLap: "01:12.567",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 2,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 18,
                startingPosition: 3,
                bestLap: "01:12.723",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 3,
                team: "NOS Team",
                driver: "Jacqueline Bellerose",
                points: 15,
                startingPosition: 5,
                bestLap: "01:13.637",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "Last Rites Motorsports",
                driver: "Remington Steele",
                points: 12,
                startingPosition: 6,
                bestLap: "01:13.569",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "Great Bear Customs Racing",
                driver: "Albie Franzese",
                points: 10,
                startingPosition: 10,
                bestLap: "01:13.964",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "The Misfits",
                driver: "Jordan Hendrix",
                points: 8,
                startingPosition: 7,
                bestLap: "01:14.041",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "Sub Zero Racing",
                driver: "Rampt Bobton",
                points: 6,
                startingPosition: 8,
                bestLap: "01:14.093",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "PDM Racing",
                driver: "Penny Martin",
                points: 4,
                startingPosition: 9,
                bestLap: "01:16.510",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "Ascend",
                driver: "Ray Larson",
                points: 2,
                startingPosition: 2,
                bestLap: "01:12.276",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 10,
                team: "Kings Motorsports",
                driver: "Alex Watson",
                points: 3,
                startingPosition: 4,
                bestLap: "01:11.124",
                fastestLap: true,
                status: "Finished"
            }

        ]
    },


    /* =====================================================
       ROUND SIX
       Angel Supply Services Final Round
    ===================================================== */

    {
        id: "round-6",

        round: 6,

        title: "Angel Supply Services Final Round",

        status: "Complete",

        published: true,

        page: "races/round-6.html",

        description:
            "Official results from the final round of the Next Orbit Speedfest S95 Cup.",

        results: [

            {
                position: 1,
                team: "Desync",
                driver: "Charlie Marlow",
                points: 27,
                startingPosition: 2,
                bestLap: "00:59.167",
                fastestLap: true,
                status: "Finished"
            },

            {
                position: 2,
                team: "Ascend",
                driver: "Ray Larson",
                points: 18,
                startingPosition: 1,
                bestLap: "00:59.246",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 3,
                team: "Grayson Motorsports",
                driver: "Levi Grayson",
                points: 15,
                startingPosition: 3,
                bestLap: "00:59.576",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 4,
                team: "NOS Team",
                driver: "Jacqueline Bellerose",
                points: 12,
                startingPosition: 4,
                bestLap: "01:00.349",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 5,
                team: "Great Bear Customs Racing",
                driver: "Logan Solvoll",
                points: 10,
                startingPosition: 8,
                bestLap: "01:00.471",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 6,
                team: "Kings Motorsports",
                driver: "Chris Romano",
                points: 8,
                startingPosition: 6,
                bestLap: "01:00.266",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 7,
                team: "Sub Zero Racing",
                driver: "Rampt Bobton",
                points: 6,
                startingPosition: 9,
                bestLap: "01:00.581",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 8,
                team: "Yokai Racing",
                driver: "Walter Jones",
                points: 4,
                startingPosition: 7,
                bestLap: "01:01.863",
                fastestLap: false,
                status: "Finished"
            },

            {
                position: 9,
                team: "PDM Racing",
                driver: "Reiter Zugraub",
                points: 2,
                startingPosition: 2,
                bestLap: "01:00.206",
                fastestLap: false,
                status: "Finished"
            }

        ]
    }

];