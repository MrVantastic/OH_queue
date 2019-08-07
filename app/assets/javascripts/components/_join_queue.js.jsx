const JoinQueue = (props) => {


    let formFields = {}

    return(
        <form onSubmit={ (e) => {
            props.handleJoinQueue(formFields.name.value, formFields.partner.value, formFields.location.value);
            e.target.reset();
        }}>
            <input ref={input => formFields.name = input} placeholder='Name' />
            <input ref={input => formFields.partner = input} placeholder="Partner's name" />
            <input ref={input => formFields.location = input } placeholder='Location' />
            <button>Join</button>
        </form>
    )

}