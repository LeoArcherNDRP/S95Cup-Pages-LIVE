/* =========================================================
   NEXT ORBIT SPEEDFEST
   S95 Cup Championship Results System
   ========================================================= */


/* ---------------------------------------------------------
   Build championship standings
--------------------------------------------------------- */

function buildS95Standings() {

    const standings = new Map();


    s95RaceResults.forEach((race) => {

        if (
            race.status !== "Complete" ||
            !Array.isArray(race.results)
        ) {
            return;
        }


        race.results.forEach((result) => {

            const team =
                result.team ?? "Unknown Team";


            if (!standings.has(team)) {

                standings.set(team, {

                    team: team,

                    points: 0,

                    wins: 0,

                    podiums: 0,

                    fastestLaps: 0,

                    races: 0

                });

            }


            const entry =
                standings.get(team);


            entry.points +=
                Number(result.points) || 0;


            entry.races += 1;


            /* Race wins */

            if (
                Number(result.position) === 1
            ) {
                entry.wins += 1;
            }


            /* Podiums */

            if (
                Number(result.position) >= 1 &&
                Number(result.position) <= 3
            ) {
                entry.podiums += 1;
            }


            /* Fastest laps */

            if (
                result.fastestLap === true
            ) {
                entry.fastestLaps += 1;
            }

        });

    });


    /* -----------------------------------------------------
       Sort championship

       1. Points
       2. Wins
       3. Podiums
       4. Fastest laps
       5. Team name
    ----------------------------------------------------- */

    return Array
        .from(standings.values())
        .sort((firstTeam, secondTeam) => {

            if (
                secondTeam.points !==
                firstTeam.points
            ) {

                return (
                    secondTeam.points -
                    firstTeam.points
                );

            }


            if (
                secondTeam.wins !==
                firstTeam.wins
            ) {

                return (
                    secondTeam.wins -
                    firstTeam.wins
                );

            }


            if (
                secondTeam.podiums !==
                firstTeam.podiums
            ) {

                return (
                    secondTeam.podiums -
                    firstTeam.podiums
                );

            }


            if (
                secondTeam.fastestLaps !==
                firstTeam.fastestLaps
            ) {

                return (
                    secondTeam.fastestLaps -
                    firstTeam.fastestLaps
                );

            }


            return firstTeam.team.localeCompare(
                secondTeam.team
            );

        });

}


/* ---------------------------------------------------------
   Find championship-winning driver
--------------------------------------------------------- */

function getS95ChampionDriver(standings) {

    if (
        !Array.isArray(standings) ||
        standings.length === 0
    ) {
        return "TBC";
    }


    const winningTeam =
        standings[0].team;


    /*
        Search through the races for the driver
        representing the championship-winning team.

        Starting from the final round means the most
        recent driver is used if a lineup changed.
    */

    const races =
        [...s95RaceResults].sort(
            (firstRace, secondRace) =>
                Number(secondRace.round) -
                Number(firstRace.round)
        );


    for (const race of races) {

        if (!Array.isArray(race.results)) {
            continue;
        }


        const result =
            race.results.find(
                (entry) =>
                    entry.team === winningTeam &&
                    entry.driver
            );


        if (result) {
            return result.driver;
        }

    }


    return "TBC";
}


/* ---------------------------------------------------------
   Render championship summary
--------------------------------------------------------- */

function renderS95Summary(standings) {

    const completedRounds =
        s95RaceResults.filter(
            (race) =>
                race.status === "Complete"
        );


    const roundsComplete =
        document.querySelector(
            "#rounds-complete"
        );


    const currentLeader =
        document.querySelector(
            "#current-leader"
        );


    if (roundsComplete) {

        roundsComplete.textContent =
            `${completedRounds.length} / ${s95RaceResults.length}`;

    }


    if (currentLeader) {

        currentLeader.textContent =
            getS95ChampionDriver(
                standings
            );

    }

}


/* ---------------------------------------------------------
   Render championship standings
--------------------------------------------------------- */

