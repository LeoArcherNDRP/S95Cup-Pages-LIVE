/* =========================================================
   NEXT ORBIT SPEEDFEST
   S95 Cup Race Results System
   ========================================================= */


/* ---------------------------------------------------------
   Find the requested race
--------------------------------------------------------- */

function findCurrentS95Race() {
    const raceId =
        document.body.dataset.raceId;


    if (!raceId) {
        console.error(
            "The page is missing its data-race-id attribute."
        );

        return null;
    }


    const race =
        s95RaceResults.find(
            (raceEntry) =>
                raceEntry.id === raceId
        );


    if (!race) {
        console.error(
            `No S95 race exists with the ID "${raceId}".`
        );

        return null;
    }


    return race;
}


/* ---------------------------------------------------------
   Update text safely
--------------------------------------------------------- */

function updateS95Text(
    selector,
    value
) {
    const element =
        document.querySelector(selector);


    if (!element) {
        return;
    }


    element.textContent =
        value ?? "TBC";
}


/* ---------------------------------------------------------
   Render race information
--------------------------------------------------------- */

function renderS95RaceInformation(race) {
    updateS95Text(
        "#race-title",
        race.title
    );


    updateS95Text(
        "#race-description",
        race.description
    );


    document.title =
        `${race.title} | S95 Cup | Next Orbit Speedfest`;
}


/* ---------------------------------------------------------
   Render race summary
--------------------------------------------------------- */

function renderS95RaceSummary(race) {
    const results =
        race.results ?? [];


    const starters =
        results.filter(
            (result) =>
                result.status !== "DNS"
        );


    const winner =
        results.find(
            (result) =>
                Number(result.position) === 1
        );


    const fastestLap =
        results.find(
            (result) =>
                result.fastestLap === true
        );


    updateS95Text(
        "#race-starters",
        starters.length
    );


    updateS95Text(
        "#race-winner",
        winner
            ? winner.team
            : "TBC"
    );


    updateS95Text(
        "#race-winning-driver",
        winner
            ? winner.driver
            : "TBC"
    );


    updateS95Text(
        "#fastest-lap-driver",
        fastestLap
            ? fastestLap.driver
            : "TBC"
    );
}


/* ---------------------------------------------------------
   Create table cell
--------------------------------------------------------- */

function createS95TableCell(
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
   Create expandable details row
--------------------------------------------------------- */

function createS95DetailsRow(result) {
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
        result.fastestLap === true
            ? "Yes"
            : "No";


    detailsCell.innerHTML = `
        <div class="race-result-details__inner">

            <div class="race-result-detail">

                <span>
                    Driver
                </span>

                <strong>
                    ${result.driver ?? "—"}
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
                    Fastest Lap
                </span>

                <strong>
                    ${fastestLapText}
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

        </div>
    `;


    detailsRow.appendChild(
        detailsCell
    );


    return detailsRow;
}


/* ---------------------------------------------------------
   Create classification row
--------------------------------------------------------- */

function createS95ResultRow(result) {
    const row =
        document.createElement("tr");


    row.classList.add(
        "race-result-row"
    );


    /*
        Fastest lap
    */

    if (
        result.fastestLap === true
    ) {
        row.classList.add(
            "race-result--fastest-lap"
        );
    }


    /*
        Result statuses
    */

    if (
        result.status === "DNF"
    ) {
        row.classList.add(
            "race-result--dnf"
        );
    }


    if (
        result.status === "DNS"
    ) {
        row.classList.add(
            "race-result--dns"
        );
    }


    if (
        result.status === "DSQ"
    ) {
        row.classList.add(
            "race-result--dsq"
        );
    }


    const position =
        result.position ?? "—";


    const team =
        result.team ?? "Unknown Team";


    const points =
        Number(result.points) || 0;


    const positionCell =
        createS95TableCell(
            position,
            "result-position"
        );


    const teamCell =
        createS95TableCell(
            team,
            "result-driver"
        );


    const pointsCell =
        createS95TableCell(
            points,
            "result-points"
        );


    /*
        Make team clickable
    */

    teamCell.classList.add(
        "result-driver--clickable"
    );


    teamCell.setAttribute(
        "role",
        "button"
    );


    teamCell.setAttribute(
        "tabindex",
        "0"
    );


    teamCell.setAttribute(
        "aria-expanded",
        "false"
    );


    row.append(
        positionCell,
        teamCell,
        pointsCell
    );


    return row;
}


/* ---------------------------------------------------------
   Toggle expanded result
--------------------------------------------------------- */

function toggleS95ResultDetails(
    resultRow,
    detailsRow
) {
    const clickableCell =
        resultRow.querySelector(
            ".result-driver--clickable"
        );


    const isOpen =
        !detailsRow.hidden;


    /*
        Close every open panel first
    */

    document
        .querySelectorAll(
            ".race-result-details"
        )
        .forEach((row) => {

            row.hidden = true;

        });


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
        Open selected panel if it
        wasn't already open
    */

    if (!isOpen) {

        detailsRow.hidden = false;


        clickableCell?.setAttribute(
            "aria-expanded",
            "true"
        );

    }
}


/* ---------------------------------------------------------
   Render race classification
--------------------------------------------------------- */

function renderS95RaceResults(race) {
    const tableBody =
        document.querySelector(
            "#race-results-body"
        );


    if (!tableBody) {
        return;
    }


    tableBody.innerHTML = "";


    if (
        !Array.isArray(race.results) ||
        race.results.length === 0
    ) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="3">
                    No race classification is available.
                </td>
            </tr>
        `;

        return;
    }


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


    sortedResults.forEach(
        (result) => {

            const resultRow =
                createS95ResultRow(
                    result
                );


            const detailsRow =
                createS95DetailsRow(
                    result
                );


            const clickableCell =
                resultRow.querySelector(
                    ".result-driver--clickable"
                );


            /*
                Mouse click
            */

            clickableCell?.addEventListener(
                "click",
                () => {

                    toggleS95ResultDetails(
                        resultRow,
                        detailsRow
                    );

                }
            );


            /*
                Keyboard accessibility
            */

            clickableCell?.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();


                        toggleS95ResultDetails(
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
   Display load error
--------------------------------------------------------- */

function displayS95RaceError() {
    updateS95Text(
        "#race-title",
        "Race Not Found"
    );


    updateS95Text(
        "#race-description",
        "The requested S95 Cup race could not be loaded."
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
   Initialise race page
--------------------------------------------------------- */

function initialiseS95RacePage() {

    if (
        typeof s95RaceResults ===
        "undefined"
    ) {

        console.error(
            "The S95 race data file did not load."
        );


        displayS95RaceError();


        return;
    }


    const race =
        findCurrentS95Race();


    if (!race) {

        displayS95RaceError();


        return;
    }


    renderS95RaceInformation(
        race
    );


    renderS95RaceSummary(
        race
    );


    renderS95RaceResults(
        race
    );
}


/* ---------------------------------------------------------
   Start
--------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    initialiseS95RacePage
);