##이학선 haksunlee39 의 과제!
### 12월 23일
* todo list의 제목을 "HelloTODO"로 하기 위해서는 localhost:3000/todo?title=HelloTODO 로 접근해야 함

이 외에도 다양한 것들이 있음!
req.params
req.body 등등...

### 12월 24일
![GET](./docsimg/GET.png)
* GET 요청 3번을 하기 위해서는 localhost:3000/form?phrase=killa&repeat=3 을 해야한다
![POST](./docsimg/POST.png)
* POST 요청 7번을 하기 위해서는 localhost:3000/form 에 JSON 파일로 
```
{
	"phrase": "polar",
	"repeat": 7
}
```
을 하면 된다
![PUT](./docsimg/PUT.png)
* PUT 요청 5번을 하기 위해서는 위와 비슷하다 localhost:3000/form 에 JSON 파일로
```
{
	"phrase": "pocky",
	"repeat": 5
}
```
을 하면 된다
![DELETE](./docsimg/DELETE.png)
* DELETE 요청 1번을 하기위해서는 DELETE 명령으로 접속만 해주면 된다.