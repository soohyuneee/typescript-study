// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'admin',
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: 'user',
  role: Role.USER,
};
const user3 = {
  name: 'guest',
  role: Role.GUEST,
};
