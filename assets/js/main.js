/* =========================================================
   NEXT ORBIT SPEEDFEST
   Main JavaScript
   ========================================================= */


/* ---------------------------------------------------------
   Footer year
--------------------------------------------------------- */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ---------------------------------------------------------
   Contact link copy button
--------------------------------------------------------- */

const contactButton = document.querySelector("#contact-button");
const copyMessage = document.querySelector("#copy-message");

const contactLink = "https://tinyurl.com/NOSRacing";


async function copyContactLink() {
    if (!contactButton) {
        return;
    }

    const originalButtonText = contactButton.textContent;

    try {
        await navigator.clipboard.writeText(contactLink);

        contactButton.textContent = "Copied!";

        if (copyMessage) {
            copyMessage.textContent = "Contact link copied to your clipboard.";
        }
    } catch (error) {
        fallbackCopyContactLink();

        contactButton.textContent = "Copied!";

        if (copyMessage) {
            copyMessage.textContent = "Contact link copied to your clipboard.";
        }
    }

    window.setTimeout(() => {
        contactButton.textContent = originalButtonText;

        if (copyMessage) {
            copyMessage.textContent = "";
        }
    }, 2500);
}


function fallbackCopyContactLink() {
    const temporaryInput = document.createElement("textarea");

    temporaryInput.value = contactLink;
    temporaryInput.setAttribute("readonly", "");

    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    temporaryInput.style.pointerEvents = "none";

    document.body.appendChild(temporaryInput);

    temporaryInput.select();
    temporaryInput.setSelectionRange(
        0,
        temporaryInput.value.length
    );

    document.execCommand("copy");

    document.body.removeChild(temporaryInput);
}


if (contactButton) {
    contactButton.addEventListener(
        "click",
        copyContactLink
    );
}