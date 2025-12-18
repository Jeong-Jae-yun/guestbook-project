# Docker 구성 설명

## 1. Docker를 사용하는 이유

Docker는 개발 환경과 실행 환경의 차이로 인해 발생하는 문제를 최소화하기 위해 사용하였다. 로컬 PC, EC2 서버 등 실행 환경이 달라도 동일한 Docker 이미지로 애플리케이션을 실행할 수 있어 환경 의존성을 제거할 수 있다. 또한 Backend, Frontend, Database를 각각 컨테이너로 분리하여 관리함으로써 서비스 구조를 명확히 하고, 배포 및 실행 과정을 단순화할 수 있다.

## 2. Backend Dockerfile 설명

```dockerfile
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
```

* `FROM eclipse-temurin:21-jdk` : Java 21 JDK가 설치된 공식 베이스 이미지를 사용한다.
* `WORKDIR /app` : 컨테이너 내부에서 작업할 디렉터리를 `/app`으로 설정한다.
* `COPY build/libs/*.jar app.jar` : Gradle 빌드로 생성된 jar 파일을 컨테이너 내부로 복사한다.
* `ENTRYPOINT` : 컨테이너 실행 시 Spring Boot 애플리케이션을 실행한다.

## 3. Frontend Dockerfile 설명

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

* `node:20-alpine` 이미지를 사용하여 경량화된 Node.js 환경을 구성한다.
* 의존성을 설치한 후 Next.js 프로젝트를 빌드한다.
* Next.js의 `standalone` 모드를 사용하여 실행에 필요한 파일만 생성한다.
* 빌드 단계에서 생성된 결과물 중 실행에 필요한 파일만 복사한다.
* Node.js 기반 서버로 Next.js 애플리케이션을 직접 실행한다.
* 애플리케이션이 사용하는 3000 포트를 외부에 노출한다.

## 4. docker-compose 역할

docker-compose는 Backend, Frontend, Database 컨테이너를 한 번에 실행하고 관리하기 위해 사용하였다. 각 컨테이너 간 네트워크 연결을 자동으로 설정해주며, 하나의 명령어로 전체 서비스를 실행할 수 있어 개발 및 배포 편의성이 크게 향상된다.
