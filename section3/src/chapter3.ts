/**
 * 기본 타입의 호환성
 */

import { type } from 'os';

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '동물책',
  price: 40000,
  skill: 'JavaScript',
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: '동물책',
  price: 40000,
  // skill: 'JavaScript',
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: '동물책',
  price: 40000,
  // skill: 'JavaScript',
});
func(programmingBook);
