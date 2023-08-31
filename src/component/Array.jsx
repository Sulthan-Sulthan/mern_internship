import React from 'react';
import './style.module.css'

export default function Array() {
    var num = [1, 2, 3, 4, 5];
    var fruits = ["apple", "banana", "orange"];

    const students = [
        {
            name: "cristiano",
            phone: 333333300,
            email: "cristiano@gmail.com",
            address: "Mangalore",
            marks: {
                maths: 90,
                hindi: 40,
                science: 67,
                english: 40,
                social: 45,
            },
        },
        {
            name: "lionel",
            phone: 600000000,
            email: "lionel@gmail.com",
            address: "kasargod",
            marks: {
                maths: 35,
                hindi: 34,
                science: 67,
                english: 34,
                social: 45,
            },
        },
    ];

    const calculateTotalMarks = (marks) => {
        return Object.values(marks).reduce((total, mark) => total + mark, 0);
    };

    const checkPassOrFail = (marks) => {
        return Object.values(marks).every((mark) => mark >= 35) ? 'pass' : 'fail';
    };

    return (
        <div>
            <h1 className="App" style={{ backgroundColor: "black", color: "white" }}>
                Array
            </h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Maths</th>
                        <th>Hindi</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Social</th>
                        <th>Total Marks</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.marks.maths}</td>
                            <td>{student.marks.hindi}</td>
                            <td>{student.marks.science}</td>
                            <td>{student.marks.english}</td>
                            <td>{student.marks.social}</td>
                            <td>{calculateTotalMarks(student.marks)}</td>
                            <td className={checkPassOrFail(student.marks)}>
                                {checkPassOrFail(student.marks).toUpperCase()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}