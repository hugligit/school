const assessments = [ // {{{
    [ // { IN
        ['n + n + 2n'           , 'simplify']                           ,
        ['k + k + 8'            , 'simplify']                           ,
        ['3f + 2g'              , 'work out the value when: f=5; g=3']  ,
        ['3(2 + b)'             , 'expand']                             ,
        ['4(a - 2)'             , 'expand']                             ,
        ['3x + 4x - 2n'         , 'simplify']                           ,
        ['2(3x + 6)'            , 'expand']                             ,
        ['3x + 2 = 11'          , 'find x']                             ,
        ['5bc'                  , 'work out the value when: b=-4; c=3'] ,
        ['3c + 3d - c + 2d'     , 'simplify']                           ,
        ['x(7x + 8)'            , 'expand']                             ,
        ['2a + 3a^2 - a + 2a^2' , 'simplify']                           ,
        ['6x^2 - 4xy'           , 'factorise']                          ,
        ['4(x + 3) = 16'        , 'find x']                             ,
        ['3x(4x + 2)'           , 'expand']                             ,
        ['12 + 16y'             , 'factorise']                          ,
        ['3y^2 - 7'             , 'work out the value when: y=3']       ,
        ['a(2a + b)'            , 'expand']                             ,
        ['2x + 7 = 3x - 4'      , 'find x']                             ,
        ['20a^2 + 15a'          , 'factorise']                          ,
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

        ['n + n + 2n', 'simplify'],
        ['n + n + 2n', 'simplify'],
        ['n + n + 2n', 'simplify'],
    ],


    [
        ['n + n + 2n'           , 'simplify']                           ,
        ['k + k + 8'            , 'simplify']                           ,
        ['3x + 4x - 2n'         , 'simplify']                           ,
        ['3c + 3d - c + 2d'     , 'simplify']                           ,
        ['2a + 3a^2 - a + 2a^2' , 'simplify']                           ,


/*
        3x + 5x
7a - 3a
4x + 2 - x + 5
6y - 4 + 2y + 8
5m - 2m + 3
5x + 3x + 2
8y - 4y + 7
3a + 6 + 2a - 1
10m - 4m + 3m
7x + 5 - 2x - 3
4b + b - 2b + 6
9p - 2 + 3p + 4
2c + 5 + 4c - 3
11x - 3x + 8 - 6
6z + 3 - z + 2z - 5


3x^2 + 5x^2 + 4
7y^3 - 2y^3 + 3y
2a^2 + 4 + 3a^2 - 6
6m^2 + 2m - 3m^2 + 5
8x^3 + 3 - 5x^3 + x
5b^2 + 3b - 2b^2 + 6
4p^3 + 2 - p^3 + 6p
10c^2 + 3c + 2c^2 - 5
9x^3 - 3x^2 + 7x^3 + 2x^2
6z^2 + 4 - z^2 + 3z^2 - 8




3x + 2y + 5x - y
4a^2 + 3b - 2a^2 + 5b
6m + 2n - 3m + n
5x^2 + 4y - 2x^2 + 3y
7p^3 + 2q^2 - 3p^3 + q^2
8a^2b + 3ab - 2a^2b + ab
9x + 4y - x + 5y
2c^3 + 5d^2 + 4c^3 - d^2
6x^2y - 2xy^2 + 3x^2y + xy^2
10m^2 + 3n - 4m^2 + 2n

*/
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

notesIntroduction = [
    `one`,
    `one`,
];

init();
const urlParameters = parseQueryString();
const urlParaAssessments = urlParameters.get("assessments");
const urlParaExercises = urlParameters.get("exercises");
const urlParaDays = urlParameters.get("days");



if (urlParaAssessments){ buildAssesments(urlParaAssessments); } 
else if (urlParaExercises) { buildExercises(urlParaExercises); } 
else { 
    buildDefault(); 
    buildAssesments("in");
} 





// FUNCTIONS {{{
function buildDefault() { // {{{
    let even = urlParaDays == "even" ? 'class="fragment fade-out" data-fragment-index="2"' : ""
    let odd = urlParaDays == "odd" ? 'class="fragment fade-out" data-fragment-index="2"' : ""

    createSection( // {{{
        [`
            <h1 class="fragment fade-in">Mr Hrdina</h1>
            <h3 class="fragment fade-in">Slovakia</h3>
            `,
        `
            <div class="r-stack">
                <img src="images/Slovakia01.png">
                <img class="fragment" src="images/Slovakia02.png">
            </div>
            `,


        `
            <h1>8:25 - 8:45</h1>
            <table class="fragment" data-fragment-index="1">
                <tr>
                    <td ${even}>Monday</td>
                    <td ${odd}>Tuesday</td>
                    <td ${even}>Wednesday</td>
                    <td ${odd}>Thursday</td>
                    <td ${even}>Friday</td>
                </tr>
            </table>
            `],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `${c}`},
            notes: [
            `
                Speaking of me, who am I? My name is Mr Hrdina. That is unusual
                name, and you can also guess from my accent that I moved to
                England from Europe. And that is correct, I came from Slovakia,
                which is an obscure country in East Europe
            `,
            `
                <p>Now back to Maths, We will meet here during tutor times
                every week on on your days. Please make sure that you're here
                on time and do not force me to mark the late minutes for you.
                We're going to meeting here until Christmas holiday looking at
                this and that, depending on what wi find needed.</p>

                <p>Well, here's one warning I have to give to you. I will have
                to ask you for a small demonstration of what you already know
                at the beginning and again by the time we finish. Other than
                that you don't have to expect any other tests. Even those two
                are nothing to worry about. I will give you a simple Maths
                question, enough time to answer and then we move to the next
                one. The only reason is to see where we stand.</p>

                <p>"What kind of questions will there be?" you may ask. The
                answer is Multiplication Tables</p>
            `
            ],
        }); // }}}
    createSection( // {{{
        [generateTable(), reduceTable()],
        {
            gradientCentre: "#181848",
            gradientEdge: "#000001",
            id: "q",
            numbered: false,
            template: (c, i) => { return `${c}`},
            notes: notesIntroduction,
        }); // }}}
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
    let currentLesson = ["1", "2", "3", "4", "5"].indexOf(para);
    let currentExercises = assembleProblems( // {{{
        exercises, 
        currentLesson, 
        {
            revision: false,
            format: false,
            shuffle: false,
        }); // }}}

    console.log(currentExercises);

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
        [["Thank You", ""]],
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
        <countdown time="60" autostart="yes" />`;
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
        [["Thank You", '']],
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
            return [first + "*" + second]
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
    // const t = '<h1 class="menu-title">{}</h1><p>simplify</p> \\[\\begin{aligned} {} \\end{aligned} \\]' +
        // '<countdown time="{}" autostart="yes" />';
    let parentSection = document.createElement("section");
    let gradientCentre= args.gradientCentre;
    let gradientEdge =  args.gradientEdge;
    parentSection.setAttribute("data-background-gradient", `radial-gradient(${gradientCentre}, ${gradientEdge})`);
    parentSection.setAttribute("id", args.id); // hack, formats the timer
    slides.appendChild(parentSection);

    set.forEach((contents, index) => {
        let instruction = contents[1];
        let expression = contents[0];
        expression = expression.replace(/\*/g, "\\times");
        expression = args.template(expression, index);
        expression = '<p>' + instruction + '</p>' + expression;
        if (args.numbered) {
            expression = '<h5 class="question-number">' + (index+1) + "</h5>" + expression;
        }
        let childSection = document.createElement("section");
        childSection.setAttribute("data-background-gradient", `radial-gradient("#181848", "#000001",)`);
        childSection.innerHTML = expression;
        if (args.notes) {
            let note = document.createElement("aside");
            note.innerHTML = args.notes[index];
            note.classList.add("notes");
            childSection.appendChild(note);
        }
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
function generateTimesTriangle(level){ // {{{
    let output = [];
    let fragmentIndex;

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
            if (hIndex === 0) { 
                cellClasses.push("blank") 
                fragmentIndex = '';
            }
            else if (hIndex === level)  { 
                cellClasses.push("fragment") 
                cellClasses.push("custom") 
                cellClasses.push("new")
                fragmentIndex = `data-fragment-index="${hIndex}"`;
            }
            else if ((0 < hIndex) && (hIndex < level)) { 
            // else { 
                cellClasses.push("fragment") 
                cellClasses.push("custom") 
                cellClasses.push("mastered") 
                fragmentIndex = `data-fragment-index="${hIndex}"`;
            }
            cellClasses = cellClasses.join(" ");
            cellClasses = `class="${cellClasses}"`;
            cells.push(`<td ${cellClasses} ${fragmentIndex}>${product}</td>`);
            // cells.push(`<td ${cellClasses}>${product}</td>`);
            // console.log(4);
        } // }}}
        
        cells = cells.join("");
        output.push(`<tr>${cells}</tr>`);

    } // }}}


    output.push("</table>");
    return output.join(" ");
} // }}}
function init(){ // {{{
    let links = `
        <h3>Introduction</h3>
        <ul class="slide-menu-items">
          <li class="slide-menu-item" data-item="1"><a href="?introduction=true">Introduction</a></li>
          <li class="slide-menu-item" data-item="2"><a href="?assessments=in">IN Data</a></li>
          <li class="slide-menu-item" data-item="3"><a href="?assessments=out">OUT Data</a></li>
        </ul>


        <h3>Exercises</h3>
        <ul class="slide-menu-items">
          <li class="slide-menu-item" data-item="1"><a href="?exercises=1">Substitution</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=2">Simplifying</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=3">Expanding</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=4">Factorising</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=5">Solving</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=6">Mixture</a></li>
        </ul>
    `;

    Reveal.initialize({ // {{{
        dependencies: [ // {{{
            {src: "plugin/countdown/countdown.js"}
        ], // }}}
        katex: { trust: true },
        menu: { // {{{
            side: 'left',
            themes: true,
            themesPath: 'dist/theme/',
            custom: [
                { // {{{
                    title: "Links",
                    icon: '<i class="fa fa-external-link">',
                    content: links,
                } // }}}
            ],
        }, // }}}
        countdown: { // {{{
            defaultTime: 600,
            autostart: "no",
            tDelta: 5,
            playTickSoundLast: 5,
            tickSound: "http://soundbible.com/grab.php?id=2044&type=mp3",
            timeIsUpSound: "http://soundbible.com/grab.php?id=1746&type=mp3"
        }, // }}}
        hash: true,
        scrollActivationWidth: undefined,
        plugins: [ // {{{
            RevealMarkdown, 
            RevealHighlight, 
            RevealNotes, 
            RevealMath.KaTeX, 
            RevealMenu, 
            Tldreveal.Tldreveal(),
        ] // }}}
    }); // }}}
} // }}}
// }}}