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
  
  // Hàm so sánh BMI và trả về kết quả
  function compareBMI(mark, john) {
    const bmiMark = calculateBMI(mark.mass, mark.height);
    const bmiJohn = calculateBMI(john.mass, john.height);
  
    return bmiMark > bmiJohn;
  }
  
  // Tính toán và so sánh cho bộ dữ liệu 1
  const markHigherBMI1 = compareBMI(data1.mark, data1.john);
  console.log("Data 1: Mark có BMI cao hơn John?", markHigherBMI1);
  
  // Tính toán và so sánh cho bộ dữ liệu 2
  const markHigherBMI2 = compareBMI(data2.mark, data2.john);
  console.log("Data 2: Mark có BMI cao hơn John?", markHigherBMI2);