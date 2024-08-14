interface Teacher {
  // first name of the teacher
  firstName: string;
  // last name of the teacher
  lastName: string;
  // whether the teacher is a full-time employee
  fullTimeEmployee: boolean;
  // years of experience of the teacher
  yearsOfExperience?: number;
  // location of the teacher
  location: string;
  // allow to add any additional attribute to the object
  [key: string]: any;
}

// extend the Teacher interface to create a new interface Directors
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

interface Directors extends Teacher {
  // number of reports the director manages
  numberOfReports: number;
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: 'Frank',
    lastName: 'Donald',
    fullTimeEmployee: true,
    location: 'New Jersey',
    contract: false,
}

// initialize the first director object
console.log(teacher1);

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  numberOfReports: 10
};

// initialize the second director object
const director2: Directors = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  numberOfReports: 20
};

// print the second director object
console.log(director2);
    firstName: 'John',
    lastName: 'Smith',
    location: 'America',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher('john', 'doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface; 
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);
