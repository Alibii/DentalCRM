const student = {
    name: "Иван",
    age: 20,
    course: 3,
    grades: [56, 78, 92, 84, 65]
  };
  
  function analyzeStudent(student) {
    const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
    const averageGrade = sum / student.grades.length;
    
    student.status = averageGrade >= 50 ? "сдал" : "не сдал";
  
    console.log(`Имя: ${student.name}`);
    console.log(`Возраст: ${student.age}`);
    console.log(`Средний балл: ${averageGrade.toFixed(2)}`);
    console.log(`Статус: ${student.status}`);
  }
  
  analyzeStudent(student);
  