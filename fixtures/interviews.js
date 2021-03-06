const mockInterviews = [
  {
    id: 1,
    title: '프론트엔드 면접 문제 은행 시리즈1',
    description: '프론트엔드 일반 문제를 풀어봅시다~',
    image: {
      id: 1,
      url: 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/02/Blog_Front-End-Dev.jpg.webp',
      alt: '이미지',
    },
    source: 'https://h5bp.org/Front-end-Developer-Interview-Questions/translations/korean/',
    tags: [
      {
        id: 1,
        title: 'frontend',
      },
      {
        id: 2,
        title: 'general',
      },
    ],
    default_limit_second: 300,
    problems: [
      {
        id: 1,
        title: '어제/이번 주에 무엇을 공부하셨나요?',
        limit_second: 180,
      },
      {
        id: 2,
        title: '코딩을 할 때 당신을 들뜨게 하거나 흥미를 끄는 것들은 무엇인가요?',
        limit_second: 180,
      },
      {
        id: 3,
        title: '최근에 당신이 경험한 기술적인 문제는 무엇이고 그것을 어떻게 해결했나요?',
      },
      {
        id: 4,
        title: '버전 관리 시스템은 어떤 것들을 사용해보셨습니까?',
        limit_second: 120,
      },
      {
        id: 5,
        title: '당신이 웹 페이지를 만들 때의 과정을 설명해주실 수 있을까요?',
      },
      {
        id: 6,
        title: '당신이 프로젝트에 합류했습니다. 근데 그들은 Tab을 이용하고, 당신은 Space를 사용했습니다. 어떻게 하실 건가요?',
      },
      {
        id: 7,
        title: 'CSS 애니메이션과 JavaScript 애니메이션의 차이점에 관해 설명해주세요.',
      },
    ],
  },
  {
    id: 2,
    title: '프론트엔드 면접 문제 은행 시리즈2',
    description: 'HTML에 대해서 문제를 풀어봅시다.',
    image: {
      id: 1,
      url: 'https://cdn.educba.com/academy/wp-content/uploads/2018/09/Top-Uses-Of-HTML.jpg',
      alt: '이미지',
    },
    source: 'https://h5bp.org/Front-end-Developer-Interview-Questions/translations/korean/',
    tags: [
      {
        id: 1,
        title: 'frontend',
      },
      {
        id: 2,
        title: 'html',
      },
    ],
    default_limit_second: 300,
    problems: [
      {
        id: 1,
        title: 'doctype이 무엇을 하는 것인가요?',
      },
      {
        id: 2,
        title: '표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?',
      },
      {
        id: 3,
        title: 'data-속성은 무엇을 하는 것인가요? 사용했을 때 이점은 무엇인가요?',
      },
      {
        id: 4,
        title: '쿠키(Cookies)와 세션저장소(sessionStorage)와 로컬저장소(localStorage)의 차이점을 설명해주세요.',
      },
      {
        id: 5,
        title: '<script>, <script async>와 <script defer>의 차이점에 관해 설명해주세요.',
      },
      {
        id: 6,
        title: 'CSS<link>를 <head></head>사이에 쓰는 것과 JS<script>를 <body></body>뒤에 사용하는 것은 좋은 사용법일까요? 어디에 배치하는 게 좋을까요?',
      },
      {
        id: 7,
        title: 'HTML templating language를 사용해 본 경험이 있나요?',
      },
    ],
  },
  {
    id: 3,
    title: '프론트엔드 면접 문제 은행 시리즈3',
    description: 'CSS에 대해서 얼마나 알고 계신가요? 확인해볼까요?',
    image: {
      id: 1,
      url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--zPAa0uAq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/elytski1o23ybosxmors.jpg',
      alt: '이미지',
    },
    source: 'https://h5bp.org/Front-end-Developer-Interview-Questions/translations/korean/',
    tags: [
      {
        id: 1,
        title: 'frontend',
      },
      {
        id: 2,
        title: 'css',
      },
    ],
    default_limit_second: 300,
    problems: [
      {
        id: 1,
        title: 'class와 id의 차이점에 관해서 설명해주세요.',
        limit_second: 120,
      },
      {
        id: 2,
        title: 'reset CSS가 무엇인지, 어떻게 유용한지 설명해주세요.',
        limit_second: 120,
      },
      {
        id: 3,
        title: 'Floats가 어떻게 동작하는지 설명해주세요.',
      },
      {
        id: 4,
        title: 'z-index에 관해 설명해주세요.',
      },
      {
        id: 5,
        title: '그리드 시스템(Grid system)을 사용한 적이 있나요? 있다면 어떠한 것을 선호하나요?',
      },
      {
        id: 6,
        title: 'SVG를 스타일링하는데 익숙하신가요?',
      },
      {
        id: 7,
        title: '미디어 쿼리(media queries)를 사용한 적이 있나요? 혹은 모바일에 맞는 layout과 CSS를 사용한 적이 있나요?',
      },
      {
        id: 8,
        title: 'CSS 전처리(CSS preprocessors)를 사용해보셨나요? 그렇다면, 사용 경험에 기반을 둬 좋았던 점과 나빴던 점을 설명해주세요.',
      },
      {
        id: 9,
        title: 'inline과 inline-block의 차이점은 무엇인가요?',
        limit_second: 120,
      },
      {
        id: 10,
        title: '요소를 배치하는 방법(relative, fixed, absolute, static) 간의 차이는 무엇인가요?',
      },
    ],
  },
  {
    id: 4,
    title: '프론트엔드 면접 문제 은행 시리즈4',
    description: 'Javascript에 대해서 얼마나 알고 계신가요? 확인해볼까요?',
    image: {
      id: 1,
      url: 'https://wordpress.lapw.org/wp-content/uploads/2020/03/1920px-Unofficial_JavaScript_logo_2.svg-800x445.png',
      alt: '이미지',
    },
    source: 'https://h5bp.org/Front-end-Developer-Interview-Questions/translations/korean/',
    tags: [
      {
        id: 1,
        title: 'frontend',
      },
      {
        id: 2,
        title: 'javascript',
      },
    ],
    default_limit_second: 300,
    problems: [
      {
        id: 1,
        title: 'this는 JavaScript에서 어떻게 작동하는지 설명해주세요.',
        limit_second: 120,
      },
      {
        id: 2,
        title: 'prototype 기반 상속은 어떻게 하는지 설명해주세요.',
        limit_second: 120,
      },
      {
        id: 3,
        title: 'AMD와 CommonJS는 무엇이고, 이것들에 대해 어떻게 생각하시나요?',
      },
      {
        id: 4,
        title: '클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요.',
      },
      {
        id: 5,
        title: '익명함수(anonymous functions)는 주로 어떤 상황에서 사용하나요?',
      },
      {
        id: 6,
        title: '호스트 객체(Host Objects)와 네이티브 객체(Native Objects)의 차이점은 무엇인가요?',
      },
      {
        id: 7,
        title: '.call과 .apply의 차이점은 무엇인가요?',
      },
      {
        id: 8,
        title: 'AJAX에 관해 가능한 한 자세히 설명하세요.',
      },
      {
        id: 9,
        title: '호이스팅(Hoisting)에 대해서 설명하세요.',
      },
      {
        id: 10,
        title: '==와 ===의 차이점은 무엇인가요?',
      },
    ],
  },
];

module.exports = mockInterviews;
