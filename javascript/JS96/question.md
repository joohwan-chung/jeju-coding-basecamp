# 넓은 텃밭 만들기!
수연이는 밭농사를 시작하기로 마음을 먹었다. 집 앞 텃밭을 만들기로 하고 돌들을 제거하고 있는데 매우 큰 바위는 옮기지 못해 고심하고 있다.

이에 수연이는 다음과 같은 규칙을 정한다.

1. 바위를(바위는 '1'로 표기한다.) 피해 텃밭을 만들되 정사각형 모양으로 텃밭을 만든다.
2. 텃밭은 가장 넓은 텃밭 1개만 만들고 그 크기를 반환한다.
3. 만든 텃밭은 모두 '#'으로 처리한다.


```
<입출력 예시>

입력

0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0

출력

3 X 3

0 0 # # #
0 1 # # #
0 1 # # #
0 0 1 0 0
0 0 0 1 0

입력

0 0 0 1 0
0 0 0 0 0
0 0 1 0 0
0 0 1 0 0
0 0 0 1 0

출력

2 X 2

# # 0 1 0
# # 0 0 0
1 0 1 0 0
0 0 1 0 0
1 0 0 1 0


/* ***********문제*********** */
const 텃밭 = []; //입력받은 텃밭 리스트
let 가꾼텃밭 = []; //텃밭을 가꾼 후 저장된 리스트

// 코드를 작성해주세요

console.log(가꾼텃밭);
```