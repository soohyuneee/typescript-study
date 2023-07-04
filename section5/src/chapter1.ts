/**
 * 인터페이스 확장
 */

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: '',
  color: '',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: true;
}

interface Chicken extends Animal {
  isFly: true;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: true,
};
