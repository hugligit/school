// EVENT LISTENERS {{{
// Reveal.addEventListener('fragmenthidden', function(event){
//     let fragments = event.fragments;
//     fragments.forEach(f => {
//         f.classList.add("blank");
//     });
// });

// Reveal.addEventListener('fragmentshown', function(event){
//     let fragments = event.fragments;
//     fragments.forEach(f => {
//         f.classList.remove("blank");
//     });
// });
// }}}
// DATA {{{
const assessments = [ // {{{
    [ // { IN
        '6 * 2', '7 * 6', '9 * 5', '3 * 6', '6 * 5', '4 * 7', '2 * 8', '9 * 8', '5 * 2',
        '9 * 2', '7 * 5', '4 * 4', '7 * 7', '3 * 7', '4 * 2', '5 * 5', '5 * 8', '9 * 4',
        '7 * 9', '9 * 3', '8 * 7', '8 * 8', '3 * 2', '2 * 7', '8 * 4', '3 * 5', '6 * 6',
        '8 * 6', '3 * 8', '3 * 3', '2 * 2', '9 * 6', '3 * 4', '6 * 4', '9 * 9', '5 * 4',
    ], // }
    [ // { OUT
        '3 * 6', '8 * 5', '8 * 6', '5 * 5', '2 * 3', '9 * 4', '3 * 5', '8 * 2', '7 * 7', 
        '8 * 3', '4 * 5', '6 * 5', '6 * 6', '9 * 7', '5 * 9', '8 * 7', '7 * 5', '4 * 6',
        '3 * 3', '9 * 8', '5 * 2', '4 * 4', '4 * 2', '2 * 7', '3 * 9', '4 * 8', '2 * 2',
        '6 * 9', '3 * 7', '6 * 7', '9 * 9', '8 * 8', '4 * 3', '9 * 2', '6 * 2', '4 * 7'
    ], // }
]; // }}}
const exercises = [ // {{{
    [
        [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], // 1
        [11, 1], [11, 2], [11, 3], [11, 4], [11, 5], [11, 6], [11, 7], [11, 8], [11, 9], [11, 10], // 11
        [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 6], [10, 7], [10, 8], [10, 9] // 10
    ],


    [
        [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], // 2
        [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], // 5
    ],

    [
        [3, 3], [3, 4], [3, 6], [3, 7], [3, 8], [3, 9], // 3
        [4, 4], [4, 6], [4, 7], [4, 8], [4, 9] // 4
    ],
    [[6, 6], [7, 7], [8, 8], [9, 9]], // squares
    [[9, 6], [9, 8], [9, 7]], // 9
    [[6, 7], [6, 8]], // 6
    [[8, 7]], // 8
] // }}}
// }}}
// MAIN {{{
init();
const  urlParameters = parseQueryString();
const urlParaAssessments = urlParameters.get("assessments");
const urlParaExercises = urlParameters.get("exercises");

if (urlParaAssessments){ 
    buildAssesments(urlParaAssessments);
} else if (urlParaExercises) {
    buildExercises(urlParaExercises);
} else {
    buildDefault(); 
} 
// }}}

