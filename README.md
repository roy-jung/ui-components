# [UI 컴포넌트로 배우는 프런트엔드 사고법] 보일러플레이트

## 📋 사전 요구사항

다음 소프트웨어가 설치되어 있어야 합니다:

- **Node.js** 20.x 이상
- **npm** 또는 **yarn** 패키지 매니저

Node.js 버전 확인:
```bash
node --version
npm --version
```

## 🚀 설치 방법

### 1. 저장소 클론

프로젝트를 로컬 환경에 클론합니다:

```bash
git clone https://github.com/roy-jung/ui-components.git
cd ui-components
```

### 2. 의존성 설치

프로젝트 디렉토리로 이동한 후, 필요한 패키지를 설치합니다:

**npm 사용 시:**
```bash
npm install
```

**yarn 사용 시:**
```bash
yarn install
```

### 3. 개발 서버 실행

설치가 완료되면 개발 서버를 시작할 수 있습니다:

**npm 사용 시:**
```bash
npm run dev
```

**yarn 사용 시:**
```bash
yarn dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:3000`으로 접속할 수 있습니다.

## 🛠 기술 스택

- **React** 19.0.0
- **TypeScript** 5.7.2
- **Vite** 6.3.5
- **TanStack Router** 1.130.2
- **SCSS** 1.92.1

## 🔧 문제 해결

### 포트가 이미 사용 중인 경우

다른 포트로 실행하려면 `vite.config.ts`에서 포트를 변경하거나 다음 명령어를 사용하세요:

```bash
npm run dev --port 3001
```

### 의존성 설치 오류

`node_modules` 폴더와 락 파일을 삭제하고 다시 설치하세요:

```bash
rm -rf node_modules package-lock.json yarn.lock
npm install
```
