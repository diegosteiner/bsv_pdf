(this["webpackJsonpbsv-export"]=this["webpackJsonpbsv-export"]||[]).push([[0],{13:function(t,e,n){t.exports={document:"AdvisorStatementPdf_document__3aSbO",title:"AdvisorStatementPdf_title__1VpJQ",signature:"AdvisorStatementPdf_signature__g1MHp",table:"AdvisorStatementPdf_table__3Mk2g",right:"AdvisorStatementPdf_right__sgSDW"}},2:function(t,e,n){t.exports={document:"CantonStatementPdf_document__EBEqE",title:"CantonStatementPdf_title__1qpxm",signature:"CantonStatementPdf_signature__1KFn9",table:"CantonStatementPdf_table__39rps",right:"CantonStatementPdf_right__1leZF",center:"CantonStatementPdf_center__E5PyN",separator:"CantonStatementPdf_separator__ZcRe9"}},32:function(t,e,n){t.exports={container:"Layout_container__3pAzR"}},33:function(t,e,n){t.exports={signature:"styles_signature__1xQ9c",table:"styles_table__CYW_7",right:"styles_right__1CLLX"}},40:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),r=n.n(s),i=n(27),a=n.n(i),o=(n(40),n(10)),d=n(34),j=n(7),l=n(3),u=n(9),h=n(11),b=function(){function t(e,n,c,s,r,i,a,o,d,j){Object(u.a)(this,t),this.id=void 0,this.firstName=void 0,this.lastName=void 0,this.scoutName=void 0,this.address=void 0,this.zipcode=void 0,this.town=void 0,this.country=void 0,this.email=void 0,this.salutation=void 0,this.id=e,this.firstName=n,this.lastName=c,this.scoutName=s,this.address=r,this.zipcode=i,this.town=a,this.country=o,this.email=d,this.salutation=j}return Object(h.a)(t,[{key:"toString",value:function(){return"".concat(this.firstName," ").concat(this.lastName," / ").concat(this.scoutName)}}]),t}(),O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(u.a)(this,t),this.days=void 0,this.count=void 0,this.count=e,this.days=n}return Object(h.a)(t,[{key:"total",value:function(){return this.days*this.count}}],[{key:"fromAttendanceSummary",value:function(e){return e.split(",").map((function(e){var n=e.split("x");return new t(+n[0],+n[1])}))}}]),t}(),x=n(28),m=n(19),v=n(29),f=n(20),g=function(t){Object(m.a)(n,t);var e=Object(v.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return n}(Object(f.a)(Error)),p=function(){function t(e){var n;Object(u.a)(this,t),this.cantonalAssociation=void 0,this.regionalAssociation=void 0,this.year=void 0,this.kind=void 0,this.countNumber=void 0;var c=new RegExp(Object(x.a)(/PBS[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(CH)?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]([A-Za-z]{2})?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9])([0-9])([0-9])\x2D([0-9]{2})/,{kind:3,regionalAssociation:4,countNumber:5,year:6}),"i").exec(e);if(!c)throw new g("Not a course number");this.cantonalAssociation=null===(n=c[2])||void 0===n?void 0:n.toUpperCase(),this.kind=+c[3],this.regionalAssociation=c[4],this.countNumber=+c[5],this.year=+c[6]}return Object(h.a)(t,[{key:"association",value:function(){return this.cantonalAssociation&&""!==this.cantonalAssociation?"ZH"===this.cantonalAssociation?"ZH-".concat(this.regionalAssociation):this.cantonalAssociation||"":"CH"}},{key:"toString",value:function(){var t=this.cantonalAssociation?"".concat(this.cantonalAssociation," "):"";return"PBS CH ".concat(t).concat(this.kind).concat(this.regionalAssociation).concat(this.countNumber,"-").concat(this.year)}}]),t}();var N=function(t){var e={},n=new Set;return{courses:t.reduce((function(t,c){var s=c[20];if(!e[s]){var r=function(t){return t[20]?new b(t[20],t[21],t[22],t[23],t[24],t[25],t[26],t[27],t[28],t[29]):null}(c);r&&(e[s]=r)}var i=e[s],a=function(t){try{return{agreementIdFiver:t[0],courseIdFiver:t[1],kind:t[2],courseNumber:new p(t[5]),firstCourseDate:t[6],lastCourseDate:t[7],location:t[8],trainingDays:parseInt(t[9]),bsvDays:parseInt(t[10]),bsvEligibleParticipationsCount:parseInt(t[11]),bsvEligibleAttendances:parseInt(t[13]),bsvEligibleAttendance:O.fromAttendanceSummary(t[12]),leaderCount:t[14],allParticipantsCount:parseInt(t[15]),allParticipantsAttendanceSummary:t[16],allParticipantsAttendances:parseInt(t[17]),allParticipantsAttendance:O.fromAttendanceSummary(t[16]),cantonsCount:parseInt(t[18]),languagesCount:parseInt(t[19])}}catch(e){if(e instanceof g)return null;throw e}}(c),d=a&&a.courseNumber.association();return a&&t.push(Object(o.a)({advisor:i},a)),d&&n.add(d),t}),[]),advisors:e,cantons:n}},y=n(30),A=function(t){var e=t.onChange,n=new FileReader;return n.onload=function(t){var n;Object(y.parse)(null===(n=t.target)||void 0===n?void 0:n.result,{complete:function(t){var n=t.data;e&&e(N(n))}})},Object(c.jsx)("input",{type:"file",onChange:function(t){var e,c=(null===(e=t.target)||void 0===e?void 0:e.files)&&t.target.files[0];c&&n.readAsText(c,"iso88591")}})},P=function(t){var e=t.courses;return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{}),Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.courseNumber.toString()}),Object(c.jsx)("td",{children:t.courseNumber.cantonalAssociation}),Object(c.jsx)("td",{children:t.kind}),Object(c.jsx)("td",{})]},t.courseNumber.toString())}))})]})};function _(t){var e=t.advisors;return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{}),Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.toString()}),Object(c.jsx)("td",{children:Object(c.jsx)(j.b,{to:"/advisors/".concat(t.id),children:"PDF"})})]},t.id||1e7*Math.random())}))})]})}var C=n(32),S=n.n(C),F=function(t){var e=t.children;return Object(c.jsx)("div",{className:S.a.container,children:e})},w=function(t){var e=t.cantons;return Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{}),Object(c.jsx)("tbody",{children:Array.from(e).map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:Object(c.jsx)(j.b,{to:"/cantons/".concat(t),children:"PDF"})})]},t)}))})]})},k=function(t){var e=t.onDataImport,n=t.onAmountChange,r=t.onYearChange,i=Object(s.useContext)(W),a=i.courses,o=i.advisors,d=i.amountPerParticipant,j=i.year,l=i.cantons;return Object(c.jsx)(F,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"BSV PDF"}),Object(c.jsxs)("div",{className:"space-between",children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("div",{children:"Datei"}),Object(c.jsx)(A,{onChange:function(t){return e&&e(t)}})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("div",{children:"Betrag pro Tn"}),Object(c.jsx)("input",{type:"number",step:"0.1",value:d,onChange:function(t){return n&&n(parseFloat(t.target.value))}})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("div",{children:"Jahr"}),Object(c.jsx)("input",{type:"number",step:"1",value:j,onChange:function(t){return r&&r(parseInt(t.target.value))}})]})]}),Object(c.jsx)("h2",{children:"Kurse"}),Object(c.jsx)(P,{courses:a}),Object(c.jsx)("h2",{children:"Kantone"}),Object(c.jsx)(w,{cantons:l}),Object(c.jsx)("h2",{children:"LKB"}),Object(c.jsx)(_,{advisors:Object.values(o)})]})})},E=n(13),D=n.n(E),B=n.p+"static/media/signature.8de7e4e8.png",K=n(33),T=n.n(K),I=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"F\xfcr die Beantwortung von Fragen stehen wir Euch gerne zur Verf\xfcgung"}),Object(c.jsx)("p",{children:"Mit herzlichen Pfadigr\xfcssen"}),Object(c.jsx)("img",{className:T.a.signature,src:B,alt:"Signature"}),Object(c.jsxs)("p",{children:["Emanuel Wyss / Tschagon",Object(c.jsx)("br",{}),"Ausbildungssekretariat PBS",Object(c.jsx)("br",{}),"Direktwahl: 031 328 05 42",Object(c.jsx)("br",{}),"E-Mail: emanuel.wyss@pbs.ch"]})]})},z=function(t){var e=t.advisor,n=t.courses,s=t.year,r=t.amountPerParticipant;return Object(c.jsxs)("div",{className:D.a.document,children:[Object(c.jsxs)("p",{children:["".concat(e.firstName," ").concat(e.lastName),Object(c.jsx)("br",{}),"".concat(e.address),Object(c.jsx)("br",{}),"".concat(e.zipcode," ").concat(e.town," ").concat(e.country),Object(c.jsx)("br",{})]}),Object(c.jsx)("h1",{className:D.a.title,children:"LKB Entsch\xe4digung ".concat(s)}),Object(c.jsx)("p",{children:e.salutation}),Object(c.jsx)("p",{children:"Im vergangenen Jahr hast Du die unten aufgef\xfchrten Kurse betreut. Daf\xfcr erh\xe4lst Du heute die LKB Entsch\xe4digung."}),Object(c.jsxs)("table",{className:D.a.table,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Kursschl\xfcssel"}),Object(c.jsx)("th",{children:"Kursart J+S LS/T"}),Object(c.jsx)("th",{children:"PBS Kursart"}),Object(c.jsx)("th",{className:D.a.right,children:"Entsch\xe4digung"})]})}),Object(c.jsx)("tbody",{children:n.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.courseNumber.toString()}),Object(c.jsx)("td",{children:t.kind}),Object(c.jsx)("td",{children:t.kind}),Object(c.jsx)("td",{className:D.a.right,children:r.toFixed(2)})]})}))}),Object(c.jsx)("tfoot",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{children:"Total"}),Object(c.jsx)("td",{className:D.a.right,children:(n.length*r).toFixed(2)})]})})]}),Object(c.jsx)("p",{children:"Nochmals besten Dank f\xfcr Deinen Einsatz als Leiterkursbetreuer sowie f\xfcr die Begeisterung und die Zeit, die Du daf\xfcr einsetzt. Ich hoffe sehr, dass wir auch in Zukunft auf Deine Hilfe z\xe4hlen k\xf6nnen."}),Object(c.jsx)(I,{})]})},H=function(){var t=Object(l.f)().id,e=Object(s.useContext)(W),n=e.courses,r=e.advisors,i=e.amountPerParticipant,a=e.year,o=r[t];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"no-print",children:[Object(c.jsx)(j.b,{to:"/",children:"Back"}),Object(c.jsx)("button",{onClick:function(){return window.print()},children:"Print"})]}),o&&Object(c.jsx)(z,{advisor:o,courses:n.filter((function(t){var e;return(null===(e=t.advisor)||void 0===e?void 0:e.id)===o.id})),year:a,amountPerParticipant:i})]})},L=(n(46),n(2)),V=n.n(L),Z=function(t){var e=t.statement,n=e.courses,s=e.year,r=e.canton,i=e.amountPerParticipant;return Object(c.jsxs)("div",{className:V.a.document,children:[Object(c.jsx)("p",{children:"Bern, ".concat((new Date).toLocaleDateString("de-CH"))}),Object(c.jsx)("h1",{className:V.a.title,children:"Auszahlung der Kurs-Subventionen des KV ".concat(r," ").concat(s)}),Object(c.jsx)("p",{children:"In diesen Tagen k\xf6nnen wir Euch die Kurs-Subventionen des BSV f\xfcr die bis heute abgerechneten Kurse \xfcberweisen. Wir bitten Euch, Euren Kassierer dar\xfcber zu informieren."}),Object(c.jsx)("p",{children:"Der Tagesansatz ist aktuell CHF ".concat(i," / TN")}),Object(c.jsx)("p",{children:"Ohne Euren Gegenbericht innert 20 Tagen gehen wir davon aus, dass Ihr mit den unten aufgef\xfchrten Angaben einverstanden seid."}),Object(c.jsxs)("table",{className:V.a.table,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:["Kursnummer",Object(c.jsx)("br",{}),"Kursnummer"]}),Object(c.jsxs)("th",{children:["erster Kurstag",Object(c.jsx)("br",{}),"letzter Kurstag"]}),Object(c.jsx)("th",{className:V.a.center,children:"# Tn"}),Object(c.jsx)("th",{className:V.a.center,children:"Tage"}),Object(c.jsx)("th",{className:V.a.center,children:"Tage\nx Tn"}),Object(c.jsxs)("th",{className:V.a.center,children:["Total Tage",Object(c.jsx)("br",{}),"Tn"]}),Object(c.jsxs)("th",{className:V.a.right,children:["BSV Beitrag",Object(c.jsx)("br",{}),"f\xfcr Tn"]}),Object(c.jsxs)("th",{className:V.a.right,children:["Total BSV",Object(c.jsx)("br",{}),"Beitrag"]})]})}),Object(c.jsx)("tbody",{children:n.map((function(t){var e=Array.from(t.bsvEligibleAttendance),n=e.shift(),s=e.shift();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("strong",{children:t.courseNumber.toString()})}),Object(c.jsx)("td",{children:t.firstCourseDate}),Object(c.jsx)("td",{className:V.a.center,children:null===n||void 0===n?void 0:n.count}),Object(c.jsx)("td",{className:V.a.center,children:null===n||void 0===n?void 0:n.days}),Object(c.jsx)("td",{className:V.a.center,children:null===n||void 0===n?void 0:n.total()}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.kind}),Object(c.jsx)("td",{children:t.lastCourseDate}),Object(c.jsx)("td",{className:V.a.center,children:null===s||void 0===s?void 0:s.count}),Object(c.jsx)("td",{className:V.a.center,children:null===s||void 0===s?void 0:s.days}),Object(c.jsx)("td",{className:V.a.center,children:null===s||void 0===s?void 0:s.total()}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"})]}),e.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{className:V.a.center,children:t.count}),Object(c.jsx)("td",{className:V.a.center,children:t.days}),Object(c.jsx)("td",{className:V.a.center,children:t.total()}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"})]})})),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"})]}),Object(c.jsxs)("tr",{className:V.a.separator,children:[Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{children:"\xa0"}),Object(c.jsx)("td",{className:V.a.center,children:t.bsvEligibleAttendances}),Object(c.jsx)("td",{className:V.a.right,children:(t.bsvEligibleAttendances*i).toFixed(2)}),Object(c.jsx)("td",{className:V.a.right,children:(t.bsvEligibleAttendances*i).toFixed(2)})]})]})}))}),Object(c.jsx)("tfoot",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{}),Object(c.jsx)("td",{className:V.a.center,children:"Total"}),Object(c.jsx)("td",{className:V.a.right,children:e.totalAttendanceCount()}),Object(c.jsx)("td",{className:V.a.right,children:e.totalAmount().toFixed(2)}),Object(c.jsx)("td",{className:V.a.right,children:e.totalAmount().toFixed(2)})]})})]}),Object(c.jsx)(I,{})]})},J=function(){function t(e,n,c,s){Object(u.a)(this,t),this.courses=void 0,this.year=void 0,this.amountPerParticipant=void 0,this.canton=void 0,this.courses=e,this.year=n,this.amountPerParticipant=c,this.canton=s}return Object(h.a)(t,[{key:"totalAttendanceCount",value:function(){return this.courses.reduce((function(t,e){return t+e.bsvEligibleAttendances}),0)}},{key:"totalAmount",value:function(){return this.totalAttendanceCount()*this.amountPerParticipant}}]),t}(),M=function(){var t=Object(l.f)().id,e=Object(s.useContext)(W),n=e.courses,r=e.amountPerParticipant,i=e.year,a=new J(n.filter((function(e){var n;return(null===(n=e.courseNumber)||void 0===n?void 0:n.association())===t.toUpperCase()})),i,r,t);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"no-print",children:[Object(c.jsx)(j.b,{to:"/",children:"Back"}),Object(c.jsx)("button",{onClick:function(){return window.print()},children:"Print"})]}),a&&Object(c.jsx)(Z,{statement:a})]})},R={cantons:new Set,courses:[],advisors:{},amountPerParticipant:25,year:(new Date).getFullYear()},W=Object(s.createContext)(R),Y=function(){var t=Object(s.useState)(R),e=Object(d.a)(t,2),n=e[0],r=e[1];return Object(c.jsx)(W.Provider,{value:n,children:Object(c.jsx)(j.a,{basename:"/bsv_pdf",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/advisors/:id",children:Object(c.jsx)(H,{})}),Object(c.jsx)(l.a,{path:"/cantons/:id",children:Object(c.jsx)(M,{})}),Object(c.jsx)(l.a,{children:Object(c.jsx)(k,{onYearChange:function(t){return r((function(e){return Object(o.a)(Object(o.a)({},e),{},{year:t})}))},onAmountChange:function(t){return r((function(e){return Object(o.a)(Object(o.a)({},e),{},{amountPerParticipant:t})}))},onDataImport:function(t){return r((function(e){return Object(o.a)(Object(o.a)({},e),t)}))}})})]})})})};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ad1a40c7.chunk.js.map