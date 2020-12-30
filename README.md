# [두잇!]리액트 프로그래밍 정석

[![두잇 리액트 표지](https://raw.githubusercontent.com/justinpark/justin-do-it-react/master/do-it-react-cover.jpeg?size=300)](http://www.yes24.com/Product/Goods/87631428?scode=032&OzSrank=1)

_여기 코드는 두잇! 리액트 프로그래밍 정석의 예제 및 연습문제 소스를 포함하고 있습니다._

## 작동 데모 주소

https://justin-do-it-react.firebaseapp.com/

## 책 오류 수정

### p.27 nvm으로 노드제이에스 설치하기

  현재 현업에서 가장 많이 사용하는 노드제이에스의 버전이 ~~8~~ 10이기 때문입니다.

  ~~nvm install 8.10.0~~

  `nvm install 10.10.0`

  ~~nvm use 8.10.0~~

```
nvm use 10.10.0
> node -v
10.10.0
```

### p.28 1. yarn 설치하기

**윈도우 사용자의 경우 공식 홈페이지 [ https://classic.yarnpkg.com/en/docs/install#windows-stable ] 에서 다운로드 받아 설치 가능합니다**

### p.28 2. create-react-app 설치하기 (2번 영역 전체 삭제)

~~yarn global add create-react-app~~

### p.28 3. 리액트 앱 생성하기

**이 책은 create-react-app 버전 2.1.7을 기준으로 작성되었습니다.**

```
> yarn create react-app do-it-example --scripts-version 2.1.7
```

### p.30 react-scripts 버전 수정

"react-scripts": "2.1.~~1~~"

"react-scripts": "2.1.**7**"

### p.43 예제 코드 6번 항목

  ~~var args = Array.prototype.slice.call(this, arguments);~~

  var args = Array.prototype.slice.call(arguments);

### p.44 예제 코드 7번 항목

  ~~func(...args) { var [first, ...others] = args; }~~

  **function** func(...args) { var [first, ...others] = args; }

### p.70 (Promise코드와 관련하여)

  ~~(실제 Promise클래스와 약간의 차이는 있습니다.)~~

  (개략적인 Promise코드 구조에 대해 이해를 돕고자 추가된 코드로 실제 Promise클래스와 차이가 있습니다. 아래 코드는 사용하지 말고 내장된 Promise를 사용하여 구동해주세요.)

```
// 아래 코드는 이해를 돕기 위한 코드입니다. 실제 코드와는 다르니 내장된 Promise를 사용해주세요.
class Promise {...}
```

### p.92 (문장에 App.jsx파일 명명 설명 추가)

  App 컴포넌트의 내용을 모두 지우고 다음을 입력해보세요. __여기서부터 App.js는 App.jsx로 변경하여 사용하겠습니다.__

### p.112 정답 코드

  ~~this.setState((count) => { count: count + 1; });~~

  - 중괄호{} 앞뒤로 괄호()가 포함되어야 합니다. 또한 인자 count 양쪽으로 중괄호{}를 포함하여 객체 추출식으로 state값 중 count값을 추출해야합니다.

```
  this.setState(({ count }) => ({
    count: count + 1,
  }));
```

참조: https://github.com/justinpark/justin-do-it-react/blob/master/src/03/Counter.jsx#L13

### p.146 예제 코드

  - constructor에 정의된 window.addEventListener(...) 구문을 componentDidMount 함수 안으로 옮기셔야 초기 스크롤 시 undefined 오류가 발생하지 않습니다.

```
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }

  // ...

  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
  }
```

### p.154 스토리북 설치

**이 책은 스토리북 버전 5.2를 기준으로 작성되었습니다.**
```
> yarn add --dev @storybook/react@5.2.6
```

### p.161 addon-actions 설치

```
> yarn add --dev @storybook/addons@5.2.6 @storybook/addon-actions@5.2.6
```

### p.163 addon-jsx 설치

```
> yarn add --dev storybook-addon-jsx@7.1.13
```

### p.200 테스트 코드 실행

  ~~./src/App.test.js 파일을 삭제한 다음 실행하세요.~~

  _(App.test.js파일을 삭제하지 말고 실행하세요.)_

### p.201 `<Input>` 테스트 코드

  expect 예제 한줄 추가

```
    ...
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input />)).toBeTruthy();
```

4번 항목 예제에도 추가
```
    ...
    ReactDOM.unmountComponentAtNode(div);
    expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
```

### p.203 3번 항목 테스트 코드 파일 명명  (3쇄 요청)
  테스트 코드 파일의 이름은 ~~'~_spec.jsx'~~ '~.test.jsx'로 짓겠습니다.

  ~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

  참고 파일: /src/__tests__/04/Input.test.jsx

### p.204 참조 파일 경로에 오타가 있습니다 (3쇄 요청)

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

### p.207 참조 파일 경로에 오타가 있습니다

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

7번 항목

~~> yarn test ./src/__tests__/03/Input_spec.jsx~~

`> yarn test ./src/__tests__/04/Input.test.jsx`

### p.208 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

### p.209 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

### p.210 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

### p.211 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Input_spec.jsx~~

참고 파일: `/src/__tests__/04/Input.test.jsx`

### p.212 참조 파일 경로에 오타가 있습니다.  (3쇄 요청)

~~참고 파일: /src/__tests__/04/Text_spec.jsx~~

참고 파일: `/src/__tests__/04/Text.test.jsx`

### p.214 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Text_spec.jsx~~

참고 파일: `/src/__tests__/04/Text.test.jsx`

### p.216 참조 파일 경로에 오타가 있습니다.

~~참고 파일: /src/__tests__/04/Text_spec.jsx~~

참고 파일: `/src/__tests__/04/Text.test.jsx`

### p. 221 참조 파일 경로에 오타가 있습니다.

~~참조파일: ./src/tests/04/CheckoutBox_spec.jsx~~

참조파일: `./src/__tests__/04/CheckBox.test.jsx`

7번 코드 오류 (`required` -> `test_name`)
~~expect(changeStub).toHaveBeenCalledWith('required', true);~~

expect(changeStub).toHaveBeenCalledWith('test_name', true);

8번 코드 오류 (`required` -> `test_name`)
~~expect(changeStub).toHaveBeenCalledWith('required', false);~~

expect(changeStub).toHaveBeenCalledWith('test_name', false);

### p.231 05-1-compose코드에 오타가 있습니다  (3쇄 요청)

~~return funcArry.reduce(~~

`return funcArr.reduce(`


### p. 248 아래쪽 예제코드

WrappedComponent 옆의 전개 연산자 변수가 prop이 아닌 otherProps 으로 변경해야합니다.

~~<WrappedComponent {...props} />~~

`<WrappedComponent {...otherProps} />`

### p.261 코드 수정

```
function Component() {
  return null;
}

const ComponentWithX = withX(Component);
const ComponentWithXandY = withY(ComponentWithX);
const ComponentWithXandYandZ = withZ(ComponentWithXandY);

// 또는
const ComponentWithWYZ = withZ(withY(withX(Component)));
```

### p.261 마지막 compose관련 설명 추가

05-1에서 직접 구현한 compose()함수는 사실 recompose 라이브러리에서 제공했던 것이죠. (추가 부분)

**(다만 recompose의 경우 compose의 경우 적용 순서가 반대 반향인 "오른쪽에서 왼쪽 방향"으로 진행되는 차이가 있습니다. 이는 프로퍼티 전달 방향이 뒤쪽으로 진행되는 것과 관련있습니다.)**

### p.262 코드 예제

```
import compose from 'recompose/compose';
const withXYZ = compose(withZ, withY, withX);
const ComponentWithXYZ = withXYZ(Component);
// 혹은
// const compose(withZ, withY, withX)(Component);
```

(아래쪽 코드)

```
import compose from 'recompose/compose';
import withLoading from './withLoading';
import withState from' recompose/withState';
const withLoadData = withState('isLoading', 'setIsLoading', false);

function Component() {
  return '완료(컴포넌트 출력)';
}
const ComponentWithLoading = withLoading('로딩중')(Component);
const ComponentWithLoadData = withLoadData(Component);

const withLoadingAndLoadData = compose(withLoadData, withLoading('로딩중'));
// 조합이 올바르지 못한 예: compose(withLoadData, withLoading)
// 올바르지 못한 예: compose(withLoading('로딩중'), withLoadData)
export const ComponentWithBoth = withLoadingAndLoadData(Component);
// 혹은 compose(withLoadData, withLoading('로딩중'))(Component);

```

### p. 263 (3쇄 요청)

(2) withLoading~~Data~~('로딩 중')을 먼저 조합하면 ~~withLoadingData~~ **withLoadData**의 isLoading 프로퍼티가 withLoading 하이어오더 컴포넌트에 전달되지 않으므로 주의해야 합니다.

### p. 275 설명 (3쇄 요청)
  주석 1번 ButtonWithContext는 지면 부족으로 코드가 누락되었습니다.
  다음 참조 파일을 참조하여 추가해주세요.

  참조: https://github.com/justinpark/justin-do-it-react/blob/master/src/06/ButtonWithContext.jsx

### p. 279 예제코드
  Button 임포트 부분 추가

```
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import Button from '../04/Button';
```

function TableComponent() 아래에 중복 선언된 TableComponent부분 삭제

~~const TableComponent = () => <ButtonWithLoadingContext label="버튼" />~~

### p.279 (3쇄 요청)

ButtonWithLoadingContext의 출력 메시지를 label 프로퍼티로 변경

~~<ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>~~

```
<ButtonWithLoadingContext label="버튼" />
```

~~<ButtonWithLoadingContext>상태 변경</ButtonWithLoadingContext>~~

```
<ButtonWithLoadingContext label="상태 변경" />
```

  참조: https://github.com/justinpark/justin-do-it-react/blob/master/src/06/HomePageWithProvider.jsx

### p. 282 공급자 반환하는 커링 함수 만들기 설명 부분

~~this.state~~를 보면 [contextKey]라고

getChildContext()를 보면 [contextKey]라고

### p. 284 예제코드

HomePageComponentWithTwoProvider 클래스 선언 앞에 export 추가

**export** class HomePageComponentWithTwoProvider extends PureComponent {...}

### p.317 예제코드

</Consumer>위쪽의 두개의 중괄호`}}` 중 앞쪽 괄호는 일반 괄호로 변경`)}`해야 합니다.

```
  <Consumer>
    {({ openModal }) => (
      <Button onPress={openModal} />
    )}
  </Consumer>
```

### p.343 참조 파일 경로에 오타(jsx)가 있습니다.

참조파일: ~~./src/07/reducers/userReducer.jsx~~

참조파일: `./src/07/reducers/userReducer.js`

### p.348 참조 파일 경로에 오타(jsx)가 있습니다.

참조파일: ~~./src/07/reducers/loadingReducer.jsx~~

참조파일: `./src/07/reducers/loadingReducer.js`

### p. 352 예제코드 경로

참조파일: ~~./src/07/collectionActions01.js~~

참조파일: `./src/07/actions/collectionActions01.js`

### p. 358 collectionReducer 예제 코드

collectionActions파일은 앞의 collectionActions01과 collectionActions02의 코드를 모두 포함한 파일입니다.
```
  import { SET_COLLECTION, SET_AGE } from '../actions/collectionActions';
```

### p.431

`import * as serviceWorker from './serviceWorker';` 강조 색상 삭제

### p.517

TradeCoinPage.jsx 예제 코드의 handleSubmit 부분에서 createTransaction을 this.props에서 추출하는 부분이 생략되어 있습니다.

~~const { name, code } = this.props;~~

```
  handleSubmit(values, closeModal) {
    const { name, code, createTransaction } = this.props;
    ...
```
### p.517 빗줄 굶은 색상으로 변경 요청 (3쇄 요청)
~~Api
~~.post('/transactions', formValues)~~
~~.then(() => closeModal());~~


## 목차

### 첫째마당. 리액트 기본 익히기

#### 01. 리액트 시작하기

- 01-1 리액트의 정체를 알아보자!
- 01-2 리액트 개발 환경 설치하기
- 01-3 리액트 앱 수정하기

#### 02. 리액트 ES6 문법 액기스

- 02-1 템플릿 문자열
- 02-2 전개 연산자
- 02-3 가변 변수와 불변 변수
- 02-4 클래스
- 02-5 화살표 함수
- 02-6 객체 확장 표현식과 구조 분해 할당
- 02-7 라이브러리 의존성 관리
- 02-8 배열 함수
- 02-9 비동기 함수
- 02-10 디바운스와 스로틀

#### 03. 리액트 컴포넌트

- 03-1 컴포넌트를 표현하는 JSX
- 03-2 컴포넌트와 구성 요소
- 03-3 컴포넌트에 데이터를 전달하는 프로퍼티
- 03-4 컴포넌트 상태 관리하기
- 03-5 컴포넌트의 생명주기
- 03-6 클래스 컴포넌트
- 03-7 함수형 컴포넌트
- 03-8 배열 컴포넌트
- 03-9 컴포넌트에서 콜백 함수와 이벤트 처리하기
- 03-10 Input 컴포넌트 만들면서 복습하기

#### 04. 에어비앤비 디자인 시스템 따라하기

- 04-1 비주얼 테스트로 더 쉽게 개발하기
- 04-2 CSS로 컴포넌트 스타일 적용하기
- 04-3 스타일 컴포넌트 만들기
- 04-4 테스트 위주 개발 방법 사용해 보기
- 04-5 CheckBox 컴포넌트 만들기

### 둘째마당. 리액트 고급 기술 따라하기

#### 05. 하이어오더 컴포넌트

- 05-1 커링과 조합 개념 공부하기
- 05-2 하이어오더 컴포넌트 기초 개념 공부하기
- 05-3 하이어오더 컴포넌트 라이브러리 사용하기
- 05-4 다중 하이어오더 컴포넌트 사용하기
- 05-5 하이어오더 컴포넌트로 필수 입력 항목 표시하기

#### 06. 컨텍스트로 데이터 관리하기

- 06-1 컨텍스트의 기초 개념 알아보기
- 06-2 컨텍스트 제대로 사용하기
- 06-3 리액트 16.3 버전의 컨텍스트 API살펴보기
- 06-4 실습예제: 모달(Modal)컴포넌트 제작하기
- 06-5 입력 데이터를 관리하는 폼(Form) 작성하기

#### 07. 리덕스로 데이터 관리하기

- 07-1 리덕스 기초 알아보기
- 07-2 액션과 리듀서의 관계 알아보기
- 07-3 그래프 데이터베이스 도입하기
- 07-4 데이터를 위한 컴포넌트 알아보기
- 07-5 검색 기능 만들기

### 셋째마당. 리액트 에어비앤비처럼 개발하기

#### 08. 가상 코인 거래소 만들기

- 08-1 가상 코인 거래소 살펴보기
- 08-2 가상 코인 거래소의 공용 컴포넌트 만들기
- 08-3 프로젝트 구성하기

#### 09. 원격 데이터 연결하기

- 09-1 가상 데이터 서버 설정하기
- 09-2 데이터 요청을 위한 axios 라이브러리 도입하기
- 09-3 가상 코인 거래소에 리덕스 적용하기
- 09-4 가상 코인 거래소에 검색 기능 추가하기
- 09-5 비트코인 거래 기능 추가하며 마무리하기

#### 10. 리덕스 고급 기능 활용하기

- 10-1 미들웨어 기초 알아보기
- 10-2 redux-thunk와 비동기 제어
- 10-3 서버 지연 처리와 오류 표시하기
- 10-4 미들웨어로 알림 메시지 띄우기
- 10-5 코인 거래 알림 효과 추가하며 마무리하기

#### 11. 에어비앤비 개발 방식으로 비동기 제어하기

- 11-1 redux-pack 미들웨어로 비동기 제어하기
- 11-2 대용량 데이터 효율적으로 처리하기
- 11-3 셀렉터로 스토어 데이터 변환하기
- 11-4 axios 호출 작업 모듈화하기
- 11-5 회원 가입 기능 추가하며 마무리하기

#### 12. 리액트 라우터

- 12-1 싱글 페이지 애플리케이션
- 12-2 리액트 라우터 구성하기
- 12-3 주소와 리덕스 연결하기

#### 에어비앤비 개발자의 비밀

- 코드 스프릿팅 기법으로 bundle.js크기 줄이기
- 파이어베이스에 가상 코인 거래소 빼포하기
- 서버 사이드 랜더링 도입하기
- next.js 서버 배포하기
- 파이어베이스 DB 연결하기
