const article=document.querySelector(".post-body");

if(article){

const parser=new StreamFlixParser(article.innerText);

console.log(parser.get("سنة الإنتاج"));

console.log(parser.get("الحالة"));

console.log(parser.get("عدد المواسم"));

console.log(parser.get("التقييم"));

}
