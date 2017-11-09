# map, reduce, filter
## Array.prototype.map
## Array.prototype.reduce
구문
```
arr.reduce(callback[, initialValue]);
```
- callback 매개변수
    - accumulator : 
        - initialValue이 존재하면 해당 값으로 초기화
        - 이후 callback의 return 값으로 대체
    - currentValue : 현재 값
    - currentIndex : 현재 값의 Index
    - array : 대상 Array

사용법1
- initialValue 생략
- currentIndex = 1 부터 시작
```
var arr = [0, 1, 2, 3, 4];
var res1 = arr.reduce(function (acc, curr, idx, arr) { return acc + curr; });
// sum of arr values : 10
var res2 = arr.reduce((acc, curr) => Math.max(acc, curr));
// max of arr values : 4
```
사용법2
- initialValue 활용
- currentIndex = 0 부터 시작
- accumulator = initialValue 로 초기화
```
var arr = [[0, 1], [2, 3], [4, 5]];
var res = arr.reduce((acc, curr) => acc.concat(curr), []);
// [0, 1, 2, 3, 4, 5]
```
```
var arr = [
    { id: 0, name: "Adams" }, 
    { id: 1, name: "Edwards" }, 
    { id: 2, name: "Nelson" }
];
var res = arr.reduce(function (acc, curr) {
    acc[curr.id] = curr.name;
    return acc;
}, {});
// { 0: "Adams", 1: "Edwards", 2: "Nelson" }
```
## Array.prototype.filter