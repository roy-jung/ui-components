import { createFileRoute } from '@tanstack/react-router';
import classNames from 'classnames/bind';
import styles from '@/styles/Home.module.scss';

const cx = classNames.bind(styles);

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className={cx('Home')}>
      <h2>[ UI 요소 모음 ]</h2>
      <h3>디렉터리 구조</h3>
      <ul>
        <li>
          <code>[routes]</code>: 라우트 컴포넌트 디렉터리
          <ul>
            <li>
              <code>index.tsx</code>: <code>/</code>(홈)의 page view.
            </li>
            <li>
              <code>$.tsx</code>: Route Path 중 <code>/</code>를 제외한 나머지
              모든 페이지에 대한 page view.
              <br />
              <code>/src/routeMap.ts</code> 객체의<code>key</code>에 매핑된
              컴포넌트를 렌더링합니다.
            </li>
          </ul>
        </li>
        <li>
          <code>[components]</code>: 컴포넌트 디렉터리
          <ul>
            <li>대부분의 코드는 여기에 작성합니다.</li>
            <li>
              <code>gnb.tsx</code>: 좌측 메뉴 컴포넌트
            </li>
            <li>
              <code>vanillaWrapper.ts</code>: 독립적인 순수 자바스크립트 코드를
              실행하기 위한 wrapper 컴포넌트
            </li>
          </ul>
        </li>
        <li>
          <code>routeMap.ts</code>: route path와 컴포넌트 매핑
        </li>
      </ul>
    </div>
  );
}
