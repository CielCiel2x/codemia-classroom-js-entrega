const studentName = "Cristopher";
const studentLastName = "Yang";

const saludarEstudiante = (paramName, paramLastName) => {
  console.log(
    `Hola ${paramName} ${paramLastName}, bienvenido al curso de Javascript de Codemia =)`
  );
};

saludarEstudiante(studentName, studentLastName);