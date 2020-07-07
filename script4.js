// １　オブジェクト復習
const animal ={
    name:"レオ",
    age:3,
    greet: ()=>{
        console.log("こんにちわ");
    }
};

console.log(animal.name);

animal.greet();

// 2 クラスとは
class Animal{

}

// ３　インスタンス作成
class Animal{
}

const animal = new Animal();
console.log(animal);

// ４コンストラクタ
class Animal{
    constructor(){
        console.log("インスタンス生成しました");
    }
}

const animal = new Animal();

// ５コンストラクタ
class Animal{
    constructor(){
        this.name ="レオ";
        this.age= 14;
    }
}

const animal = new Animal();
console.log(`名前${animal.name}`);
console.log(`年齢${animal.age}`);

// 6 コンストラクタ
class Animal{
constructor(name,age){
    this.name = name;
    this.age = age;
}
}
const animal = new Animal("モカ",8);
console.log(`名前：${animal.name}`);
console.log(`年齢:${animal.age}`);

// 7メソッドor
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
}
const animal = new Animal("レオ",3);

console.log(`名前:${animal.name}`);
console.log(`年齢${animal.age}`);
animal.greet();


// 8 メソッド（２）
class Animal{
    constructor(name,age){
        this.name = name;
        this age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        console.log(`名前は${this.name}です`);
        console.log(`年齢は${this.age}です`);
    }
}

const animal = new Animal("レオ",3);
animal.greet();
animal.info();

// 9 メソッド内で他のメゾット呼ぶ
class Animal{
    constructor(name,age){
        this.name = name;
        this age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`年齢は${this.age}です`);
    }
}

const animal = new Animal("レオ",3);

animal.info();

// 10 継承
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }

class Dog extends Animal{
    
}
const animal = new Animal("レオ",3);
animal.info();

// 11 継承したクラス使用
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }
  
class Dog extends Animal{

}

const dog = new Dog("レオ",4);
dog.info();

// 12 メソッド追加
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }

  class Dog extends Animal{
  getHumanAge(){
    return this.age*7;
  }    
}

const dog =new Dog("レイ",4);
dog.info();

const humanAge= dog.getHumanAge();

console.log(`人間年齢で${humanAge}歳です`);


// １３　オーバーライド
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }

  class Dog extends Animal{
  info(){
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);

      const humanAge= dog.getHumanAge();
      console.log(`人間年齢で${humanAge}歳です`);
    }
      
  getHumanAge(){
    return this.age*7;
  }    
}

const dog =new Dog("レイ",4);
dog.info();

// 14 オーバーライド２
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("こんにちは");
    }
    
    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }

  class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed= breed;
    }

    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`犬種は${this.breed}です`);
        console.log(`${this.age}歳です`);
  
        const humanAge= dog.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
      }
        
    getHumanAge(){
      return this.age*7;
    }    
  }
  
  const dog =new Dog("レイ",4,"チワワ");
  dog.info();
  
























