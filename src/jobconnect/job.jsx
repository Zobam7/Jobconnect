import React from 'react';
import axios from "axios"

class Job extends React.Component {
    render() {
        return (
            axios.post("https://github.com/remotive-io/remote-jobs-api.git").then((response) => {
        console.log("Server Response loading...", response.data)
      })
        );
    }
}

export default Job;