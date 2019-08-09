class NewBody extends React.Component {

    constructor(props) {
        super(props);

        this.handleNewAccount = this.handleNewAccount.bind(this)
    }

    handleNewAccount(firstname, lastname, password) {
        let body = JSON.stringify({student: {firstname: firstname, lastname:lastname, password_digest: password}})
        fetch(`http://localhost:3000/api/v1/student_accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json})
    }


    render() {
        return(
            <div>
                <NewAccount handleNewAccount={this.handleNewAccount}/>
            </div>
        )
    }
}