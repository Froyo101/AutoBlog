const postField = document.getElementById("postField");
const topLevelTagTests = [{exp:/#t:*/, tag:"h1"}, {exp:/#p:*/, elem:"p"}];
//const botLevelTagTests = []
//specialTagTests for TAG(), SER(), etc.? Map special content onto meta-level post object properties deciphered at post load?

function genPost() {
  let newPost = [{tital="", content=[], tags=[], serial=-1}];
  let content = postField.value;
  console.log(content);
  let topLevelContent = content.split("$$$");
  console.log(topLevelContent);
  //parseTopLevel(newPost)
}

function parseTopLevel(topLevelContent, newPost) {
  //regex, loop over split array, pat match and find sublevel patterns in each item
  for (item of topLevelContent) {
    let itemTag, itemContent; //Move up a level so as not to reinitialize every time?
    for (test of topLevelTagTests) {
      //if test.exp.match(item), itemTag = test.tag, itemContent = area of item after tag matched, break
      //handle specialtagtests inside of here on a case by case basis?
    }
    //call parseBotLevel item = parseBotLevel(item)
    newPost.content.push([itemTag, itemContent]);
  }
}

//can switch case for regex patterns, then inside of case statement can call addElement("htmlcode", "htmlcontent", newPost) (0r push info)