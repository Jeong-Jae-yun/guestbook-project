# API 명세서

## 1. 방명록 전체 조회

| 항목 | 내용 |
|------|------|
| URL | GET /api/guestbooks |
| Request | 없음 |
| Response | `[{ id, nickname, content, createdAt }]` |

### Response 예시
```json
[
  {
    "id": 1,
    "nickname": "정재윤",
    "content": "backend 개발하기",
    "createdAt": "2025-12-17T01:57:45.807488"
  },
  {
    "id": 2,
    "nickname": "홍길동",
    "content": "frontend 개발하기",
    "createdAt": "2025-12-17T07:21:49.597488"
  }
]

## 2. 방명록 등록

| 항목 | 내용 |
|------|------|
| URL | POST /api/guestbooks |
| Request | `[{ nickname, content }]`|
| Response | `[{ id, nickname, content, createdAt }]` |

### Request 예시
```json
[
  {
  "nickname": "김영희",
  "content": "docker로 로컬 개발 환경 컨테이너화 시키기"
  }
]
### Response 예시
```json
[
  {
  "id": 3,
  "nickname": "김영희",
  "content": "docker로 로컬 개발 환경 컨테이너화 시키기",
  "createdAt": "2025-12-17T07:28:12.953851"
  }
]
