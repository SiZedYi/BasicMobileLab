function tinhTip(soTienHoaDon) {
    const tip = soTienHoaDon >= 50 && soTienHoaDon <= 300 ? soTienHoaDon * 0.15 : soTienHoaDon * 0.2;
    const tongTien = soTienHoaDon + tip;
  
    console.log(`The bill was ${soTienHoaDon}, the tip was ${tip.toFixed(2)}, and the total value ${tongTien.toFixed(2)}`);
  }
  
  // Test data
  tinhTip(275);
  tinhTip(40);
  tinhTip(430);