function buildDefault() { // {{{
    createSection( // {{{
        [generateTable(), reduceTable()],
        // [html],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `${c}`}
        }); // }}}
    // introductory lesson
} // }}}
function buildExercises(para) { // {{{
    let tmpl = (c, i) => {
        const t = `
        <h1 class="menu-title">${i+1}</h1> 
        \\[\\begin{aligned} ${c} \\end{aligned} \\]
        <countdown time="15" autostart="yes" />`;
        return t
    }
    const slides = document.querySelector(".slides");
    let currentLesson = ["1", "2", "3", 'squares', "9", "6", "8"].indexOf(para);
    let currentExercises = assembleProblems( // {{{
        exercises, 
        currentLesson, 
        {
            revision: false,
            format: true,
            shuffle: true,
        }); // }}}
    let currentPractice = assembleProblems( // {{{
        exercises, 
        currentLesson, 
        {
            revision: true,
            format: true,
            shuffle: true,
        }); // }}}

    createSection( // {{{
        [generateTimesTriangle(urlParaExercises)],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `${c}`}
        }); // }}}

    createSection( // {{{
        currentExercises,
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: tmpl,
        }); // }}}
    createSection( // {{{
        currentPractice,
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: tmpl,
        }); // }}}
    createSection( // {{{
        ["Thank You"],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `<h1>${c}</h1>`}
        }); // }}}
} // }}}
function buildAssesments(para) { // {{{
    let tmpl = (c, i) => {
        const t = `
        <h1 class="menu-title">${i+1}</h1> 
        \\[\\begin{aligned} ${c} \\end{aligned} \\]
        <countdown time="15" autostart="yes" />`;
        return t
    }
    let set = assembleProblems(
        assessments, 
        para === "in" ? 0 : 1, // choose between INDATA and OUTDATA sets
        {
            shuffle: false,
            revision: false,
        });

    createSection(
        set,
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: true,
            template: tmpl
        });

    createSection(
        ["Thank You"],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `<h1>${c}</h1>`}
        });
} // }}}
function parseQueryString(s) { // {{{
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    return urlParameters
} // }}}
function assembleProblems(set, level, args) { // {{{
    let output = set[level]
    if (args.revision) { // {{{
        let counter = 0;
        let ratios = [

            [1 , 0 , 0 , 0  , 0  , 0  , 0]  ,
            [1 , 6 , 0 , 0  , 0  , 0  , 0]  ,
            [0 , 1 , 3 , 0  , 0  , 0  , 0]  ,
            [0 , 1 , 2 , 20 , 0  , 0  , 0]  ,
            [0 , 0 , 1 , 8  , 30 , 0  , 0]  ,
            [0 , 0 , 0 , 3  , 15 , 40 , 0]  ,
            [0 , 0 , 0 , 3  , 4  , 4  , 5] ,
        ];


        while (counter <= level){
            for (let i=0; i<ratios[level][counter]; i++){
                output = output.concat(set[counter]);
            }
            counter += 1;
        }

    } // }}}
    if (args.shuffle) { // {{{
        let order = [];
        let shuffled = [];

        while (shuffled.length < 20){
            if (order.length === 0){
                for (let i=0; i<output.length; i++) { order.push(i); }
            }
            let randomIndex = Math.floor(Math.random() * (output.length-1));
            randomIndex = order.splice(randomIndex, 1);
            shuffled.push(output[randomIndex % output.length]);
        }
        output = shuffled;
    } // }}}
    if (args.format){ // {{{
        output = output.map(item => {
            let o = "";
            let i = Math.floor(Math.random()*2);
            let first = item[i];
            let second = item[1-i];
            return first + "*" + second
        });
    } // }}}
    return output
} // }}}
function createSection(set, args){ // {{{
    String.prototype.format = function () { // {{{
      var i = 0, args = arguments;
      return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
      });
    }; //  }}}

    const slides = document.querySelector(".slides");
    const t = '<h1 class="menu-title">{}</h1> \\[\\begin{aligned} {} \\end{aligned} \\]' +
        '<countdown time="{}" autostart="yes" />';
    let parentSection = document.createElement("section");
    let gradientCentre= args.gradientCentre;
    let gradientEdge =  args.gradientEdge;
    parentSection.setAttribute("data-background-gradient", `radial-gradient(${gradientCentre}, ${gradientEdge})`);
    parentSection.setAttribute("id", args.id); // hack, formats the timer
    slides.appendChild(parentSection);

    set.forEach((contents, index) => {
        contents = contents.replace(/\*/g, "\\times");
        contents = args.template(contents, index);
        if (args.numbered) {
            contents = '<h5 class="question-number">' + (index+1) + "</h5>" + contents;
        }
        let childSection = document.createElement("section");
        childSection.setAttribute("data-background-gradient", `radial-gradient("#181848", "#000001",)`);
        childSection.innerHTML = contents;
        let note = document.createElement("aside");
        note.innerHTML = "Speaker's notes";
        note.classList.add("notes");
        childSection.appendChild(note);
        parentSection.appendChild(childSection);
    });
} // }}}
function generateTable() { // {{{
    let output = [];
    let dimensions = 12;
    let distributionPattern = [
        1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7
    ];

    output.push('<table class="timetable">');
    for (let row=0; row<dimensions+1; row++) { // {{{
        let cells = [];

        for (let cell=0; cell<dimensions+1; cell++) { // {{{
            let cellAttributes = "";
            let cellClasses = [];
            let product = (row) * (cell);
            if (cell===0 && row===0){ product = "" }
            else if (cell!==0 && row===0){ product = cell }
            else if (cell===0 && row!==0){ product = row }
            if (cell===0 || row===0){ cellClasses.push("heading")}
            else {
                cellClasses.push("fragment");
                cellClasses.push("fade-up");
            }

            let fragmentIndex = function(){
                let index = Math.random()*distributionPattern.length;
                index = Math.floor(index);
                index = distributionPattern[index];
                let t = `data-fragment-index="${index}"`;
                return t
            }();
            cellClasses = cellClasses.join(" ");
            cellClasses = `class="${cellClasses}"`;
            cells.push(`<td ${cellClasses} ${fragmentIndex}>${product}</td>`);
        } // }}}
        
        cells = cells.join("");
        output.push(`<tr>${cells}</tr>`);

    } // }}}
    output.push("</table>");
    return output.join(" ");
} // }}}
function reduceTable() { // {{{
    let output = [];
    let dimensions = 12;
    let distributionPattern = [ // {{{
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
        [0, 2, 0, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 3, 3, 3, 3, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 3, 3, 3, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 0, 3, 3, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 0, 0, 3, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 0, 0, 0, 3, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1, 1],
        [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]; // }}}
    output.push('<table class="timetable">');
    for (let row=0; row<dimensions+1; row++) { // {{{
        let cells = [];

        for (let cell=0; cell<dimensions+1; cell++) { // {{{
            let cellAttributes = "";
            let cellClasses = [];
            let product = (row) * (cell);
            if (cell===0 && row===0){ product = "" }
            else if (cell!==0 && row===0){ product = cell }
            else if (cell===0 && row!==0){ product = row }
            if (cell===0 || row===0){ cellClasses.push("heading")}

            let index = distributionPattern[row][cell];
            if (index !==0) {
                cellClasses.push("fragment");
                cellClasses.push("fade-out");
                // cellClasses.push("blank");
            }

            let fragmentIndex = `data-fragment-index="${index}"`;

            cellClasses = cellClasses.join(" ");
            cellClasses = `class="${cellClasses}"`;
            cells.push(`<td ${cellClasses} ${fragmentIndex}>${product}</td>`);
        } // }}}
        cells = cells.join("");
        output.push(`<tr>${cells}</tr>`);
    } // }}}
    output.push("</table>");
    return output.join(" ");
} // }}}
function generateTimesTriangle(level){
    let output = [];

    let hightlights = [
        [ 1, 0, 0, 0, 0, 0, 0, 0 ],
        [ 1, 2, 0, 0, 0, 0, 0, 0 ],
        [ 1, 2, 2, 0, 0, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0 ],
        [ 1, 2, 2, 1, 3, 0, 0, 0 ],
        [ 1, 2, 2, 1, 5, 3, 0, 0 ],
        [ 1, 2, 2, 1, 5, 6, 3, 0 ],
        [ 1, 2, 2, 1, 4, 4, 4, 3 ],
    ];

    level = {
        2: 1,
        3: 2,
        "squares": 3,
        6: 5,
        8: 6,
        9: 4,
    }[level];


    output.push('<table class="triangle">');


    for (let row=2; row<10; row++) { // {{{
        let cells = [];

        for (let cell=2; cell<10; cell++) { // {{{
            let cellAttributes = "";
            let cellClasses = [];
            let product = (row) * (cell);
            let hIndex = hightlights[row-2][cell-2];
            if (hIndex === 0) { cellClasses.push("blank") }
            else if (hIndex === level)  { 
                cellClasses.push("fragment") 
                cellClasses.push("custom") 
                cellClasses.push("new")
            }
            else if (0 < hIndex < level) { 
                cellClasses.push("fragment") 
                cellClasses.push("custom") 
                cellClasses.push("mastered") 
            }
            cellClasses = cellClasses.join(" ");
            cellClasses = `class="${cellClasses}"`;
            cells.push(`<td ${cellClasses} data-fragment-index="${hIndex}">${product}</td>`);
        } // }}}
        
        cells = cells.join("");
        output.push(`<tr>${cells}</tr>`);

    } // }}}


    output.push("</table>");
    return output.join(" ");
}
functon init(){

                            Reveal.initialize({
                                            dependencies: [
                                                            {src: "plugin/countdown/countdown.js"}
                                                        ],
                                            katex: { trust: true },
                                            menu: {
                                                            side: 'left',
                                                            themes: true,
                                                            themesPath: 'dist/theme/',
                                                            custom: [
                                                                            {
                                                                                title: "Links",
                                                                                icon: '<i class="fa fa-external-link">',
                                                                                content: `
        <ul>
           <li><a href="?introduction=true">Introduction</a></li>
           <li><a href="?assessments=in">IN Data</a></li>
           <li><a href="?assessments=out">OUT Data</a></li>
           <li><a href="?explanations=true">Hugli</a></li>
           <li><a href="?explanations=true">Explanation</a></li>
           <li>Exercises</li>
            <ul>
               <li><a href="?exercises=1">1, 10 & 11</a></li>
               <li><a href="?exercises=2">2 & 5</a></li>
               <li><a href="?exercises=3">3 & 4</a></li>
               <li><a href="?exercises=squares">Squares</a></li>
               <li><a href="?exercises=9">9</a></li>
               <li><a href="?exercises=6">6</a></li>
               <li><a href="?exercises=8">8</a></li>
            </ul>
        </ul>`,
                                                        }
                                                                            ],
                                                        },
                                            countdown: {
                                                            defaultTime: 600,
                                                            autostart: "no",
                                                            tDelta: 10,
                                                            playTickSoundLast: 5,
                                                            tickSound: "http://soundbible.com/grab.php?id=2044&type=mp3",
                                                            timeIsUpSound: "http://soundbible.com/grab.php?id=1746&type=mp3"
                                                        },
                                            hash: true,
											scrollActivationWidth: undefined,

                                            plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealMenu, Tldreveal.Tldreveal() ]
                                        });


}
