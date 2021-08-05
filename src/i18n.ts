import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      "back": "Zurück",
      "AdvisorStatementPdf": {
        "title": "LKB Entschädigung {{year}}",
        "text": `Im vergangenen Jahr hast Du die unten aufgeführten Kurse betreut. Dafür erhälst Du heute die LKB Entschädigung.`,
        "Kursschluessel": "Kursschlüssel",
        "KursartJS": "Kursart J+S LS/T",
        "KursartPBS": "PBS Kursart",
        "Entschaedigung": "Entschädigung",
        "Total": "Total",
        "thank": `Nochmals besten Dank für Deinen Einsatz als Leiterkursbetreuer sowie für die Begeisterung und die Zeit, die Du dafür einsetzt. Ich hoffe sehr, dass wir auch in Zukunft auf Deine Hilfe zählen können.`,
      },
      "CantonStatementPdf": {
        "locationDateHeader": "Bern, {{date}}",
        "title": "Auszahlung der Kurs-Subventionen des KV {{canton}} {{year}}",
        "text": `In diesen Tagen können wir Euch die Kurs-Subventionen des BSV für die bis heute abgerechneten Kurse überweisen. Wir bitten Euch, Euren Kassierer darüber zu informieren.

                 Der Tagesansatz ist aktuell CHF {{ amountPerParticipant }} / TN

                 Ohne Euren Gegenbericht innert 20 Tagen gehen wir davon aus, dass Ihr mit den unten aufgeführten Angaben einverstanden seid.`,
        "Kursnummer": "Kursnummer",
        "Kursbezeichnung": "Kursbezeichnung",
        "ersterKurstag": "erster Kurstag",
        "letzterKurstag": "letzter Kurstag",
        "AnzTn": "Anz Tn",
        "Tage": "Tage",
        "TageXTn": "Tage x Tn",
        "TotalTage": "Total Tage",
        "Tn": "Tn",
        "BsvBeitrag": "BSV Beitrag",
        "fuerTn": "für Tn",
        "TotalBsv": "Total BSV",
        "Beitrag": "Beitrag",
        "Total": "Total"

      },
      "Footer": {
        "Greeting": `Für die Beantwortung von Fragen stehen wir Euch gerne zur Verfügung

                     Mit herzlichen Pfadigrüssen`,
        "Address": `Emanuel Wyss / Tschagon
                    Ausbildungssekretariat PBS
                    Direktwahl: 031 328 05 42
                    E-Mail: emanuel.wyss@pbs.ch`
      }

    }
  },
  fr: {
    translation: {
      "back": "Retour",
      "AdvisorStatementPdf": {
        "title": "LKB Entschädigung {{year}}",
        "text": `Im vergangenen Jahr hast Du die unten aufgeführten Kurse betreut. Dafür erhälst Du heute die LKB Entschädigung.`,
        "Kursschluessel": "Kursschlüssel",
        "KursartJS": "Kursart J+S LS/T",
        "KursartPBS": "PBS Kursart",
        "Entschaedigung": "Entschädigung",
        "Total": "Total",
        "thank": `Nochmals besten Dank für Deinen Einsatz als Leiterkursbetreuer sowie für die Begeisterung und die Zeit, die Du dafür einsetzt. Ich hoffe sehr, dass wir auch in Zukunft auf Deine Hilfe zählen können.`,
      },
      "CantonStatementPdf": {
        "locationDateHeader": "Berne, {{date}}",
        "title": "Versement des subventions de cours à l'AC {{canton}} {{year}}",
        "text": `Chère responsable cantonale, cher responsable cantonal 
        
                 Nous allons vous verser prochainement les subventions OFAS pour les cours dont vous avez présenté le décompte à ce jour. Nous vous prions d'en informer votre caissier.

                 Sans contreordre de votre part dans un délai de 20 jours, nous considérons que vous êtes d'accord avec les données ci-dessous.

                 Le tarif par jour et actuellement de {{ amountPerParticipant }} CHF / Part.`,

        "Kursnummer": "No du cours",
        "Kursbezeichnung": "Type de cours",
        "ersterKurstag": "premier jour",
        "letzterKurstag": "dernier jour",
        "AnzTn": "Part.",
        "Tage": "jours",
        "TageXTn": "Part. x jours",
        "TotalTage": "Total jours",
        "Tn": "Part.",
        "BsvBeitrag": "subvent. OFC",
        "fuerTn": "pour Part.",
        "TotalBsv": "Total OFC",
        "Beitrag": "subvent.",
        "Total": "Total"

      },
      "Footer": {
        "Greeting": `N'hésitez pas à nous contacter pour tout renseignement supplémentaire.

                     Avec nos meilleures salutations`,
        "Address": `Emanuel Wyss / Tschagon
                    Secrétariat MSdS à la Formation
                    Tel. direct: 031 328 05 42 
                    E-Mail: emanuel.wyss@pbs.ch`
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
