/**
Don't mind the shitty code, this is my first js "project".
Also, since I'm an 'authorized cheap'o' myself, I didn't want to spend much time working on this,
since time=money, and I want to save money...

If you got to this page for somereason, I hope you don't mind I hard-coded all of the sentences instead of reading them from a file
of something like that.

Hope you enjoy!

Itai - Authorized Cheap Developer.

**/









var excludeUnempStudentIndi=[4,5];
var maleSentences=["אני כל החודש במילואים",
"אני בדיוק בנסיעת עסקים",
"הבייביסיטר הבריזה לי",
"כל החבר'ה מהעבודה הולכים, מישהו חייב להישאר זמין במשרד",
"אני כל החודש במילואים",
"אני בדיוק בנסיעת עסקים",
"הבייביסיטר הבריזה לי",
"כל החבר'ה מהעבודה הולכים, מישהו חייב להישאר זמין במשרד",
"אני חייב להכין את עבודת הסמסטר מחדש, החתול שלי תקע לי את המחשב על קאפס לוק" ,//only student and exclude 1-21
"אני בדיוק עובר גירושים קשים, אין לי כסף לחתונה", //exclude 1-21
"אני לא מוכן לתמוך במוסד הנישואים.",
"אני טס לראות את הזוהר הצפוני",
"אני בדיוק עובר גירושים קשים, אין לי כסף לחתונה",
"זו בדיק העונה של שפעת העופות, אני לא יכול לבוא",
"אני לא יכול לשתות, ותכלס למה לי לבוא מבלי לשתות",
"?אני לא מונוגומיסט, יש מצב אני בא עם 8 בני זוג",
"הייתי בא, אבל זה נופל לי בדיוק על פסטיבל וולקרמורד בגרמינה, אני טס",
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
"אני לא מוכנה לתמוך במוסד הנישואים",
"אני טסה לראות את הזוהר הצפוני",
"אני בדיוק עוברת  גירושים קשים, אין לי כסף לחתונה",
"אני חייבת להכין את עבודת הסמסטר מחדש, החתול שלי תקע לי את המחשב על קאפס לוק",//only student
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
"אני טסה לראות את הזוהר הצפוני",
"מאז שראיתי משחקי הכס אני בטראומה מחתונות",
"אכלתי אתמול חומוס מקולקל",
"שללו לי את הרישיון ואין תחבורה ציבורית בשבת",
"הדג זהב שלי בדיוק נפטר, אנחנו עדיין יושבים שבעה.",
"?אני לא מונוגומיסטית, יש מצב אני באה עם 8 בני זוג",
"אני בדיוק עושה את שביל ישראל",
"אני בויפאסנה",
"יש לי אלרגיה קשה למוסיקה מזרחית"
];

var errorMessage="לא ניתן לקבל תירוץ, אנא מלא את כל הפרטים";
var lastAge,lastGender,lastLocation,lastStatus,lastRelation,lastSentence="";
function getSentence(){
  var selectOne = document.getElementById("selectOne");
  var gender =selectOne.options[selectOne.selectedIndex].value;
  var selectTwo = document.getElementById("selectTwo");
  var age =selectTwo.options[selectTwo.selectedIndex].value;
  var selectThree = document.getElementById("selectThree");
  var location=selectThree.options[selectThree.selectedIndex].value;
  var selectFour = document.getElementById("selectFour");
  var relation =selectFour.options[selectFour.selectedIndex].value;
  var selectFive = document.getElementById("selectFive");
  var status =selectFive.options[selectFive.selectedIndex].value;
  var number=0;
  var sentence="";

  if(validateFields(gender,age,location,relation,status)){
    return errorMessage;
  }
  //Really stupid logic :D
  if(age==1){
    number = Math.floor(Math.random() * getLength(gender));
    while(number<5 || !checkExclude(status,number)){
    //  console.log(status+"|"+number);
      number = Math.floor(Math.random() * getLength(gender));
    }
  }else{
    number = Math.floor(Math.random() * getLength(gender));
  }
  if(gender=='male'){
    sentence=maleSentences[number];
  }else{
    sentence=femaleSentences[number];
  }
  //console.log("checkLastSentence");
  if(checkLastSentence(gender,age,location,relation,status)==true){
    if(lastSentence!=""){
      sentence=lastSentence;
    }
  }else{
    lastSentence=sentence;
  }
  updateLastChoice(gender,age,location,relation,status);
  goToButtom();
  return sentence;
}
function validateFields(gender,age,location,relation,status){
  if(gender+age+location+relation+status>=100){
    return true;
  }
  return false;
}
function checkLastSentence(gender,age,location,relation,status){
  if(gender==lastGender && age==lastAge && location==lastLocation && relation==lastRelation && status==lastStatus){
    return true;
  }
  return false;
}
function checkExclude(status,number){
  if(status==2 || status==4){
    if(excludeUnempStudentIndi.contains(number)){
      return false;
    }
  }
  if(status==3){
    if(number==8)
    return true;
  }
  return true;
}
function updateLastChoice(gender,age,location,relation,status){
  //Update last choice
  lastGender = gender;
  lastAge=age;
  lastLocation=location;
  lastStatus=status;
  lastRelation=relation;
}

function getLength(gender){
  console.log('log ' + gender);
  if(gender=='male'){
    return maleSentences.length;
  }
  return femaleSentences.length;
}

function goToButtom(){
  var documentHeight=document.documentElement.offsetHeight;
  var viewportHeight=window.innerHeight;
  window.scrollTo(0,documentHeight-viewportHeight);
}



function sharefbimage() {

  FB.ui({
    method: 'share',
    href: 'http://weddings.kamtzan.org',
    hashtag:'#קמצן_מורשה',
    picture: 'http://weddings.kamtzan.org/shareImg.png',
  }, function(response){});


}
