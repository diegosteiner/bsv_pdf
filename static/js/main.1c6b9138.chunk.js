(this["webpackJsonpbsv-export"]=this["webpackJsonpbsv-export"]||[]).push([[0],{2:function(e,t,n){e.exports={document:"CantonStatementPdf_document__EBEqE",title:"CantonStatementPdf_title__1qpxm",signature:"CantonStatementPdf_signature__1KFn9",table:"CantonStatementPdf_table__39rps",right:"CantonStatementPdf_right__1leZF",center:"CantonStatementPdf_center__E5PyN",separator:"CantonStatementPdf_separator__ZcRe9"}},30:function(e,t,n){e.exports={container:"Layout_container__3pAzR"}},35:function(e,t,n){e.exports={signature:"styles_signature__1xQ9c",table:"styles_table__CYW_7",right:"styles_right__1CLLX"}},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(25),s=n.n(c),i=n(7),o=n(3),d=n(26),l=n(0),u=function(e){var t=e.onChange,n=new FileReader;n.onload=function(e){var n;Object(d.parse)(null===(n=e.target)||void 0===n?void 0:n.result,{delimiter:";",complete:function(e){var n=e.data;return t(n)}})};return Object(l.jsx)("input",{type:"file",onChange:function(e){var t,r=(null===(t=e.target)||void 0===t?void 0:t.files)&&e.target.files[0];r&&n.readAsText(r,"iso88591")}})},j=n(27),b=n(28),h=n(14),x=n(29),O=n(16),m=function(e){Object(h.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return n}(Object(O.a)(Error));function p(e){var t,n=new RegExp(Object(j.a)(/PBS[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(CH)?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]([A-Za-z]{2})?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9])([0-9])([0-9])\x2D([0-9]{2})/,{kind:3,regionalAssociation:4,countNumber:5,year:6}),"i").exec(e);if(!n)throw new m("Not a course number");return{cantonalAssociation:null===(t=n[2])||void 0===t?void 0:t.toUpperCase(),kind:+n[3],regionalAssociation:n[4],countNumber:+n[5],year:+n[6]}}function g(e){return e.cantonalAssociation&&""!==e.cantonalAssociation?"ZH"===e.cantonalAssociation?"ZH-".concat(e.regionalAssociation):e.cantonalAssociation||"":"CH"}function f(e){var t=e.cantonalAssociation?"".concat(e.cantonalAssociation," "):"";return"PBS CH ".concat(t).concat(e.kind).concat(e.regionalAssociation).concat(e.countNumber,"-").concat(e.year)}function v(e){var t=e.courses;return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:f(e.courseNumber)}),Object(l.jsx)("td",{children:e.courseNumber.cantonalAssociation}),Object(l.jsx)("td",{children:e.kind}),Object(l.jsx)("td",{})]},f(e.courseNumber))}))})]})}var P=n(30),C=n.n(P),F=function(e){var t=e.children;return Object(l.jsx)("div",{className:C.a.container,children:t})},T=function(e){var t=e.cantons;return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e}),Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/cantons/".concat(e),children:"PDF"})})]},e)}))})]})},N=n(6),S=n(33),A=n.n(S),y=n(34);function _(e){return e.days*e.count}function E(e){return e.split(",").map((function(e){var t=e.split("x");return{count:parseFloat(t[0]),days:parseFloat(t[1])}}))}function K(e){var t={},n=new Set;return{courses:e.reduce((function(e,r){var a=r[20];if(!t[a]){var c=function(e){return e[20]?{id:e[20],firstName:e[21],lastName:e[22],scoutName:e[23],address:e[24],zipcode:e[25],town:e[26],country:e[27],email:e[28],salutation:e[29]}:null}(r);c&&(t[a]=c)}var s=t[a],i=function(e){try{return{agreementIdFiver:e[0],courseIdFiver:e[1],kind:e[2],courseNumber:p(e[5]),firstCourseDate:e[6],lastCourseDate:e[7],location:e[8],trainingDays:parseFloat(e[9]),bsvDays:parseFloat(e[10]),bsvEligibleParticipationsCount:parseFloat(e[11]),bsvEligibleAttendances:parseFloat(e[13]),bsvEligibleAttendance:E(e[12]),leaderCount:e[14],allParticipantsCount:parseFloat(e[15]),allParticipantsAttendanceSummary:e[16],allParticipantsAttendances:parseFloat(e[17]),allParticipantsAttendance:E(e[16]),cantonsCount:parseInt(e[18]),languagesCount:parseInt(e[19])}}catch(t){if(t instanceof m)return null;throw t}}(r);if(i){e.push(Object(N.a)({advisor:s},i));var o=g(i.courseNumber);o&&n.add(o)}return e}),[]),cantons:Array.from(n)}}var B={cantons:[],courses:[],advisors:{},fixcostsPerParticipant:50,amountPerParticipant:25,year:(new Date).getFullYear()},z=A()(Object(y.persist)((function(e,t){return Object(N.a)(Object(N.a)({},B),{},{importData:function(t){return e((function(e){return Object(N.a)(Object(N.a)({},e),K(t))}))},setYear:function(t){return e((function(e){return Object(N.a)(Object(N.a)({},e),{},{year:t})}))},setAmountPerParticipant:function(t){return e((function(e){return Object(N.a)(Object(N.a)({},e),{},{amountPerParticipant:t})}))},setFixcostsPerParticipant:function(t){return e((function(e){return Object(N.a)(Object(N.a)({},e),{},{fixcostsPerParticipant:t})}))}})}),{name:"bsv-pdf-storage",getStorage:function(){return sessionStorage}}));var w=function(){var e=z(),t=e.courses,n=e.amountPerParticipant,r=e.fixcostsPerParticipant,a=e.year,c=e.cantons,s=e.importData,i=e.setAmountPerParticipant,o=e.setFixcostsPerParticipant,d=e.setYear;return Object(l.jsx)(F,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"BSV PDF"}),Object(l.jsxs)("div",{className:"space-between",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"Datei"}),Object(l.jsx)(u,{onChange:function(e){return s(e)}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"Betrag pro Tn"}),Object(l.jsx)("input",{type:"number",step:"0.1",value:n,onChange:function(e){return i(parseFloat(e.target.value))}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"Fixkosten pro Tn"}),Object(l.jsx)("input",{type:"number",step:"0.1",value:r,onChange:function(e){return o(parseFloat(e.target.value))}})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"Jahr"}),Object(l.jsx)("input",{type:"number",step:"1",value:a,onChange:function(e){return d(parseInt(e.target.value))}})]})]}),Object(l.jsx)("h2",{children:"Kurse"}),Object(l.jsx)(v,{courses:t}),Object(l.jsx)("h2",{children:"Kantone"}),Object(l.jsx)(T,{cantons:c})]})})},D=n(2),k=n.n(D);function H(e,t){return e.kind.startsWith("Basiskurs")||e.kind.startsWith("Cours de base")?e.allParticipantsCount*t:0}function V(e,t,n){return e.bsvEligibleAttendances*t-H(e,n)}function I(e){var t=e.amountPerParticipant,n=e.fixcostsPerParticipant;return e.courses.reduce((function(e,r){return e+V(r,t,n)}),0)}var R=n.p+"static/media/signature.8de7e4e8.png",W=n(35),Z=n.n(W),G=n(56);function L(e){var t=e.lng,n=Object(G.a)().i18n.getFixedT(t);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:n("Footer.Greeting")}),Object(l.jsx)("img",{className:Z.a.signature,src:R,alt:"Signature"}),Object(l.jsx)("p",{children:n("Footer.Address")})]})}function M(e){var t,n=e.statement,r=e.lng,a=n.courses,c=n.year,s=n.canton,i=n.amountPerParticipant,o=n.fixcostsPerParticipant,d=Object(G.a)().i18n.getFixedT(r);return Object(l.jsxs)("div",{className:k.a.document,children:[Object(l.jsx)("p",{children:d("CantonStatementPdf.locationDateHeader",{date:(new Date).toLocaleDateString("de-CH")})}),Object(l.jsx)("h1",{className:k.a.title,children:d("CantonStatementPdf.title",{year:c,canton:s})}),Object(l.jsx)("p",{children:d("CantonStatementPdf.text",{amountPerParticipant:i})}),Object(l.jsxs)("table",{className:k.a.table,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{children:[d("CantonStatementPdf.Kursnummer"),Object(l.jsx)("br",{}),d("CantonStatementPdf.Kursbezeichnung")]}),Object(l.jsxs)("th",{children:[d("CantonStatementPdf.ersterKurstag"),Object(l.jsx)("br",{}),d("CantonStatementPdf.letzterKurstag")]}),Object(l.jsx)("th",{className:k.a.center,children:d("CantonStatementPdf.AnzTn")}),Object(l.jsx)("th",{className:k.a.center,children:d("CantonStatementPdf.Tage")}),Object(l.jsx)("th",{className:k.a.center,children:d("CantonStatementPdf.TageXTn")}),Object(l.jsxs)("th",{className:k.a.center,children:[d("CantonStatementPdf.TotalTage"),Object(l.jsx)("br",{}),d("CantonStatementPdf.Tn")]}),Object(l.jsxs)("th",{className:k.a.right,children:[d("CantonStatementPdf.BsvBeitrag"),Object(l.jsx)("br",{}),d("CantonStatementPdf.fuerTn")]}),Object(l.jsxs)("th",{className:k.a.right,children:[d("CantonStatementPdf.TotalBsv"),Object(l.jsx)("br",{}),d("CantonStatementPdf.Beitrag")]})]})}),Object(l.jsx)("tbody",{children:a.map((function(e){var t=Array.from(e.bsvEligibleAttendance),n=t.shift(),r=t.shift(),a=H(e,o),c=V(e,i,o);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("strong",{children:f(e.courseNumber)})}),Object(l.jsx)("td",{children:e.firstCourseDate}),Object(l.jsx)("td",{className:k.a.center,children:null===n||void 0===n?void 0:n.count}),Object(l.jsx)("td",{className:k.a.center,children:null===n||void 0===n?void 0:n.days}),Object(l.jsx)("td",{className:k.a.center,children:n?_(n):""}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.kind}),Object(l.jsx)("td",{children:e.lastCourseDate}),Object(l.jsx)("td",{className:k.a.center,children:null===r||void 0===r?void 0:r.count}),Object(l.jsx)("td",{className:k.a.center,children:null===r||void 0===r?void 0:r.days}),Object(l.jsx)("td",{className:k.a.center,children:r?_(r):""}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"})]}),t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{className:k.a.center,children:e.count}),Object(l.jsx)("td",{className:k.a.center,children:e.days}),Object(l.jsx)("td",{className:k.a.center,children:e?_(e):""}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"})]})})),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{className:k.a.center,children:e.bsvEligibleAttendances}),Object(l.jsx)("td",{className:k.a.right,children:(e.bsvEligibleAttendances*i).toFixed(2)}),Object(l.jsx)("td",{children:"\xa0"})]}),a>0&&Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:d("CantonStatementPdf.Kosten")}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{className:k.a.right,children:(-a).toFixed(2)})]}),Object(l.jsxs)("tr",{className:k.a.separator,children:[Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{children:"\xa0"}),Object(l.jsx)("td",{className:k.a.right,children:c.toFixed(2)})]})]})}))}),Object(l.jsx)("tfoot",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{className:k.a.center,children:d("CantonStatementPdf.Total")}),Object(l.jsx)("td",{className:k.a.center,children:(t=n,t.courses.reduce((function(e,t){return e+t.bsvEligibleAttendances}),0))}),Object(l.jsx)("td",{className:k.a.right,children:I(n).toFixed(2)}),Object(l.jsx)("td",{className:k.a.right,children:I(n).toFixed(2)})]})})]}),Object(l.jsx)(L,{lng:r})]})}function U(){var e=Object(o.f)().id,t=z(),n=t.courses,r=t.amountPerParticipant,a=t.fixcostsPerParticipant,c=t.year,s=Object(G.a)().t,d=["GE","NE","FR","VS","VD","JU"].includes(e.toUpperCase())?"fr":"de",u={courses:n.filter((function(t){return g(t.courseNumber).toUpperCase()===e.toUpperCase()})),year:c,amountPerParticipant:r,fixcostsPerParticipant:a,canton:e};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"no-print",children:[Object(l.jsx)(i.b,{to:"/",children:s("back")}),Object(l.jsx)("button",{onClick:function(){return window.print()},children:"Print"})]}),u&&Object(l.jsx)(M,{lng:d,statement:u})]})}n(54);var J=function(){return Object(l.jsx)(i.a,{basename:"/bsv_pdf",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/cantons/:id",children:Object(l.jsx)(U,{})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(w,{})})]})})},X=n(21),Y=n(11);X.a.use(Y.e).init({resources:{de:{translation:{back:"Zur\xfcck",CantonStatementPdf:{locationDateHeader:"Bern, {{date}}",title:"Auszahlung der Kurs-Subventionen des KV {{canton}} {{year}}",text:"In diesen Tagen k\xf6nnen wir Euch die Kurs-Subventionen des BSV f\xfcr die bis heute abgerechneten Kurse \xfcberweisen. Wir bitten Euch, Euren Kassierer dar\xfcber zu informieren.\n\n                 Der Tagesansatz ist aktuell CHF {{ amountPerParticipant }} / TN\n\n                 Ohne Euren Gegenbericht innert 20 Tagen gehen wir davon aus, dass Ihr mit den unten aufgef\xfchrten Angaben einverstanden seid.",Kosten:"Kostenabzug Kursunterlagen",Kursnummer:"Kursnummer",Kursbezeichnung:"Kursbezeichnung",ersterKurstag:"erster Kurstag",letzterKurstag:"letzter Kurstag",AnzTn:"Anz Tn",Tage:"Tage",TageXTn:"Tage x Tn",TotalTage:"Total Tage",Tn:"Tn",BsvBeitrag:"BSV Beitrag",fuerTn:"f\xfcr Tn",TotalBsv:"Total BSV",Beitrag:"Beitrag",Total:"Total"},Footer:{Greeting:"F\xfcr die Beantwortung von Fragen stehen wir Euch gerne zur Verf\xfcgung\n\n                     Mit herzlichen Pfadigr\xfcssen",Address:"Emanuel Wyss / Tschagon\n                    Ausbildungssekretariat PBS\n                    Direktwahl: 031 328 05 42\n                    E-Mail: emanuel.wyss@pbs.ch"}}},fr:{translation:{back:"Retour",CantonStatementPdf:{locationDateHeader:"Berne, {{date}}",title:"Versement des subventions de cours \xe0 l'AC {{canton}} {{year}}",text:"Ch\xe8re responsable cantonale, cher responsable cantonal \n        \n                 Nous allons vous verser prochainement les subventions OFAS pour les cours dont vous avez pr\xe9sent\xe9 le d\xe9compte \xe0 ce jour. Nous vous prions d'en informer votre caissier.\n\n                 Sans contreordre de votre part dans un d\xe9lai de 20 jours, nous consid\xe9rons que vous \xeates d'accord avec les donn\xe9es ci-dessous.\n\n                 Le tarif par jour et actuellement de {{ amountPerParticipant }} CHF / Part.",Kosten:"D\xe9duction des co\xfbts des supports de cours",Kursnummer:"No du cours",Kursbezeichnung:"Type de cours",ersterKurstag:"premier jour",letzterKurstag:"dernier jour",AnzTn:"Part.",Tage:"jours",TageXTn:"Part. x jours",TotalTage:"Total jours",Tn:"Part.",BsvBeitrag:"subvent. OFAS",fuerTn:"pour Part.",TotalBsv:"Total OFAS",Beitrag:"subvent.",Total:"Total"},Footer:{Greeting:"N'h\xe9sitez pas \xe0 nous contacter pour tout renseignement suppl\xe9mentaire.\n\n                     Avec nos meilleures salutations",Address:"Emanuel Wyss / Tschagon\n                    Secr\xe9tariat MSdS \xe0 la Formation\n                    Tel. direct: 031 328 05 42 \n                    E-Mail: emanuel.wyss@pbs.ch"}}}},lng:"de",interpolation:{escapeValue:!1}});X.a;s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.1c6b9138.chunk.js.map