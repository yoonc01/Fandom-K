# Fandom-K
코드잇 스프린트 13기 Part 2 과정에서 3팀이 진행한 기초 프로젝트 **Fandom-K** 레포지토리입니다.

## 🚀 배포 주소
https://fandom-k-murex.vercel.app

## 📝 프로젝트 개요
**Fandom-K**는 후원이나 투표를 통해 좋아하는 아이돌을 응원할 수 있는 아이돌 팬덤 플랫폼입니다.
### 랜딩 페이지(/)
- Fandom-K의 초기 시작 페이지

### 목록 페이지(/list)
- 자신이 보유한 크레딧 개수 확인 및 충전
- 보유한 크레딧을 사용하여 좋아하는 아이돌을 후원
- 보유한 크레딧을 사용하여 좋아하는 아이돌에게 투표
  
### 마이 페이지(/mypage)
- 좋아하는 아이돌을 관심 아이돌 목록에 등록

## ⚙️ 주요 기능
### 랜딩 페이지
- 상단의 로고 클릭 시 localStorage의 크레딧 개수를 초기화하지 않고 목록 페이지로 이동합니다.
- '지금 시작하기' 버튼 클릭 시 localStorage의 크레딧 개수를 50개로 초기화하고 목록 페이지로 이동합니다.

### 목록 페이지
#### 내 크레딧
- localStorage에 저장된 현재 사용자의 크레딧 개수를 보여줍니다.
- '충전하기' 클릭 시 '크레딧 충전하기' 모달창이 나타나 크레딧을 충전할 수 있습니다.
- 크레딧은 100, 500, 1000 단위로 충전할 수 있습니다.
- 충전 완료 시 '충전 완료' 모달창이 나타남과 동시에 localStorage의 크레딧 개수가 충전한 개수만큼 늘어납니다.

#### 후원을 기다리는 조공
- PC 화면에서는 페이지 단위로, Tablet과 Mobile 화면에서는 무한 스크롤로 후원 목록을 보여줍니다.
- '후원하기' 버튼 클릭 시 '후원하기' 모달창이 나타나 보유한 크레딧을 사용하여 후원할 수 있습니다.
- 보유한 크레딧 이내에서 후원하고자 하는 크레딧 개수를 사용자가 직접 입력하면 '후원하기' 버튼이 활성화되어 후원이 가능해집니다.
- 후원 완료 시 '후원 완료' 모달창이 나타남과 동시에 후원한 크레딧 개수만큼 localStorage의 크레딧 개수가 줄어들고, 해당 아이돌의 후원된 크레딧 개수는 늘어납니다.

#### 이달의 차트
- 이달의 여자/남자 아이돌 토글 클릭 시 여자/남자 아이돌의 투표 순위를 확인할 수 있습니다.
- '차트 투표하기' 버튼 클릭 시 '이달의 여자/남자 아이돌' 모달창이 나타나 원하는 아이돌에게 투표할 수 있습니다.
- '투표하기' 버튼 클릭 시 보유 크레딧이 1000 크레딧 이상일 경우 1000 크레딧을 사용하여 원하는 아이돌에게 1표를 줄 수 있습니다.
- '투표하기' 버튼 클릭 시 보유 크레딧이 1000 크레딧 미만일 경우 크레딧 부족 모달창이 나타납니다.
- 크레딧 부족 모달창에서는 '확인' 버튼을 클릭하여 모달창을 닫거나 '충전하기' 버튼을 클릭하여 크레딧 충전 모달창으로 전환할 수 있습니다.

### 마이 페이지
#### 내가 관심있는 아이돌
- 관심 아이돌로 등록한 아이돌 목록을 확인할 수 있습니다.
- 각 아이돌 아이콘 우측 상단의 X 버튼 클릭 시 관심 아이돌 목록에서 사라집니다.
- 관심 아이돌의 개수가 특정 개수를 넘어가면 무한 스크롤을 통해 목록을 확인할 수 있습니다.

#### 관심 있는 아이돌을 추가해보세요.
- 관심 아이돌로 등록하고 싶은 아이돌을 여러 명 선택할 수 있습니다.
- 아이돌 아이콘을 클릭했을 때 해당 아이콘에 체크 표시가 추가됩니다.
- '추가하기' 버튼 클릭 시 체크 표시가 되어있는 아이돌들이 관심 아이돌로 등록됩니다.

### 헤더
- 중앙의 로고 클릭 시 목록 페이지로 이동합니다.
- 우측의 유저 프로필 클릭 시 마이 페이지로 이동합니다.

## ⏳ 개발 기간
2025.01.24 ~ 2025.02.12

## 👩🏻‍💻 팀원 소개
<table>
  <tr>
    <td align="center"><b>노현지</b></td>
    <td align="center"><b>박재현</b></td>
    <td align="center"><b>신주하</b></td>
    <td align="center"><b>윤효준</b></td>
    <td align="center"><b>임지혜</b></td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/hyeonjiroh">
        <img width="200px" src="https://avatars.githubusercontent.com/u/108173863?v=4"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/doctor-taco">
        <img width="200px" src="https://avatars.githubusercontent.com/u/100111506?v=4"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/juha399">
        <img width="200px" src="https://avatars.githubusercontent.com/u/174230233?v=4"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yoonc01">
        <img width="200px" src="https://avatars.githubusercontent.com/u/143938662?v=4"/>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jihye5081">
        <img width="200px" src="https://avatars.githubusercontent.com/u/87625901?v=4"/>
      </a>
    </td>
  </tr>
</table>

## 🤝 역할 분담
### 노현지
- 목록 페이지 - 후원을 기다리는 조공
- 목록 페이지 - 후원 모달
- 목록 페이지 - 후원 완료 모달
- 404 에러 페이지

### 박재현
- 크레딧 로컬 스토리지
- 목록 페이지 - 내 크레딧
- 목록 페이지 - 크레딧 충전 모달
- 목록 페이지 - 크레딧 충전 완료 모달
- 목록 페이지 - 크레딧 부족 모달

### 신주하
- 아이돌 로컬 스토리지
- 아이돌 카드 컴포넌트(공통)
- 마이 페이지

### 윤효준
- 헤더 컴포넌트(공통)
- 모달 컴포넌트(공통)
- 버튼 컴포넌트(공통)
- 랜딩 페이지

### 임지혜
- 목록 페이지 - 이달의 차트
- 목록 페이지 - 투표 모달

## 💻 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### Config

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### Linters

![js](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![js](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

### Development

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### communication

![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

### Deployment

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 🗂️ 폴더 구조

```
📦 src
├──── apis                    # API 관련 함수 및 관리 파일
│
├──── assets                  # 이미지 및 정적 파일 관리
│     ├── icons               # 아이콘 관련 파일
│     │
│     └── images              # 일반 이미지 파일
│
├──── components              # 공통 컴포넌트 관리
│     │
│     └── modalContent        # 모달창 내용 관리
│
├──── utils                   # 유틸리티 함수 관리
│
└──── pages                   # 라우터 페이지 관리
      ├── landingPage         # 랜딩 페이지 관련 파일
      │
      ├── listPage            # 리스트 페이지 관련 파일
      │     ├── credit        # credit 관련 파일
      │     │
      │     ├── donation      # donation 관련 파일
      │     │
      │     └── monthlyChart  # monthlyChart 관련 파일
      │
      ├── myPage              # myPage 관련 파일
      │
      └── notFoundPage        # 404 에러 페이지 관련 파일

```

## ✅ 컨벤션

### 커밋 메세지

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
- rename : 파일명 혹은 폴더명을 수정한 경우
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
