/* =========================================================
   NEXT ORBIT SPEEDFEST
   Race Results System
   ========================================================= */


/* ---------------------------------------------------------
   Calculate points
   --------------------------------------------------------- */

function getRacePoints(result, race) {

    if (!result) {
        return 0;
    }


    /* DNS and DSQ receive no championship points */

    if (
        result.status === "DNS" ||
        result.status === "DSQ"
    ) {
        return 0;
    }


    /* Finishing position points */

    const positionIndex =
        Number(result.position) - 1;


    let points =
        gt4PointsSystem[positionIndex] ?? 0;


    /* Fastest lap bonus */

    if (result.fastestLap === true) {
        points += gt4FastestLapBonus;
    }


    /* Starting position bonus */

    if (
        Array.isArray(race?.startingPositionBonus) &&
        race.startingPositionBonus.includes(
            Number(result.startingPosition)
        )
    ) {
        points += 1;
    }


    return points;
}



/* ---------------------------------------------------------
   Find the requested race
   --------------------------------------------------------- */

function findCurrentRace() {

    const raceId =
        document.body.dataset.raceId;


    if (!raceId) {

        console.error(
            "The page is missing its data-race-id attribute."
        );


        return null;
    }


    const race =
        gt4RaceResults.find(
            (raceEntry) =>
                raceEntry.id === raceId
        );


    if (!race) {

        console.error(
            `No race exists with the ID "${raceId}".`
        );


        return null;
    }


    return race;
}



/* ---------------------------------------------------------
   Update text safely
   --------------------------------------------------------- */

function updateTextContent(
    selector,
    value
) {

    const element =
        document.querySelector(selector);


    if (!element) {
        return;
    }


    element.textContent =
        value ?? "To be confirmed";
}



/* ---------------------------------------------------------
   Render race information
   --------------------------------------------------------- */

function renderRaceInformation(race) {

    updateTextContent(
        "#race-title",
        race.title
    );


    updateTextContent(
        "#race-description",
        race.description
    );


    updateTextContent(
        "#race-track",
        race.track
    );


    updateTextContent(
        "#race-date",
        race.date
    );


    updateTextContent(
        "#race-status",
        race.status
    );


    updateTextContent(
        "#race-notes",
        race.notes
    );


    document.title =
        `${race.title} | GT4 Cup | Next Orbit Speedfest`;
}



/* ---------------------------------------------------------
   Render race summary
   --------------------------------------------------------- */

function renderRaceSummary(race) {

    const results =
        race.results ?? [];


    const starters =
        results.filter(
            (result) =>
                result.status !== "DNS"
        );


    const finishers =
        results.filter(
            (result) =>
                result.status === "Finished"
        );


    const winner =
        results.find(
            (result) =>
                Number(result.position) === 1 &&
                result.status !== "DSQ"
        );


    const fastestLap =
        results.find(
            (result) =>
                result.fastestLap === true
        );


    updateTextContent(
        "#race-starters",
        starters.length
    );


    updateTextContent(
        "#race-finishers",
        finishers.length
    );


    updateTextContent(
        "#race-winner",
        winner
            ? winner.driver
            : "TBC"
    );


    updateTextContent(
        "#fastest-lap-driver",
        fastestLap
            ? fastestLap.driver
            : "TBC"
    );
}



/* ---------------------------------------------------------
   Create a cell
   --------------------------------------------------------- */

function createTableCell(
    value,
    className = ""
) {

    const cell =
        document.createElement("td");


    cell.textContent =
        value;


    if (className) {

        cell.classList.add(
            className
        );

    }


    return cell;
}



/* ---------------------------------------------------------
   Create expanded details
   --------------------------------------------------------- */

function createDetailsRow(result) {

    const detailsRow =
        document.createElement("tr");


    detailsRow.classList.add(
        "race-result-details"
    );


    detailsRow.hidden = true;


    const detailsCell =
        document.createElement("td");


    detailsCell.colSpan = 3;


    const fastestLapText =
        result.fastestLap
            ? "Yes"
            : "No";


    detailsCell.innerHTML = `

        <div class="race-result-details__inner">


            <div class="race-result-detail">

                <span>
                    Team
                </span>

                <strong>
                    ${result.team ?? "—"}
                </strong>

            </div>


            <div class="race-result-detail">

                <span>
                    Starting Position
                </span>

                <strong>
                    ${result.startingPosition ?? "—"}
                </strong>

            </div>


            <div class="race-result-detail">

                <span>
                    Best Lap
                </span>

                <strong>
                    ${result.bestLap ?? "—"}
                </strong>

            </div>


            <div class="race-result-detail">

                <span>
                    Status
                </span>

                <strong>
                    ${result.status ?? "Finished"}
                </strong>

            </div>


            <div class="race-result-detail">

                <span>
                    Fastest Lap
                </span>

                <strong>
                    ${fastestLapText}
                </strong>

            </div>


        </div>

    `;


    detailsRow.appendChild(
        detailsCell
    );


    return detailsRow;
}



/* ---------------------------------------------------------
   Create result row
   --------------------------------------------------------- */

