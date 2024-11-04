// Dữ liệu điểm số của các đội
const dolphinsScore1 = [96, 108, 89];
const koalasScore1 = [88, 91, 110];

const dolphinsScoreBonus1 = [97, 112, 101];
const koalasScoreBonus1 = [109, 95, 123];

const dolphinsScoreBonus2 = [97, 112, 101];
const koalasScoreBonus2 = [109, 95, 106];

// Hàm tính điểm trung bình
function calculateAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

// Hàm xác định đội chiến thắng
function determineWinner(dolphinsScore, koalasScore, minScore = 0) {
  const avgDolphins = calculateAverage(dolphinsScore);
  const avgKoalas = calculateAverage(koalasScore);

  if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
    console.log('Dolphins win the trophy!');
  } else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
    console.log('Koalas win the trophy!');
  } else if (avgDolphins === avgKoalas && avgDolphins >= minScore) {
    console.log('It\'s a draw!');
  } else {
    console.log('No team wins the trophy');
  }
}

// Gọi hàm để xác định người chiến thắng cho từng trường hợp
console.log('Data 1:');
determineWinner(dolphinsScore1, koalasScore1);

console.log('Data Bonus 1 (min score 100):');
determineWinner(dolphinsScoreBonus1, koalasScoreBonus1, 100);

console.log('Data Bonus 2 (min score 100):');
determineWinner(dolphinsScoreBonus2, koalasScoreBonus2, 100);