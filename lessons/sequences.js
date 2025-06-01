const assessments = [ // {{{
    [ // {{{ IN
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
    ], // }}} 
    [ // {{{ OUT
        '3 * 6', '8 * 5', '8 * 6', '5 * 5', '2 * 3', '9 * 4', '3 * 5', '8 * 2', '7 * 7', 
        '8 * 3', '4 * 5', '6 * 5', '6 * 6', '9 * 7', '5 * 9', '8 * 7', '7 * 5', '4 * 6',
        '3 * 3', '9 * 8', '5 * 2', '4 * 4', '4 * 2', '2 * 7', '3 * 9', '4 * 8', '2 * 2',
        '6 * 9', '3 * 7', '6 * 7', '9 * 9', '8 * 8', '4 * 3', '9 * 2', '6 * 2', '4 * 7'
    ], // }}}
]; // }}}
const exercises = [ // {{{
    [ // {{{ find next terms 

        ['2, 5, 8, 11, 14', "write next two terms of the sequence"]  ,
        ['-19, -16, -13, -10, -7', "write next two terms of the sequence"],
        ['12, 15, 18, 21, 24', "write next two terms of the sequence"],
        ['33, 31, 29, 27, 25', "write next two terms of the sequence"],
        ['-9, -6, -3, 0, 3', "write next two terms of the sequence"],
        ['5, 8, 11, 14, 17', "write next two terms of the sequence"],
        ['20, 15, 10, 5, 0', "write next two terms of the sequence"],
        ['-20, -17, -14, -11, -8', "write next two terms of the sequence"],
        ['10, 5, 0, -5, -10' , "write next two terms of the sequence"],
        ['3, 6, 9, 12, 15', "write next two terms of the sequence"],
        ['45, 42, 39, 36, 33', "write next two terms of the sequence"],
        ['-8, -5, -2, 1, 4', "write next two terms of the sequence"],
        ['4, 2, 0, -2, -4', "write next two terms of the sequence"],
        ['-10, -5, 0, 5, 10' , "write next two terms of the sequence"],
        ['7, 14, 21, 28, 35' , "write next two terms of the sequence"],
        ['35, 30, 25, 20, 15', "write next two terms of the sequence"],
        ['-15, -10, -5, 0, 5', "write next two terms of the sequence"],
        ['0, 3, 6, 9, 12', "write next two terms of the sequence"],
        ['11, 8, 5, 2, -1', "write next two terms of the sequence"],
        ['-4, -8, -12, -16, -20' , "write next two terms of the sequence"],
        ['40, 38, 36, 34, 32', "write next two terms of the sequence"],
        ['-2, 1, 4, 7, 10', "write next two terms of the sequence"],
        ['28, 24, 20, 16, 12', "write next two terms of the sequence"],
        ['1, 4, 7, 10, 13', "write next two terms of the sequence"],
        ['6, 2, -2, -6, -10' , "write next two terms of the sequence"],
        ['15, 12, 9, 6, 3', "write next two terms of the sequence"],
        ['-3, 0, 3, 6, 9', "write next two terms of the sequence"],
        ['14, 16, 18, 20, 22', "write next two terms of the sequence"],
        ['5, 0, -5, -10, -15', "write next two terms of the sequence"],
        ['-17, -14, -11, -8, -5' , "write next two terms of the sequence"],
        ['-6, -3, 0, 3, 6', "write next two terms of the sequence"],
        ['2, -1, -4, -7, -10', "write next two terms of the sequence"],
        ['30, 27, 24, 21, 18', "write next two terms of the sequence"],
        ['18, 16, 14, 12, 10', "write next two terms of the sequence"],
        ['-10, -7, -4, -1, 2', "write next two terms of the sequence"],
        ['9, 12, 15, 18, 21' , "write next two terms of the sequence"],
        ['-5, -10, -15, -20, -25', "write next two terms of the sequence"],
        ['13, 16, 19, 22, 25', "write next two terms of the sequence"],
        ['27, 24, 21, 18, 15', "write next two terms of the sequence"],
        ['-12, -9, -6, -3, 0', "write next two terms of the sequence"],
        ['6, 9, 12, 15, 18', "write next two terms of the sequence"],
        ['17, 14, 11, 8, 5', "write next two terms of the sequence"],
        ['2, 0, -2, -4, -6', "write next two terms of the sequence"],
        ['-1, -4, -7, -10, -13', "write next two terms of the sequence"],
        ['24, 20, 16, 12, 8' , "write next two terms of the sequence"],
        ['16, 12, 8, 4, 0', "write next two terms of the sequence"],
        ['-14, -11, -8, -5, -2', "write next two terms of the sequence"],
        ['36, 33, 30, 27, 24', "write next two terms of the sequence"],
        ['7, 10, 13, 16, 19' , "write next two terms of the sequence"],
        ['-3, -6, -9, -12, -15', "write next two terms of the sequence"],
        ['-7, -4, -1, 2, 5', "write next two terms of the sequence"],

   ], // }}}

	[ // {{{ find missing terms

        ['\\square, -7, -4, -1, 2', "find the missing terms"],
        ['1, 4, \\square, 10, 13', "find the missing terms"],
        ['15, \\square, \\square, 6, 3', "find the missing terms"],
        ['\\square, -10, -5, 0, 5', "find the missing terms"],
        ['5, \\square, 11', "find the missing terms"],
        ['5, \\square, 11, \\square, 17' , "find the missing terms"],
        ['20, 15, \\square, 5, 0', "find the missing terms"],
        ['-17, -14, -11, \\square, -5', "find the missing terms"],
        ['3, 6, \\square, 12, 15', "find the missing terms"],
        ['-3, 0, \\square, 6, 9' , "find the missing terms"],
        ['\\square, -5, 0, 5, \\square', "find the missing terms"],
        ['4, \\square, 0, \\square, -4', "find the missing terms"],
        ['-6, -3, \\square, 3, 6', "find the missing terms"],
        ['\\square, 15, 18, 21, \\square', "find the missing terms"],
        ['-15, \\square, -5, 0, 5', "find the missing terms"],
        ['0, 3, \\square, \\square, 12', "find the missing terms"],
        ['12, \\square, 6, \\square, 0', "find the missing terms"],
        ['-4, \\square, -12, -16, \\square', "find the missing terms"],
        ['\\square, 38, 36, \\square, 32', "find the missing terms"],
        ['28, \\square, \\square, 16, 12', "find the missing terms"],
        ['1, 4, \\square, \\square, 13', "find the missing terms"],
        ['6, 2, \\square, -6, -10', "find the missing terms"],
        ['\\square, 12, 9, 6, 3' , "find the missing terms"],
        ['14, \\square, 18, \\square, 22', "find the missing terms"],
        ['\\square, 0, 3, \\square, 9', "find the missing terms"],
        ['5, \\square, -5, -10, \\square', "find the missing terms"],
        ['-17, \\square, \\square, -8, -5', "find the missing terms"],
        ['-2, \\square, 4, \\square, 10' , "find the missing terms"],
        ['30, \\square, \\square, 21, 18', "find the missing terms"],
        ['\\square, 16, \\square, 12, \\square', "find the missing terms"],
        ['-10, \\square, -4, -1, \\square', "find the missing terms"],
        ['\\square, \\square, \\square, 18, 21', "find the missing terms"],
        ['13, \\square, 19, \\square, 25', "find the missing terms"],
        ['-12, -9, \\square, \\square, 0', "find the missing terms"],
        ['6, \\square, 12, \\square, 18' , "find the missing terms"],
        ['\\square, 14, \\square, 8, \\square', "find the missing terms"],
        ['\\square, \\square, -15, -20, -25' , "find the missing terms"],
        ['27, \\square, \\square, 18, \\square', "find the missing terms"],
        ['\\square, \\square, -6, -3, 0' , "find the missing terms"],
        ['9, \\square, \\square, 18, 21' , "find the missing terms"],
        ['\\square, 14, \\square, 8, \\square', "find the missing terms"],
        ['-5, \\square, -13, -16, \\square', "find the missing terms"],
        ['24, \\square, \\square, 12, 8' , "find the missing terms"],
        ['-14, \\square, \\square, -5, -2', "find the missing terms"],
        ['\\square, \\square, 30, 27, \\square', "find the missing terms"],
        ['7, 10, \\square, 16, \\square' , "find the missing terms"],
        ['-3, -6, \\square, -12, \\square', "find the missing terms"],
        ['-7, \\square, \\square, 2, 5', "find the missing terms"],
        ['\\square, \\square, \\square, \\square, 33', "find the missing terms"],


    ], // }}}

    [ // {{{  find the rule

        ['-18, -15, -12, -9, -6', "find the nth term of the sequence"],
        ['6, 3, 0, -3, -6', "find the nth term of the sequence"],
        ['10, 13, 16, 19, 22', "find the nth term of the sequence"],
        ['33, 30, 27, 24, 21', "find the nth term of the sequence"],
        ['-5, -2, 1, 4, 7', "find the nth term of the sequence"],
        ['0, -3, -6, -9, -12', "find the nth term of the sequence"],
        ['4, 8, 12, 16, 20', "find the nth term of the sequence"],
        ['12, 9, 6, 3, 0', "find the nth term of the sequence"],
        ['-7, -4, -1, 2, 5', "find the nth term of the sequence"],
        ['22, 20, 18, 16, 14', "find the nth term of the sequence"],
        ['-20, -16, -12, -8, -4', "find the nth term of the sequence"],
        ['2, 0, -2, -4, -6', "find the nth term of the sequence"],
        ['5, 10, 15, 20, 25', "find the nth term of the sequence"],
        ['-3, -1, 1, 3, 5', "find the nth term of the sequence"],
        ['10, 8, 6, 4, 2', "find the nth term of the sequence"],
        ['-15, -12, -9, -6, -3', "find the nth term of the sequence"],
        ['3, 7, 11, 15, 19', "find the nth term of the sequence"],
        ['-14, -10, -6, -2, 2', "find the nth term of the sequence"],
        ['-2, -5, -8, -11, -14', "find the nth term of the sequence"],
        ['14, 12, 10, 8, 6', "find the nth term of the sequence"],
        ['18, 21, 24, 27, 30', "find the nth term of the sequence"],
        ['35, 33, 31, 29, 27', "find the nth term of the sequence"],
        ['7, 11, 15, 19, 23', "find the nth term of the sequence"],
        ['-12, -9, -6, -3, 0', "find the nth term of the sequence"],
        ['0, 2, 4, 6, 8', "find the nth term of the sequence"],
        ['3, 1, -1, -3, -5', "find the nth term of the sequence"],
        ['20, 18, 16, 14, 12', "find the nth term of the sequence"],
        ['-10, -6, -2, 2, 6', "find the nth term of the sequence"],
        ['1, 5, 9, 13, 17', "find the nth term of the sequence"],
        ['30, 28, 26, 24, 22', "find the nth term of the sequence"],
        ['-9, -6, -3, 0, 3', "find the nth term of the sequence"],
        ['8, 12, 16, 20, 24', "find the nth term of the sequence"],
        ['16, 12, 8, 4, 0', "find the nth term of the sequence"],
        ['-4, -7, -10, -13, -16', "find the nth term of the sequence"],
        ['9, 6, 3, 0, -3', "find the nth term of the sequence"],
        ['-1, 2, 5, 8, 11', "find the nth term of the sequence"],
        ['6, 4, 2, 0, -2', "find the nth term of the sequence"],
        ['13, 10, 7, 4, 1', "find the nth term of the sequence"],
        ['-6, -2, 2, 6, 10', "find the nth term of the sequence"],
        ['11, 14, 17, 20, 23', "find the nth term of the sequence"],
        ['25, 20, 15, 10, 5', "find the nth term of the sequence"],
        ['2, 6, 10, 14, 18', "find the nth term of the sequence"],
        ['-8, -6, -4, -2, 0', "find the nth term of the sequence"],
        ['-11, -7, -3, 1, 5', "find the nth term of the sequence"],
        ['19, 15, 11, 7, 3', "find the nth term of the sequence"],
        ['0, -2, -4, -6, -8', "find the nth term of the sequence"],
        ['5, 3, 1, -1, -3', "find the nth term of the sequence"],
        ['27, 30, 33, 36, 39', "find the nth term of the sequence"],
        ['-17, -13, -9, -5, -1', "find the nth term of the sequence"],
        ['21, 18, 15', "find the nth term of the sequence"],




    ], // }}}

    [ // {{{ solving
        ['3(n-5)=24', 'find n'],
        ['6(c-8)=42', 'find c'],
        ['2(w-4)=13', 'find w'],
        ['6(p+3)=42', 'find p'],
        ['5(f-2)=22', 'find f'],
        ['3(g+9)=21', 'find g'],
    ], // }}}

    [ // {{{ mixture
        ['3(n-5)=24', 'find n'],
        ['6(c-8)=42', 'find c'],

    ], // }}}
] // }}}

