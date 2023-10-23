class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      return true;
    } else {
      return false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
