const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903"
}

// 중복을 제거한 실제 접수 인원 구하기
const uniquePeople = new Set(Object.values(people))

console.log("실제 접수 인원은", uniquePeople.size, "명입니다.")
