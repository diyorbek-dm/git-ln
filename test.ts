const age: number = 19;
const user: string = "Dior";
const bool: boolean = true;

// Array
const arr: Array<string> = ["Vue.js", "JavaScript", "TypeScript", "Nuxt.js"];
let unknown: any = 12;
unknown = "unknown";

// Tuple
const arrTuple: [string, number] = ["Dior", 19];

// New type for user obj
type TUserObj = {
  user: string;
  age: number;
  password: string;
};

function sayHi(
  name: string,
  age: number,
  hasAJob: boolean,
  skills: string[]
): void {
  console.table(
    `Name: ${name}, Age: ${age}, Loofing for Job: ${hasAJob}, Skills: ${skills}`
  );
}

sayHi(user, age, bool, arr);
