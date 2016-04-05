var mongoose = require('./database');

var User = require('../models/user');
var Comic = require('../models/comic');

var users = [
  { // 0
    handle: "DunkLord",
    name:   "Bob Neverdunk"
  },
  { // 1
    handle: "MoneyMarge",
    name:   "Margaret Kalanchoe"
  }
];

var comicseed = [
  { month: '2',
    num: 701,
    link: '',
    year: '2010',
    news: '',
    safe_title: 'Science Valentine',
    transcript: 'I wanted to make you a science valentine\nwith charts and graphs of my feelings for you\n[[A graph shows romance and happiness. Romance cuts off, indicating a breakup before the meeting of the narrator and his current SO, and happiness dips accordingly. A line indicates where the couple first met; romance is jagged thereafter, initially upwards but later down. Happiness climbs slightly more steadily and then dips again. More lines indicate a period of dating and then one of engagement.]]\nand the happiness you\'ve brought me.\n\nBut the more I analyzed\n[[The narrator works at a computer]]\nr_0 =  0.20\nr_1 = -0.61\nr_2 = -0.83\nthe harder it became to defend my hypothesis.\n\nIn science, you can\'t publish results you know are wrong\nand you can\'t withhold them because they\'re not the ones you wanted.\n\nSo I was left with a question: do I make graphs because they\'re cute and funny,\n[[The narrator sits, looking at a sheet of paper.]]\nor am I a *scientist*?\n\nEnclosed are my results.\nI hope you can find somebody else\n[[A jagged, declining graph is superimposed over a red heart.]]\nto be your valentine.\n\n{{Title text: You don\'t use science to show that you\'re right, you use science to become right.}}',
    alt: 'You don\'t use science to show that you\'re right, you use science to become right.',
    img: 'http://imgs.xkcd.com/comics/science_valentine.png',
    title: 'Science Valentine',
    day: '12' },
  { month: '2',
    num: 706,
    link: '',
    year: '2010',
    news: '',
    safe_title: 'Freedom',
    transcript: '[[Two men face each other, conversing.]]\nFirst Man: Sometimes I\'m shocked to realize how many options I have.\nSecond Man: Oh?\n\n[[First Man shakes his fist.]]\nFirst Man: Like, at any moment in any conversation, I could just punch the person I was talking to, and all these potentially life-changing events would unfold.\n\n[[The two men converse.]]\nFirst Man: It\'s only my mental rules that stop me from punching you, or stripping naked, or getting on a plane to Fiji. Sure, rules have reasons. But shouldn\'t you exercise that freedom at least once before you did?\n\n<<WHAM>>\n\n[[First man is knocked down on the ground, dazed and bruised.]]\nFirst Man: Okay, I should have seen that coming.\nSecond Man: But you \ncouldn\'t\n! That\'s the beauty!\n\n{{Title text: Sometimes I\'m terrified to realize how many options other people have.}}',
    alt: 'Sometimes I\'m terrified to realize how many options other people have.',
    img: 'http://imgs.xkcd.com/comics/freedom.png',
    title: 'Freedom',
    day: '24' },
  { month: '8',
    num: 777,
    link: '',
    year: '2010',
    news: '',
    safe_title: 'Pore Strips',
    transcript: '[[A box of pore strips, marked "deep cleaning."]]\n\n[[Person examinnes the box.]]\n\n[[Person applies strip to face.]]\n\n[[Person pulls on strip.]]\n\n[[Person pulls skull out of head with pore strip.]]\n\n{{Title text: I\'m sure they\'re a harmful tool of the cosmetics-industrial complex and all, but my goodness do those strips ever work to pull gunk out of your pores. I was shocked, disgusted, and vaguely fascinated by the result.}}',
    alt: 'I\'m sure they\'re a harmful tool of the cosmetics-industrial complex and all, but my goodness do those strips ever work to pull gunk out of your pores. I was shocked, disgusted, and vaguely fascinated by the result.',
    img: 'http://imgs.xkcd.com/comics/pore_strips.png',
    title: 'Pore Strips',
    day: '9' },
  { month: '8',
    num: 779,
    link: '',
    year: '2010',
    news: '',
    safe_title: 'Anxiety',
    transcript: '[[There is an airport security checkpoint where a queue of ten passengers is waiting to go through a backscatter x-ray scanner. Near the back of the line, Hat Guy is standing next to a stand which says "Viagra \n $20". One passenger next to him is drinking a glass of water; another is contemplating the sign.]]\nSecurity Guard (thinking): Oh god.\n\n{{Title text: Don\'t need any, thanks. I have a backscattering fetish.}}',
    alt: 'Don\'t need any, thanks. I have a backscattering fetish.',
    img: 'http://imgs.xkcd.com/comics/anxiety.png',
    title: 'Anxiety',
    day: '13' },
  { month: '8',
    num: 778,
    link: '',
    year: '2010',
    news: '',
    safe_title: 'Scheduling',
    transcript: '[[Pizza guy enters through door; maid is dusting.]]\nPizza Guy: Pizza delivery! Did someone order a hot sausag--\nMaid: Mon dieu! Monsieur is home early--\nBoth: Wait, who are you?\n\nPizza guy: Wait, this is the Jones\', right? Their daughter was supposed to be having a party!\nMaid: No, I thought Mr. Jones was coming home early.\n\n[[Pizza guy is off-panel left as plumber enters from the right.]]\nPizza guy: But I thought--\nPlumber: Howdy, Mrs. Jones. I hear you need some plumbi--\nPlumber: Who are you?\n\n[[The pizza guy looks in a cabinet; the others are off-panel right.]]\nMaid: Sorry, big mixup.\nPizza guy: Hey, check out out--the Joneses have Agricola!\nPlumber: I love that game!\n\n[[Mr. Jones and Miss Jones arrive home. Pizza guy, maid, and plumber are sitting on the floor playing Agricola.]]\nMr. Jones: What in the name of ...\nPizza guy: Dammit, I wanted that grain.\nMaid: Hush, you have starting player.\n\n{{Title text: \'How about a little ... *family growth*?\'  \'Dude, that\'s not until round two.\'}}',
    alt: '\'How about a little ... *family growth*?\'  \'Dude, that\'s not until round two.\'',
    img: 'http://imgs.xkcd.com/comics/scheduling.png',
    title: 'Scheduling',
    day: '11' }
];

//Users
User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
  });
});

//Comics
Comic.remove({}, function(err) {
  if (err) console.log(err);
  Comic.create(comicseed, function(err, comics) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + comicseed.length  + " comics.");
      mongoose.connection.close(function(err) {
        if (err) console.log(err);
        process.exit(0);
      });
    }
  });
});
