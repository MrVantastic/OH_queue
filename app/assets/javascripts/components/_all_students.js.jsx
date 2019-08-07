const AllStudents = (props) => {

    var student_queue = props.students.map((student) => {
        if (student.partner !== ''){
            return(<div key={student.id} >
                <p>{student.name}, {student.partner} -- {student.location}</p>
            </div>
            )
        }
        else {
            return (
                <div key={student.id}>
                    <p>{student.name} -- {student.location}</p>
                </div>
            )
        }
    })

    return(
        <div>
            {student_queue}
        </div>
    )
}