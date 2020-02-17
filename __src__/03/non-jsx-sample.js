// src폴더안에 index.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
var img = document.createElement('img');
img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
