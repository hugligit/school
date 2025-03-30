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
    [ // {{{ substitution 
        ['3f+2g', 'f=7; g=5'],
        ['3f+2g', 'f=7; g=5'],
        ['4d-7', 'd=6'],
        ['u+at', 'u=3; a=10; t=6'],
        ['3x-y', 'x=4; y=6'],
        ['9m+2n', 'm=3; n=-6'],
        ['5p+2r', 'p=6; r=-4'],
        ['4f+g', 'f=5; g=-2'],
        ['4p+5q', 'p=3; q=-2'],
        ['9m+2n', 'm=-3; n=3'],
        ['6p-r', 'p=-4; r=5'],
        ['f-2g', 'f=12; g=-6'],
        ['5p+6q', 'p=10; q=-2'],
        ['m(n-2)', 'm=9; n=5'],
        ['5bc', 'b=-4; c=3'],
        ['4y^2-12', 'y=5'],
        ['p-2q', 'p=-4; q=-7'],
        ['b^2-4ac', 'a=8; b=-5; c=2'],
        ['\\frac{m}{v}', 'm=32; v=8'],
        ['2j-jk', 'j=7; k=3'],
        ['5x^2+3', 'x=-3'],
        ['\\frac{1}{2}bh', 'b=3; h=8'],
        ['\\frac{1}{2}(a+b)h', 'a=7; b=6; h=10'],
        ['u+at', 'u=12; a=-6; t=5'],
        ['mx+c', 'm=-2; x=12; c-7'],
        ['ut+ \\frac{1}{2}at^2', 'u=-5; a=4; t=3'],
        ['ut+ \\frac{1}{2}at^2', 'u=3; a=2; t=4'],
        ['\\frac{v^2-u^2}{2a}', 'v=7; u=5; a=3'],
    ], // }}}

    [ // {{{ simplification 

        ['0.5  ,\\, \\frac{1}{3} ,\\, 0.75          ,\\, \\frac{2}{3}  ,\\, \\frac{1}{4}', "order from smallest to largest"]  ,
        ['0.4  ,\\, \\frac{3}{5} ,\\, 0.25          ,\\, \\frac{1}{2}  ,\\, \\frac{4}{5}', "order from smallest to largest"]  ,
        ['0.6  ,\\, \\frac{1}{8} ,\\, 0.2           ,\\, \\frac{3}{8}  ,\\, 0.9', "order from smallest to largest"]           ,
        ['0.1  ,\\, \\frac{2}{5} ,\\, \\frac{3}{4}  ,\\, 0.35          ,\\, \\frac{4}{5}', "order from smallest to largest"]  ,
        ['0.05 ,\\, \\frac{1}{6} ,\\, 0.3           ,\\, \\frac{5}{6}  ,\\, \\frac{3}{5}', "order from smallest to largest"]  ,
        ['0.7  ,\\, \\frac{1}{3} ,\\, \\frac{2}{3}  ,\\, 0.55          ,\\, 0.45', "order from smallest to largest"]          ,
        ['0.9  ,\\, 0.15         ,\\, \\frac{3}{5}  ,\\, \\frac{4}{5}  ,\\, \\frac{1}{4}', "order from smallest to largest"]  ,
        ['0.2  ,\\, \\frac{1}{8} ,\\, \\frac{5}{8}  ,\\, 0.85          ,\\, \\frac{3}{8}', "order from smallest to largest"]  ,
        ['0.05 ,\\, \\frac{3}{5} ,\\, \\frac{5}{6}  ,\\, 0.45          ,\\, \\frac{3}{8}', "order from smallest to largest"]  ,
        ['0.12 ,\\, \\frac{2}{5} ,\\, \\frac{3}{4}  ,\\, 0.25          ,\\, \\frac{4}{5}', "order from smallest to largest"]  ,
        ['0.15 ,\\, \\frac{1}{4} ,\\, 0.5           ,\\, \\frac{5}{6}  ,\\, \\frac{2}{3}', "order from smallest to largest"]  ,
        ['0.18 ,\\, \\frac{1}{5} ,\\, 0.6           ,\\, \\frac{7}{10} ,\\, 0.45', "order from smallest to largest"]          ,
        ['0.55 ,\\, \\frac{1}{2} ,\\, 0.75          ,\\, \\frac{1}{3}  ,\\, \\frac{5}{8}', "order from smallest to largest"]  ,
        ['0.3  ,\\, \\frac{1}{7} ,\\, 0.65          ,\\, \\frac{6}{7}  ,\\, 0.85', "order from smallest to largest"]          ,
        ['0.1  ,\\, \\frac{1}{2} ,\\, 0.35          ,\\, \\frac{4}{9}  ,\\, \\frac{3}{7}', "order from smallest to largest"]  ,
        ['0.8  ,\\, \\frac{2}{5} ,\\, 0.25          ,\\, \\frac{5}{6}  ,\\, \\frac{3}{4}', "order from smallest to largest"]  ,
        ['0.6  ,\\, \\frac{5}{9} ,\\, 0.35          ,\\, \\frac{2}{3}  ,\\, 0.25', "order from smallest to largest"]          ,
        ['0.05 ,\\, \\frac{1}{3} ,\\, \\frac{7}{10} ,\\, 0.4           ,\\, 0.95', "order from smallest to largest"]          ,
        ['0.4  ,\\, \\frac{3}{8} ,\\, 0.55          ,\\, \\frac{5}{9}  ,\\, \\frac{7}{8}', "order from smallest to largest"]  ,
        ['0.7  ,\\, \\frac{4}{9} ,\\, 0.65          ,\\, \\frac{2}{7}  ,\\, 0.3', "order from smallest to largest"]           ,
        ['0.85 ,\\, \\frac{2}{3} ,\\, 0.9           ,\\, \\frac{5}{9}  ,\\, \\frac{7}{10}', "order from smallest to largest"] ,
        ['0.45 ,\\, \\frac{1}{6} ,\\, 0.2           ,\\, \\frac{4}{7}  ,\\, \\frac{5}{8}', "order from smallest to largest"]  ,
        ['0.38 ,\\, \\frac{1}{5} ,\\, 0.12          ,\\, \\frac{3}{4}  ,\\, \\frac{4}{9}', "order from smallest to largest"]  ,
        ['0.92 ,\\, \\frac{3}{5} ,\\, 0.5           ,\\, \\frac{7}{8}  ,\\, \\frac{1}{3}', "order from smallest to largest"]  ,
        ['0.2  ,\\, \\frac{2}{7} ,\\, 0.3           ,\\, \\frac{4}{9}  ,\\, \\frac{5}{6}', "order from smallest to largest"]  ,

   ], // }}}

	[ // {{{ fraction to mixed

    ['\\frac{11}{2}', 'convert to mixed number'],
    ['\\frac{19}{3}', 'convert to mixed number'],
    ['\\frac{22}{4}', 'convert to mixed number'],
    ['\\frac{29}{5}', 'convert to mixed number'],
    ['\\frac{34}{6}', 'convert to mixed number'],
    ['\\frac{41}{7}', 'convert to mixed number'],
    ['\\frac{46}{8}', 'convert to mixed number'],
    ['\\frac{53}{9}', 'convert to mixed number'],
    ['\\frac{17}{2}', 'convert to mixed number'],
    ['\\frac{28}{3}', 'convert to mixed number'],
    ['\\frac{31}{4}', 'convert to mixed number'],
    ['\\frac{38}{5}', 'convert to mixed number'],
    ['\\frac{43}{6}', 'convert to mixed number'],
    ['\\frac{50}{7}', 'convert to mixed number'],
    ['\\frac{55}{8}', 'convert to mixed number'],
    ['\\frac{62}{9}', 'convert to mixed number'],
    ['\\frac{23}{2}', 'convert to mixed number'],
    ['\\frac{33}{3}', 'convert to mixed number'],
    ['\\frac{45}{4}', 'convert to mixed number'],
    ['\\frac{47}{5}', 'convert to mixed number'],
    ['\\frac{52}{6}', 'convert to mixed number'],
    ['\\frac{59}{7}', 'convert to mixed number'],
    ['\\frac{64}{8}', 'convert to mixed number'],
    ['\\frac{71}{9}', 'convert to mixed number'],
    ['\\frac{13}{2}', 'convert to mixed number'],
    ['\\frac{26}{3}', 'convert to mixed number'],
    ['\\frac{35}{4}', 'convert to mixed number'],
    ['\\frac{42}{5}', 'convert to mixed number'],
    ['\\frac{49}{6}', 'convert to mixed number'],
    ['\\frac{56}{7}', 'convert to mixed number'],
    ['\\frac{63}{8}', 'convert to mixed number'],
    ['\\frac{70}{9}', 'convert to mixed number'],
    ['\\frac{15}{2}', 'convert to mixed number'],
    ['\\frac{27}{3}', 'convert to mixed number'],
    ['\\frac{33}{4}', 'convert to mixed number'],
    ['\\frac{39}{5}', 'convert to mixed number'],
    ['\\frac{44}{6}', 'convert to mixed number'],
    ['\\frac{51}{7}', 'convert to mixed number'],
    ['\\frac{58}{8}', 'convert to mixed number'],
    ['\\frac{65}{9}', 'convert to mixed number'],
    ['\\frac{17}{2}', 'convert to mixed number'],
    ['\\frac{25}{3}', 'convert to mixed number'],
    ['\\frac{37}{4}', 'convert to mixed number'],
    ['\\frac{41}{5}', 'convert to mixed number'],
    ['\\frac{48}{6}', 'convert to mixed number'],
    ['\\frac{57}{7}', 'convert to mixed number'],
    ['\\frac{66}{8}', 'convert to mixed number'],
    ['\\frac{73}{9}', 'convert to mixed number'],
    ['\\frac{19}{2}', 'convert to mixed number'],
    ['\\frac{31}{3}', 'convert to mixed number']

    ], // }}}

    [ // {{{ mixed to fraction

    ['3 \\frac{1}{2}', 'convert to improper fraction'],
    ['6 \\frac{1}{3}', 'convert to improper fraction'],
    ['5 \\frac{1}{4}', 'convert to improper fraction'],
    ['7 \\frac{2}{5}', 'convert to improper fraction'],
    ['8 \\frac{1}{6}', 'convert to improper fraction'],
    ['9 \\frac{3}{7}', 'convert to improper fraction'],
    ['10 \\frac{3}{8}', 'convert to improper fraction'],
    ['4 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{1}{3}', 'convert to improper fraction'],
    ['7 \\frac{1}{4}', 'convert to improper fraction'],
    ['8 \\frac{2}{5}', 'convert to improper fraction'],
    ['10 \\frac{1}{6}', 'convert to improper fraction'],
    ['5 \\frac{1}{2}', 'convert to improper fraction'],
    ['7 \\frac{2}{3}', 'convert to improper fraction'],
    ['9 \\frac{3}{4}', 'convert to improper fraction'],
    ['6 \\frac{1}{2}', 'convert to improper fraction'],
    ['8 \\frac{2}{3}', 'convert to improper fraction'],
    ['10 \\frac{3}{4}', 'convert to improper fraction'],
    ['7 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{2}{3}', 'convert to improper fraction'],
    ['6 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{2}{3}', 'convert to improper fraction'],
    ['7 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{2}{3}', 'convert to improper fraction'],
    ['4 \\frac{1}{5}', 'convert to improper fraction'],
    ['5 \\frac{2}{6}', 'convert to improper fraction'],
    ['6 \\frac{1}{7}', 'convert to improper fraction'],
    ['8 \\frac{3}{8}', 'convert to improper fraction'],
    ['9 \\frac{5}{9}', 'convert to improper fraction'],
    ['3 \\frac{1}{2}', 'convert to improper fraction'],
    ['6 \\frac{1}{3}', 'convert to improper fraction'],
    ['5 \\frac{1}{4}', 'convert to improper fraction'],
    ['7 \\frac{2}{5}', 'convert to improper fraction'],
    ['8 \\frac{1}{6}', 'convert to improper fraction'],
    ['9 \\frac{3}{7}', 'convert to improper fraction'],
    ['10 \\frac{3}{8}', 'convert to improper fraction'],
    ['4 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{1}{3}', 'convert to improper fraction'],
    ['7 \\frac{1}{4}', 'convert to improper fraction'],
    ['8 \\frac{2}{5}', 'convert to improper fraction'],
    ['10 \\frac{1}{6}', 'convert to improper fraction'],
    ['5 \\frac{1}{2}', 'convert to improper fraction'],
    ['7 \\frac{2}{3}', 'convert to improper fraction'],
    ['9 \\frac{3}{4}', 'convert to improper fraction'],
    ['6 \\frac{1}{2}', 'convert to improper fraction'],
    ['8 \\frac{2}{3}', 'convert to improper fraction'],
    ['10 \\frac{3}{4}', 'convert to improper fraction'],
    ['7 \\frac{1}{2}', 'convert to improper fraction'],
    ['9 \\frac{2}{3}', 'convert to improper fraction']



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

    ], // }}}
] // }}}

notesIntroduction = [
    `one`,
    `one`,
];

init();
exercises[5] = buildMixedExercises();
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
          <li class="slide-menu-item" data-item="1"><a href="?exercises=0">Substitution</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=1">Simplifying</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=2">Expanding</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=3">Factorising</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=4">Solving</a></li>
          <li class="slide-menu-item" data-item="1"><a href="?exercises=5">Mixture</a></li>
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
