var express = require('express');
//설티된 module은 require명령어를 통해 불러 올 수 있고, express module을 ㄷexpress 라는 이름의 변수로 저장
var app = express();
//express에()가 붙는거으로 봐서 express module은 함수라는것을 알수있다. 모든module들이 함수는아님
//express module은 그냥함수도 아니고 생성자임
app.get('/', function (req,res) {
  res.send('항하이');
}); //서버의 root에 get요청이 왔을때 '항하이'라는 신호를 클라이엉ㄴ트에 보내라는 명령어
//app.get은 eventListener이고 두개의 argument를 받는데,첫번째는 조건,두번쨰는 반응함수임.

app.listen(4000,function() {
  console.log('서버온@');
});//app.listen도 두개의 argument를 받는데,첫번째는 port번호이고, 두번째는 함수임.4000번포트를 통해 들어오는 신호를 감지하여 반응하라는명령.
//두번째함수는 옵션으로 꼭필요한 것은 아니지만 콘솔창에 뭐가 어떨게 되고 있는지 알려주기 위해 사용
