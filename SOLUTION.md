# Solution

## src 폴더 구조

```bash
├── components -> Frame & Resource 컨테이너에서 사용되는 컴포넌트들
│   ├── FrameApp 
│   └── ResourceApp
├── containers -> 전역 상태를 조회 및 갱신하는 컴포넌트들
│   ├── FrameApp.tsx
│   └── ResourceApp.tsx
├── modules -> reducer, action등 리덕스 설정 코드 파일들 
│   ├── resources
│   └── selectors
``` 

## 사용 라이브러리
1. Styled Component
2. redux, redux-devtools-extension, typesafe-actions
3. materialUi -> selector에 사용

## 기능 구현 
1. resource 추가
    url 또는 이미지 추가 시 각각에 맞는 type을 설정하여 배열에 추가.
    이미지는 input을 통해 파일을 업로드.
    randInt, setTimeout을 이용하여 Resource Validation 구현.
###
2. resource 이름 수정 및 삭제
    수정, 삭제 아이콘에 resource id와 문자열을 조합하여 classname에 추가.
    상위 컴포넌트에서 클릭 이벤트리스너를 생성하여 classname을 분석.
    만약 classname 분석한 내용이 수정이라면 Input 컴포넌트로 변경.
    input 창 밖의 클릭 이벤트 감지하여 외부 클릭시 자동으로 제출하게 구현.
    url이 변경되지 않도록 name 필드를 변경하게 함.
    classname이 삭제인 경우 삭제 액션 수행.
###
3. resource 표현
    url인 경우 상단에 div 태그로 name 표시.
    img인 경우 select를 통해 유저가 이미지를 선택할 수 있도록 구현.
    url & img 모두 iframe 사용.
    img의 경우 FileReader 객체를 이용하여 선택된 이미지의 src를 조회. 
