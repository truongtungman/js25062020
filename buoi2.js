// 11 : for of
// var arrayNames = ["Teo", "Ti", "Tun", "hoa"]
// for (const value of arrayNames) {
//     Console.log(value)
// }
// Object
// const teo = {
//     name: "Nguyen Van Teo",
//     age: 10
// }
// for (const key of teo) {
//     Console.log(teo[key])
// }
// 12 array method
const arrayNames = ["Teo", "Ti", "Tun", "hoa"]
const arrayNames2 = ["Teo", "T", "Tn", "h"]
// Thêm vị trí cuối
// arrayNames.push("Toan")
// console.log(arrayNames)
// Xoa vị trí cuối
// arrayNames.pop("Toan")
// console.log(arrayNames)
// Thêm vị trí đầu
// arrayNames.unshift("A")
// console.log(arrayNames)
// Xóa vị trí đầu
// arrayNames.shift()
// console.log(arrayNames)

// Nối dữ liệu 2 mảng
// const newArrays = arrayNames.concat(arrayNames2)
// console.log(newArrays)

// 14: Callback
// function binhphuong(num) {
//     return num * num
// }

// function tinhtongArray(arr, fn) {
//     var ketqua = 0
//     for (const value of arr) {
//         ketqua += fn(value)
//     }
//     return ketqua
// }
// const arrayNums = [1, 2, 3, 4, 5]
// console.log(tinhtongArray(arrayNums, binhphuong))
// 15: Ham map
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArrayNum = []
// for(const value of arrayNum){
//     newArrayNum.push(value +1)
// }
const newArrayNums = arrayNums.map(function (value, index) {

    return value + 1
})
console.log(newArrayNums)
console.log(arrayNums)