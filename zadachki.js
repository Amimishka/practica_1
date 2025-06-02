/* 1 крутая задачка узнаем за сколько времени один человек задаст один вопрос  */
function testQuestionCount(rateArtemka, rateGrishka){
    const questionCount = 1 (1/rateArtemka - 1/rateGrishka);// аа разница
    return questionCount;
}
console.log(testQuestionCount(14,28,1))

       /** 2 задачка о машиночках**/
function findPrintSpeeds(totalPages, time1, time2, diff) {
  // **ну короче x — v2 машиночки,поэтому переберем возможные значения x от 1 до 100**//
  for (let x = 1; x <= 100; x++) {
    const speed1 = x + diff;  // а первая машиночка быстрее  
    const speed2 = x;  // вторая улиточка      
    const printed = speed1 * time1 + speed2 * time2; // ну вот сколько вместе крутышки напечатали
    if (printed === totalPages) {
      return { first: speed1, second: speed2 }; // вернём объект с обеими скоростями
    }
  }

  return null; 
}
console.log(findPrintSpeeds(340, 10, 15, 4));


       /** 3 задачка о якорных барабанах внизу непонятное слово это якорь и длина одной ручки ворот**/
           function calculateAnchorForce(mass, radius, handleLength) {
                       const g=9.8; 
                     const force = (mass * g * radius) / (2 * handleLength);
                    return force;
                  }
                   console.log(calculateAnchorForce(50, 0.2, 1));



/** 4 задачка о трубёшках**/

function findSecondPipeTime(bothTime, firstTime) {
      const rateBoth = 1 / bothTime;
  const rateFirst = 1 / firstTime;
const rateSecond = rateBoth - rateFirst;

  const timeSecond = 1 / rateSecond;

  return timeSecond;
}
console.log(findSecondPipeTime(8, 12));


/** 5 задачка Анька и Танька**/

function findAnyaTime(togetherTime, tanyaTime) {
    const rateTogether = 1 / togetherTime; // доля грядки в минуту двумя
    const rateTanya = 1 / tanyaTime;       // доля грядки в минуту танькой
    const rateAnya = rateTogether - rateTanya;
    const timeAnya = 1 / rateAnya;
    return timeAnya; // за сколько минут Аня пропалывает грядку одна
  }
  
  // Пример из задачи:
  console.log(findAnyaTime(36, 117));
   





