const NewAccount = (props) => {
    let formFields = {}

    return(
        <form onSubmit={ (e) => {
            props.handleNewAccount(formFields.firstname.value, formFields.lastname.value, formFields.password.value); e.target.reset();}
        }>
            <input ref={input => formFields.firstname=input} placeholder='Enter your first name' />
            <input ref={input => formFields.lastname=input} placeholder='Enter your last name' />
            <input ref={input => formFields.password=input} placeholder='password' />
            <button>Submit!</button>
        </form>
    )
}