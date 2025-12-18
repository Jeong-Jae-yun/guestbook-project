# Guestbook Project – 프로젝트 설계 문서

## 1. 프로젝트 개요
본 프로젝트는 사용자가 간단한 메시지를 작성하고 조회할 수 있는 방명록(Guestbook) 웹 애플리케이션이다.
Backend는 Spring Boot 기반 REST API로 구성되며, Frontend는 Next.js를 사용한다.
Docker 및 Docker Compose를 활용하여 로컬 개발 환경을 컨테이너화하고, AWS EC2에 배포한다.

## 2. 프로젝트 목표
- REST API 기반 백엔드 서버 구현
- 프론트엔드와의 API 연동 경험
- Docker 기반 개발/배포 환경 구성
- AWS EC2 서버 배포 경험
- CI/CD 자동화 기반 마련

## 3. 기술 스택
### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- Gradle

### Frontend
- Next.js

### DevOps
- Docker
- Docker Compose
- AWS EC2

## 4. 주요 기능
- 방명록 목록 조회
- 방명록 작성

## 5. 엔티티 설계
| 필드명 | 타입 | 설명 |
|------|------|------|
| id | Long | 방명록 ID |
| nickname | String | 작성자 |
| content | String | 내용 |
| createdAt | LocalDateTime | 생성 시간 |

## 6. 시스템 구조
Client → Frontend → Backend → DB
