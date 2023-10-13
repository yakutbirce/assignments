let a = 2;
let b = 3;
let c = 2;
(a == b) // false döner çünkü a ile b birbirine eşit değildir.
    (a == c) // true döner çünkü a ile c birbirleriyle aynı değere sahiptir.

typeof "John Doe" // string döndürür çünkü John Doe, tırnak içinde yazılmış string değeridir.
//  Type of, ifadenin veri türünü belirler ve sonuç string olarak döner.
typeof 3.14 // Number döndürür çünkü 3.14 bir sayı değeridir.
typeof true // Boolean döndürür çünkü 'true' olası bir boolean değeridir.
typeof 234567890123456789012345678901234567890n // bigint döndürür çünkü büyük bir sayıdır.
typeof undefined // undefined döndürür çünkü tanımlanmamış değeri gösterir.
typeof null // null değeri type of ile kullanıldığında object olarak döner.
//  Bu JavaScript'in otomatik bir özelliğidir.
typeof Symbol('symbol') // symbol döndürür. Çünkü sybols eşsiz ve değişmez değerlerdir. 
// Bu sembolün açıklaması 'symbol' olarak tanımlandığı için de symbol döndürecektir.

let x = 2;
let y = "2";
(x == y) // True döner. Çünkü '==' ile değerleri karşılaştırdığımızda veri tiplerini değil
    // değerleri karşılaştırırız. Bu durumda '2' ve "2" aynı değere sahiptir.
    (x === y) // False döner. Çünkü '===' ile değerler karşılaştırıldığında eşit diyebilmemiz için
// hem değerlerinin hem de türlerinin aynı olması gerekir. x bir sayı iken y ise bir stringtir.

let x = 3;
let y = "3";
x + y // x bir number(3) ve y bir metin("3") olduğu için Java Script x+y ifadesinde metin birleştirme işlemi
//yapar ve işlem sonucu 33 olarak döner.

let x = 24;
let y = "Hello";
x + y // x bir number ve y bir stringtir. JavaScript, bir sayı ve metin toplanmaya çalışıldığında metni
// otomatik olarak sayıya döndürmeye çalışır ancak number olan x'i ve string olan Hello'yu toplamaya çalıştığımızda
// JavaScript metni sayıya dönüştürmek yerine metin birleştirme yapıp sonucu "24Hello" olarak döndürecektir.

let name = "Vivek";
let surname = " Bisht";
name + surname // Her iki değişken de string türündedir. JavaScript, string türündeki değerleri toplarken
// onları birleştirir ve bu ifadeyi "Vivek Bisht" olarak döndürür.

let x = 3;
let y = "3";
x - y //JavaScript, biri number diğeri string olan bu işlemde otomatik olarak stringi number'a dönüştürür
// ve ardından bu iki sayının farkını hesaplar. Sonuç olarak x-y işlemi "0" değerini döndürür.

let x = 0;
let y = 23;

if (x) { console.log(x) } //x'in değeri 0 olduğu için false değerini verir. koşul false olduğu için de
// console.log(x) ifadesi çalıştırılmaz ve sonuç olarak konsola herhangi bir şey yazdırmaz.

if (y) { console.log(y) } //JavaScript'te bir değer 0 dışında bir number veya string içeriyorsa o değer true
// kabul edilir. Burada if (y) ifadesi y'nin 0 dışında bir bir number olan 23 olduğunu kontrol eder ve if çalışır.
// sonuç olarak da konsola "23" yazdırır.

isNaN("Hello") // "Hello" bir stringtir ve JavaScript bu stringi bir sayıya çeviremeyeceğini bilir.
// isNaN, bir değeri sayıya çevirmeye çalışsa da "hello" bir stringtir ve geçerli bir sayıya çevrilemez.
// Bu yüzden de true dönecektir.
isNaN(345) // isNaN, bir değerin sayı olup olmadığını kontrol eder ve bir değeri sayıya çevirmeye çalışır.
// Ancak 345 zaten bir sayı olduğundan false döndürür.
isNaN('1') // '1' stringtir. isNaN ise önce bu stringi sayıya döndürmeye çalışır. JavaScript '1' stringini
// sayıya dönüştürebilir çünkü içeriği bir sayısal değerdir. Sonuç olarak da '1' stringi number'a dönüştürülebilir
// ve isNaN('1') ifadesi isNaN(1) haline gelir ve ifade FALSE döner çünkü 1 bir sayıdır.
isNaN(true) // true, bir boolean değeridir ve sayısal olarak da 1'i temsil eder. JavaScript bu ifadede true'yu sayısal
// değerine yani 1'e döndürür. Bu şekilde de isNaN(true) ifadesi isNaN(1) haline gelir ve 1 de sayı olduğundan
// FALSE döndürür.
isNaN(false) // false, değeri 0 olan bir boolean'dir. JavaScript burada false'u sayısal değerine (0)'a döndürür
//  ve isNaN(false) ifadesi isNaN(0) haline gelir ve 0 da bir sayı olduğundan FALSE döndürür.
isNaN(undefined) // undefined, JavaScript'te özel bir değerdir ve sayısal bir değeri yoktur ve sayısal değere
// çevrilemez. Bu yüzden ifade TRUE döner.