function renderS95Standings(standings) {

    const tableBody =
        document.querySelector(
            "#driver-standings-body"
        );


    if (!tableBody) {

        console.error(
            "S95 standings table body could not be found."
        );

        return;

    }


    tableBody.innerHTML = "";


    if (
        !Array.isArray(standings) ||
        standings.length === 0
    ) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No championship standings are available.
                </td>
            </tr>
        `;

        return;

    }


    standings.forEach(
        (entry, index) => {

            const position =
                index + 1;


            const row =
                document.createElement("tr");


            row.innerHTML = `
                <td>
                    ${position}
                </td>

                <td>
                    ${entry.team}
                </td>

                <td>
                    ${entry.wins}
                </td>

                <td>
                    ${entry.podiums}
                </td>

                <td>
                    ${entry.fastestLaps}
                </td>

                <td>
                    ${entry.points}
                </td>
            `;


            /*
                Championship podium highlighting
            */

            if (position === 1) {

                row.classList.add(
                    "championship-position--first"
                );

            }
            else if (position === 2) {

                row.classList.add(
                    "championship-position--second"
                );

            }
            else if (position === 3) {

                row.classList.add(
                    "championship-position--third"
                );

            }


            tableBody.appendChild(row);

        }
    );

}


/* ---------------------------------------------------------
   Find latest completed race
--------------------------------------------------------- */

function getLatestS95Race() {

    const completedRaces =
        s95RaceResults
            .filter(
                (race) =>
                    race.status === "Complete"
            )
            .sort(
                (firstRace, secondRace) =>
                    Number(secondRace.round) -
                    Number(firstRace.round)
            );


    return completedRaces[0] ?? null;

}


/* ---------------------------------------------------------
   Render latest race
--------------------------------------------------------- */

function renderLatestS95Race() {

    const panel =
        document.querySelector(
            "#latest-race-panel"
        );


    if (!panel) {
        return;
    }


    const race =
        getLatestS95Race();


    if (!race) {

        panel.innerHTML = `
            <div class="info-panel">

                <p>
                    No completed races are available.
                </p>

            </div>
        `;

        return;

    }


    const winner =
        race.results?.find(
            (result) =>
                Number(result.position) === 1
        );


    const fastestLap =
        race.results?.find(
            (result) =>
                result.fastestLap === true
        );


    const raceLink =
        race.published === true
            ? race.page
            : null;


    panel.innerHTML = `
        <article class="latest-race-card">

            <div class="latest-race-card__heading">

                <div>

                    <p class="eyebrow">
                        Round ${race.round}
                    </p>

                    <h3>
                        ${race.title}
                    </h3>

                </div>


                <span
                    class="
                        calendar-round__status
                        calendar-round__status--complete
                    "
                >
                    Complete
                </span>

            </div>


            <div class="latest-race-card__stats">

                <div class="latest-race-stat">

                    <span>
                        Winner
                    </span>

                    <strong>
                        ${
                            winner
                                ? winner.team
                                : "TBC"
                        }
                    </strong>

                </div>


                <div class="latest-race-stat">

                    <span>
                        Driver
                    </span>

                    <strong>
                        ${
                            winner
                                ? winner.driver
                                : "TBC"
                        }
                    </strong>

                </div>


                <div class="latest-race-stat">

                    <span>
                        Fastest Lap
                    </span>

                    <strong>
                        ${
                            fastestLap
                                ? `${fastestLap.driver} - ${fastestLap.bestLap}`
                                : "TBC"
                        }
                    </strong>

                </div>

            </div>


            ${
                raceLink
                    ? `
                        <div class="latest-race-card__action">

                            <a
                                class="button button--small button--primary"
                                href="${raceLink}"
                            >
                                View Classification
                            </a>

                        </div>
                    `
                    : ""
            }

        </article>
    `;

}


/* ---------------------------------------------------------
   Convert round number to word
--------------------------------------------------------- */

function numberToS95RoundWord(round) {

    const roundWords = {

        1: "One",

        2: "Two",

        3: "Three",

        4: "Four",

        5: "Five",

        6: "Six"

    };


    return (
        roundWords[round] ??
        round
    );

}


/* ---------------------------------------------------------
   Render championship calendar
--------------------------------------------------------- */

function renderS95Calendar() {

    const calendar =
        document.querySelector(
            "#championship-calendar"
        );


    if (!calendar) {
        return;
    }


    calendar.innerHTML = "";


    s95RaceResults.forEach((race) => {

        const round =
            document.createElement("article");


        round.classList.add(
            "calendar-round"
        );


        const statusClass =
            race.status === "Complete"
                ? "calendar-round__status--complete"
                : "";


        const raceLink =
            (
                race.status === "Complete" &&
                race.published === true
            )
                ? race.page
                : null;


        round.innerHTML = `

            <div class="calendar-round__number">

                ${String(race.round).padStart(2, "0")}

            </div>


            <div class="calendar-round__content">

                <p class="eyebrow">

                    Round ${numberToS95RoundWord(race.round)}

                </p>


                <h3>

                    ${race.title}

                </h3>


                ${
                    race.date
                        ? `
                            <p>
                                ${race.date}
                            </p>
                        `
                        : ""
                }


                ${
                    raceLink
                        ? `
                            <a
                                class="calendar-round__link"
                                href="${raceLink}"
                            >
                                Classification →
                            </a>
                        `
                        : ""
                }

            </div>


            <span
                class="
                    calendar-round__status
                    ${statusClass}
                "
            >

                ${race.status}

            </span>

        `;


        calendar.appendChild(
            round
        );

    });

}


/* ---------------------------------------------------------
   Initialise S95 Race Centre
--------------------------------------------------------- */

function initialiseS95Championship() {

    if (
        typeof s95RaceResults ===
        "undefined"
    ) {

        console.error(
            "The S95 championship data file did not load."
        );

        return;

    }


    const standings =
        buildS95Standings();


    renderS95Summary(
        standings
    );


    renderS95Standings(
        standings
    );


    renderLatestS95Race();


    renderS95Calendar();

}


/* ---------------------------------------------------------
   Start
--------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    initialiseS95Championship
);