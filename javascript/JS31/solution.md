# 자바스크립트 자료형의 복잡도

다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

```text
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)
```

## 1) arr[i]

배열의 인덱스를 통해 값을 찾는 것은 O(1)입니다. 배열의 인덱스를 통해 값을 찾는 것은 배열의 길이와 상관없이 인덱스를 통해 값을 찾을 수 있기 때문입니다.

## 2) arr.push(5)

배열의 맨 뒤에 값을 추가하는 것은 O(1)입니다. 배열의 길이와 상관없이 맨 뒤에 값을 추가할 수 있기 때문입니다.

## 3) arr.slice()

배열을 복사하는 것은 O(n)입니다. 배열의 길이에 비례해서 시간이 걸리기 때문입니다.

## 4) arr.pop()

배열의 맨 뒤에 값을 제거하는 것은 O(1)입니다. 배열의 길이와 상관없이 맨 뒤에 값을 제거할 수 있기 때문입니다.

## 5) arr.includes(5)

배열에 특정 값이 있는지 확인하는 것은 O(n)입니다. 배열의 길이에 비례해서 시간이 걸리기 때문입니다.

<br />
<br />

## 정답

```text
3) arr.slice()
5) arr.includes(5)
```