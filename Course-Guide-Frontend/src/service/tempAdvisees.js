const advisees = [
    { lName: "Mariyappa", fName: "Aden", email: "Aden.Mariyappa@qu.edu", studentID: 5342724, },
    { lName: "Biasotti", fName: "Jill", email: "Jillian.Biasotti@qu.edu", studentID: 7800183, },
    { lName: "Ruiz", fName: "Joseph", email: "Joseph.Ruiz@qu.edu", studentID: 3363401, },
    { lName: "Wilkinson", fName: "Julia", email: "Julia.Wilkinson@qu.edu", studentID: 6347805, },
    { lName: "Jacobson", fName: "James", email: "James.Jacobson@qu.edu", studentID: 2288113, },
    { lName: "Nam", fName: "Philip", email: "Philip.Nam@qu.edu", studentID: 6050737, },
    { lName: "Skywalk", fName: "Anakin", email: "Anakin.Skywalker.edu", studentID: 2610376, },
    { lName: "Kenobi", fName: "Obi Wan", email: "ObiWan.Kenobi@qu.edu", studentID: 1883091, },
  ];
  export function getAdvisees() {
    return advisees;
  }
  export function getStudentID(id) {
    return advisees.find((c) => c.studentID === id);
  }
  export function getStudentLength(){
    return Object.keys(advisees).length;
  }
