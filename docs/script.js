"use strict";

function calculateScore() { // eslint-disable-line no-unused-vars
    let mcScore = document.getElementsByName("mc")[0].value;
    let frq1 = document.getElementsByName("frq1")[0].value;
    let frq2 = document.getElementsByName("frq2")[0].value;
    let frq3 = document.getElementsByName("frq3")[0].value;

    let mcComposite = mcScore * 1.25;
    let frqComposite = (frq1 * 3.0556) + (frq2 * 3.0556) + (frq3 * 3.0556);

    let totalComposite = mcComposite + frqComposite;

    let apScore = (totalComposite <= 54 ? 1 :
        (55 <= totalComposite && totalComposite <= 76) ? 2 :
            (77 <= totalComposite && totalComposite <= 93) ? 3 :
                (94 <= totalComposite && totalComposite <= 109) ? 4 :
                    (110 <= totalComposite && totalComposite <= 150) ? 5 :
                        NaN);

    alert("MC Composite = " + mcComposite + "\n"
    + "FRQ Composite: " + frqComposite + "\n\n"
    + "AP Score: " + apScore);
}