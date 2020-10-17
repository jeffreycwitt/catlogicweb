!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/catlogicweb/",i(i.s=15)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}},function(e,t,i){var r=i(0),n=i(1),s=i(13),a=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"opposite",value:function(){return this.label.startsWith("NOT-")?new e(this.label.split("-")[1]):new e("NOT-"+this.label)}},{key:"distribution",value:function(e){if(e.subject.label===this.label){if("universal"===e.quantity.label)return new s("distributed");if("particular"===e.quantity.label)return new s("undistributed")}else{if(e.predicate.label!==this.label)return new s("unknown");if("affirmative"===e.quality.label)return new s("undistributed");if("negative"===e.quality.label)return new s("distributed")}}},{key:"isDistributed",value:function(e){return"distributed"===this.distribution(e).label}}]),e}();e.exports=a},function(e,t,i){var r=i(0),n=i(1),s=i(2),a=i(5),o=i(6),l=i(7),u=i(8),c=function(){"use strict";function e(t,i,n,l){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"true";r(this,e),this.quantity="string"===typeof t?new a(t):t,this.subject="string"===typeof i?new s(i):i,this.quality="string"===typeof n?new o(n):n,this.predicate="string"===typeof l?new s(l):l,this.truthvalue="string"===typeof c?new u(c):c,this.label=this.label()}return n(e,[{key:"type",value:function(){return"universal"===this.quantity.label&&"affirmative"===this.quality.label?new l("A"):"universal"==this.quantity.label&&"negative"===this.quality.label?new l("E"):"particular"==this.quantity.label&&"affirmative"===this.quality.label?new l("I"):"particular"==this.quantity.label&&"negative"===this.quality.label?new l("O"):void 0}},{key:"label",value:function(){var e="",t="";return"universal"===this.quantity.label?"affirmative"===this.quality.label?(e="All",t="are"):"negative"===this.quality.label&&(e="No",t="are"):"particular"===this.quantity.label&&("affirmative"==this.quality.label?(e="Some",t="are"):"negative"==this.quality.label&&(e="Some",t="are not")),e+" "+this.subject.label+" "+t+" "+this.predicate.label}},{key:"contradictory",value:function(){var t=this.quantity.opposite(),i=this.quality.opposite();return new e(t,this.subject,i,this.predicate,this.truthvalue.opposite())}},{key:"subaltern",value:function(){var t=this.quantity.opposite(),i="unknown";return"universal"===this.quantity.label?this.truthvalue.isTrue()&&(i=this.truthvalue):"particular"===this.quantity.label&&(this.truthvalue.isTrue()||(i=this.truthvalue)),new e(t,this.subject,this.quality,this.predicate,i)}},{key:"converse",value:function(){var t="A"===this.type().label||"O"===this.type().label?"unknown":this.truthvalue;return new e(this.quantity,this.predicate,this.quality,this.subject,t)}},{key:"obverse",value:function(){var t=this.quality.opposite();return new e(this.quantity,this.subject,t,this.predicate.opposite(),this.truthvalue)}},{key:"contrapose",value:function(){var t="E"===this.type().label||"I"===this.type().label?"unknown":this.truthvalue;return new e(this.quantity,this.predicate.opposite(),this.quality,this.subject.opposite(),t)}},{key:"contrary",value:function(){if("particular"===this.quantity.label){var t=this.quality.opposite(),i="unknown";return this.truthvalue.isTrue()||(i=this.truthvalue.opposite()),new e(this.quantity,this.subject,t,this.predicate,i)}if("universal"===this.quantity.label){var r=this.quality.opposite(),n="unknown";return this.truthvalue.isTrue()&&(n=this.truthvalue.opposite()),new e(this.quantity,this.subject,r,this.predicate,n)}}},{key:"subcontrary",value:function(){this.contrary()}},{key:"immediateInferences",value:function(){return[{type:"Contradictory",proposition:this.contradictory()},{type:"Subaltern",proposition:this.subaltern()},{type:"(Sub)Contrary",proposition:this.contrary()},{type:"Converse",proposition:this.converse()},{type:"Obverse",proposition:this.obverse()},{type:"Contrapose",proposition:this.contrapose()}]}},{key:"positionOfTerm",value:function(e){return this.subject.label===e.label?"subject":this.predicate.label===e.label?"predicate":void 0}},{key:"isSameAs",value:function(e){return e.label===this.label}}]),e}();e.exports=c},function(e,t,i){var r=i(0),n=i(1),s=i(2),a=(i(11),i(14)),o=i(10),l=i(9),u=function(){"use strict";function e(t,i,n){r(this,e),this.major="false"===t.truthvalue.label?t.contradictory():t,this.minor="false"===i.truthvalue.label?i.contradictory():i,this.conclusion="false"===n.truthvalue.label?n.contradictory:n,this.label=this.label()}return n(e,[{key:"label",value:function(){return this.major.label+"\n"+this.minor.label+"\n"+this.conclusion.label}},{key:"mood",value:function(){return new l(this.major.type(),this.minor.type(),this.conclusion.type())}},{key:"figure",value:function(){var e=new o("unknown"),t=this.middleTerm();if(t){var i=this.major.positionOfTerm(t),r=this.minor.positionOfTerm(t);"subject"==i&&"predicate"==r?e=new o("1"):"predicate"==i&&"predicate"==r?e=new o("2"):"subject"==i&&"subject"==r?e=new o("3"):"predicate"==i&&"subject"==r&&(e=new o("4"))}return e}},{key:"form",value:function(){return new a(this.mood(),this.figure())}},{key:"exclusivePremisesTest",value:function(){return{testName:"Exclusive Premises",validity:"negative"!==this.major.quality.label||"negative"!==this.minor.quality.label}}},{key:"affirmativeFromNegativeTest",value:function(){return{testName:"Affirmative Conclusion from a Negative Premise",validity:"negative"!==this.major.quality.label&&"negative"!==this.minor.quality.label||"affirmative"!==this.conclusion.quality.label}}},{key:"negativeFromAffirmativesTest",value:function(){return{testName:"Negative Conclusion from a Affirmative Premises",validity:"affirmative"!==this.major.quality.label||"affirmative"!==this.minor.quality.label||"negative"!==this.conclusion.quality.label}}},{key:"undistributedMiddleTest",value:function(){if(this.middleTerm())return{testName:"Undistributed Middle",validity:!(!this.middleTerm().isDistributed(this.major)&&!this.middleTerm().isDistributed(this.minor))};return{testName:"Undistributed Middle",validity:!1}}},{key:"illicitProcessMajorTest",value:function(){var e=!0;return this.conclusion.predicate.isDistributed(this.conclusion)&&(this.conclusion.predicate.isDistributed(this.major)||(e=!1)),{testName:"Illicit Process Major",validity:e}}},{key:"illicitProcessMinorTest",value:function(){var e=!0;return this.conclusion.subject.isDistributed(this.conclusion)&&(this.conclusion.subject.isDistributed(this.minor)||(e=!1)),{testName:"Illicit Process Minor",validity:e}}},{key:"validity",value:function(){return!1!==this.exclusivePremisesTest().validity&&!1!==this.affirmativeFromNegativeTest().validity&&!1!==this.negativeFromAffirmativesTest().validity&&!1!==this.isThreeTermTest().validity&&!1!==this.conclusionTermMatchTest().validity&&!1!==this.illicitProcessMajorTest().validity&&!1!==this.illicitProcessMinorTest().validity&&!1!==this.undistributedMiddleTest().validity}},{key:"report",value:function(){var e=[this.exclusivePremisesTest(),this.affirmativeFromNegativeTest(),this.negativeFromAffirmativesTest(),this.illicitProcessMajorTest(),this.illicitProcessMinorTest(),this.undistributedMiddleTest(),this.isThreeTermTest(),this.conclusionTermMatchTest()];return e}},{key:"isThreeTermTest",value:function(){var e=!1;return 3===[this.major.subject.label,this.major.predicate.label,this.minor.subject.label,this.minor.predicate.label].filter((function(e,t,i){return i.indexOf(e)===t})).length&&this.major.subject.label!=this.major.predicate.label&&this.minor.subject.label!=this.minor.predicate.label&&(e=!0),{testName:"Premises are composed of three terms",validity:e}}},{key:"conclusionTermMatchTest",value:function(){var e=this.middleTerm();if(e){var t=this.major.subject.label===e.label?this.major.predicate:this.major.subject,i=this.minor.subject.label===e.label?this.minor.predicate:this.minor.subject;return{testName:"Conclusion Composed of Major and Minor Terms",validity:this.conclusion.subject.label===i.label&&this.conclusion.predicate.label===t.label}}return{testName:"Conclusion Composed of Major and Minor Terms",validity:!1}}},{key:"middleTerm",value:function(){var e=[this.major.subject.label,this.major.predicate.label,this.minor.subject.label,this.minor.predicate.label];return this.isThreeTermTest().validity?new s(e.filter((function(e,t,i){return i.indexOf(e)!=t}))[0]):void 0}}]),e}();e.exports=u},function(e,t,i){var r=i(0),n=i(1),s=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"opposite",value:function(){return"universal"===this.label?new e("particular"):"particular"===this.label?new e("universal"):void 0}}]),e}();e.exports=s},function(e,t,i){var r=i(0),n=i(1),s=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"opposite",value:function(){return"affirmative"===this.label?new e("negative"):"negative"===this.label?new e("affirmative"):void 0}}]),e}();e.exports=s},function(e,t,i){var r=i(0),n=i(1),s=i(2),a=i(5),o=i(6),l=i(3),u=i(8),c=function(){"use strict";function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"true";r(this,e),this.type=t,this.label=t,this.truthvalue="string"===typeof i?new u(i):i}return n(e,[{key:"quantity",value:function(){return"A"===this.label?new a("universal"):"E"===this.label?new a("universal"):"I"===this.label?new a("particular"):"O"===this.label?new a("particular"):void 0}},{key:"quality",value:function(){return"A"===this.label?new o("affirmative"):"E"===this.label?new o("negative"):"I"===this.label?new o("affirmative"):"O"===this.label?new o("negative"):void 0}},{key:"proposition",value:function(){return new l(this.quantity(),new s("S"),this.quality(),new s("P"),this.truthvalue)}}]),e}();e.exports=c},function(e,t,i){var r=i(0),n=i(1),s=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"isTrue",value:function(){return"true"===this.label}},{key:"opposite",value:function(){return"true"===this.label?new e("false"):"false"===this.label?new e("true"):new e(this.label)}}]),e}();e.exports=s},function(e,t,i){var r=i(0),n=i(1),s=i(7),a=function(){"use strict";function e(t,i,n){r(this,e),this.majorType="string"===typeof t?new s(t):t,this.minorType="string"===typeof i?new s(i):i,this.conclusionType="string"===typeof n?new s(n):n,this.label=this.label()}return n(e,[{key:"label",value:function(){return this.majorType.label+this.minorType.label+this.conclusionType.label}}]),e}();e.exports=a},function(e,t,i){var r=i(0),n=i(1),s=i(2),a=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"majorSubject",value:function(){var e;return"1"==this.label||"3"==this.label?e=new s("M"):"2"!=this.label&&"4"!=this.label||(e=new s("P")),e}},{key:"majorPredicate",value:function(){var e;return"1"==this.label||"3"==this.label?e=new s("P"):"2"!=this.label&&"4"!=this.label||(e=new s("M")),e}},{key:"minorSubject",value:function(){var e;return"1"==this.label||"2"==this.label?e=new s("S"):"3"!=this.label&&"4"!=this.label||(e=new s("M")),e}},{key:"minorPredicate",value:function(){var e;return"1"==this.label||"2"==this.label?e=new s("M"):"3"!=this.label&&"4"!=this.label||(e=new s("S")),e}}]),e}();e.exports=a},function(e,t,i){var r=i(0),n=i(1),s=i(3),a=i(4),o=i(2),l=function(){"use strict";function e(t,i){r(this,e),this.major=t,this.minor=i}return n(e,[{key:"middleTerm",value:function(){var e=[this.major.subject.label,this.major.predicate.label,this.minor.subject.label,this.minor.predicate.label];return this.isThreeTermTest().validity?new o(e.filter((function(e,t,i){return i.indexOf(e)!=t}))[0]):void 0}},{key:"minorTerm",value:function(){if(this.middleTerm())return this.minor.subject.label===this.middleTerm().label?this.minor.predicate:this.minor.subject}},{key:"majorTerm",value:function(){if(this.middleTerm())return this.major.subject.label===this.middleTerm().label?this.major.predicate:this.major.subject}},{key:"isThreeTermTest",value:function(){var e=!1;return 3===[this.major.subject.label,this.major.predicate.label,this.minor.subject.label,this.minor.predicate.label].filter((function(e,t,i){return i.indexOf(e)===t})).length&&this.major.subject.label!=this.major.predicate.label&&this.minor.subject.label!=this.minor.predicate.label&&(e=!0),{testName:"Premises are composed of three terms",validity:e}}},{key:"possibleSyllogisms",value:function(){var e=this,t=this.possibleConclusions().map((function(t,i){return new a(e.major,e.minor,t)}));return t}},{key:"possibleConclusions",value:function(){var e=this.minorTerm()?this.minorTerm():"unknown",t=this.majorTerm()?this.majorTerm():"unknown",i=[new s("universal",e,"affirmative",t),new s("universal",e,"negative",t),new s("particular",e,"affirmative",t),new s("particular",e,"negative",t)];return i}}]),e}();e.exports=l},function(e,t,i){t.Term=i(2),t.Distribution=i(13),t.Proposition=i(3),t.Quantity=i(5),t.Quality=i(6),t.PropositionType=i(7),t.Mood=i(9),t.Figure=i(10),t.Truthvalue=i(8),t.Syllogism=i(4),t.PremisePair=i(11),t.PremiseCollection=i(16),t.Form=i(14)},function(e,t,i){var r=i(0),n=i(1),s=function(){"use strict";function e(t){r(this,e),this.label=t}return n(e,[{key:"opposite",value:function(){return"distributed"===this.label?new e("undistributed"):"undistributed"===this.label?new e("distributed"):void 0}}]),e}();e.exports=s},function(e,t,i){var r=i(0),n=i(1),s=(i(10),i(9),i(3)),a=i(4),o=i(2),l=function(){"use strict";function e(t,i){r(this,e),this.figure=i,this.mood=t,this.label=this.mood.label+this.figure.label}return n(e,[{key:"majorProposition",value:function(){var e=new s(this.mood.majorType.quantity(),this.figure.majorSubject(),this.mood.majorType.quality(),this.figure.majorPredicate(),"true");return e}},{key:"minorProposition",value:function(){var e=new s(this.mood.minorType.quantity(),this.figure.minorSubject(),this.mood.minorType.quality(),this.figure.minorPredicate(),"true");return e}},{key:"conclusion",value:function(){var e=new s(this.mood.conclusionType.quantity(),new o("S"),this.mood.conclusionType.quality(),new o("P"),"true");return e}},{key:"syllogism",value:function(){var e=new a(this.majorProposition(),this.minorProposition(),this.conclusion());return e}},{key:"validity",value:function(){return this.syllogism().validity()}},{key:"name",value:function(){var e;switch(this.figure.label){case"1":switch(this.mood.label){case"AAA":e="Barbara";break;case"EAE":e="Celarent";break;case"AII":e="Darii";break;case"EIO":e="Ferio";break;case"AAI":e="Barbari";break;case"EAO":e="Celaront";break;default:e=void 0}break;case"2":switch(this.mood.label){case"EAE":e="Cesare";break;case"AEE":e="Camestres";break;case"EIO":e="Festino";break;case"AOO":e="Baroco";break;case"EAO":e="Cesaro";break;case"AEO":e="Camestrop";break;default:e=void 0}break;case"3":switch(this.mood.label){case"AAI":e="Darapti";break;case"IAI":e="Disamis";break;case"AII":e="Datisi";break;case"EAO":e="Felapton";break;case"OAO":e="Bocardo";break;case"EIO":e="Ferison";break;default:e=void 0}break;case"4":switch(this.mood.label){case"AAI":e="Bramantip";break;case"AEE":e="Camenes";break;case"IAI":e="Festino";break;case"EAO":e="Fesapo";break;case"EIO":e="Fresison";break;case"AEO":e="Camenop";break;default:e=void 0}break;default:e=void 0}return e}}]),e}();e.exports=l},function(e,t,i){"use strict";i.r(t);var r=i(12),n=i.n(r);self.addEventListener("message",(function(e){const t=e.data.map(e=>new n.a.Proposition(e.quantity.label,e.subject.label,e.quality.label,e.predicate.label,e.truthvalue.label));console.log("[WORKER] MSG FROM MAIN THREAD:",t),postMessage(new n.a.PremiseCollection(t).inferredTruthsUnique())}))},function(e,t,i){var r=i(0),n=i(1),s=i(11),a=i(4),o=function(){"use strict";function e(t){r(this,e),this.initialPropositions=t,this.propositions=[],this.immediatePropositions=[],this.setInitialPropositions(),this.immediateInferencePropositions()}return n(e,[{key:"setInitialPropositions",value:function(){var e=this;this.initialPropositions.forEach((function(t,i){"unknown"!==t.truthvalue&&e.propositions.push({source:"assumed",deductionType:"assumed",type:"initial",proposition:t})}))}},{key:"immediateInferencePropositions",value:function(){var e=this;this.initialPropositions.forEach((function(t,i){t.immediateInferences().forEach((function(i,r){if("unknown"!==i.truthvalue){var n={source:t,deductionType:"immediateInference",type:i.type,proposition:i.proposition};e.propositions.push(n),e.immediatePropositions.push(n)}}))}))}},{key:"premisePairs",value:function(){var e=this,t=[];return this.propositions.forEach((function(i,r){e.propositions.forEach((function(e,r){i.proposition.isSameAs(e.proposition)||t.push(new s(i.proposition,e.proposition))}))})),t}},{key:"validSyllogisms",value:function(){var e=[];return this.premisePairs().forEach((function(t,i){t.possibleConclusions().forEach((function(i,r){var n=new a(t.major,t.minor,i);n.validity()&&e.push(n)}))})),e}},{key:"inferredTruths",value:function(){var e=[];return this.immediatePropositions.forEach((function(t){if(t.proposition.truthvalue.isTrue())return e.push(t)})),this.validSyllogisms().forEach((function(t,i){var r={source:t,deductionType:"syllogism",type:"syllogism Figure Goes here",proposition:t.conclusion};e.push(r)})),e}},{key:"inferredTruthsUnique",value:function(){var e=[],t=this.inferredTruths(),i=[];t.forEach((function(t,r){i.includes(t.proposition.label)||e.push(t),i.push(t.proposition.label)}));return e}}]),e}();e.exports=o}]);
//# sourceMappingURL=46003e69336f76a28250.worker.js.map