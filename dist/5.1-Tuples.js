"use strict";
let person_ = ['mario', 30, true];
let hsla;
hsla = [200, '100%', '50%', 1];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples
let user_;
user_ = ['peach', 25];
console.log(user_[0]);
