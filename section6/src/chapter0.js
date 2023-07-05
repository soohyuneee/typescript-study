/**
 * 클래스
 */

let studentA = {
  name: 'soo',
  grade: 'A',
  age: 20,
  study() {
    console.log('열심히 공부 함');
  },
  introduce() {
    console.log('안녕하세요!!');
  },
};

class Student {
  // 필드
  name;
  grage;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grage = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('열심히 공부 함');
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  skill;

  // 생성자
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }

  // 메서드

  programming() {
    console.log(`${this.skill}로 프로그래밍 함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// Student 인스턴스

let studentB = new Student('홍길동', 'A+', 27);
console.log(studentB);
studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper('김아무개', 'B+', 24, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();
