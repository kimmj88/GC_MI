SLM data server

### 실행 방법

1.  docker-compose로 database container 생성
    - 터미널 실행 : docker compose up -d
2.  npm install
3.  npm run start

## 프로젝트 구조 설명 / 설계 의도

1. 디자인패턴은 domain driven 패턴을 활용하여 구현
2. CRUD 기본 서비스 API 제공
   - baseController.ts ( 참고 )
   - 불필요한 코드생성 방지 및 간결한 기본 서비스 API 제공
3. domain 파일 자동화 generate
   - create-nest-entity.js ( 참고 )
   - 반복된 코드 생성을 감소를 위해 개발시간 단축
4. 중복처리, exception처리
   - account 계정 예외처리의 경우 DB 제약조건으로 처리
   - 서비스 exception은 exception.filter.ts ( 참고 )
