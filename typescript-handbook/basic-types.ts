export { }

// Boolean
let isUser: boolean = true;
let isTrue: boolean = !!'boolean';
let isUnderfined: boolean = undefined; // no error
let isNull: boolean = null;  // no error

// Null and Underfined
const nothing: null = null;
const undef: undefined = undefined;
let num: number | null | undefined; // union type
num = null;
num = 5;
num = undefined;

// Number
const decimal: number = 25;
const hex: number = 0xa;
const binary: number = parseInt(decimal.toString(2));
const oct: number = 0o744;
console.log(binary, hex);

// String 
const sentence: string = `Hello, Guys! I'm ${25} years old`;

// Array
const arr: number[] = [1, 2, 3, 4];
const arrr: Array<string> = ['Dan', 'Ben']; //generic type
let x: [string, number];
x = ['Hello', 6];
console.log(x)

//Enum 
enum Directions {
    Up = 5,
    Right,
    Left,
    Down
}

const up = Directions.Up
const right = Directions.Right
const left = Directions[6]  // reverse Enum
const down = Directions.Down
console.log(up, left, right, down)

enum Links {
    google = 'https://google.com',
    youtube = 'https://youtube.com'
}

console.log(Links.google)

// Any
let notSure: any = 'what?';
notSure = true
let list: any[] = [1, true, "free"];
list[5] = { name: 'Johny' }
console.log(list)

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

// Never
const neverReturn = (): never => {
    throw new Error('never')
}

const neverEnds = (): never => {
    while (true) {

    }
}

// object
declare function create(o: object): void;
// create({ prop: 0 });
// create(4);

// Assertions
let str2: any = '2';
console.log((str2 as string).length)









interface IVoidAssaignment {
    (): void
}

let f1: IVoidAssaignment;

f1 = (): void => {
    return undefined
}

console.log(f1())