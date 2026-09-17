/* =========================================================
   NEXT ORBIT SPEEDFEST
   GT4 Championship Race Centre
   ========================================================= */


/* ---------------------------------------------------------
   Calculate points for one result
--------------------------------------------------------- */

function calculateChampionshipPoints(result) {
    if (!result) {
        return 0;
    }

    if (
        result.status === "DNS" ||
        result.status === "DSQ"
    ) {
        return 0;
    }

    const positionIndex =
        Number(result.position) - 1;

    let points =
        gt4PointsSystem[positionIndex] ?? 0;

    if (result.fastestLap === true) {
        points += gt4FastestLapBonus;
    }

    return points;
}


/* ---------------------------------------------------------
   Build the overall driver standings
--------------------------------------------------------- */

function calculateDriverStandings() {
    const drivers = new Map();


    gt4RaceResults.forEach((race) => {
        if (
            race.status !== "Complete" ||
            !Array.isArray(race.results)
        ) {
            return;
        }


        race.results.forEach((result) => {
            const driverName = result.driver;

            if (!driverName) {
                return;
            }


            if (!drivers.has(driverName)) {
                drivers.set(driverName, {
                    driver: driverName,
                    team: result.team ?? "Unknown Team",
                    points: 0,
                    wins: 0,
                    podiums: 0,
                    fastestLaps: 0,
                    racePoints: {}
                });
            }


            const driver =
                drivers.get(driverName);

            const points =
                calculateChampionshipPoints(result);


            driver.team =
                result.team ?? driver.team;

            driver.points += points;

            driver.racePoints[race.id] =
                points;


            if (
                Number(result.position) === 1 &&
                result.status !== "DSQ"
            ) {
                driver.wins += 1;
            }


            if (
                Number(result.position) >= 1 &&
                Number(result.position) <= 3 &&
                result.status !== "DSQ"
            ) {
                driver.podiums += 1;
            }


            if (result.fastestLap === true) {
                driver.fastestLaps += 1;
            }
        });
    });


    return [...drivers.values()].sort(
        (firstDriver, secondDriver) => {

            if (
                secondDriver.points !==
                firstDriver.points
            ) {
                return (
                    secondDriver.points -
                    firstDriver.points
                );
            }


            if (
                secondDriver.wins !==
                firstDriver.wins
            ) {
                return (
                    secondDriver.wins -
                    firstDriver.wins
                );
            }


            if (
                secondDriver.podiums !==
                firstDriver.podiums
            ) {
                return (
                    secondDriver.podiums -
                    firstDriver.podiums
                );
            }


            return firstDriver.driver.localeCompare(
                secondDriver.driver
            );
        }
    );
}


/* ---------------------------------------------------------
   Find completed races
--------------------------------------------------------- */

function getCompletedRaces() {
    return gt4RaceResults
        .filter(
            (race) =>
                race.status === "Complete" &&
                Array.isArray(race.results) &&
                race.results.length > 0
        )
        .sort(
            (firstRace, secondRace) =>
                firstRace.round -
                secondRace.round
        );
}


/* ---------------------------------------------------------
   Find the latest completed race
--------------------------------------------------------- */

function getLatestCompletedRace() {
    const completedRaces =
        getCompletedRaces();

    if (completedRaces.length === 0) {
        return null;
    }

    return completedRaces[
        completedRaces.length - 1
    ];
}


/* ---------------------------------------------------------
   Safe text updater
--------------------------------------------------------- */

function updateChampionshipText(
    selector,
    value
) {
    const element =
        document.querySelector(selector);

    if (element) {
        element.textContent =
            value ?? "TBC";
    }
}


/* ---------------------------------------------------------
   Render championship summary
--------------------------------------------------------- */

function renderChampionshipSummary(
    standings
) {
    const completedRaces =
        getCompletedRaces();

    const leader =
        standings[0] ?? null;


    updateChampionshipText(
        "#rounds-complete",
        `${completedRaces.length} / ${gt4RaceResults.length}`
    );


    updateChampionshipText(
        "#current-leader",
        leader
            ? leader.driver
            : "TBC"
    );


    updateChampionshipText(
        "#driver-count",
        standings.length
    );
}


/* ---------------------------------------------------------
   Create one table cell
--------------------------------------------------------- */

function createChampionshipCell(value) {
    const cell =
        document.createElement("td");

    cell.textContent = value;

    return cell;
}


/* ---------------------------------------------------------
   Render driver standings
--------------------------------------------------------- */

function renderDriverStandings(
    standings
) {
    const tableBody =
        document.querySelector(
            "#driver-standings-body"
        );

    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    if (standings.length === 0) {
        const row =
            document.createElement("tr");

        const cell =
            document.createElement("td");

        cell.colSpan = 7;

        cell.textContent =
            "Championship standings will appear after the first completed race.";

        row.appendChild(cell);
        tableBody.appendChild(row);

        return;
    }


    standings.forEach(
        (driver, index) => {
            const row =
                document.createElement("tr");

            row.append(
                createChampionshipCell(
                    index + 1
                ),

                createChampionshipCell(
                    driver.driver
                ),

                createChampionshipCell(
                    driver.team
                ),

                createChampionshipCell(
                    driver.wins
                ),

                createChampionshipCell(
                    driver.podiums
                ),

                createChampionshipCell(
                    driver.fastestLaps
                ),

                createChampionshipCell(
                    driver.points
                )
            );

            tableBody.appendChild(row);
        }
    );
}


