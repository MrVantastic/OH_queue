class NewBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            student_accts : []
        }

        this.handleNewAccount = this.handleNewAccount.bind(this)
    }

    handleNewAccount(firstname, lastname, password) {
        let body = JSON.stringify({student: {firstname: name, lastname:lastname, password_digest: password}})
        fetch(`http://localhost:3000/api/v1/student_accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json})
    }


    componentDidMount(){
        fetch('/api/v1/student_accounts.json')
            .then((response) => {return response.json()})
            .then((student_acct) => { this.add_new_acct(student_acct)})
            .then(() => console.log(this.state.accts))
    }

    // to delete later
    add_new_acct(acct) {
        this.setState({
            student_accts : this.state.student_accts.concat(acct)
        })
    }


    render() {
        return(
            <div>
                <NewAccount handleNewAccount={this.handleNewAccount}/>
            </div>
        )
    }
}