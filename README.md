# 코드잇 스프린트 13기 3팀(파트 2)

> 개발기간: 2025.01.24 ~

## Contributors

<table align="center">
  <thead>
    <tr>
      <th align="center" width="250px;">팀원</th>
      <th align="center" width="600px;">역할</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" height="300px">
        <a href="https://github.com/hyeonjiroh">
          <img src="https://avatars.githubusercontent.com/u/108173863?v=4" width="150px;" height="150px;" alt="노현지" />
          <h3><b>노현지</b></h3>
        </a>
      </td>
      <td>
        <ul>
          <li>목록 페이지 - 후원 리스트 섹션</li><br>
          <li>목록 페이지 - 후원 모달</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center" height="300px">
        <a href="https://github.com/doctor-taco">
          <img src="https://avatars.githubusercontent.com/u/100111506?v=4" width="150px;" height="150px;" alt="박재현" />
          <h3><b>박재현</b></h3>
        </a>
      </td>
      <td>
        <ul>
          <li>목록 페이지 - 크레딧 섹션</li><br>
          <li>목록 페이지 - 크레딧 충전 모달</li><br>
          <li>목록 페이지 - 크레딧 부족 모달</li>
        </ul>
      </td>  
    </tr>
    <tr>
      <td align="center" height="300px">
        <a href="https://github.com/juha399">
          <img src="https://avatars.githubusercontent.com/u/174230233?v=4" width="150px;" height="150px;" alt="신주하" />
          <h3><b>신주하</b></h3>
        </a>
      </td>
      <td>
          <li>마이페이지 페이지 - 크레딧 섹션</li><br>
          <li>이미지 컴포넌트(공통)</li>
      </td>
    </tr>
    <tr>
      <td align="center" height="300px">
        <a href="https://github.com/yoonc01">
          <img src="https://avatars.githubusercontent.com/u/143938662?v=4" width="150px;" height="150px;" alt="윤효준" />
          <h3><b>윤효준</b></h3>
        </a>
      </td>
      <td>
          <li>랜딩 페이지</li><br>
          <li>Nav 컴포넌트(공통)</li><br>
          <li>모달 컴포넌트(공통)</li><br>
          <li>버튼 컴포넌트(공통)</li>
      </td>
    </tr>
    <tr>
      <td align="center" height="300px">
        <a href="https://github.com/jihye5081">
          <img src="https://avatars.githubusercontent.com/u/87625901?v=4" width="150px;" height="150px;" alt="임지혜" />
          <h3><b>임지혜</b></h3>
        </a>
      </td>
      <td>
          <li>목록 페이지 - 차트 리스트 섹션</li><br>
          <li>목록 페이지 - 투표 모달</li>
      </td>
    </tr>
  </tbody>
</table>

## 컨벤션

### Commit Message

```
타입: 요약
```

#### 타입

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 내용 변경
- style : 코드 스타일 변경(코드 포메팅, 세미콜론 누락)
- design: 사용자 UI 디자인 변경(CSS 등)
- refactor : 코드 리팩토링
- test : 테스트 코드 작성
- build : 빌드 파일 수정
- ci : CI 설정 파일 수정
- perf : 성능 개선
- chore : 빌드 수정, 패키지 매니저 설정, 운영 코드 변경이 없는 경우 등
- rename : 파일명 혹은 폴더명을 수젇한 경우
- remove : 파일을 삭제만 한 경우

### 브랜치명

```
<!-- 컨벤션 -->
타입/#이슈번호/세부내용

<!-- 예시 -->
feat/#27/Button

```

### 이슈 제목

```
<!-- 컨벤션 -->
[타입] 내용

<!-- 예시 -->
[feat] Component Base - Button
```

### PR 제목

```
<!-- 컨벤션 -->
타입 : #이슈번호/내용

<!-- 예시 -->
feat : #27/Component Base - Button 기능 개발
```

## 프로젝트 구조

```
📦 src
├──── apis               # API 관련 함수 및 관리 파일
│
├──── assets             # 이미지 및 정적 파일 관리
│     ├── icons          # 아이콘 관련 파일
│     │
│     └── images         # 일반 이미지 파일
│
├──── components         # 공통 컴포넌트 관리
│
├──── utils              # 유틸리티 함수 관리
│
└──── pages              # 라우터 페이지 관리
      ├── landingPage    # 랜딩 페이지 관련 파일
      │
      ├── listPage       # 리스트 페이지 관련 파일
      │
      └── myPage         # 마이페이지 관련 파일
```