/* ---------------------------------------------------------
   Render latest race
--------------------------------------------------------- */

function renderLatestRace() {
    const latestRace =
        getLatestCompletedRace();

    const panel =
        document.querySelector(
            "#latest-race-panel"
        );

    if (!panel) {
        return;
    }


    if (!latestRace) {
        panel.innerHTML = `
            <div class="info-panel">
                <p class="eyebrow">
                    Latest race
                </p>

                <h3>
                    Season Not Started
                </h3>

                <p>
                    The latest race summary will appear here
                    after the first completed round.
                </p>
            </div>
        `;

        return;
    }


    const winner =
        latestRace.results.find(
            (result) =>
                Number(result.position) === 1 &&
                result.status !== "DSQ"
        );


    const fastestLap =
        latestRace.results.find(
            (result) =>
                result.fastestLap === true
        );


    const classificationLink =
        latestRace.published
            ? `
                <a
                    class="button button--primary"
                    href="${latestRace.page}"
                >
                    View Classification
                </a>
            `
            : `
                <span class="race-unpublished">
                    Classification Not Published
                </span>
            `;


    panel.innerHTML = `
        <article class="latest-race-card">

            <div class="latest-race-card__heading">

                <div>
                    <p class="eyebrow">
                        Latest race
                    </p>

                    <h3>
                        ${latestRace.title}
                    </h3>

                    <p>
                        ${latestRace.track}
                        ·
                        ${latestRace.date}
                    </p>
                </div>

                <span class="calendar-round__status">
                    Complete
                </span>

            </div>


            <div class="latest-race-card__stats">

                <div>
                    <span>
                        Winner
                    </span>

                    <strong>
                        ${winner ? winner.driver : "TBC"}
                    </strong>
                </div>


                <div>
                    <span>
                        Winning Team
                    </span>

                    <strong>
                        ${winner ? winner.team : "TBC"}
                    </strong>
                </div>


                <div>
                    <span>
                        Fastest Lap
                    </span>

                    <strong>
                        ${fastestLap
                            ? fastestLap.driver
                            : "TBC"}
                    </strong>
                </div>

            </div>


            <div class="latest-race-card__action">
                ${classificationLink}
            </div>

        </article>
    `;
}


/* ---------------------------------------------------------
   Create calendar round
--------------------------------------------------------- */

function createCalendarRound(race) {
    const isComplete =
        race.status === "Complete";

    const isCurrent =
        race.status === "Current";


    let stateClass =
        "calendar-round--upcoming";


    if (isComplete) {
        stateClass =
            "calendar-round--complete";
    }


    if (isCurrent) {
        stateClass =
            "calendar-round--current";
    }


    const article =
        document.createElement("article");

    article.className =
        `calendar-round ${stateClass}`;


    const roundNumber =
        String(race.round).padStart(2, "0");


    let action = "";


    if (
        isComplete &&
        race.published === true
    ) {
        action = `
            <a
                class="calendar-round__link"
                href="${race.page}"
            >
                Classification →
            </a>
        `;
    } else if (isComplete) {
        action = `
            <span class="calendar-round__unpublished">
                Results Pending
            </span>
        `;
    }


    article.innerHTML = `
        <div class="calendar-round__number">
            ${roundNumber}
        </div>


        <div class="calendar-round__content">

            <p class="eyebrow">
                ${race.title}
            </p>

            <h3>
                ${race.track}
            </h3>

            <p>
                ${race.date}
            </p>

            ${action}

        </div>


        <span class="calendar-round__status">
            ${race.status}
        </span>
    `;


    return article;
}


/* ---------------------------------------------------------
   Render championship calendar
--------------------------------------------------------- */

function renderChampionshipCalendar() {
    const calendar =
        document.querySelector(
            "#championship-calendar"
        );

    if (!calendar) {
        return;
    }


    calendar.innerHTML = "";


    [...gt4RaceResults]
        .sort(
            (firstRace, secondRace) =>
                firstRace.round -
                secondRace.round
        )
        .forEach((race) => {
            calendar.appendChild(
                createCalendarRound(race)
            );
        });
}


/* ---------------------------------------------------------
   Initialise Race Centre
--------------------------------------------------------- */

function initialiseChampionshipCentre() {
    if (
        typeof gt4RaceResults === "undefined" ||
        typeof gt4PointsSystem === "undefined"
    ) {
        console.error(
            "The GT4 championship data did not load."
        );

        return;
    }


    const standings =
        calculateDriverStandings();


    renderChampionshipSummary(
        standings
    );

    renderDriverStandings(
        standings
    );

    renderLatestRace();

    renderChampionshipCalendar();
}


document.addEventListener(
    "DOMContentLoaded",
    initialiseChampionshipCentre
);