notesIntroduction = [
    `one`,
    `one`,
];

init();
// exercises[5] = buildMixedExercises();
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
function buildMixedExercises() { // {{{
    let options = [
        [...Array(exercises[0].length).keys()],
        [...Array(exercises[1].length).keys()],
        [...Array(exercises[2].length).keys()],
        [...Array(exercises[3].length).keys()],
        [...Array(exercises[4].length).keys()],
    ];

    let choice = [];
    let type = 0;

    for (let i=0; i<25; i++){
        let problem = undefined;
        let note = "";
        while (!problem) {
            type = Math.floor(Math.random()*4);
            problem = Math.floor(Math.random()*options[type].length);
            problem = options[type].splice(problem, 1);
            if (type === 0) {
                console.log("hello");
                note = exercises[type][problem][1];
            }
            // [exercises[type][problem][0]
            choice.push([exercises[type][problem][0], note]);
        }
    }

    console.log(choice)
    return choice;


        


} // }}}
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
    let currentLesson = ["0", "1", "2", "3", "4", "5"].indexOf(para);
    let currentExercises = assembleProblems( // {{{
        exercises, 
        currentLesson, 
        {
            revision: false,
            format: false,
            shuffle: false,
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
        2,
        // para === "in" ? 0 : 1, // choose between INDATA and OUTDATA sets
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
        // expression = args.template(expression, index);
        expression = args.template(expression, expression);
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
          <li class="slide-menu-item" data-item="1"><a href="?exercises=0">next members</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=1">missing members</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=2">sequence rule</a></li>
        </ul>
    `;

    Reveal.initialize({ // {{{
        dependencies: [ // {{{
            {src: "plugin/countdown/countdown.js"}
        ], // }}}
        katex: { 
            trust: true,
            // local: 'plugin/maths',
            local: 'plugin/katex',
        },
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
