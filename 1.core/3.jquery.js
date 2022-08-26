$('#myId') // <div id='myId><div> 이 div 엘레멘트가 컬렉션안에 들어가서 리턴됨.

// 과제: class myClass DOM들을 찾아라.
$('.myClass') //css에서는 .으로 표현...

// 과제: name attribute value 가 surname(속성) 인 input(객체) DOM 들을 찾아라.
$('input[name="surname"]') // <input name='surname'/> 이 엘레멘트 찾는 것.. 태그셀렉터

$('#contents ul.people li')
// 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</div>
*/ 

$('a.external:first') //마지막은 last
/*
<a class='external'></a> -- first 붙어있어서 얘만 리턴됨.
<a class='external'></a>
*/

$('li:odd') //0부터 셈.
/*
<ul>
    <li></li>
    <li></li> -- 1 리턴
    <li></li>
    <li></li> -- 3 리턴
</ul>
*/


$('div:visible') // 보이는 객체만 찍겠다?

$('div:gt(1)') // 컬렉션안에 들어갈 원소인덱션 1보다 크다
/*
<div></div>
<div></div>
<div></div> -- 2 얘 리턴
*/

$('div:animated') // 작동중인 애니메이션 골라냄

$('a[rel$="thinger"]') // 속성값이 thinger 로 끝나는 것 찾겠다.
/* 두개 검색됨.
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') //foo붙어있는 div 먼저 찾아내고, 그 중 p 갖고있는거 골라냄
/*
<div class='foo'> -- 얘가 리턴
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current') //제이쿼리가 리턴하는 컬렉션에는 li가 들어있다. current class가 붙어있는 것 리턴.
/*
<ul>
    <li class='current'></li> -- 얘가 리턴
    <li></li>
</ul>
*/

$('ul li').not('.current') // not에서 리턴하는 컬렉션에 들어있는 li는 67번줄.

$('ul li').eq(1) // 1번 인덱스의 객체를 찾아내고싶다. equal. 67번줄 찾아냄. 한놈만.
// 73번까진 css 복습,, 75부턴 javascript 복습
$('form :button') // 스페이스바 디펜던트? button like?
/* 버튼이랑 버튼타입 리턴
    <form>
        <button></button> -- 얘랑
        <input type='button'/> -- 얘가 리턴됨
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // < input type='checkbox'/>

$('form :checked') // 폼에서 체크된 녀석들을 찾겠다 체크된옵션
/*
<input type='radio'/> -- 체크된 라디오
<input type='checkbox'/> -- 
<select><option></option></select> -- 체크된 옵션?
*/

$('form :selected')
/*
<select><option></option></select> -- checked & selected 둘 다에서 걸림
*/

$('form :enabled') // 보이는 것만 골라냄
$('form :disabled') // 안보이는 것만 골라냄

$('form :file') // <input type='file'/>

$('form :input') // input like?
/*
<input type='text'/> // input type, button 등등
<textarea></textarea>
<select></select>
<button type='submit'></button> // 버튼타입속성값 하나는 submit, button, reset 얘네 다 input like 에 해당.
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') // : 앞에 스페이스X -> 자식 아닌 것.
// 과제: 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<form> <input type='radio' name='gender'/> </form>
*/

$('form :reset') // <input type='reset'/>

$('form :submit') // <input type='submit'/>
