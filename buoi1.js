// var a = 5
// const b = 6

// a = 10
// b = 12
// console.log(a)
// console.log(b)
// var a = null
// console.log(a)
// 3.Undenfined
// TH1 khai báo 1 biến không gán giá trị
// Th2 Truy vấn tới key không tồn tại
// TH3 Function không return tra về undenfine
// const teo = {
//     name: 'Nguyen van teo',
//     age: 10
// }
// console.log(teo['name'])
// 4. ARRAY
// const arrayNames = ['teo', 'Ti', 'Tun']
// arrayNames[0] = "Tuan"
// console.log(arrayNames[0])
// 5. Toan tu
// + - * / %
// var a = 5
// var b = 6
// var ketqua = a++ - --b + --a + b-- + ++a - b++ + b-- - b++
// // 5- --b + --a +b-- + ++a -b++ + b-- -b++  a= 6,b=6
// // 5- 5  + --a +b-- + ++a -b++ + b-- -b++  a= 6,b=5
// // 5- 5  + --a +b-- + ++a -b++ + b-- -b++  a= 6,b=5

// // 5 -5 +5 + 5 + 6 -4 + 5 -4  a= 6 b= 5
// console.log(ketqua)
// 6. FUNCTION
// Phạm vi truy cập (access modifier)
// function showName(name) {
//     console.log(name)
//     return name
// }
// console.log(showName("Phat"))
// 7 : Object method
const teo = {
    name: "Nguyen Van Teo",
    age: 10,
    info: function () {
        console.log("Name" + this.name)
        console.log("Age" + this.age)
    }
}
teo.info()