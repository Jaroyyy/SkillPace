var COURSE_PDF_LINKS = {
  1: "https://drive.google.com/file/d/1D3aUjeZKjvCzoOjx3S8yz-HDTaootvlc/view?usp=share_link",
  2: "https://drive.google.com/file/d/1xkH6qF0-d4j2MPZFvnCE_QWmp5ACASuf/view?usp=share_link",
  3: "https://drive.google.com/file/d/1Cg2A5Uji0tfh84biopV0tHzG8SczwcOz/view?usp=share_link",
  4: "https://drive.google.com/file/d/1wxYdnic0INDnsKSwgVMjyw5PrH3T9qmd/view",
  5: "https://drive.google.com/file/d/1krj_jZIKrBGsjMq6PK3gjXQi0JwaQNu-/view?usp=share_link",
  6: "https://drive.google.com/file/d/1IzVV7L80Ax7tmVCDAQQ0RzGLUpa_J4lU/view?usp=share_link"
};

var COURSES = [
  { id:1, title:'C#',                   desc:'Build clear reasoning and argument skills.', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hfz95ze/images.png' },
  { id:2, title:'Introduction to CSS',  desc:'Cascading Style Sheets', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hc8bkmc/creative-css3-tutorials.jpg' },
  { id:3, title:'Python',               desc:'Designed to be human-readable.', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hdnkzpf/1*3IcLSFuT8PQg4cUBaRXH1A.png' },
  { id:4, title:'HTML',                 desc:'The standard markup language for Web pages.', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hfz95ze/images.jpeg' },
  { id:5, title:'Java',                 desc:'Robust, portable, and versatile language.', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hc8bkmc/java-logo.png' },
  { id:6, title:'SQL',                  desc:'Structured Query Language.', duration:'8 weeks', img:'https://uploads.onecompiler.io/44hcec5gg/44hfz95ze/6697e5d70e6b50dbe5bbe3dd_6697e36f9a2e61c3f9a3c850_SQL.jpeg' },
];

var COURSE_LESSONS = {
  1: { modules:[
    { name:'Module 1: Basics', lessons:[
      { id:'1-1', title:'What is CSS?', duration:'30:00 Minutes', vid:'3kum0dpdH7I',
        handout: { summary:'CSS styles and lays out HTML elements, controlling color, fonts, spacing, and positioning. It separates design from structure.', points:['CSS stands for Cascading Style Sheets','Styles can be inline, internal, or external','External stylesheets (.css) are best practice'] }},
      { id:'1-2', title:'Selectors & Properties', duration:'10:30 Minutes', vid:'ZNskBxLVOfs',
        handout: { summary:'Selectors target HTML elements. Properties define what is changed; values set the degree of change.', points:['Element selectors target tag names','Class selectors use a dot (.) prefix','ID selectors use a hash (#) prefix','Specificity determines which styles win'] }},
      { id:'1-3', title:'Box Model', duration:'8:45 Minutes', vid:'rIO5326FgPE',
        handout: { summary:'Every element is a box: content, padding, border, margin. Mastering it is key to accurate layout.', points:['Content: the actual text or image','Padding: space between content and border','Border: edge surrounding padding','Margin: space outside the border'] }}
    ]},
    { name:'Module 2: Layout', lessons:[
      { id:'2-1', title:'CSS Flexbox', duration:'12:00 Minutes', vid:'u044iM9xsWU',
        handout: { summary:'Flexbox is a one-dimensional layout model for rows or columns.', points:['Apply display:flex to the parent','justify-content for horizontal alignment','align-items for vertical alignment','flex-wrap allows multi-line layouts'] }},
      { id:'2-2', title:'CSS Grid', duration:'14:00 Minutes', vid:'EiNiSFIPIQE',
        handout: { summary:'CSS Grid is two-dimensional. Define rows and columns then place items precisely.', points:['Use display:grid on the container','grid-template-columns defines column sizes','Items can span multiple rows or columns'] }},
      { id:'2-3', title:'Responsive Design', duration:'11:30 Minutes', vid:'K24lUqcT0Ms',
        handout: { summary:'Responsive design makes pages work on all screen sizes using media queries and fluid units.', points:['Use @media queries for breakpoints','Mobile-first approach is recommended','Relative units (%, em, rem) scale better than px'] }}
    ]}
  ]},
  2: { modules:[
    { name:'Module 1: Java Fundamentals', lessons:[
      { id:'1-1', title:'Java Introduction', duration:'19:49 Minutes', vid:'b5l5UodFzMo',
        handout: { summary:'Java is class-based and object-oriented. It runs on the JVM, making it platform-independent.', points:['Write Once, Run Anywhere (WORA)','Compiled to bytecode then run on JVM','Strongly typed language'] }},
      { id:'1-2', title:'Variables & Data Types', duration:'12:00 Minutes', vid:'RPoquiZydYc',
        handout: { summary:'Java has primitive types (int, double, boolean) and reference types (objects, String).', points:['int stores whole numbers','double stores decimals','boolean stores true or false','String is a reference type'] }},
      { id:'1-3', title:'Control Flow', duration:'12:00 Minutes', vid:'ldYLYRXaucM',
        handout: { summary:'if-else, for/while loops, and switch control how code executes.', points:['if-else evaluates boolean conditions','for loops run a set number of times','while loops run while condition is true','switch for multi-branch logic'] }}
    ]},
    { name:'Module 2: OOP', lessons:[
      { id:'2-1', title:'Classes & Objects', duration:'14:00 Minutes', vid:'IUqKuGNasdM',
        handout: { summary:'A class is a blueprint; objects are instances. OOP organizes code around entities.', points:['Class defines fields and methods','Object is an instance of a class','Constructor initializes an object','Access modifiers control visibility'] }},
      { id:'2-2', title:'Inheritance', duration:'11:00 Minutes', vid:'9JpNY-XAseg',
        handout: { summary:'Inheritance lets a class reuse fields and methods from another class.', points:['Use extends keyword','Child inherits non-private members','super calls parent constructor','Override to redefine parent method'] }}
    ]}
  ]},
  3: { modules:[
    { name:'Module 1: C# Basics', lessons:[
      { id:'1-1', title:'C# Introduction', duration:'27:16 Minutes', vid:'_znVveO0caQ',
        handout: { summary:'C# is a modern OOP language by Microsoft, part of the .NET ecosystem.', points:['Runs on .NET runtime (CLR)','Strongly typed and statically compiled','Popular for Unity game development'] }},
      { id:'1-2', title:'Variables & Types', duration:'9:30 Minutes', vid:'gfkTfcpWqAY',
        handout: { summary:'C# has value types (int, float, bool) and reference types (class, string). var allows type inference.', points:['int, float, double for numbers','string for text','bool for true/false','var infers the type automatically'] }},
      { id:'1-3', title:'Methods & Functions', duration:'11:00 Minutes', vid:'racRHiMsBKc',
        handout: { summary:'Methods are reusable code blocks that belong to a class. They accept parameters and return values.', points:['Return type before method name','void means returns nothing','Parameters are inside parentheses','Call with methodName()'] }}
    ]}
  ]},
  4: { modules:[
    { name:'Module 1: Python Basics', lessons:[
      { id:'1-1', title:'Python Introduction', duration:'20:50 Minutes', vid:'WEm3EUdicDg',
        handout: { summary:'Python is high-level, interpreted, and readable. No compilation needed.', points:['Indentation defines code blocks','Dynamic typing','Large ecosystem via pip','Great for data science and automation'] }},
      { id:'1-2', title:'Variables & Strings', duration:'9:00 Minutes', vid:'k9TUPpljBcE',
        handout: { summary:'Variables are created by assignment. Strings have many built-in methods.', points:['x = 5 creates an integer','f-strings: f"Hello {name}"','Methods: .upper(), .lower(), .split()'] }},
      { id:'1-3', title:'Lists & Loops', duration:'11:30 Minutes', vid:'W8KRzm-HUcc',
        handout: { summary:'Lists are mutable ordered collections. Loops iterate over sequences.', points:['my_list = [1, 2, 3]','list.append() adds items','for item in my_list: iterates','while runs while condition is True'] }}
    ]},
    { name:'Module 2: Functions & Files', lessons:[
      { id:'2-1', title:'Functions', duration:'10:00 Minutes', vid:'9Os0o3wzS_I',
        handout: { summary:'Functions defined with def are reusable. They accept arguments and can return values.', points:['def my_function(): defines a function','Parameters receive input','return sends value back','Default parameters allow optional args'] }},
      { id:'2-2', title:'File Handling', duration:'8:30 Minutes', vid:'Uh2ebFW8OO0',
        handout: { summary:'Python reads/writes files with built-in functions. with open() ensures files close safely.', points:['open("file.txt","r") for reading','open("file.txt","w") for writing','with open() as f: is safest','f.readlines() returns all lines'] }}
    ]}
  ]},
  5: { modules:[
    { name:'Module 1: SQL Basics', lessons:[
      { id:'1-1', title:'What is SQL?', duration:'30:00 Minutes', vid:'T5PDJ4uK0ew',
        handout: { summary:'SQL interacts with relational databases — storing, retrieving, updating, and deleting data.', points:['SQL is declarative','Tables have rows and columns','Primary keys uniquely identify rows','Common DBs: MySQL, PostgreSQL, SQLite'] }},
      { id:'1-2', title:'SELECT Queries', duration:'9:00 Minutes', vid:'yPu6qV5byu4',
        handout: { summary:'SELECT retrieves data. WHERE filters, ORDER BY sorts, LIMIT restricts rows.', points:['SELECT * gets all columns','WHERE filters by condition','ORDER BY col ASC/DESC sorts','LIMIT n restricts rows'] }},
      { id:'1-3', title:'JOINs Explained', duration:'13:00 Minutes', vid:'9yeOJ0ZMUYw',
        handout: { summary:'JOINs combine tables on a related column. INNER returns matches; LEFT returns all left rows.', points:['INNER JOIN: matching rows only','LEFT JOIN: all left + matched right','Join uses ON table1.col = table2.col'] }}
    ]}
  ]},
  6: { modules:[
    { name:'Module 1: HTML Basics', lessons:[
      { id:'1-1', title:'HTML Introduction', duration:'39:05 Minutes', vid:'FQdaUv95mR8',
        handout: { summary:'HTML is the standard markup language for web pages. Browsers render tags as visible content.', points:['HTML = HyperText Markup Language','.html file extension','Tags use angle brackets','Most tags have opening and closing pairs'] }},
      { id:'1-2', title:'Tags & Elements', duration:'10:00 Minutes', vid:'UB1O30fR-EE',
        handout: { summary:'Elements are building blocks: headings, paragraphs, links, images, and lists.', points:['h1 to h6 are headings','p is a paragraph','a href creates a link','img src embeds images'] }},
      { id:'1-3', title:'HTML Forms', duration:'12:30 Minutes', vid:'fNcJuPIZ2WE',
        handout: { summary:'Forms collect user input. The action attribute defines where data is sent.', points:['form wraps controls','input type text for text','input type submit submits','label links text to inputs'] }}
    ]},
    { name:'Module 2: Semantic HTML', lessons:[
      { id:'2-1', title:'Semantic Elements', duration:'8:00 Minutes', vid:'kGW8Al_cga4',
        handout: { summary:'Semantic tags describe content purpose, improving readability and accessibility.', points:['header for introductory content','nav for navigation','main for primary content','footer for page-end info'] }},
      { id:'2-2', title:'Accessibility Basics', duration:'9:30 Minutes', vid:'e2nkq3h1FSo',
        handout: { summary:'Accessible HTML can be used by everyone including screen reader users.', points:['Always include alt text on images','Use label with form inputs','Headings follow logical order h1 to h3','ARIA attributes add context for screen readers'] }}
    ]}
  ]}
};

var COURSE_ASSESSMENTS = {
  1: {
    quizzes: [
      { id:'q1', title:'Quiz 1: CSS Basics', description:'Test your knowledge on selectors, properties, and the box model.', questions:[
        { q:'What does CSS stand for?', options:['Creative Style System','Cascading Style Sheets','Computer Style Script','Colorful Styling Standard'], answer:1 },
        { q:'Which selector targets all paragraph elements?', options:['.p','#p','p','*p'], answer:2 },
        { q:'Which property changes text color?', options:['font-color','text-color','color','foreground'], answer:2 },
        { q:'The box model does NOT include:', options:['Padding','Margin','Shadow','Border'], answer:2 },
        { q:'Which unit is relative to the root font size?', options:['px','%','em','rem'], answer:3 }
      ]},
      { id:'q2', title:'Quiz 2: CSS Layout', description:'Flexbox, Grid, and responsive design concepts.', questions:[
        { q:'Which property enables Flexbox on a container?', options:['display:block','display:flex','flex:1','align:flex'], answer:1 },
        { q:'Which flexbox property aligns items on the cross-axis?', options:['justify-content','align-items','flex-direction','flex-wrap'], answer:1 },
        { q:'CSS Grid is which type of layout?', options:['One-dimensional','Two-dimensional','Three-dimensional','Block-only'], answer:1 },
        { q:'Which CSS rule applies styles at specific screen widths?', options:['@keyframes','@import','@media','@screen'], answer:2 },
        { q:'Which unit is relative to the viewport width?', options:['em','rem','vw','px'], answer:2 }
      ]}
    ],
    exam: { id:'exam1', title:'Final Exam: Introduction to CSS', description:'Comprehensive exam covering all CSS topics. Minimum passing score: 75%.', questions:[
      { q:'What does CSS stand for?', options:['Creative Style System','Cascading Style Sheets','Computer Style Script','Colorful Styling System'], answer:1 },
      { q:'Which is the correct way to add an external CSS file?', options:['css src style.css','style link style.css','link rel stylesheet href style.css','script src style.css'], answer:2 },
      { q:'Which property sets the space between content and border?', options:['margin','spacing','padding','gap'], answer:2 },
      { q:'Which selector has the highest specificity?', options:['Element','Class','ID','Universal'], answer:2 },
      { q:'display:flex is applied to:', options:['Child elements','The parent container','All elements','The body only'], answer:1 },
      { q:'Which CSS property creates a multi-column layout?', options:['display:flex','display:grid','display:table','display:block'], answer:1 },
      { q:'@media queries are used for:', options:['Animations','Responsive design','Fonts','Colors'], answer:1 },
      { q:'The "C" in CSS stands for:', options:['Controlled','Cascading','Comprehensive','Custom'], answer:1 }
    ]},
    activities: [
      { id:'act1', title:'Activity 1: Style a Webpage', description:'Style a provided HTML file using CSS selectors, colors, fonts, and the box model. Submit a link to your work (CodePen, GitHub, etc.).', type:'link' },
      { id:'act2', title:'Activity 2: Build a Flexbox Layout', description:'Create a responsive navigation bar using CSS Flexbox. It should work on mobile and desktop. Submit your project link.', type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: Portfolio Page', description:'Build a personal portfolio page using HTML and CSS. It must be fully responsive using Flexbox or Grid, include at least 3 sections (About, Skills, Contact), and use an external stylesheet.', type:'both' }
  },
  2: {
    quizzes: [
      { id:'q1', title:'Quiz 1: Java Fundamentals', description:'Variables, data types, and control flow.', questions:[
        { q:'Java programs run on:', options:['The browser','The JVM','A PHP server','Directly on hardware'], answer:1 },
        { q:'Which data type stores whole numbers?', options:['double','String','boolean','int'], answer:3 },
        { q:'Which loop runs while a condition is true?', options:['for','do-once','while','switch'], answer:2 },
        { q:'Which keyword prints output in Java?', options:['echo','print','console.log','System.out.println'], answer:3 },
        { q:'Java is which type of language?', options:['Interpreted only','Dynamically typed','Strongly typed','Weakly typed'], answer:2 }
      ]}
    ],
    exam: { id:'exam2', title:'Final Exam: Java', description:'Covers Java fundamentals and OOP principles. Minimum passing score: 75%.', questions:[
      { q:'What does OOP stand for?', options:['Object-Oriented Programming','Open Output Protocol','Ordered Object Processing','None'], answer:0 },
      { q:'Which keyword creates a new object?', options:['object','create','new','make'], answer:2 },
      { q:'Which keyword is used for inheritance?', options:['implements','inherits','extends','super'], answer:2 },
      { q:'A constructor method:', options:['Returns an integer','Has a return type','Initializes an object','Is called manually'], answer:2 },
      { q:'Which access modifier restricts to the class only?', options:['public','protected','private','default'], answer:2 },
      { q:'Polymorphism allows:', options:['One method to work in many forms','Multiple inheritance','Static binding only','None of the above'], answer:0 }
    ]},
    activities: [
      { id:'act1', title:'Activity 1: Basic Java Program', description:"Write a Java program that asks for a user's name and prints a greeting message. Submit a GitHub or Replit link.", type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: Simple Bank System', description:'Build a console-based Java bank system with classes: Account, SavingsAccount, CheckingAccount. Include deposit, withdraw, and balance methods using OOP principles.', type:'both' }
  },
  3: {
    quizzes:[
      { id:'q1', title:'Quiz 1: C# Basics', description:'Variables, types, and methods.', questions:[
        { q:'C# runs on which runtime?', options:['JVM','Node.js','.NET CLR','PHP Runtime'], answer:2 },
        { q:'Which keyword infers the type automatically?', options:['auto','type','var','let'], answer:2 },
        { q:'void return type means:', options:['Returns 0','Returns null','Returns nothing','Returns bool'], answer:2 },
        { q:'C# is developed by:', options:['Apple','Google','Microsoft','Oracle'], answer:2 },
        { q:'Which is NOT a value type in C#?', options:['int','float','bool','string'], answer:3 }
      ]}
    ],
    exam: { id:'exam3', title:'Final Exam: C#', description:'C# fundamentals exam. Minimum passing score: 75%.', questions:[
      { q:'C# is mainly used with:', options:['Android','iOS','.NET','PHP'], answer:2 },
      { q:'Which symbol is used for string interpolation in C#?', options:['@','$','#','%'], answer:1 },
      { q:'A class in C# is:', options:['A variable','A blueprint for objects','A loop','A method'], answer:1 },
      { q:'Which keyword defines a method that returns nothing?', options:['null','empty','void','nothing'], answer:2 },
      { q:'int is a:', options:['Reference type','Value type','String type','Array type'], answer:1 }
    ]},
    activities:[
      { id:'act1', title:'Activity 1: Calculator App', description:'Build a simple C# console calculator that handles +, -, *, /. Submit your GitHub or Replit link.', type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: Student Grade Tracker', description:'Build a C# console app that stores student names and grades, calculates averages, and shows pass/fail status using OOP principles.', type:'both' }
  },
  4: {
    quizzes:[
      { id:'q1', title:'Quiz 1: Python Basics', description:'Variables, strings, lists, and loops.', questions:[
        { q:'Python code blocks are defined by:', options:['Curly braces {}','Parentheses ()','Indentation','Semicolons ;'], answer:2 },
        { q:'Which method adds an item to a list?', options:['.add()','.insert()','.append()','.push()'], answer:2 },
        { q:'How do you create a function in Python?', options:['function myFunc():','def myFunc():','func myFunc():','create myFunc():'], answer:1 },
        { q:'What does len() return?', options:['The last element','The sum','The length of a sequence','The type'], answer:2 },
        { q:'Which is a valid f-string format?', options:['f"Hello name"','f"Hello {name}"','f(Hello name)','Hello {name}'], answer:1 }
      ]}
    ],
    exam: { id:'exam4', title:'Final Exam: Python', description:'Python fundamentals exam. Minimum passing score: 75%.', questions:[
      { q:'Python is:', options:['Compiled','Interpreted','Both','Neither'], answer:1 },
      { q:'Which opens a file for reading?', options:['open("f","w")','open("f","r")','read("f")','file("f")'], answer:1 },
      { q:'What is the output of print(2**3)?', options:['6','8','23','None'], answer:1 },
      { q:'Which loop iterates a fixed number of times?', options:['while','for range()','repeat','loop'], answer:1 },
      { q:'pip is used to:', options:['Run Python files','Install packages','Compile code','Debug code'], answer:1 }
    ]},
    activities:[
      { id:'act1', title:'Activity 1: Number Guessing Game', description:'Build a Python number guessing game. The program picks a random number 1-100 and gives hints. Submit a Replit or GitHub link.', type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: Student Grade Manager', description:'Create a Python app that reads student data from a file, calculates averages, and writes a report. Use functions, file I/O, and lists.', type:'both' }
  },
  5: {
    quizzes:[
      { id:'q1', title:'Quiz 1: SQL Basics', description:'SELECT, WHERE, ORDER BY, and JOINs.', questions:[
        { q:'SQL stands for:', options:['Simple Query Language','Structured Query Language','System Query Logic','Standard Query List'], answer:1 },
        { q:'Which statement retrieves data?', options:['GET','FETCH','SELECT','RETRIEVE'], answer:2 },
        { q:'Which clause filters rows?', options:['ORDER BY','WHERE','HAVING','GROUP BY'], answer:1 },
        { q:'INNER JOIN returns:', options:['All left rows','All right rows','Only matching rows','All rows'], answer:2 },
        { q:'Primary key:', options:['Can be null','Must be unique','Can repeat','Is optional'], answer:1 }
      ]}
    ],
    exam: { id:'exam5', title:'Final Exam: SQL', description:'SQL fundamentals exam. Minimum passing score: 75%.', questions:[
      { q:'Which SQL command adds a new record?', options:['ADD','CREATE','INSERT INTO','PUT'], answer:2 },
      { q:'Which deletes a table completely?', options:['DELETE TABLE','REMOVE TABLE','DROP TABLE','CLEAR TABLE'], answer:2 },
      { q:'ORDER BY default is:', options:['DESC','ASC','RANDOM','NONE'], answer:1 },
      { q:'Which aggregate function counts rows?', options:['SUM()','AVG()','COUNT()','MAX()'], answer:2 },
      { q:'LEFT JOIN returns:', options:['Matching rows only','All left + matched right','All right + matched left','All rows'], answer:1 }
    ]},
    activities:[
      { id:'act1', title:'Activity 1: Database Design', description:'Design a database schema for a library system with at least 3 tables. Write the CREATE TABLE statements and submit via GitHub or a text link.', type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: E-Commerce Database', description:'Design and implement a full SQL database for an e-commerce store. Include products, customers, orders, and order_items tables. Write queries for reports: top products, total revenue, customer order history.', type:'both' }
  },
  6: {
    quizzes:[
      { id:'q1', title:'Quiz 1: HTML Basics', description:'Tags, elements, and forms.', questions:[
        { q:'HTML stands for:', options:['Hyperlink Text Markup Language','HyperText Markup Language','Home Tool Markup Language','Hyper Tool Markup Level'], answer:1 },
        { q:'Which tag creates a hyperlink?', options:['link','href','a','url'], answer:2 },
        { q:'Which attribute is required for an image tag?', options:['href','src','link','url'], answer:1 },
        { q:'Which tag creates an unordered list?', options:['ol','list','ul','li'], answer:2 },
        { q:'The form action attribute defines:', options:['The form style','Where data is sent','The input type','The form method'], answer:1 }
      ]}
    ],
    exam: { id:'exam6', title:'Final Exam: HTML', description:'HTML fundamentals and semantics exam. Minimum passing score: 75%.', questions:[
      { q:'Which tag defines the page title in the browser tab?', options:['header','title','h1','head'], answer:1 },
      { q:'Which is a semantic HTML tag?', options:['div','span','article','i'], answer:2 },
      { q:'The alt attribute on an image tag is for:', options:['Alignment','Alternative text / accessibility','Image size','Image link'], answer:1 },
      { q:'Which input type creates a checkbox?', options:['input type check','input type box','input type checkbox','check'], answer:2 },
      { q:'The nav tag is used for:', options:['Page navigation links','Image navigation','Breadcrumbs only','None'], answer:0 }
    ]},
    activities:[
      { id:'act1', title:'Activity 1: Semantic HTML Page', description:'Rewrite a given non-semantic HTML page using proper semantic tags (header, nav, main, article, footer). Submit via CodePen or GitHub.', type:'link' }
    ],
    project: { id:'proj1', title:'Final Project: Personal Portfolio Website', description:'Build a multi-section HTML portfolio: About, Skills, Projects, Contact form. Must use semantic HTML, proper heading hierarchy, and accessibility attributes. Submit a live link.', type:'both' }
  }
};

/* STATE */
var currentUser    = null;
var pm_courseId    = 1;
var pm_lessonId    = '1-1';
var pm_completed   = {};
var pm_courseTitle = '';
var pm_currentVid  = '';
var assessResults  = {};

var qm_items = [];
var qm_idx = 0;
var qm_answers = {};
var qm_assessId = '';
var qm_assessType = '';
var qm_courseId = 0;

/* RENDER COURSE CARDS */
function renderCards() {
  var grid = document.getElementById('courses-grid');
  if (!grid) return;
  grid.innerHTML = COURSES.map(function(c) {
    var pdfUrl = COURSE_PDF_LINKS[c.id];
    var prog   = getLessonProgress(c.id);

    var pdfBtn = pdfUrl
      ? '<a href="' + pdfUrl + '" target="_blank" class="card-pdf-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Handout PDF</a>'
      : '<span class="card-pdf-link no-link">&#128196; Handout coming soon</span>';

    var certEligible = isCertEligible(c.id);
    var certDiv = certEligible ? '<div class="cert-badge">&#127942; Certificate Eligible</div>' : '';

    return '<div class="course-card">' +
      '<img src="' + c.img + '" alt="' + c.title + '" />' +
      '<div class="course-card-body">' +
      '<h3>' + c.title + '</h3>' +
      '<p>' + c.desc + '</p>' +
      '<div class="course-duration">&#9201; ' + c.duration + '</div>' +
      '<div class="card-progress-row"><div class="card-prog-track"><div class="card-prog-bar" style="width:' + prog + '%"></div></div><span class="card-prog-label">' + prog + '%</span></div>' +
      '<button class="btn-start" onclick="openCoursePlayer(' + c.id + ')">Start Learning</button>' +
      pdfBtn +
      certDiv +
      '</div></div>';
  }).join('');
}

/* PLAYER OPEN / CLOSE */
function openCoursePlayer(id) {
  pm_courseId = id;
  var course = null;
  for (var i = 0; i < COURSES.length; i++) { if (COURSES[i].id === id) { course = COURSES[i]; break; } }
  pm_courseTitle = course ? course.title : 'Course';
  if (!pm_completed[id])  pm_completed[id] = {};
  if (!assessResults[id]) assessResults[id] = {};

  var data = COURSE_LESSONS[id];
  if (!data) { showToast('Coming Soon', 'Lessons for this course are being added!'); return; }

  pm_lessonId = data.modules[0].lessons[0].id;
  document.getElementById('pm-course-title').textContent = pm_courseTitle;
  document.getElementById('playerModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  switchTab('lessons');
  buildLessonList();
  loadLesson(pm_lessonId);
  updateProgress();
  renderAssessPanels();
  updateCertSection();
}

function closePlayer() {
  var wrap = document.getElementById('pm-video-wrap');
  var iframe = wrap.querySelector('iframe');
  if (iframe) iframe.src = '';
  document.getElementById('playerModal').classList.remove('open');
  document.body.style.overflow = '';
  renderCards();
}

document.getElementById('playerModal').addEventListener('click', function(e) {
  if (e.target === this) closePlayer();
});

/* TAB SWITCHER */
function switchTab(name) {
  var panels = ['lessons','quiz','exam','activity','project'];
  panels.forEach(function(p) {
    document.getElementById('panel-' + p).style.display = p === name ? '' : 'none';
    var tab = document.getElementById('tab-' + p);
    if (tab) tab.classList.toggle('active', p === name);
  });
  if (name === 'quiz')     renderQuizPanel();
  if (name === 'exam')     renderExamPanel();
  if (name === 'activity') renderActivityPanel();
  if (name === 'project')  renderProjectPanel();
}

/* LESSON PLAYER */
function buildLessonList() {
  var data = COURSE_LESSONS[pm_courseId];
  var html = '';
  data.modules.forEach(function(mod) {
    html += '<div class="mod-title">' + mod.name + '</div>';
    mod.lessons.forEach(function(l) {
      var done   = pm_completed[pm_courseId] && pm_completed[pm_courseId][l.id];
      var active = l.id === pm_lessonId;
      html += '<div class="lesson-item ' + (active ? 'active' : '') + '" onclick="loadLesson(\'' + l.id + '\')">' +
        '<div class="li-icon ' + (done ? 'done' : '') + '">' +
        (done
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="' + (active ? '#003057' : '#9CA3AF') + '"><polygon points="5 3 19 12 5 21 5 3"/></svg>') +
        '</div><div><div class="li-name">' + l.title + '</div><div class="li-duration">' + l.duration + '</div></div></div>';
    });
  });
  document.getElementById('pm-lesson-list').innerHTML = html;
}

function loadLesson(lid) {
  var data = COURSE_LESSONS[pm_courseId];
  var lesson = null;
  data.modules.forEach(function(m) { m.lessons.forEach(function(l) { if (l.id === lid) lesson = l; }); });
  if (!lesson) return;
  pm_lessonId   = lid;
  pm_currentVid = lesson.vid;

  var wrap = document.getElementById('pm-video-wrap');
  var old  = wrap.querySelector('iframe');
  if (old) old.remove();
  document.getElementById('pm-thumb-overlay').style.display = 'flex';
  var thumb = document.getElementById('pm-vid-thumb');
  thumb.src = 'https://img.youtube.com/vi/' + lesson.vid + '/maxresdefault.jpg';
  thumb.onerror = function() { this.src = 'https://img.youtube.com/vi/' + lesson.vid + '/hqdefault.jpg'; };

  document.getElementById('pm-lesson-title').textContent = lesson.title;
  document.getElementById('pm-lesson-sub').textContent   = lesson.duration + ' · ' + pm_courseTitle;
  document.getElementById('pm-handout-title').textContent = lesson.title + ' — Notes';
  document.getElementById('pm-handout-text').textContent  = lesson.handout.summary;
  document.getElementById('pm-handout-points').innerHTML  = lesson.handout.points.map(function(p) { return '<li>' + p + '</li>'; }).join('');

  var pdfBtn = document.getElementById('pm-pdf-btn');
  var pdfUrl = COURSE_PDF_LINKS[pm_courseId];
  pdfBtn.href = pdfUrl || '#';
  pdfBtn.classList.toggle('disabled', !pdfUrl);
  pdfBtn.innerHTML = pdfUrl
    ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Course Handout PDF'
    : '&#128196; Handout PDF coming soon';

  var btn = document.getElementById('pm-btn-complete');
  if (pm_completed[pm_courseId] && pm_completed[pm_courseId][lid]) {
    btn.className = 'btn-complete done';
    btn.textContent = '\u2713 Completed';
  } else {
    btn.className = 'btn-complete';
    btn.textContent = '\u2713 Mark as Complete';
  }
  buildLessonList();
  document.querySelector('.player-main').scrollTop = 0;
}

function pmPlayVideo() {
  var wrap = document.getElementById('pm-video-wrap');
  document.getElementById('pm-thumb-overlay').style.display = 'none';
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + pm_currentVid + '?autoplay=1&rel=0&modestbranding=1';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;position:absolute;inset:0;';
  wrap.appendChild(iframe);
}

function pmMarkComplete() {
  pm_completed[pm_courseId][pm_lessonId] = true;
  var btn = document.getElementById('pm-btn-complete');
  btn.className = 'btn-complete done';
  btn.textContent = '\u2713 Completed';
  buildLessonList();
  updateProgress();
  saveProgressToFirebase();
  showToast('Lesson Complete! \ud83c\udf89', 'Keep it up — great work!');
  setTimeout(goNextLesson, 1200);
}

function goNextLesson() {
  var data = COURSE_LESSONS[pm_courseId];
  var found = false, next = null;
  outer: for (var mi = 0; mi < data.modules.length; mi++) {
    var mod = data.modules[mi];
    for (var li = 0; li < mod.lessons.length; li++) {
      if (found) { next = mod.lessons[li]; break outer; }
      if (mod.lessons[li].id === pm_lessonId) found = true;
    }
  }
  if (next) loadLesson(next.id);
}

function getLessonProgress(cid) {
  var data = COURSE_LESSONS[cid];
  if (!data) return 0;
  var total = 0, done = 0;
  data.modules.forEach(function(m) {
    m.lessons.forEach(function(l) {
      total++;
      if (pm_completed[cid] && pm_completed[cid][l.id]) done++;
    });
  });
  return total > 0 ? Math.round(done / total * 100) : 0;
}

function updateProgress() {
  var pct = getLessonProgress(pm_courseId);
  document.getElementById('pm-prog-bar').style.width       = pct + '%';
  document.getElementById('pm-prog-text').textContent      = pct + '% complete';
  document.getElementById('pm-prog-bar-main').style.width  = pct + '%';
  document.getElementById('pm-prog-text-main').textContent = pct + '%';
}

/* ASSESSMENT PANELS */
function renderAssessPanels() {
  renderQuizPanel();
  renderExamPanel();
  renderActivityPanel();
  renderProjectPanel();
  updateTabBadges();
}

function updateTabBadges() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) return;
  var r = assessResults[pm_courseId] || {};
  var qPassed = a.quizzes.filter(function(q) { return r[q.id] && r[q.id].passed; }).length;
  document.getElementById('quiz-badge').textContent = qPassed + '/' + a.quizzes.length;
  document.getElementById('exam-done-icon').style.display = (r[a.exam.id] && r[a.exam.id].passed) ? '' : 'none';
  var actDone = a.activities.filter(function(ac) { return r[ac.id] && r[ac.id].submitted; }).length;
  document.getElementById('act-badge').textContent = actDone + '/' + a.activities.length;
  document.getElementById('proj-done-icon').style.display = (r[a.project.id] && r[a.project.id].submitted) ? '' : 'none';
}

function renderQuizPanel() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) { document.getElementById('quiz-list-panel').innerHTML = '<p style="padding:24px;color:var(--muted)">No quizzes available yet.</p>'; return; }
  var r = assessResults[pm_courseId] || {};
  document.getElementById('quiz-list-panel').innerHTML = a.quizzes.map(function(q) {
    var res  = r[q.id];
    var chip = res
      ? (res.passed
          ? '<span class="assess-chip chip-pass">&#10003; Passed ' + res.score + '%</span>'
          : '<span class="assess-chip chip-fail">&#10007; Failed ' + res.score + '%</span>')
      : '<span class="assess-chip chip-pending">Not taken</span>';
    var btn  = res
      ? '<button class="btn-assess retry" onclick="startQuiz(\'quiz\',\'' + q.id + '\')">Retake</button>'
      : '<button class="btn-assess start" onclick="startQuiz(\'quiz\',\'' + q.id + '\')">Start Quiz</button>';
    return '<div class="assess-card"><div class="assess-card-hdr"><div class="assess-icon quiz">&#128221;</div><div class="assess-card-info"><h4>' + q.title + '</h4><p>' + q.questions.length + ' questions &middot; Passing score: 75%</p></div><div class="assess-meta">' + chip + btn + '</div></div><div class="assess-card-body"><p class="assess-body-note">' + q.description + '</p></div></div>';
  }).join('');
}

function renderExamPanel() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) { document.getElementById('exam-panel').innerHTML = '<p style="padding:24px;color:var(--muted)">No exam available yet.</p>'; return; }
  var r  = assessResults[pm_courseId] || {};
  var ex = a.exam;
  var allQuizzesPassed = a.quizzes.every(function(q) { return r[q.id] && r[q.id].passed; });
  var res = r[ex.id];
  var chip, btn;

  if (!allQuizzesPassed) {
    chip = '<span class="assess-chip chip-locked">&#128274; Locked</span>';
    btn  = '<button class="btn-assess locked" disabled>Pass all quizzes first</button>';
  } else if (res) {
    chip = res.passed
      ? '<span class="assess-chip chip-pass">&#10003; Passed ' + res.score + '%</span>'
      : '<span class="assess-chip chip-fail">&#10007; Failed ' + res.score + '%</span>';
    btn  = '<button class="btn-assess retry" onclick="startQuiz(\'exam\',\'' + ex.id + '\')">Retake Exam</button>';
  } else {
    chip = '<span class="assess-chip chip-pending">Not taken</span>';
    btn  = '<button class="btn-assess start" onclick="startQuiz(\'exam\',\'' + ex.id + '\')">Start Final Exam</button>';
  }

  document.getElementById('exam-panel').innerHTML = '<div class="assess-card"><div class="assess-card-hdr"><div class="assess-icon exam">&#128203;</div><div class="assess-card-info"><h4>' + ex.title + '</h4><p>' + ex.questions.length + ' questions &middot; Passing score: 75%' + (!allQuizzesPassed ? ' &middot; Complete all quizzes to unlock' : '') + '</p></div><div class="assess-meta">' + chip + btn + '</div></div><div class="assess-card-body"><p class="assess-body-note">' + ex.description + '</p></div></div>';
}

function renderActivityPanel() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) { document.getElementById('activity-panel').innerHTML = '<p style="padding:24px;color:var(--muted)">No activities available yet.</p>'; return; }
  var r = assessResults[pm_courseId] || {};
  document.getElementById('activity-panel').innerHTML = a.activities.map(function(act) {
    var done   = r[act.id] && r[act.id].submitted;
    var chip   = done ? '<span class="assess-chip chip-pass">&#10003; Submitted</span>' : '<span class="assess-chip chip-pending">Pending</span>';
    var submitHtml = done
      ? '<div style="padding:14px 18px;background:white;"><p class="assess-body-note" style="color:var(--green)">&#10003; Submitted on ' + r[act.id].date + '. <button onclick="resubmitActivity(\'' + act.id + '\')" style="background:none;border:none;color:var(--navy);font-weight:700;cursor:pointer;font-size:0.82rem;text-decoration:underline;">Resubmit</button></p></div>'
      : '<div class="assess-card-body"><p class="assess-body-note" style="margin-bottom:12px;">' + act.description + '</p><div class="submit-area"><div><label>Submit your work link (CodePen, GitHub, Replit, etc.)</label><input type="url" id="act-link-' + act.id + '" placeholder="https://..." /></div><div><label>Notes / Description (optional)</label><textarea id="act-note-' + act.id + '" placeholder="Describe what you did..."></textarea></div><button class="btn-assess start" style="align-self:flex-start;" onclick="submitActivity(\'' + act.id + '\')">Submit Activity</button></div></div>';
    return '<div class="assess-card"><div class="assess-card-hdr"><div class="assess-icon act">&#128296;</div><div class="assess-card-info"><h4>' + act.title + '</h4><p>Practical activity &middot; Submit your work link</p></div><div class="assess-meta">' + chip + '</div></div>' + submitHtml + '</div>';
  }).join('');
}

function renderProjectPanel() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) { document.getElementById('project-panel').innerHTML = '<p style="padding:24px;color:var(--muted)">No project available yet.</p>'; return; }
  var r    = assessResults[pm_courseId] || {};
  var p    = a.project;
  var done = r[p.id] && r[p.id].submitted;
  var chip = done ? '<span class="assess-chip chip-pass">&#10003; Submitted</span>' : '<span class="assess-chip chip-pending">Pending</span>';
  var body = done
    ? '<div style="padding:14px 18px;background:white;"><p class="assess-body-note" style="color:var(--green)">&#10003; Project submitted on ' + r[p.id].date + '. <button onclick="resubmitProject(\'' + p.id + '\')" style="background:none;border:none;color:var(--navy);font-weight:700;cursor:pointer;font-size:0.82rem;text-decoration:underline;">Resubmit</button></p></div>'
    : '<div class="assess-card-body"><p class="assess-body-note" style="margin-bottom:12px;">' + p.description + '</p><div class="submit-area"><div><label>Project Link (GitHub, live URL, etc.)</label><input type="url" id="proj-link-' + p.id + '" placeholder="https://..." /></div><div><label>Project Description</label><textarea id="proj-note-' + p.id + '" placeholder="Describe your project, features, and technologies used..."></textarea></div><button class="btn-assess start" style="align-self:flex-start;" onclick="submitProject(\'' + p.id + '\')">Submit Project</button></div></div>';
  document.getElementById('project-panel').innerHTML = '<div class="assess-card"><div class="assess-card-hdr"><div class="assess-icon proj">&#128640;</div><div class="assess-card-info"><h4>' + p.title + '</h4><p>Final project &middot; Submit your complete work</p></div><div class="assess-meta">' + chip + '</div></div>' + body + '</div>';
}

/* QUIZ ENGINE */
function startQuiz(type, assessId) {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  var items;
  if (type === 'quiz') {
    for (var i = 0; i < a.quizzes.length; i++) { if (a.quizzes[i].id === assessId) { items = a.quizzes[i].questions; break; } }
  } else {
    items = a.exam.questions;
  }

  qm_items      = items;
  qm_idx        = 0;
  qm_answers    = {};
  qm_assessId   = assessId;
  qm_assessType = type;
  qm_courseId   = pm_courseId;

  var label = type === 'exam' ? 'Final Exam' : (function() { for (var i = 0; i < a.quizzes.length; i++) { if (a.quizzes[i].id === assessId) return a.quizzes[i].title; } })();
  document.getElementById('qm-title').textContent = label;
  renderQuestion();
  document.getElementById('quizModal').classList.add('open');
}

function renderQuestion() {
  var q     = qm_items[qm_idx];
  var total = qm_items.length;
  var pct   = Math.round((qm_idx / total) * 100);
  document.getElementById('qm-subtitle').textContent = 'Question ' + (qm_idx + 1) + ' of ' + total;
  document.getElementById('qm-prog').style.width = pct + '%';

  var answered = qm_answers[qm_idx] !== undefined;
  var sel      = qm_answers[qm_idx];

  var optionsHtml = q.options.map(function(opt, i) {
    var cls = 'option-btn';
    if (answered) {
      if (i === q.answer) cls += ' correct';
      else if (i === sel && sel !== q.answer) cls += ' wrong';
    } else if (i === sel) cls += ' selected';
    return '<button class="' + cls + '" ' + (answered ? 'disabled' : '') + ' onclick="selectOption(' + i + ')">' + opt + '</button>';
  }).join('');

  document.getElementById('qm-content').innerHTML =
    '<div class="question-num">Question ' + (qm_idx + 1) + '</div>' +
    '<div class="question-text">' + q.q + '</div>' +
    '<div class="options-list">' + optionsHtml + '</div>';

  document.getElementById('qm-nav').innerHTML =
    '<button class="btn-quiz-nav secondary" onclick="closeQuizModal()" style="margin-right:auto;">&#x2715; Exit</button>' +
    (qm_idx < total - 1
      ? '<button class="btn-quiz-nav primary" onclick="nextQuestion()" ' + (answered ? '' : 'disabled') + '>Next &rarr;</button>'
      : '<button class="btn-quiz-nav primary" onclick="submitQuiz()" ' + (answered ? '' : 'disabled') + '>Submit</button>');
}

function selectOption(i) {
  if (qm_answers[qm_idx] !== undefined) return;
  qm_answers[qm_idx] = i;
  renderQuestion();
}

function nextQuestion() {
  if (qm_idx < qm_items.length - 1) { qm_idx++; renderQuestion(); }
}

function submitQuiz() {
  var correct = 0;
  qm_items.forEach(function(q, i) { if (qm_answers[i] === q.answer) correct++; });
  var score  = Math.round((correct / qm_items.length) * 100);
  var passed = score >= 75;

  if (!assessResults[qm_courseId]) assessResults[qm_courseId] = {};
  var resultData = { score: score, passed: passed, date: new Date().toLocaleDateString() };
  assessResults[qm_courseId][qm_assessId] = resultData;

  saveAssessToFirebase(qm_courseId, qm_assessId, { score: score, passed: passed, date: resultData.date, type: qm_assessType });
  showResultScreen(score, passed, correct);
}

function showResultScreen(score, passed, correct) {
  var total = qm_items.length;
  document.getElementById('qm-subtitle').textContent = 'Results';
  document.getElementById('qm-prog').style.width = '100%';
  document.getElementById('qm-content').innerHTML =
    '<div class="quiz-result">' +
    '<div class="result-circle ' + (passed ? 'pass' : 'fail') + '">' + score + '%</div>' +
    '<div class="result-title">' + (passed ? '&#127881; Passed!' : '&#128532; Try Again') + '</div>' +
    '<div class="result-sub">' + (passed ? 'Great job! You passed this assessment.' : 'You need 75% to pass. You scored ' + score + '%.') + '</div>' +
    '<div class="result-stats">' +
    '<div class="result-stat"><div class="stat-val">' + correct + '</div><div class="stat-lbl">Correct</div></div>' +
    '<div class="result-stat"><div class="stat-val">' + (total - correct) + '</div><div class="stat-lbl">Wrong</div></div>' +
    '<div class="result-stat"><div class="stat-val">' + score + '%</div><div class="stat-lbl">Score</div></div>' +
    '</div></div>';
  document.getElementById('qm-nav').innerHTML = '<button class="btn-quiz-nav primary" style="margin:0 auto;" onclick="closeQuizModal()">Done</button>';
}

function closeQuizModal() {
  document.getElementById('quizModal').classList.remove('open');
  renderAssessPanels();
  updateCertSection();
  renderCards();
}

/* ACTIVITY / PROJECT SUBMIT */
function submitActivity(actId) {
  var linkEl = document.getElementById('act-link-' + actId);
  var noteEl = document.getElementById('act-note-' + actId);
  var link = linkEl ? linkEl.value.trim() : '';
  var note = noteEl ? noteEl.value.trim() : '';
  if (!link) { showToast('Link Required', 'Please provide your work link before submitting.'); return; }
  if (!assessResults[pm_courseId]) assessResults[pm_courseId] = {};
  var payload = { submitted: true, link: link, note: note, date: new Date().toLocaleDateString() };
  assessResults[pm_courseId][actId] = payload;
  saveAssessToFirebase(pm_courseId, actId, { submitted: true, link: link, note: note, date: payload.date, type: 'activity' });
  showToast('Activity Submitted! \u2713', 'Your work has been recorded.');
  renderActivityPanel();
  updateTabBadges();
  updateCertSection();
  renderCards();
}

function resubmitActivity(actId) {
  if (assessResults[pm_courseId]) delete assessResults[pm_courseId][actId];
  renderActivityPanel();
}

function submitProject(projId) {
  var linkEl = document.getElementById('proj-link-' + projId);
  var noteEl = document.getElementById('proj-note-' + projId);
  var link = linkEl ? linkEl.value.trim() : '';
  var note = noteEl ? noteEl.value.trim() : '';
  if (!link) { showToast('Link Required', 'Please provide your project link before submitting.'); return; }
  if (!assessResults[pm_courseId]) assessResults[pm_courseId] = {};
  var payload = { submitted: true, link: link, note: note, date: new Date().toLocaleDateString() };
  assessResults[pm_courseId][projId] = payload;
  saveAssessToFirebase(pm_courseId, projId, { submitted: true, link: link, note: note, date: payload.date, type: 'project' });
  showToast('Project Submitted! \ud83d\ude80', 'Your final project has been recorded.');
  renderProjectPanel();
  updateTabBadges();
  updateCertSection();
  renderCards();
}

function resubmitProject(projId) {
  if (assessResults[pm_courseId]) delete assessResults[pm_courseId][projId];
  renderProjectPanel();
}

/* CERTIFICATE */
function isCertEligible(cid) {
  var a = COURSE_ASSESSMENTS[cid];
  if (!a) return false;
  var r = assessResults[cid] || {};
  var lessonsDone    = getLessonProgress(cid) === 100;
  var quizzesPassed  = a.quizzes.every(function(q) { return r[q.id] && r[q.id].passed; });
  var examPassed     = r[a.exam.id] && r[a.exam.id].passed;
  var activitiesDone = a.activities.every(function(ac) { return r[ac.id] && r[ac.id].submitted; });
  var projectDone    = r[a.project.id] && r[a.project.id].submitted;
  return lessonsDone && quizzesPassed && examPassed && activitiesDone && projectDone;
}

function updateCertSection() {
  var a = COURSE_ASSESSMENTS[pm_courseId];
  if (!a) return;
  var r = assessResults[pm_courseId] || {};

  var requirements = [
    { label: 'All lessons',                            met: getLessonProgress(pm_courseId) === 100 },
    { label: 'Quizzes (' + a.quizzes.length + ')',     met: a.quizzes.every(function(q) { return r[q.id] && r[q.id].passed; }) },
    { label: 'Final exam',                             met: !!(r[a.exam.id] && r[a.exam.id].passed) },
    { label: 'Activities (' + a.activities.length + ')', met: a.activities.every(function(ac) { return r[ac.id] && r[ac.id].submitted; }) },
    { label: 'Final project',                          met: !!(r[a.project.id] && r[a.project.id].submitted) }
  ];

  document.getElementById('cert-reqs').innerHTML = requirements.map(function(req) {
    return '<span class="cert-req-chip ' + (req.met ? 'met' : '') + '">' + (req.met ? '&#10003;' : '&#9675;') + ' ' + req.label + '</span>';
  }).join('');

  var eligible = isCertEligible(pm_courseId);
  document.getElementById('btn-get-cert').disabled = !eligible;
}

function openCertModal() {
  if (!isCertEligible(pm_courseId)) return;
  document.getElementById('cert-modal-title').textContent = 'Congratulations! \ud83c\udf89';
  document.getElementById('cert-modal-body').textContent  =
    'You\'ve completed "' + pm_courseTitle + '" — all lessons, quizzes, exam, activities, and your final project. Your certificate is ready!';
  document.getElementById('certModal').classList.add('open');
  saveCertToFirebase(pm_courseId);
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('open');
}

function downloadCertificate() {
  var win = window.open('', '_blank');
  var name = (currentUser && (currentUser.displayName || currentUser.email)) || 'Student';
  var date = new Date().toLocaleDateString('en-PH', {year:'numeric',month:'long',day:'numeric'});
  win.document.write('<!DOCTYPE html><html><head><title>Certificate - ' + pm_courseTitle + '</title><style>body{font-family:Georgia,serif;background:#FFFBEB;color:#1e293b;margin:0;padding:60px 80px;text-align:center;}.border{border:8px double #FBC156;padding:60px;min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;}h1{font-size:2.8rem;font-weight:900;color:#92400E;margin-bottom:10px;}.subtitle{font-size:1.1rem;color:#6B7280;margin-bottom:40px;}.name{font-size:2rem;font-weight:700;color:#1e293b;border-bottom:2px solid #FBC156;display:inline-block;padding:0 30px 8px;margin-bottom:20px;}.course{font-size:1.5rem;font-weight:700;color:#92400E;margin-bottom:8px;}.desc{font-size:0.95rem;color:#6B7280;margin-bottom:40px;}.date{font-size:0.85rem;color:#9CA3AF;}.seal{font-size:4rem;margin-bottom:10px;}@media print{body{background:white;}}</style></head><body onload="window.print()"><div class="border"><div class="seal">&#127942;</div><h1>Certificate of Completion</h1><p class="subtitle">This is to certify that</p><div class="name">' + name + '</div><p class="subtitle">has successfully completed the course</p><div class="course">' + pm_courseTitle + '</div><p class="desc">Issued by SkillPace &middot; All assessments passed with a score of &ge; 75%</p><p class="date">Issued on ' + date + '</p></div></body></html>');
  win.document.close();
}

/* MOBILE MENU */
function toggleMobileMenu() {
  document.getElementById('mobileSidebar').classList.toggle('open');
  document.getElementById('mobileOverlay').classList.toggle('show');
}

/* TOAST */
var toastTimer;
function showToast(title, desc) {
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-desc').textContent  = desc;
  var el = document.getElementById('toast');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { el.classList.remove('show'); }, 3500);
}

/* FIREBASE HELPERS */
function saveProgressToFirebase() {
  if (!currentUser || !window._db) return;
  window._db.collection('progress').doc(currentUser.uid).set({
    lessons: pm_completed,
    updatedAt: new Date().toISOString()
  }, { merge: true }).catch(console.error);
}

function saveAssessToFirebase(courseId, assessId, data) {
  if (!currentUser || !window._db) return;
  var payload = { updatedAt: new Date().toISOString() };
  payload['assessments.' + courseId + '.' + assessId] = data;
  window._db.collection('progress').doc(currentUser.uid).set({
    assessments: { [courseId]: { [assessId]: data } },
    updatedAt: new Date().toISOString()
  }, { merge: true }).catch(console.error);
}

function saveCertToFirebase(courseId) {
  if (!currentUser || !window._db) return;
  window._db.collection('certificates').doc(currentUser.uid + '_' + courseId).set({
    uid: currentUser.uid,
    email: currentUser.email,
    displayName: currentUser.displayName || '',
    courseId: courseId,
    courseTitle: pm_courseTitle,
    issuedAt: new Date().toISOString()
  }).catch(console.error);
}

async function loadProgressFromFirebase(uid) {
  if (!window._db) return;
  try {
    var docSnap = await window._db.collection('progress').doc(uid).get();
    if (docSnap.exists()) {
      var d = docSnap.data();
      if (d.lessons)     pm_completed  = d.lessons;
      if (d.assessments) assessResults = d.assessments;
    }
  } catch(e) { console.error(e); }
  renderCards();
}

renderCards();