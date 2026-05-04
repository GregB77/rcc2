// Données extraites automatiquement depuis "RCC avec Préavis" (A2:C34 + paramètres F3:F36)
const BUNDLE = {"sheet": "RCC avec Préavis", "cells": {"A2": {"f": null, "v": {"t": "str", "v": "Données d'entrée"}, "fmt": "General", "input": false, "opts": null}, "B2": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "C2": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "A3": {"f": null, "v": {"t": "str", "v": "Date de référence (notification / rupture)"}, "fmt": "General", "input": false, "opts": null}, "B3": {"f": null, "v": {"t": "date", "v": "2027-07-01"}, "fmt": "mm-dd-yy", "input": false, "opts": null}, "C3": {"f": null, "v": {"t": "date", "v": "2027-07-01"}, "fmt": "mm-dd-yy", "input": false, "opts": null}, "A4": {"f": null, "v": {"t": "str", "v": "Satut métallurgie"}, "fmt": "General", "input": false, "opts": null}, "B4": {"f": null, "v": {"t": "str", "v": "Cadre"}, "fmt": "General", "input": true, "opts": ["Cadre", "Non-Cadre"]}, "C4": {"f": "B4", "v": {"t": "str", "v": "Cadre"}, "fmt": "General", "input": true, "opts": ["Cadre", "Non-Cadre"]}, "A5": {"f": null, "v": {"t": "str", "v": "Dispositif Mobilité ou CFC (faire le choix)"}, "fmt": "General", "input": false, "opts": null}, "B5": {"f": null, "v": {"t": "str", "v": "CFC"}, "fmt": "General", "input": true, "opts": ["Mobilité", "CFC"]}, "C5": {"f": null, "v": {"t": "str", "v": "Mobilité"}, "fmt": "General", "input": true, "opts": ["Mobilité", "CFC"]}, "A6": {"f": null, "v": {"t": "str", "v": "Date de naissance"}, "fmt": "General", "input": false, "opts": null}, "B6": {"f": null, "v": {"t": "date", "v": "1975-06-01"}, "fmt": "mm-dd-yy", "input": true, "opts": null}, "C6": {"f": "B6", "v": {"t": "date", "v": "1975-06-01"}, "fmt": "mm-dd-yy", "input": true, "opts": null}, "A7": {"f": null, "v": {"t": "str", "v": "Age : années"}, "fmt": "General", "input": false, "opts": null}, "B7": {"f": "YEARFRAC(B3,B6,1)", "v": {"t": "num", "v": 52.08280814133691}, "fmt": "0.0\" ans\"", "input": false, "opts": null}, "C7": {"f": "YEARFRAC(C3,C6,1)", "v": {"t": "num", "v": 52.08280814133691}, "fmt": "0.0\" ans\"", "input": false, "opts": null}, "A8": {"f": null, "v": {"t": "str", "v": "Date d'entrée dans l'entreprise"}, "fmt": "General", "input": false, "opts": null}, "B8": {"f": null, "v": {"t": "date", "v": "1995-01-01"}, "fmt": "mm-dd-yy", "input": true, "opts": null}, "C8": {"f": "B8", "v": {"t": "date", "v": "1995-01-01"}, "fmt": "mm-dd-yy", "input": true, "opts": null}, "A9": {"f": null, "v": {"t": "str", "v": "Ancienneté : années"}, "fmt": "General", "input": false, "opts": null}, "B9": {"f": "YEARFRAC(B3,B8,1)", "v": {"t": "num", "v": 32.49622500622252}, "fmt": "0.0\" ans\"", "input": false, "opts": null}, "C9": {"f": "YEARFRAC(C3,C8,1)", "v": {"t": "num", "v": 32.49622500622252}, "fmt": "0.0\" ans\"", "input": false, "opts": null}, "A10": {"f": null, "v": {"t": "str", "v": "Salaire annuel brut de référence"}, "fmt": "General", "input": false, "opts": null}, "B10": {"f": null, "v": {"t": "num", "v": 72000.0}, "fmt": "#,##0", "input": true, "opts": null}, "C10": {"f": "B10", "v": {"t": "num", "v": 72000.0}, "fmt": "#,##0", "input": true, "opts": null}, "A11": {"f": null, "v": {"t": "str", "v": "Salaire mensuel brut de référence"}, "fmt": "General", "input": false, "opts": null}, "B11": {"f": "B10/12", "v": {"t": "num", "v": 6000.0}, "fmt": "#,##0", "input": false, "opts": null}, "C11": {"f": "C10/12", "v": {"t": "num", "v": 6000.0}, "fmt": "#,##0", "input": false, "opts": null}, "A12": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "B12": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "C12": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "A13": {"f": null, "v": {"t": "str", "v": "Calculs"}, "fmt": "General", "input": false, "opts": null}, "B13": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "C13": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "A14": {"f": null, "v": {"t": "str", "v": "Forcer ILL ?"}, "fmt": "General", "input": false, "opts": null}, "B14": {"f": null, "v": {"t": "str", "v": "Oui (défaut)"}, "fmt": "General", "input": true, "opts": ["Oui (défaut)", "Non"]}, "C14": {"f": null, "v": {"t": "str", "v": "Oui (défaut)"}, "fmt": "General", "input": true, "opts": ["Oui (défaut)", "Non"]}, "A15": {"f": null, "v": {"t": "str", "v": "Indemnité retenue"}, "fmt": "General", "input": false, "opts": null}, "B15": {"f": "_xlfn.LET(\n    _xlpm.age, B7,\n    _xlpm.statut, B4,\n    _xlpm.salaire, B11,\n    _xlpm.anciennete, B9,\n    _xlpm.dispositif, B5,\n    _xlpm.ancienneteCFC, _xlpm.salaire*($F$4*MIN(_xlpm.anciennete,10)+$F$5*MAX(_xlpm.anciennete-10,0)),\n    _xlpm.indemniteCFC, IF(_xlpm.anciennete<$F$3,0,_xlpm.ancienneteCFC),\n    _xlpm.coefMobilite, IF(_xlpm.anciennete<$F$12,$F$4*_xlpm.anciennete,$F$14*$F$13+$F$15*MAX(_xlpm.anciennete-$F$13,0)),\n    _xlpm.indemniteMobilite, _xlpm.salaire*_xlpm.coefMobilite,\n    _xlpm.bonusAge, IF(AND(_xlpm.age>=50,_xlpm.age<55,_xlpm.anciennete>=$F$6),MAX(_xlpm.indemniteMobilite*(1+$F$7),$F$9*_xlpm.salaire),IF(AND(_xlpm.age>=55,_xlpm.age<60,_xlpm.anciennete>=$F$6),MAX(_xlpm.indemniteMobilite*(1+$F$8),$F$10*_xlpm.salaire),_xlpm.indemniteMobilite)),\n    _xlpm.plafondMobilite, MIN(_xlpm.bonusAge,$F$11*_xlpm.salaire),\n    _xlpm.reductionSenior, IF(_xlpm.age=61,$F$17,IF(_xlpm.age=62,$F$18,IF(_xlpm.age=63,$F$19,IF(_xlpm.age>=64,$F$20,0)))),\n    _xlpm.resultatMobilite, IF(_xlpm.statut=\"Cadre\",IF(AND($F$16=\"Oui\",_xlpm.age>=61),MAX(_xlpm.plafondMobilite*(1-_xlpm.reductionSenior),_xlpm.indemniteCFC),_xlpm.plafondMobilite),_xlpm.indemniteCFC),\n\n    IF(B14=\"Oui (défaut)\",_xlpm.indemniteCFC,IF(_xlpm.dispositif=\"CFC\",_xlpm.indemniteCFC,_xlpm.resultatMobilite))\n)", "v": {"t": "num", "v": 59992.45001244503}, "fmt": "#,##0", "input": false, "opts": null}, "C15": {"f": "_xlfn.LET(\n    _xlpm.age, C7,\n    _xlpm.statut, C4,\n    _xlpm.salaire, C11,\n    _xlpm.anciennete, C9,\n    _xlpm.dispositif, C5,\n    _xlpm.ancienneteCFC, _xlpm.salaire*($F$4*MIN(_xlpm.anciennete,10)+$F$5*MAX(_xlpm.anciennete-10,0)),\n    _xlpm.indemniteCFC, IF(_xlpm.anciennete<$F$3,0,_xlpm.ancienneteCFC),\n    _xlpm.coefMobilite, IF(_xlpm.anciennete<$F$12,$F$4*_xlpm.anciennete,$F$14*$F$13+$F$15*MAX(_xlpm.anciennete-$F$13,0)),\n    _xlpm.indemniteMobilite, _xlpm.salaire*_xlpm.coefMobilite,\n    _xlpm.bonusAge, IF(AND(_xlpm.age>=50,_xlpm.age<55,_xlpm.anciennete>=$F$6),MAX(_xlpm.indemniteMobilite*(1+$F$7),$F$9*_xlpm.salaire),IF(AND(_xlpm.age>=55,_xlpm.age<60,_xlpm.anciennete>=$F$6),MAX(_xlpm.indemniteMobilite*(1+$F$8),$F$10*_xlpm.salaire),_xlpm.indemniteMobilite)),\n    _xlpm.plafondMobilite, MIN(_xlpm.bonusAge,$F$11*_xlpm.salaire),\n    _xlpm.reductionSenior, IF(_xlpm.age=61,$F$17,IF(_xlpm.age=62,$F$18,IF(_xlpm.age=63,$F$19,IF(_xlpm.age>=64,$F$20,0)))),\n    _xlpm.resultatMobilite, IF(_xlpm.statut=\"Cadre\",IF(AND($F$16=\"Oui\",_xlpm.age>=61),MAX(_xlpm.plafondMobilite*(1-_xlpm.reductionSenior),_xlpm.indemniteCFC),_xlpm.plafondMobilite),_xlpm.indemniteCFC),\n\n    IF(C14=\"Oui (défaut)\",_xlpm.indemniteCFC,IF(_xlpm.dispositif=\"CFC\",_xlpm.indemniteCFC,_xlpm.resultatMobilite))\n)", "v": {"t": "num", "v": 59992.45001244503}, "fmt": "#,##0", "input": false, "opts": null}, "A16": {"f": null, "v": {"t": "str", "v": "Supra-légale (Mobilité uniquement)"}, "fmt": "General", "input": false, "opts": null}, "B16": {"f": "IF(B5=\"CFC\",0,B11*MIN($F$25,$F$24*B9))", "v": {"t": "num", "v": 0.0}, "fmt": "#,##0", "input": false, "opts": null}, "C16": {"f": "IF(C5=\"CFC\",0,C11*MIN($F$25,$F$24*C9))", "v": {"t": "num", "v": 155981.88002986807}, "fmt": "#,##0", "input": false, "opts": null}, "A17": {"f": null, "v": {"t": "str", "v": "Total indemnité RCC avant plafond"}, "fmt": "General", "input": false, "opts": null}, "B17": {"f": "B15+B16", "v": {"t": "num", "v": 59992.45001244503}, "fmt": "#,##0", "input": false, "opts": null}, "C17": {"f": "C15+C16", "v": {"t": "num", "v": 215974.3300423131}, "fmt": "#,##0", "input": false, "opts": null}, "A18": {"f": null, "v": {"t": "str", "v": "Total indemnité RCC avec plafond"}, "fmt": "General", "input": false, "opts": null}, "B18": {"f": "_xlfn.LET(\n    _xlpm.montantMax, B17,\n    _xlpm.dispositif, B5,\n    _xlpm.salaireRef, B11,\n    _xlpm.anciennete, B9,\n    _xlpm.plafondCFC, MIN(IF($F$32=999,_xlpm.montantMax,$F$32*_xlpm.salaireRef),IF($F$33=999,_xlpm.montantMax,$F$33)),\n    _xlpm.indemniteCFC, IF(_xlpm.anciennete<$F$3,0,_xlpm.salaireRef*($F$4*MIN(_xlpm.anciennete,10)+$F$5*MAX(_xlpm.anciennete-10,0))),\n    _xlpm.plafondMobilite, MIN($F$26*_xlpm.salaireRef,$F$27),\n\n    IF(_xlpm.montantMax=\"\",\"\",IF(_xlpm.dispositif=\"CFC\",MAX(_xlpm.indemniteCFC,MIN(_xlpm.montantMax, _xlpm.plafondCFC)),MAX(B15,MIN(_xlpm.montantMax, _xlpm.plafondMobilite))))\n)", "v": {"t": "num", "v": 59992.45001244503}, "fmt": "#,##0", "input": false, "opts": null}, "C18": {"f": "_xlfn.LET(\n    _xlpm.montantMax, C17,\n    _xlpm.dispositif, C5,\n    _xlpm.salaireRef, C11,\n    _xlpm.anciennete, C9,\n    _xlpm.plafondCFC, MIN(IF($F$32=999,_xlpm.montantMax,$F$32*_xlpm.salaireRef),IF($F$33=999,_xlpm.montantMax,$F$33)),\n    _xlpm.indemniteCFC, IF(_xlpm.anciennete<$F$3,0,_xlpm.salaireRef*($F$4*MIN(_xlpm.anciennete,10)+$F$5*MAX(_xlpm.anciennete-10,0))),\n    _xlpm.plafondMobilite, MIN($F$26*_xlpm.salaireRef,$F$27),\n\n    IF(_xlpm.montantMax=\"\",\"\",IF(_xlpm.dispositif=\"CFC\",MAX(_xlpm.indemniteCFC,MIN(_xlpm.montantMax, _xlpm.plafondCFC)),MAX(C15,MIN(_xlpm.montantMax, _xlpm.plafondMobilite))))\n)", "v": {"t": "num", "v": 100000.0}, "fmt": "#,##0", "input": false, "opts": null}, "A19": {"f": null, "v": {"t": "str", "v": "Plafond atteint ?"}, "fmt": "General", "input": false, "opts": null}, "B19": {"f": "IF(B18<=B17,\"Oui\",\"Non\")", "v": {"t": "str", "v": "Oui"}, "fmt": "General", "input": false, "opts": null}, "C19": {"f": "IF(C18<=C17,\"Oui\",\"Non\")", "v": {"t": "str", "v": "Oui"}, "fmt": "General", "input": false, "opts": null}, "A20": {"f": null, "v": {"t": "str", "v": "Nombre de mois équivalent (Total RCC avec plafond)"}, "fmt": "General", "input": false, "opts": null}, "B20": {"f": "B18/B11", "v": {"t": "num", "v": 9.998741668740838}, "fmt": "0.0\" mois\"", "input": false, "opts": null}, "C20": {"f": "C18/C11", "v": {"t": "num", "v": 16.666666666666668}, "fmt": "0.0\" mois\"", "input": false, "opts": null}, "A21": {"f": null, "v": {"t": "str", "v": "Niveau de rémunération"}, "fmt": "General", "input": false, "opts": null}, "B21": {"f": "IF(B5=\"CFC\",$F$35,IF(B7<50,$F$30,$F$31))", "v": {"t": "num", "v": 0.7}, "fmt": "0%", "input": false, "opts": null}, "C21": {"f": "IF(C5=\"CFC\",$F$35,IF(C7<50,$F$30,$F$31))", "v": {"t": "num", "v": 0.8}, "fmt": "0%", "input": false, "opts": null}, "A22": {"f": null, "v": {"t": "str", "v": "Rémunération mensuelle brut pendant le dispositif"}, "fmt": "General", "input": false, "opts": null}, "B22": {"f": "B11*B21", "v": {"t": "num", "v": 4200.0}, "fmt": "#,##0", "input": false, "opts": null}, "C22": {"f": "C11*C21", "v": {"t": "num", "v": 4800.0}, "fmt": "#,##0", "input": false, "opts": null}, "A23": {"f": null, "v": {"t": "str", "v": "Durée du préavis"}, "fmt": "General", "input": false, "opts": null}, "B23": {"f": null, "v": {"t": "num", "v": 0.0}, "fmt": "General", "input": false, "opts": null}, "C23": {"f": null, "v": {"t": "num", "v": 0.0}, "fmt": "General", "input": false, "opts": null}, "A24": {"f": null, "v": {"t": "str", "v": "Durée maximale du dispositif"}, "fmt": "General", "input": false, "opts": null}, "B24": {"f": null, "v": {"t": "num", "v": 36.0}, "fmt": "General", "input": false, "opts": null}, "C24": {"f": null, "v": {"t": "num", "v": 15.0}, "fmt": "General", "input": false, "opts": null}, "A25": {"f": null, "v": {"t": "str", "v": "Date de sortie du dispositif"}, "fmt": "General", "input": false, "opts": null}, "B25": {"f": "EDATE(B3,B24)", "v": {"t": "date", "v": "2030-07-01"}, "fmt": "mm-dd-yy", "input": false, "opts": null}, "C25": {"f": "EDATE(C3,C24)", "v": {"t": "date", "v": "2028-10-01"}, "fmt": "mm-dd-yy", "input": false, "opts": null}, "A26": {"f": null, "v": {"t": "str", "v": "Rémunération Totale"}, "fmt": "General", "input": false, "opts": null}, "B26": {"f": "B22*(B24+B23*($F$36/B21-1))", "v": {"t": "num", "v": 151200.0}, "fmt": "#,##0", "input": false, "opts": null}, "C26": {"f": "C22*(C24+C23*($F$36/C21-1))", "v": {"t": "num", "v": 72000.0}, "fmt": "#,##0", "input": false, "opts": null}, "A27": {"f": null, "v": {"t": "str", "v": "Rémunération totale y compris indemnité totale"}, "fmt": "General", "input": false, "opts": null}, "B27": {"f": "B26+B18", "v": {"t": "num", "v": 211192.45001244504}, "fmt": "#,##0", "input": false, "opts": null}, "C27": {"f": "C26+C18", "v": {"t": "num", "v": 172000.0}, "fmt": "#,##0", "input": false, "opts": null}, "A28": {"f": null, "v": {"t": "str", "v": "Rémunération moyenne pendant la durée du dispositif"}, "fmt": "General", "input": false, "opts": null}, "B28": {"f": "B27/B24", "v": {"t": "num", "v": 5866.45694479014}, "fmt": "#,##0", "input": false, "opts": null}, "C28": {"f": "C27/C24", "v": {"t": "num", "v": 11466.666666666666}, "fmt": "#,##0", "input": false, "opts": null}, "A29": {"f": null, "v": {"t": "str", "v": "Ecart de salaire brut vs salaire de reference €"}, "fmt": "General", "input": false, "opts": null}, "B29": {"f": "B28-B11", "v": {"t": "num", "v": -133.54305520985963}, "fmt": "#,##0", "input": false, "opts": null}, "C29": {"f": "C28-C11", "v": {"t": "num", "v": 5466.666666666666}, "fmt": "#,##0", "input": false, "opts": null}, "A30": {"f": null, "v": {"t": "str", "v": "Nombre de mois équivalent vs salaire mensuel brut de référence"}, "fmt": "General", "input": false, "opts": null}, "B30": {"f": "B27/B11", "v": {"t": "num", "v": 35.19874166874084}, "fmt": "0.0\" mois\"", "input": false, "opts": null}, "C30": {"f": "C27/C11", "v": {"t": "num", "v": 28.666666666666668}, "fmt": "0.0\" mois\"", "input": false, "opts": null}, "A31": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "B31": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "C31": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "A32": {"f": null, "v": {"t": "str", "v": "Cotisations"}, "fmt": "General", "input": false, "opts": null}, "B32": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "C32": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null}, "A33": {"f": null, "v": {"t": "str", "v": "Part Soumise cotisations URSAFF"}, "fmt": "General", "input": false, "opts": null}, "B33": {"f": "B18-IF(B18>=10*$F$21,0,MIN(B18,2*$F$21))", "v": {"t": "num", "v": 0.0}, "fmt": "#,##0", "input": false, "opts": null}, "C33": {"f": "C18-IF(C18>=10*$F$21,0,MIN(C18,2*$F$21))", "v": {"t": "num", "v": 3880.0}, "fmt": "#,##0", "input": false, "opts": null}, "A34": {"f": null, "v": {"t": "str", "v": "Part soumise CSG/CRDS"}, "fmt": "General", "input": false, "opts": null}, "B34": {"f": "IF(B18>=10*$F$21,B18,B18-MIN(B18,MIN(B15,B18-B33)))", "v": {"t": "num", "v": 0.0}, "fmt": "#,##0", "input": false, "opts": null}, "C34": {"f": "IF(C18>=10*$F$21,C18,C18-MIN(C18,MIN(C15,C18-C33)))", "v": {"t": "num", "v": 40007.54998755497}, "fmt": "#,##0", "input": false, "opts": null}, "F3": {"f": null, "v": {"t": "num", "v": 8.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F4": {"f": null, "v": {"t": "num", "v": 0.25}, "fmt": "0.00", "input": false, "opts": null, "isParam": true}, "F5": {"f": null, "v": {"t": "num", "v": 0.3333333333333333}, "fmt": "0.00", "input": false, "opts": null, "isParam": true}, "F6": {"f": null, "v": {"t": "num", "v": 5.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F7": {"f": null, "v": {"t": "num", "v": 0.2}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F8": {"f": null, "v": {"t": "num", "v": 0.3}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F9": {"f": null, "v": {"t": "num", "v": 3.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F10": {"f": null, "v": {"t": "num", "v": 6.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F11": {"f": null, "v": {"t": "num", "v": 18.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F12": {"f": null, "v": {"t": "num", "v": 8.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F13": {"f": null, "v": {"t": "num", "v": 7.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F14": {"f": null, "v": {"t": "num", "v": 0.2}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F15": {"f": null, "v": {"t": "num", "v": 0.6}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F16": {"f": null, "v": {"t": "str", "v": "Oui"}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F17": {"f": null, "v": {"t": "num", "v": 0.05}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F18": {"f": null, "v": {"t": "num", "v": 0.1}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F19": {"f": null, "v": {"t": "num", "v": 0.2}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F20": {"f": null, "v": {"t": "num", "v": 0.4}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F21": {"f": null, "v": {"t": "num", "v": 48060.0}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F22": {"f": null, "v": null, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F23": {"f": null, "v": {"t": "str", "v": "Valeur"}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F24": {"f": null, "v": {"t": "num", "v": 0.8}, "fmt": "General", "input": false, "opts": null, "isParam": true}, "F25": {"f": null, "v": {"t": "num", "v": 999.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F26": {"f": null, "v": {"t": "num", "v": 18.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F27": {"f": null, "v": {"t": "num", "v": 100000.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F28": {"f": null, "v": {"t": "num", "v": 12.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F29": {"f": null, "v": {"t": "num", "v": 15.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F30": {"f": null, "v": {"t": "num", "v": 0.75}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F31": {"f": null, "v": {"t": "num", "v": 0.8}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F32": {"f": null, "v": {"t": "num", "v": 999.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F33": {"f": null, "v": {"t": "num", "v": 999.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F34": {"f": null, "v": {"t": "num", "v": 36.0}, "fmt": "#,##0", "input": false, "opts": null, "isParam": true}, "F35": {"f": null, "v": {"t": "num", "v": 0.7}, "fmt": "0%", "input": false, "opts": null, "isParam": true}, "F36": {"f": null, "v": {"t": "num", "v": 9.99}, "fmt": "0%", "input": false, "opts": null, "isParam": true}}, "render": [["A2", "B2", "C2"], ["A3", "B3", "C3"], ["A4", "B4", "C4"], ["A5", "B5", "C5"], ["A6", "B6", "C6"], ["A7", "B7", "C7"], ["A8", "B8", "C8"], ["A9", "B9", "C9"], ["A10", "B10", "C10"], ["A11", "B11", "C11"], ["A12", "B12", "C12"], ["A13", "B13", "C13"], ["A14", "B14", "C14"], ["A15", "B15", "C15"], ["A16", "B16", "C16"], ["A17", "B17", "C17"], ["A18", "B18", "C18"], ["A19", "B19", "C19"], ["A20", "B20", "C20"], ["A21", "B21", "C21"], ["A22", "B22", "C22"], ["A23", "B23", "C23"], ["A24", "B24", "C24"], ["A25", "B25", "C25"], ["A26", "B26", "C26"], ["A27", "B27", "C27"], ["A28", "B28", "C28"], ["A29", "B29", "C29"], ["A30", "B30", "C30"], ["A31", "B31", "C31"], ["A32", "B32", "C32"], ["A33", "B33", "C33"], ["A34", "B34", "C34"]], "paramRows": [{"type": "header", "label": "Paramètres légaux (Par défaut, ne pas modifier)"}, {"type": "param", "addr": "F3", "label": "ILL - Ancienneté minimale (mois)", "comment": "Droit à indemnité si ancienneté >= 8 mois (règle légale + CCN)"}, {"type": "param", "addr": "F4", "label": "ILL - Taux 0-10 ans (mois/an)", "comment": "1/4 mois par année sur les 10 premières années"}, {"type": "param", "addr": "F5", "label": "ILL - Taux >10 ans (mois/an)", "comment": "1/3 mois par année au-delà de 10 ans"}, {"type": "param", "addr": "F6", "label": "ILC - Ancienneté mini requise (ans)", "comment": "Condition d'ancienneté pour majorations cadres 50-60 ans"}, {"type": "param", "addr": "F7", "label": "ILC - Majoration âge 50-55 (mois)", "comment": "Majoration +20% (cadres) si 50 <= âge < 55 et ancienneté >= 5 ans"}, {"type": "param", "addr": "F8", "label": "ILC - Majoration âge 55-60 (mois)", "comment": "Majoration +30% (cadres) si 55 <= âge < 60 et ancienneté >= 5 ans"}, {"type": "param", "addr": "F9", "label": "ILC - Plancher 50-55 (mois)", "comment": "Plancher : au moins 3 mois (cadres 50-55, ancienneté >= 5 ans)"}, {"type": "param", "addr": "F10", "label": "ILC - Plancher 55-60 (mois)", "comment": "Plancher : au moins 6 mois (cadres 55-60, ancienneté >= 5 ans)"}, {"type": "param", "addr": "F11", "label": "ILC - Plafond (mois)", "comment": "Plafond : 18 mois de salaire de référence (cadres)"}, {"type": "param", "addr": "F12", "label": "ILC - Seuil ancienneté régime cadres (années)", "comment": "Art. 75.3.1.2 : régime renforcé à partir de 8 ans (F,G,H,I)"}, {"type": "param", "addr": "F13", "label": "ILC - Seuil changement coeff (années)", "comment": "Art. 75.3.1.2 : changement de coeff à 7 ans (F,G,H,I)"}, {"type": "param", "addr": "F14", "label": "ILC - Coeff 1/5 (jusqu’à 7 ans)", "comment": "Art. 75.3.1.2 : 1/5 mois par année jusqu’à 7 ans (F,G,H,I)"}, {"type": "param", "addr": "F15", "label": "ILC - Coeff 3/5 (au-delà de 7 ans)", "comment": "Art. 75.3.1.2 : 3/5 mois par année au-delà de 7 ans (F,G,H,I)"}, {"type": "param", "addr": "F16", "label": "ILC - Minoration", "comment": "Non applicable si pas taux plein ou retraite compl. avec abattement"}, {"type": "param", "addr": "F17", "label": "ILC - Minoration 61 ans", "comment": "Décote : -5% à 61 ans (cadres)"}, {"type": "param", "addr": "F18", "label": "ILC - Minoration 62 ans", "comment": "Décote : -10% à 62 ans (cadres)"}, {"type": "param", "addr": "F19", "label": "ILC - Minoration 63 ans", "comment": "Décote : -20% à 63 ans (cadres)"}, {"type": "param", "addr": "F20", "label": "ILC - Minoration 64+ ans", "comment": "Décote : -40% à 64 ans et plus (cadres)"}, {"type": "param", "addr": "F21", "label": "PASS annuel", "comment": "Plafond Annuel Sécurité Sociale 2026"}, {"type": "header", "label": "Négociation"}, {"type": "param", "addr": "F24", "label": "Mobilité - Coefficient supra-légale (mois/an)", "comment": "Coefficient en mois de salaire par année d'ancienneté"}, {"type": "param", "addr": "F25", "label": "Mobilité - Plafond supra-légale mobilité (mois)", "comment": "Plafond en mois pour la supra (999 = pas de plafond)"}, {"type": "param", "addr": "F26", "label": "Mobilité - Plafond total RCC (mois)", "comment": "Plafond exprimé en nombre de mois de salaire (999 = pas de plafond)"}, {"type": "param", "addr": "F27", "label": "Mobilité - Plafond total RCC (€)", "comment": "Plafond exprimé en euros (999 = pas de plafond)"}, {"type": "param", "addr": "F28", "label": "Mobilité - Durée max < 50 ans (mois)", "comment": "Durée maximale si dispositif mobilité et âge < 50 ans"}, {"type": "param", "addr": "F29", "label": "Mobilité - Durée max ≥ 50 ans (mois)", "comment": "Durée maximale si dispositif mobilité et âge ≥ 50 ans"}, {"type": "param", "addr": "F30", "label": "Mobilité - Taux rémunération < 50 ans", "comment": "Rémunération : mobilité, âge < 50 ans"}, {"type": "param", "addr": "F31", "label": "Mobilité - Taux rémunération ≥ 50 ans", "comment": "Rémunération : mobilité, âge ≥ 50 ans"}, {"type": "param", "addr": "F32", "label": "CFC - Plafond total RCC (mois)", "comment": "Plafond exprimé en nombre de mois de salaire (999 = pas de plafond)"}, {"type": "param", "addr": "F33", "label": "CFC - Plafond total RCC (€)", "comment": "Plafond exprimé en euros (999 = pas de plafond)"}, {"type": "param", "addr": "F34", "label": "CFC - Durée max (mois)", "comment": "Durée maximale si dispositif CFC"}, {"type": "param", "addr": "F35", "label": "CFC - Taux rémunération", "comment": "Rémunération : CFC = 65% du salaire mensuel de référence"}, {"type": "param", "addr": "F36", "label": "Taux du préavis", "comment": "Taux du préavis (999% = Pas de préavis)"}], "paramDefaults": {"F3": {"t": "num", "v": 8.0}, "F4": {"t": "num", "v": 0.25}, "F5": {"t": "num", "v": 0.3333333333333333}, "F6": {"t": "num", "v": 5.0}, "F7": {"t": "num", "v": 0.2}, "F8": {"t": "num", "v": 0.3}, "F9": {"t": "num", "v": 3.0}, "F10": {"t": "num", "v": 6.0}, "F11": {"t": "num", "v": 18.0}, "F12": {"t": "num", "v": 8.0}, "F13": {"t": "num", "v": 7.0}, "F14": {"t": "num", "v": 0.2}, "F15": {"t": "num", "v": 0.6}, "F16": {"t": "str", "v": "Oui"}, "F17": {"t": "num", "v": 0.05}, "F18": {"t": "num", "v": 0.1}, "F19": {"t": "num", "v": 0.2}, "F20": {"t": "num", "v": 0.4}, "F21": {"t": "num", "v": 48060.0}, "F24": {"t": "num", "v": 0.8}, "F25": {"t": "num", "v": 999.0}, "F26": {"t": "num", "v": 18.0}, "F27": {"t": "num", "v": 100000.0}, "F28": {"t": "num", "v": 12.0}, "F29": {"t": "num", "v": 15.0}, "F30": {"t": "num", "v": 0.75}, "F31": {"t": "num", "v": 0.8}, "F32": {"t": "num", "v": 999.0}, "F33": {"t": "num", "v": 999.0}, "F34": {"t": "num", "v": 36.0}, "F35": {"t": "num", "v": 0.7}, "F36": {"t": "num", "v": 9.99}}, "editableA": ["B10", "B14", "B4", "B5", "B6", "B8", "C10", "C14", "C4", "C5", "C6", "C8"]};

const PARAM_KEY = 'rcc_params_v1';

// --- utils date <-> excel style ---
function toDate(v){
  if(v==null) return null;
  if(v instanceof Date) return v;
  if(typeof v==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) return new Date(v+'T00:00:00');
  if(typeof v==='string'){
    const d=new Date(v);
    return isNaN(d.getTime())? null : d;
  }
  return null;
}

function formatDateFR(d){
  if(!d) return '';
  const dd=String(d.getDate()).padStart(2,'0');
  const mm=String(d.getMonth()+1).padStart(2,'0');
  const yy=d.getFullYear();
  return `${dd}/${mm}/${yy}`;
}

function daysInYear(y){
  return (new Date(y,1,29).getMonth()===1)?366:365;
}

function diffDays(d1,d2){
  const t1=Date.UTC(d1.getFullYear(),d1.getMonth(),d1.getDate());
  const t2=Date.UTC(d2.getFullYear(),d2.getMonth(),d2.getDate());
  return (t2-t1)/86400000;
}

function yearfracActualActual(d1,d2){
  if(!d1 || !d2) return 0;
  // Dans ce fichier Excel, YEARFRAC est utilisé pour l'âge et l'ancienneté : on veut une valeur positive.
  if(d2<d1){ const tmp=d1; d1=d2; d2=tmp; }
  const y1=d1.getFullYear();
  const y2=d2.getFullYear();
  if(y1===y2) return (diffDays(d1,d2) / daysInYear(y1));

  // première année partielle
  let frac = diffDays(d1, new Date(y1+1,0,1)) / daysInYear(y1);

  // années pleines entre les deux
  for(let y=y1+1; y<y2; y++) frac += 1;

  // dernière année partielle
  frac += diffDays(new Date(y2,0,1), d2) / daysInYear(y2);

  return frac;
}

function edate(d, months){
  d = toDate(d);
  if(!d) return null;
  const m = Number(months)||0;
  const y = d.getFullYear();
  const mo = d.getMonth();
  const day = d.getDate();
  const target = new Date(y, mo + m, 1);
  // last day of target month
  const last = new Date(target.getFullYear(), target.getMonth()+1, 0).getDate();
  target.setDate(Math.min(day, last));
  return target;
}

// --- tokeniser / parser ---
function tokenize(s){
  const out=[];
  let i=0;
  const isDigit=c=>c>='0'&&c<='9';
  const isAlpha=c=>/^[A-Za-z_]$/.test(c);
  while(i<s.length){
    const c=s[i];
    if(/\s/.test(c)){ i++; continue; }

    // strings
    if(c==='"'){
      let j=i+1, str='';
      while(j<s.length){
        if(s[j]==='"') break;
        str+=s[j];
        j++;
      }
      out.push({t:'str', v:str});
      i=j+1;
      continue;
    }

    // two-char operators
    const two=s.slice(i,i+2);
    if(['<=','>=','<>'].includes(two)){ out.push({t:'op', v:two}); i+=2; continue; }

    // single-char ops / punctuation
    if(['+','-','*','/','^','(',')',',','=','<','>'].includes(c)){ out.push({t:(c===','?'comma':(c==='('||c===')'?'paren':'op')), v:c}); i++; continue; }

    // number
    if(isDigit(c) || (c==='.' && isDigit(s[i+1]))){
      let j=i;
      while(j<s.length && /[0-9.]/.test(s[j])) j++;
      out.push({t:'num', v:Number(s.slice(i,j))});
      i=j;
      continue;
    }

    // cell ref like $F$12
    const cellMatch = s.slice(i).match(/^\$?[A-Z]{1,3}\$?\d+/);
    if(cellMatch){
      out.push({t:'cell', v:cellMatch[0].replaceAll('$','')});
      i += cellMatch[0].length;
      continue;
    }

    // identifier (functions, LET vars like _xlpm.age)
    if(isAlpha(c) || c==='.' ){
      let j=i;
      while(j<s.length && /[A-Za-z0-9_\.]/.test(s[j])) j++;
      let ident=s.slice(i,j);
      out.push({t:'ident', v:ident});
      i=j;
      continue;
    }

    // unknown
    out.push({t:'unknown', v:c});
    i++;
  }
  return out;
}

function Parser(tokens){
  let p=0;
  const peek=()=>tokens[p];
  const take=()=>tokens[p++];
  const match=(t,v)=>{ const k=peek(); if(!k) return false; if(k.t!==t) return false; if(v!=null && k.v!==v) return false; p++; return true; }

  function parseExpression(){ return parseComparison(); }

  function parseComparison(){
    let node=parseAddSub();
    while(true){
      const k=peek();
      if(k && k.t==='op' && ['=','<>','<','>','<=','>='].includes(k.v)){
        const op=take().v;
        const rhs=parseAddSub();
        node={type:'bin', op, left:node, right:rhs};
      } else break;
    }
    return node;
  }

  function parseAddSub(){
    let node=parseMulDiv();
    while(true){
      const k=peek();
      if(k && k.t==='op' && (k.v==='+'||k.v==='-')){
        const op=take().v;
        const rhs=parseMulDiv();
        node={type:'bin', op, left:node, right:rhs};
      } else break;
    }
    return node;
  }

  function parseMulDiv(){
    let node=parsePower();
    while(true){
      const k=peek();
      if(k && k.t==='op' && (k.v==='*'||k.v==='/')){
        const op=take().v;
        const rhs=parsePower();
        node={type:'bin', op, left:node, right:rhs};
      } else break;
    }
    return node;
  }

  function parsePower(){
    let node=parseUnary();
    const k=peek();
    if(k && k.t==='op' && k.v==='^'){
      take();
      const rhs=parseUnary();
      node={type:'bin', op:'^', left:node, right:rhs};
    }
    return node;
  }

  function parseUnary(){
    const k=peek();
    if(k && k.t==='op' && (k.v==='+'||k.v==='-')){
      const op=take().v;
      return {type:'un', op, expr:parseUnary()};
    }
    return parsePrimary();
  }

  function parsePrimary(){
    const k=peek();
    if(!k) return {type:'num', v:0};
    if(match('num')) return {type:'num', v:tokens[p-1].v};
    if(match('str')) return {type:'str', v:tokens[p-1].v};
    if(match('cell')) return {type:'cell', v:tokens[p-1].v};
    if(match('ident')){
      const ident=tokens[p-1].v;
      // function call?
      if(match('paren','(')){
        const args=[];
        if(!match('paren',')')){
          while(true){
            args.push(parseExpression());
            if(match('comma',',')) continue;
            if(match('paren',')')) break;
            // tolerate missing comma
            break;
          }
        }
        return {type:'call', name:ident, args};
      }
      return {type:'ident', v:ident};
    }
    if(match('paren','(')){
      const node=parseExpression();
      match('paren',')');
      return node;
    }
    // fallback
    take();
    return {type:'num', v:0};
  }

  const ast=parseExpression();
  return ast;
}

// --- model / evaluator ---
const AST_CACHE = new Map();

function parseFormula(formula){
  const key=formula;
  if(AST_CACHE.has(key)) return AST_CACHE.get(key);
  const norm = formula.replaceAll(';',',');
  const tokens=tokenize(norm);
  const ast=Parser(tokens);
  AST_CACHE.set(key, ast);
  return ast;
}

function truthy(x){
  if(x==null) return false;
  if(typeof x==='boolean') return x;
  if(typeof x==='number') return x!==0 && !Number.isNaN(x);
  if(x instanceof Date) return true;
  if(typeof x==='string') return x!=='';
  return Boolean(x);
}

function compare(a,b,op){
  // normalize dates
  if(a instanceof Date && b instanceof Date){
    a = a.getTime(); b=b.getTime();
  } else if(a instanceof Date){
    const bd=toDate(b); if(bd){ a=a.getTime(); b=bd.getTime(); }
  } else if(b instanceof Date){
    const ad=toDate(a); if(ad){ a=ad.getTime(); b=b.getTime(); }
  }
  switch(op){
    case '=': return a==b;
    case '<>': return a!=b;
    case '<': return a<b;
    case '>': return a>b;
    case '<=': return a<=b;
    case '>=': return a>=b;
  }
  return false;
}

class Model{
  constructor(bundle){
    this.bundle=bundle;
    this.state={}; // cell -> {v,f,fmt,input,opts,isParam}
    for(const [addr,def] of Object.entries(bundle.cells)){
      this.state[addr] = structuredClone(def);
    }
    this.cache=new Map();
    this.stack=new Set();
  }

  setCell(addr, value){
    addr=addr.replaceAll('$','');
    const cell=this.state[addr] || (this.state[addr]={f:null,v:null,fmt:'General',input:true});
    cell.v = value;
    // if this is an input cell, we keep formula null
    if(cell.input) cell.f=null;
    this.cache.clear();
  }

  getCell(addr){
    return this.state[addr.replaceAll('$','')];
  }

  decode(encoded){
    if(encoded==null) return null;
    if(encoded.t==='num') return Number(encoded.v);
    if(encoded.t==='bool') return Boolean(encoded.v);
    if(encoded.t==='date') return toDate(encoded.v);
    return String(encoded.v);
  }

  getValue(addr, env=null){
    addr=addr.replaceAll('$','');
    if(env && Object.prototype.hasOwnProperty.call(env, addr)) return env[addr];
    const key='cell:'+addr;
    if(this.cache.has(key)) return this.cache.get(key);
    if(this.stack.has(addr)) return null; // circular
    this.stack.add(addr);

    const cell=this.state[addr];
    let v=null;
    if(!cell) v=null;
    else if(cell.f){
      v=this.evalAst(parseFormula(this.normalizeFuncNames(cell.f)), env||{});
    } else {
      v=this.decode(cell.v);
    }

    this.stack.delete(addr);
    this.cache.set(key, v);
    return v;
  }

  normalizeFuncNames(f){
    return f.replace(/_xlfn\./ig,'');
  }

  evalAst(node, env){
    switch(node.type){
      case 'num': return node.v;
      case 'str': return node.v;
      case 'cell': return this.getValue(node.v, env);
      case 'ident':
        // LET locals stored in env
        if(Object.prototype.hasOwnProperty.call(env, node.v)) return env[node.v];
        // booleans
        if(node.v.toUpperCase()==='TRUE') return true;
        if(node.v.toUpperCase()==='FALSE') return false;
        return null;
      case 'un':{
        const x=this.evalAst(node.expr, env);
        const n=(x instanceof Date)? x : Number(x||0);
        return node.op==='-' ? -n : n;
      }
      case 'bin':{
        const a=this.evalAst(node.left, env);
        const b=this.evalAst(node.right, env);
        if(['=','<>','<','>','<=','>='].includes(node.op)) return compare(a,b,node.op);
        // date arithmetic
        if(a instanceof Date && typeof b==='number'){
          if(node.op==='+') return new Date(a.getFullYear(),a.getMonth(),a.getDate()+b);
          if(node.op==='-') return new Date(a.getFullYear(),a.getMonth(),a.getDate()-b);
        }
        if(a instanceof Date && b instanceof Date && node.op==='-'){
          return diffDays(b,a) * -1; // (a-b)
        }
        const an = (a instanceof Date)? a.getTime() : Number(a||0);
        const bn = (b instanceof Date)? b.getTime() : Number(b||0);
        switch(node.op){
          case '+': return (typeof a==='string' || typeof b==='string') ? String(a??'')+String(b??'') : an+bn;
          case '-': return an-bn;
          case '*': return an*bn;
          case '/': return bn===0? 0 : an/bn;
          case '^': return Math.pow(an,bn);
        }
        return 0;
      }
      case 'call':
        return this.evalFunc(node.name, node.args, env);
    }
    return null;
  }

  evalFunc(name, args, env){
    const U=name.toUpperCase();
    if(U==='IF'){
      const cond=this.evalAst(args[0], env);
      return truthy(cond) ? this.evalAst(args[1], env) : this.evalAst(args[2] ?? {type:'num',v:0}, env);
    }
    if(U==='AND'){
      for(const a of args) if(!truthy(this.evalAst(a, env))) return false;
      return true;
    }
    if(U==='OR'){
      for(const a of args) if(truthy(this.evalAst(a, env))) return true;
      return false;
    }
    if(U==='MIN' || U==='MAX'){
      const vals=args.map(a=>this.evalAst(a, env)).filter(v=>v!=null && v!=='');
      const nums=vals.map(v=> (v instanceof Date)? v.getTime() : Number(v));
      if(nums.length===0) return 0;
      return (U==='MIN') ? Math.min(...nums) : Math.max(...nums);
    }
    if(U==='LET'){
      // LET(name1, value1, name2, value2, ..., result)
      const local={...env};
      for(let i=0;i<args.length-1;i+=2){
        const nameNode=args[i];
        const valNode=args[i+1];
        const varName = (nameNode.type==='ident') ? nameNode.v : (nameNode.type==='str'? nameNode.v : null);
        if(!varName) continue;
        local[varName] = this.evalAst(valNode, local);
      }
      return this.evalAst(args[args.length-1], local);
    }
    if(U==='YEARFRAC'){
      const d1=this.evalAst(args[0], env);
      const d2=this.evalAst(args[1], env);
      const basis = args[2] ? Number(this.evalAst(args[2], env)) : 0;
      const D1=toDate(d1); const D2=toDate(d2);
      if(basis===1) return yearfracActualActual(D1,D2);
      // fallback: actual/365
      return (D1&&D2) ? diffDays(D1,D2)/365 : 0;
    }
    if(U==='EDATE'){
      const d=this.evalAst(args[0], env);
      const m=this.evalAst(args[1], env);
      return edate(d,m);
    }

    return null;
  }
}

function decodeParam(obj){
  if(obj==null) return null;
  if(obj.t==='date') return obj.v;
  if(obj.t==='num') return obj.v;
  if(obj.t==='bool') return obj.v;
  return obj.v;
}

function loadParams(){
  const raw=localStorage.getItem(PARAM_KEY);
  if(!raw) return structuredClone(BUNDLE.paramDefaults);
  try{
    const o=JSON.parse(raw);
    return {...structuredClone(BUNDLE.paramDefaults), ...o};
  }catch{
    return structuredClone(BUNDLE.paramDefaults);
  }
}

function applyParams(model){
  const params=loadParams();
  for(const [addr,enc] of Object.entries(params)){
    if(!enc) continue;
    model.state[addr] = model.state[addr] || {f:null,v:null,fmt:'General',input:false,isParam:true};
    model.state[addr].v = enc;
  }
  return params;
}

// --- rendering ---
function isDateFmt(fmt){
  return (fmt||'').toLowerCase().includes('yy') || (fmt||'').toLowerCase().includes('dd') || (fmt||'').toLowerCase().includes('mm-');
}

function formatValue(val, fmt, label){
  if(val==null) return '';
  if(val instanceof Date) return formatDateFR(val);
  if(typeof val==='boolean') return val ? 'VRAI' : 'FAUX';

  const f=(fmt||'').toLowerCase();
  if(f.includes('" ans"')) return `${Number(val).toFixed(1)} ans`;
  if(f.includes('" mois"')) return `${Number(val).toFixed(1)} mois`;
  if(f.includes('%')) return `${(Number(val)*100).toFixed(0)}%`;

  const isEuro = (label||'').includes('€') || /indemnité|rémunération|salaire|plafond/i.test(label||'');
  if(isEuro) return new Intl.NumberFormat('fr-FR', {maximumFractionDigits:0}).format(Number(val||0)) + ' €';

  if((fmt||'')==='#,##0') return new Intl.NumberFormat('fr-FR', {maximumFractionDigits:0}).format(Number(val||0));
  if((fmt||'')==='General' && typeof val==='number') return new Intl.NumberFormat('fr-FR', {maximumFractionDigits:6}).format(val);
  return String(val);
}

function buildGrid(model){
  const table=document.getElementById('grid');
  table.innerHTML='';

  // header
  const thead=document.createElement('thead');
  const hr=document.createElement('tr');
  hr.innerHTML = `<th class="colA">Libellé</th><th class="colB">Scénario B</th><th class="colC">Scénario C</th>`;
  thead.appendChild(hr);
  table.appendChild(thead);

  const tbody=document.createElement('tbody');

  for(const row of BUNDLE.render){
    const tr=document.createElement('tr');
    const [aAddr,bAddr,cAddr]=row;

    const aCell=model.getCell(aAddr);
    const label = model.getValue(aAddr) ?? '';

    // A column
    const tdA=document.createElement('td');
    tdA.textContent = (typeof label==='string') ? label : formatValue(label, aCell?.fmt, '');
    if(aCell && aCell.v && aCell.v.t==='str' && (aCell.v.v||'').toLowerCase().includes('calculs')) tdA.classList.add('muted');
    tr.appendChild(tdA);

    // B / C
    for(const addr of [bAddr,cAddr]){
      const cell=model.getCell(addr);
      const td=document.createElement('td');
      if(cell?.input){
        td.className='cellInput';
        const decoded=model.decode(cell.v);
        let el;
        if(cell.opts){
          el=document.createElement('select');
          for(const opt of cell.opts){
            const o=document.createElement('option');
            o.value=opt; o.textContent=opt;
            el.appendChild(o);
          }
          el.value = decoded ?? cell.opts[0];
        } else if(isDateFmt(cell.fmt) || decoded instanceof Date){
          el=document.createElement('input');
          el.type='date';
          const iso = decoded instanceof Date ? decoded.toISOString().slice(0,10) : (decoded||'');
          el.value = iso;
        } else if(typeof decoded==='number'){
          el=document.createElement('input');
          el.type='number';
          el.step='any';
          el.value = decoded;
        } else {
          el=document.createElement('input');
          el.type='text';
          el.value = decoded ?? '';
        }

        el.dataset.addr=addr;
        el.addEventListener('input', ()=>{
          // store back as encoded
          const val = (el.type==='date') ? el.value : (el.tagName==='SELECT'? el.value : el.value);
          model.state[addr].v = (el.type==='date') ? {t:'date', v:val} : (isNaN(Number(val)) || el.tagName==='SELECT' ? {t:'str', v:val} : {t:'num', v:Number(val)});
          model.cache.clear();
          recalcAndRender(model);
        });

        td.appendChild(el);
      } else {
        const v=model.getValue(addr);
        td.textContent = formatValue(v, cell?.fmt, String(label||''));
      }
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
}

function recalcAndRender(model){
  // trigger evaluation for all non-input cells in grid
  for(const row of BUNDLE.render){
    for(const addr of row){
      const cell=model.getCell(addr);
      if(cell && !cell.input && cell.f) model.getValue(addr);
    }
  }
  buildGrid(model);
  document.getElementById('debug').textContent = JSON.stringify(model.state, null, 2);
}

function exportCSV(model){
  const lines=[];
  lines.push(['Adresse','Libellé','B','C'].join(';'));
  for(const row of BUNDLE.render){
    const [a,b,c]=row;
    const label=model.getValue(a);
    const vb=model.getValue(b);
    const vc=model.getValue(c);
    lines.push([a, String(label??''), String(vb instanceof Date? formatDateFR(vb): vb??''), String(vc instanceof Date? formatDateFR(vc): vc??'')].join(';'));
  }
  const blob=new Blob([lines.join('
')], {type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download='sim_rcc.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// init
const model=new Model(BUNDLE);
const params=applyParams(model);

// inputs defaults: keep existing values from workbook, but ensure they are encoded as date/num/str
for(const addr of BUNDLE.editableA){
  const cell=model.state[addr];
  // if workbook gave a formula, data_only may have been null, so we use decoded value of formula if needed
  if(cell && cell.f && !cell.v){
    const v=model.getValue(addr);
    if(v instanceof Date) cell.v={t:'date', v:v.toISOString().slice(0,10)};
    else if(typeof v==='number') cell.v={t:'num', v:v};
    else cell.v={t:'str', v:String(v??'')};
    cell.f=null;
  }
  // if it's a date encoded as datetime in xlsx
  if(cell && cell.v && cell.v.t==='date' && cell.v.v instanceof Date){
    cell.v={t:'date', v:cell.v.v.toISOString().slice(0,10)};
  }
  if(cell) cell.input=true;
}

recalcAndRender(model);

document.getElementById('btnRecalc').onclick=()=>recalcAndRender(model);
document.getElementById('btnExport').onclick=()=>exportCSV(model);
