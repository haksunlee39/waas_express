##이학선 haksunlee39 의 과제!
### 12월 23일
* todo list의 제목을 "HelloTODO"로 하기 위해서는 localhost:3000/todo?title=HelloTODO 로 접근해야 함

이 외에도 다양한 것들이 있음!
req.params
req.body 등등...

### 12월 24일
![GET](./docsimg/GET.jpg)
* GET 요청 3번을 하기 위해서는 localhost:3000/form?phrase=killa&repeat=3 을 해야한다

![POST](./docsimg/POST.jpg)
* POST 요청 7번을 하기 위해서는 localhost:3000/form 에 JSON 파일로 
```
{
	"phrase": "polar",
	"repeat": 7
}
```
을 하면 된다
![PUT](./docsimg/PUT.jpg)

* PUT 요청 5번을 하기 위해서는 위와 비슷하다 localhost:3000/form 에 JSON 파일로
```
{
	"phrase": "pocky",
	"repeat": 5
}
```
을 하면 된다
![DELETE](./docsimg/DELETE.jpg)

* DELETE 요청 1번을 하기위해서는 DELETE 명령으로 접속만 해주면 된다.

### 12월 25일
*가능한 경우는 4가지!

* 먼저 text/html 형식으로 보내는 것
![12_25_1](/docsimg/12_25_1.jpg)

* 다음은 text/plain 형식으로 보내고 'image' 라는 KEY 에 y 라는 값을 넣고 보내는 것
![12_25_2](/docsimg/12_25_2.jpg)

* 먼저 text/plain 형식으로 보내는 것
![12_25_3](/docsimg/12_25_3.jpg)

* 위와 겹치지 않는 방법으로 보내는 것
![12_25_4](/docsimg/12_25_4.jpg)

#### 12월 26일: login 구현체 파악과 response code 이해
1. 다음의 module이 추가 되었습니다, npm install을 통해 추가 module을 설치해주세요.
* `cookie-parser`: cookie data parse
* body-parser의 경우 설치하지 않고 express inline을 활용했음

2. 이번 구현체는 cookie를 이용한 간단한 login 서비스 입니다.
* 유의해야할 점: 보안적으로 매우 취약합니다, 이해를 돕기 위해 쉽게 구현되어 있음
    * cookie가 아닌 session이 적절함
    * SSL확보를 위해 https로 전환해야 함
    * 높은 보안성을 필요로 하는 경우, SSL외에도 client에서 공개키 암호화한 text를 server에게 전송해야 함
    * server에 저장하는 login 정보는 hash 처리되어야 함

`routes/login.js` 코드를 보고 파악해야 하는 사항은 다음과 같습니다.
* cookie-parser와 cookie 설정법
* cookie의 timeout, age
* chrome 개발자 도구 > applications > cookie에서 cookie가 생긴 것을 확인 (**screenshot 기록해둘 것**)
* login process과 redirect의 response code
* `/login/isLoggin`에서 400, 200 response code 확인

### 12월 27일: login 구현체 수정
26일의 구현체를 살펴보면 1개의 ID로만 로그인을 하는 상황입니다.
각자 새로운 로그인 ID를 생성해 집어넣고, waas가 아닌 id로 로그인한 경우 `/login/isLogin`에서 forbidden(403)을 띄워주도록 구현체를 수정해주세요.
수정한 부분에 대한 간단한 설명과, screeenshot을 같이 첨부해주시면 됩니다.
