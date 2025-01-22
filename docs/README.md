# 특이사항

.vscode/settings.json에 설정을 넣어 놓아 프로젝트 수준에서 formatter를 prettier를 설정해 놓았습니다. 그래서 vscode 설정은 건드실 필요없고 prettier와 eslint extension을 설치해서 작업하시면 됩니다!

tailwind css 설치해 놓았습니다!

Pr reviewers 2명 자동 설정 기능을 추가했습니다!
Pr reviewers 설정은 PR이 열릴 때만 동작합니다! 만약 PR 올린 후에 내용을 바꾸고 싶다! 하시면 PR을 닫지 마시고 PR을 올린 Branch에서 내용 수정 후 push해주시면 PR에 적용됩니다!

## 프로젝트 색상 정의

figma의 색상이 동일 이름으로 설정되어 있는 것이 많아 gpt에게 색깔 이름을 물어봐 재정의 후 tailwind에 저장해 놓았습니다!

| 색상 이름       | HEX 코드  | 설명           |
| --------------- | --------- | -------------- |
| `midnightBlack` | `#02000E` | Midnight Black |
| `deepCharcoal`  | `#181D26` | Deep Charcoal  |
| `steelGray`     | `#67666E` | Steel Gray     |
| `neutralGray`   | `#828282` | Neutral Gray   |
| `slateBlue`     | `#8C92AB` | Slate Blue     |
| `silverGray`    | `#A3A5A8` | Silver Gray    |
| `softWhite`     | `#F7F7F8` | Soft White     |
| `coralRed`      | `#F96D69` | Coral Red      |
| `pinkPunch`     | `#FE5493` | Pink Punch     |

### 예시

```
<div className="bg-midnightBlack">1</div>
```

## 폰트 스타일 정의

figma의 font를 정리하여 tailwind에 저장해 놓았습니다.
아래는 프로젝트에서 사용되는 폰트 스타일과 Tailwind CSS 클래스 사용법입니다!

## 폰트 스타일 가이드

아래는 프로젝트에서 사용되는 폰트 스타일과 Tailwind CSS 클래스 사용법입니다.

| 폰트 스타일                                                                 | Tailwind CSS 클래스                                                          |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Pretendard / Bold / 26px**                                                | `font-pretendard text-[26px] font-bold`                                      |
| **Pretendard / Bold / 20px / Line height 26px**                             | `font-pretendard text-[20px] font-bold leading-[26px]`                       |
| **Pretendard / Bold / 20px**                                                | `font-pretendard text-[20px] font-bold`                                      |
| **Pretendard / Semi-bold / 18px**                                           | `font-pretendard text-[18px] font-semiBold`                                  |
| **Pretendard / Medium / 18px**                                              | `font-pretendard text-[18px] font-medium`                                    |
| **Pretendard / Bold / 16px / Line height 26px**                             | `font-pretendard text-[16px] font-bold leading-[26px]`                       |
| **Pretendard / Bold / 16px / Line height 26px / Letter spacing 5%**         | `font-pretendard text-[16px] font-bold leading-[26px] tracking-[0.05em]`     |
| **Pretendard / Medium / 16px**                                              | `font-pretendard text-[16px] font-medium`                                    |
| **Pretendard / Regular / 16px**                                             | `font-pretendard text-[16px] font-regular`                                   |
| **Pretendard / Regular / 16px / Line height 18px / Letter spacing -0.17px** | `font-pretendard text-[16px] font-regular leading-[18px] tracking-[-0.17px]` |
| **Pretendard / Bold / 15px / Line height 26px**                             | `font-pretendard text-[15px] font-bold leading-[26px]`                       |
| **Pretendard / Bold / 14px / Line height 26px**                             | `font-pretendard text-[14px] font-bold leading-[26px]`                       |
| **Pretendard / Regular / 14px**                                             | `font-pretendard text-[14px] font-regular`                                   |
| **Pretendard / Medium / 13px / Line height 26px / Letter spacing 2%**       | `font-pretendard text-[13px] font-medium leading-[26px] tracking-[0.02em]`   |
| **Pretendard / Bold / 13px / Line height 26px / Letter spacing 2%**         | `font-pretendard text-[13px] font-bold leading-[26px] tracking-[0.02em]`     |
| **Pretendard / Medium / 12px**                                              | `font-pretendard text-[12px] font-medium`                                    |
| **Pretendard / Medium / 12px / Line height 18px / Letter spacing -0.17px**  | `font-pretendard text-[12px] font-medium leading-[18px] tracking-[-0.17px]`  |

---

### 폰트 클래스 설명

- **`font-pretendard`**: Pretendard 폰트를 사용합니다.
- **`text-{크기}`**: 폰트 크기를 설정합니다.
- **`font-{굵기}`**: 폰트 굵기를 설정합니다.
  - `font-bold`: 굵기 700
  - `font-semiBold`: 굵기 600
  - `font-medium`: 굵기 500
  - `font-regular`: 굵기 400
- **`leading-{크기}`**: 줄 간격(Line height)을 설정합니다.
- **`tracking-{값}`**: 자간(Letter spacing)을 설정합니다.

---