function createResultRow(
    result,
    race
) {

    const row =
        document.createElement("tr");


    row.classList.add(
        "race-result-row"
    );


    /* Fastest lap styling */

    if (result.fastestLap === true) {

        row.classList.add(
            "race-result--fastest-lap"
        );

    }


    /* DNF styling */

    if (result.status === "DNF") {

        row.classList.add(
            "race-result--dnf"
        );

    }


    /* DNS styling */

    if (result.status === "DNS") {

        row.classList.add(
            "race-result--dns"
        );

    }


    /* DSQ styling */

    if (result.status === "DSQ") {

        row.classList.add(
            "race-result--dsq"
        );

    }


    const position =
        result.position ?? "—";


    const driver =
        result.driver ??
        "Unknown driver";


    /*
       Calculate championship points.

       The full race is passed into getRacePoints()
       so that the startingPositionBonus setting
       can be checked.
    */

    const points =
        getRacePoints(
            result,
            race
        );


    const positionCell =
        createTableCell(
            position,
            "result-position"
        );


    const driverCell =
        createTableCell(
            driver,
            "result-driver"
        );


    const pointsCell =
        createTableCell(
            points,
            "result-points"
        );


    driverCell.classList.add(
        "result-driver--clickable"
    );


    driverCell.setAttribute(
        "role",
        "button"
    );


    driverCell.setAttribute(
        "tabindex",
        "0"
    );


    driverCell.setAttribute(
        "aria-expanded",
        "false"
    );


    row.append(
        positionCell,
        driverCell,
        pointsCell
    );


    return row;
}



/* ---------------------------------------------------------
   Toggle details
   --------------------------------------------------------- */

function toggleResultDetails(
    resultRow,
    detailsRow
) {

    const driverCell =
        resultRow.querySelector(
            ".result-driver--clickable"
        );


    const isOpen =
        !detailsRow.hidden;


    /*
       Close all currently open detail rows
    */

    document
        .querySelectorAll(
            ".race-result-details"
        )
        .forEach((row) => {

            row.hidden = true;

        });


    /*
       Reset all driver buttons
    */

    document
        .querySelectorAll(
            ".result-driver--clickable"
        )
        .forEach((cell) => {

            cell.setAttribute(
                "aria-expanded",
                "false"
            );

        });


    /*
       Open the selected driver's details
    */

    if (!isOpen) {

        detailsRow.hidden = false;


        driverCell?.setAttribute(
            "aria-expanded",
            "true"
        );

    }
}



/* ---------------------------------------------------------
   Render results
   --------------------------------------------------------- */

function renderRaceResults(race) {

    const tableBody =
        document.querySelector(
            "#race-results-body"
        );


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    /*
       No published results
    */

    if (
        !Array.isArray(race.results) ||
        race.results.length === 0
    ) {

        const emptyRow =
            document.createElement("tr");


        const emptyCell =
            document.createElement("td");


        emptyCell.colSpan = 3;


        emptyCell.textContent =
            "Race results have not been published yet.";


        emptyRow.appendChild(
            emptyCell
        );


        tableBody.appendChild(
            emptyRow
        );


        return;
    }


    /*
       Sort results by finishing position
    */

    const sortedResults =
        [...race.results].sort(
            (
                firstResult,
                secondResult
            ) =>
                Number(
                    firstResult.position
                ) -
                Number(
                    secondResult.position
                )
        );


    /*
       Render every result
    */

    sortedResults.forEach(
        (result) => {


            /*
               Main classification row
            */

            const resultRow =
                createResultRow(
                    result,
                    race
                );


            /*
               Expandable information row
            */

            const detailsRow =
                createDetailsRow(
                    result
                );


            const driverCell =
                resultRow.querySelector(
                    ".result-driver--clickable"
                );


            /*
               Mouse click
            */

            driverCell.addEventListener(
                "click",
                () => {

                    toggleResultDetails(
                        resultRow,
                        detailsRow
                    );

                }
            );


            /*
               Keyboard accessibility
            */

            driverCell.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();


                        toggleResultDetails(
                            resultRow,
                            detailsRow
                        );

                    }

                }
            );


            tableBody.appendChild(
                resultRow
            );


            tableBody.appendChild(
                detailsRow
            );

        }
    );
}



/* ---------------------------------------------------------
   Display error
   --------------------------------------------------------- */

function displayRaceError() {

    updateTextContent(
        "#race-title",
        "Race Not Found"
    );


    updateTextContent(
        "#race-description",
        "The requested race could not be loaded."
    );


    updateTextContent(
        "#race-status",
        "Unavailable"
    );


    const tableBody =
        document.querySelector(
            "#race-results-body"
        );


    if (tableBody) {

        tableBody.innerHTML = `

            <tr>

                <td colspan="3">
                    The requested race could not be found.
                </td>

            </tr>

        `;

    }
}



/* ---------------------------------------------------------
   Initialise page
   --------------------------------------------------------- */

function initialiseRacePage() {

    if (
        typeof gt4RaceResults === "undefined" ||
        typeof gt4PointsSystem === "undefined"
    ) {

        console.error(
            "The GT4 results data file did not load."
        );


        displayRaceError();


        return;
    }


    const race =
        findCurrentRace();


    if (!race) {

        displayRaceError();


        return;
    }


    renderRaceInformation(
        race
    );


    renderRaceSummary(
        race
    );


    renderRaceResults(
        race
    );
}



/* ---------------------------------------------------------
   Start page
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    initialiseRacePage
);