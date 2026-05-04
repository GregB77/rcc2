function loadParams() {
    const defaultParams = {
        illAncienneteMini: 8,
        illTaux010: 0.25,
        illTaux10Plus: 0.3333,
        ilcAncienneteMini: 5,
        ilcMaj50_55: 0.20,
        ilcMaj55_60: 0.30,
        ilcPlancher50_55: 3,
        ilcPlancher55_60: 6,
        ilcPlafond: 18,
        ilcSeuilRegime: 8,
        ilcSeuilCoeff: 7,
        ilcCoeff1_5: 0.2,
        ilcCoeff3_5: 0.6,
        ilcMinoration: true,
        ilcMin61: 0.05,
        ilcMin62: 0.10,
        ilcMin63: 0.20,
        ilcMin64: 0.40,
        passAnnuel: 48060,
        mobiliteSupraCoef: 0.8,
        mobiliteSupraPlafond: 999,
        mobilitePlafondMois: 18,
        mobilitePlafondEuro: 100000,
        mobiliteDuree50Moins: 12,
        mobiliteDuree50Plus: 15,
        mobiliteTaux50Moins: 0.75,
        mobiliteTaux50Plus: 0.80,
        cfcPlafondMois: 999,
        cfcPlafondEuro: 999,
        cfcDureeMax: 36,
        cfcTaux: 0.70,
        tauxPreavis: 9.99
    };

    const saved = localStorage.getItem('rccParams');

    return saved ? JSON.parse(saved) : defaultParams;
}

function saveParams(params) {
    localStorage.setItem('rccParams', JSON.stringify(params));
}

function yearsBetween(startDate, endDate) {
    const ms = endDate - startDate;
    return ms / (365.25 * 24 * 60 * 60 * 1000);
}

function calculateRCC(data, params) {
    const refDate = new Date(data.refDate);
    const birthDate = new Date(data.birthDate);
    const entryDate = new Date(data.entryDate);

    const age = yearsBetween(birthDate, refDate);
    const seniority = yearsBetween(entryDate, refDate);

    const annualSalary = Number(data.annualSalary);
    const monthlySalary = annualSalary / 12;

    let indemniteCFC = 0;

    if (seniority >= (params.illAncienneteMini / 12)) {
        indemniteCFC = monthlySalary * (
            params.illTaux010 * Math.min(seniority, 10) +
            params.illTaux10Plus * Math.max(seniority - 10, 0)
        );
    }

    let coefMobilite;

    if (seniority < params.ilcSeuilRegime) {
        coefMobilite = params.illTaux010 * seniority;
    } else {
        coefMobilite =
            params.ilcCoeff1_5 * params.ilcSeuilCoeff +
            params.ilcCoeff3_5 * Math.max(seniority - params.ilcSeuilCoeff, 0);
    }

    let indemniteMobilite = monthlySalary * coefMobilite;

    if (
        data.statut === 'Cadre' &&
        age >= 50 &&
        age < 55 &&
        seniority >= params.ilcAncienneteMini
    ) {
        indemniteMobilite = Math.max(
            indemniteMobilite * (1 + params.ilcMaj50_55),
            params.ilcPlancher50_55 * monthlySalary
        );
    }

    if (
        data.statut === 'Cadre' &&
        age >= 55 &&
        age < 60 &&
        seniority >= params.ilcAncienneteMini
    ) {
        indemniteMobilite = Math.max(
            indemniteMobilite * (1 + params.ilcMaj55_60),
            params.ilcPlancher55_60 * monthlySalary
        );
    };
}