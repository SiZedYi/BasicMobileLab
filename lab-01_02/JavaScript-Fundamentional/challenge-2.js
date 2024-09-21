// Lưu trữ dữ liệu cho cả hai bộ dữ liệu
const data1 = {
    mark: { mass: 78, height: 1.69 },
    john: { mass: 92, height: 1.95 }
  };
  
  const data2 = {
    mark: { mass: 95, height: 1.88 },
    john: { mass: 85, height: 1.76 }
  };
  
  // Hàm tính toán BMI
  function calculateBMI(mass, height) {
    return mass / (height * height);
  }
  
  // Hàm so sánh BMI và in kết quả
  function compareBMI(mark, john) {
    const bmiMark = calculateBMI(mark.mass, mark.height);
    const bmiJohn = calculateBMI(john.mass, john.height);
  
    if (bmiMark > bmiJohn) {
      console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's (${bmiJohn.toFixed(1)})!`);
    } else {
      console.log(`John's BMI (${bmiJohn.toFixed(1)}) is higher than Mark's (${bmiMark.toFixed(1)})!`);
    }
  }
  
  // Tính toán và so sánh cho bộ dữ liệu 1
  compareBMI(data1.mark, data1.john);
  
  // Tính toán và so sánh cho bộ dữ liệu 2
  compareBMI(data2.mark, data2.john);