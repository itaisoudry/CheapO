/**
Don't mind the shitty code, this is my first js "project".
Also, since I'm an 'authorized cheap'o' myself, I didn't want to spend much time working on this,
since time=money, and I want to save money...

If you got to this page for somereason, I hope you don't mind I hard-coded all of the sentences instead of reading them from a file
of something like that.

Hope you enjoy!

Itai.

**/



var maleSentences=["אני כל החודש במילואים",
"אני בדיוק בנסיעת עסקים",
"הבייביסיטר הבריזה לי",
"כל החבר'ה מהעבודה הולכים, מישהו חייב להישאר זמין במשרד",
"אני כל החודש במילואים",
"אני בדיוק בנסיעת עסקים",
"הבייביסיטר הבריזה לי",
"כל החבר'ה מהעבודה הולכים, מישהו חייב להישאר זמין במשרד","החתול שלי תקע לי את המחשב על caps lock, אני חייב להכין את עבודת הסמסטר מחדש." ,//only student and exclude 1-21
"אני בדיוק עובר גירושים קשים, אין לי כסף לחתונה", //exclude 1-21
"אני לא מוכן לתמוך במוסד הנישואים.",
"אני טס לראות את הזוהר הצפוני",
"אני בדיוק עובר גירושים קשים, אין לי כסף לחתונה",
"זו בדיק העונה של שפעת העופות, אני לא יכול לבוא",
"אני לא יכול לשתות, ותכלס למה לי לבוא מבלי לשתות",
"?אני לא מונוגומיסט, יש מצב אני בא עם 8 בני זוג",
"הייתי בא, אבל זה נופל לי בדיוק על פסטיבל Völkermord בגרמניה, אני טס",
"לא שמעת? אני טבעוני, החל מעוד שבוע… לא מסוגל לראות רצח של חיות",
"אני בדיוק עושה צום לקראת ניקוי קיבה",
"זה יוצא בדיוק על הניתוח שקבעתי לטיפול בציפורן החודרנית",
"אח שלי מתחתן באותו יום",
"אני אחרי פרידה, קשה לי ללכת לאירועים לבד",
"אני טס לראות את הזוהר הצפוני",
"מאז שראיתי משחקי הכס אני בטראומה מחתונות",
"אכלתי אתמול חומוס מקולקל",
"שללו לי את הרישיון ואין תחבורה ציבורית בשבת",
"הדג זהב שלי בדיוק נפטר, אנחנו עדיין יושבים שבעה",
"אני בדיוק עושה את שביל ישראל",
"אני בויפאסנה",
"יש לי אלרגיה קשה למוסיקה מזרחית"
];
var femaleSentences=["אני כל החודש במילואים",
"אני בדיוק בנסיעת עסקים",
"הבייביסיטר הבריזה לי",
"כל החבר'ה מהעבודה הולכים, מישהו חייב להישאר זמין במשרד",
"החתול שלי תקע לי את המחשב על caps lock, אני חייבת להכין את עבודת הסמסטר מחדש",//only student
"אני לא מוכנה לתמוך במוסד הנישואים",
"אני טסה לראות את הזוהר הצפוני",
"אני בדיוק עוברת  גירושים קשים, אין לי כסף לחתונה",
"זו בדיק העונה של שפעת העופות, אני לא יכולה לבוא",
"אני לא יכולה לשתות, ותכלס למה לי לבוא מבלי לשתות",
"החתולה שלי חולה והיא משלשלת בכל הבית, אני לא יכולה להשאיר אותה לבד",
"יש לי פטיש לרבנים, לא בטוחה שאני אהיה מסוגלת להחזיק את עצמי",
"הייתי באה, אבל זה נופל לי בדיוק על פסטיבל Völkermord בגרמניה, אני טסה",
"לא שמעת? אני טבעונית, החל מעוד שבוע… לא מסוגלת לראות רצח של חיות",
"אני בדיוק עושה צום לקראת ניקוי קיבה",
"זה יוצא בדיוק על הניתוח שקבעתי לטיפול בציפורן החודרנית",
"אח שלי מתחתן באותו יום",
"אני אחרי פרידה, קשה לי ללכת לאירועים לבד",
"אני טס לראות את הזוהר הצפוני",
"מאז שראיתי משחקי הכס אני בטראומה מחתונות",
"אכלתי אתמול חומוס מקולקל",
"שללו לי את הרישיון ואין תחבורה ציבורית בשבת",
"הדג זהב שלי בדיוק נפטר, אנחנו עדיין יושבים שבעה.",
"?אני לא מונוגומיסטית, יש מצב אני באה עם 8 בני זוג",
"אני בדיוק עושה את שביל ישראל",
"אני בויפאסנה",
"יש לי אלרגיה קשה למוסיקה מזרחית"
];

function getSentence(){
  var selectOne = document.getElementById("selectOne");
  var gender =selectOne.options[selectOne.selectedIndex].value;
  var selectTwo = document.getElementById("selectTwo");
  var age =selectTwo.options[selectTwo.selectedIndex].value;
  var selectFour = document.getElementById("selectFour");
  var status =selectFour.options[selectFour.selectedIndex].value;
  var number=0;
  console.log(age);
  if(age==1){
    number = Math.floor(Math.random() * getLength(gender));
    while(number<5){
      number = Math.floor(Math.random() * getLength(gender));
    }
  }
  console.log('final ' +gender);
  if(gender=='male'){
    return maleSentences[number];
  }
  return femaleSentences[number];
}
function getLength(gender){
  console.log('log ' + gender);
  if(gender=='male'){
    return maleSentences.length;
  }
  return femaleSentences.length;
}
