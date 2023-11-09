# 반평균 등수
한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
2. 반 평균을 구하세요.
3. 반 1등 점수를 구하세요.
4. 전교 평균을 구하세요.

(출력 형식은 상관없습니다.)

```js
//아래 코드는 힌트입니다.

let student_score = [];
let class_score = [];
let total_score = [];

for (let i=0; i<5; i++) {
  student_score.push(Math.floor(Math.random()*100)+1);
}

console.log(student_score);
```