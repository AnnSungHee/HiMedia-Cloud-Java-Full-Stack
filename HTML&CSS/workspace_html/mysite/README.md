# 과제 Mysite

## 목표
- 새로운 태그 이해하기
    1. `<header>` : 소개 및 탐색에 도움을 주는 콘텐츠
    2. `<nav>` : 현재 페이지 내, 또는 다른 페이지로의 링크
    3. `<main>` : `<body>`의 주요 콘텐츠, 문서의 핵심 주제나 앱의 핵심 기능 직간접 컨텐츠
    4. `<aside>` : 문서의 주요 내용과 간접적으로만 연관된 부분
    5. `<footer>` : 가장 가까운 구획 콘텐츠나 구획 루트
- CSS 중복으로 참조해서 각 코드별로 분리하기
- 폴더별로 HTML 파일 분리하기

## 디렉토리 구조
```text
│  mysite.html
│  README.md
├─assets
│  ├─css
│  │      frame.css
│  │      index.css
│  │      reset.css
│  └─img
│          back_img01.jpg
│          back_img02.jpg
│          flower.jpg
│          jung.jpg
│          moon.png
│          star.jpg
│          yoo.jpg
│
├─mysite-사이트캡쳐
│  │  01-메인-시작.png
│  │  02-유저-회원가입.png
│  │  03-유저-회원정보수정.png
│  │  04-유저-로그인.png
│  │  05-방명록-리스트.png
│  │  06-갤러리-리스트.png
│  │  07-게시판-리스트.png
│  │  08-게시판-읽기.png
│  │  09-게시판-글쓰기.png
│  │  10-게시판-수정.png
│  │
│  └─assets
│      └─image
│              Gangho-dong.jpg
│              Jeongjae-Lee.jpg
│              JeonSoMin.jpg
│              JiseokJin.jpg
│              JungWooSung.jpg
│              Kim-Jong-kook.jpg
│              Lee-Kwang-soo.jpg
│              LeeHyoRi.jpg
│              Park-Myung- Soo.jpg
│              profile.jpg
│              Song-Ji-Hyo.jpg
│              Yang-Se-chan.jpg
│              Yoo-Jae-Suk.jpg
│
└─views
    ├─account
    │      account-profile.html
    │      account-signin.html
    │      account-signup.html
    │
    ├─board
    │      board-list.html
    │      board-read.html
    │      board-update.html
    │      board-write.html
    │
    ├─gallery
    │      gallery-list.html
    │
    ├─guest-book
    │      guest-book-list.html
    │
    └─main
            index.html
```




## 의문점
초반에 뼈대가 될 HTML 문서를 작성한다고 할 때 `<aside>` 태그를 작성하고 내부의 내용을 안 채워넣을시에 어떻게 동작을 할까?


 ---
![alt text](mysite-사이트캡쳐/01-메인-시작.png)
 ---
![alt text](mysite-사이트캡쳐/02-유저-회원가입.png)
 ---
![alt text](mysite-사이트캡쳐/03-유저-회원정보수정.png) 
 ---
![alt text](mysite-사이트캡쳐/04-유저-로그인.png) 
 ---
![alt text](mysite-사이트캡쳐/05-방명록-리스트.png) 
 ---
![alt text](mysite-사이트캡쳐/06-갤러리-리스트.png) 
 ---
![alt text](mysite-사이트캡쳐/07-게시판-리스트.png) 
 ---
![alt text](mysite-사이트캡쳐/08-게시판-읽기.png) 
 ---
![alt text](mysite-사이트캡쳐/09-게시판-글쓰기.png) 
 ---
![alt text](mysite-사이트캡쳐/10-게시판-수정.png)