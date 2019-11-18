import React from 'react';



class ModalLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        credentials: { email: "", password: "" },
        token: "",
        user: { name: "", email: "" },
      };
  
      //this.handleInputChange = this.handleInputChange.bind(this);
      //this.handleClick = this.handleClick.bind(this);
      //this.getToken = this.getToken.bind(this);
    }
  
    componentDidMount() {
        // Get request for laravel api call
        axios.get('http://http://127.0.0.1:8000/api/login/')
          .then(response => { const posts = response.data; 
            this.setState({ posts : response.data });
          });
 
  
      this.setState({ token: tokenKey });
      this.props.something(this.state.token);
    }
    componentDidMount() {
      this.getToken();
    }
    handleClick(event) {
      axios
        .post("http://127.0.0.1:8000/api/login", this.state.credentials)
        .then(res => {
          const d = res.data.data;
  
          this.props.something(d.token);
  
          this.setState({
            token: d.token,
            user: d.user,
            profile: d.user_profile
          });
  
          localStorage.setItem("token", JSON.stringify(this.state.token));
          localStorage.setItem("user", JSON.stringify(this.state.user));
          localStorage.setItem("profile", JSON.stringify(this.state.profile));
        });
  
      event.preventDefault();
    }
  
    render() {
      return (
        <div id="container">
          <form>
            <label>
              Username:
              <input
                name="email"
                type="input"
                checked={this.state.isLoggedIn}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                type="input"
                value={this.state.userLoggingIn}
                onChange={this.handleInputChange}
              />
            </label>
            <button onClick={e => this.handleClick(e)}>Submit</button>
          </form>
        </div>
      );
    }
  }
  
  export default ModalLogin;