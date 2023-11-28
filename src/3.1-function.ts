// functions

function addTwoNum(a: number, b: number): number {
  return a + b;
}

const substractTwonum = (a: number, b: number): number => {
  return a - b;
};

addTwoNum(3, 9);

function addAllNum(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNum([1, 2, 3, 4, 5]);
// 0 is the starting position

// return type interference

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

const greet = formatGreeting('mario', 'hello');
