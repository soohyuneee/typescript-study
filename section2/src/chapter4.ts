// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
};

let user: User = {
  id: 1,
  name: 'soohyun',
  nickname: 'soohyuneee',
};

let user2: User = {
  id: 2,
  name: 'gildong',
  nickname: 'honghong',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
