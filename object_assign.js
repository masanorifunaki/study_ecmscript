class Person {
  constructor(firstName, lastName, sex) {
    Object.assign(this, { firstName, lastName, sex });
  }

  show() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.sex);
  }
}

const p = new Person('jon', 'tanaka', 'man');
p.show();