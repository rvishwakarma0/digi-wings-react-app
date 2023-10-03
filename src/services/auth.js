class AuthService {
    async loginForNgo(email, password) {
        // Make a request to the '/login' endpoint
        return fetch('http://localhost:8080/v1/validate-ngo-creds-get-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then(data => {
                // Store the token in local storage or a state management solution of your choice
                localStorage.setItem('token', data.token);
                localStorage.setItem('ngo', JSON.stringify(data.ngo));
            });
    }

    async loginForVolunteer(email, password) {
        // Make a request to the '/login' endpoint
        return fetch('http://localhost:8080/v1/validate-volunteer-creds-get-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then(data => {
                // Store the token in local storage or a state management solution of your choice
                localStorage.setItem('token', data.token);
                localStorage.setItem('volunteer', JSON.stringify(data.volunteer));
            });
    }



    async logout() {
        // Remove the token from local storage or your state management solution
        localStorage.removeItem('token');
        localStorage.removeItem('ngo');
        localStorage.removeItem('volunteer');
    }

    isLoggedIn() {
        // Check if the token exists in local storage or your state management solution
        const token = localStorage.getItem('token');
        return !!token; // Returns true if the token exists, false otherwise
    }

    getUserType(){
        if(this.isLoggedIn()){
            if(localStorage.getItem('ngo') !== null)
                return 'ngo';
            else if(localStorage.getItem('volunteer') !== null)
                return 'volunteer';
        }
        return 'AnonymousUser';
    }
}

export default AuthService;