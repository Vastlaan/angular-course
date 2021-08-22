const Component = (target: any) =>{
  console.log(target)
}

interface IPerson{
  readonly age: number;
  name: string;
  // getters are special cases, they are read as a property, although called like a methods
  getAge: number;
  runQuery?: ()=>string
}

//the decorator will be called at the moment of reading this file.
// it will call whatever is defined below as a parameter to the decorator (in this case function)
@Component
class Person implements IPerson{

  readonly age: number;
  name: string = "Papa"

  constructor(age: number){
    this.age = age
  }
  // getters are special cases, they are read as a property, although called like a methods
  get getAge(): number{
    return this.age
  }

  runQuery(): string{

    const papa = () =>{
      this.name = 'False papa'
      return this.name
    }
    return papa()
  }
}

// Component is not called the second time
const person = new Person(23)


//    GENERIC TYPES IN CLASSES & FUNCTIONS  

class ValueHolder<T>{

  constructor(public value: T){

  }

  getValue(){
    return this.value
  }
}

const genericValNum = new ValueHolder(34)
const genericValStr = new ValueHolder('Kurwa')

genericValNum.value // value number
genericValStr.value // value string

//  IN FUNCTION
const valueWrapper = <T>(value:T): T[] =>{
  return [value]
}

valueWrapper<number>(20)  // returns [20]

// it also work with type inferrence
const val = valueWrapper('kosw')  // val is array of strings