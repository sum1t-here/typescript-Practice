let person_: [string, number, boolean] = ['mario', 30, true];

let hsla: [number, string, string, number];
hsla = [200, '100%', '50%', 1];

function useCoords(): [number, number] {
  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

// named tuples

let user_: [name: string, age: number];

user_ = ['peach', 25];
console.log(user_[0]);
