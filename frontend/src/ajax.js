import axios from "axios";
//import cookies from "cookies";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

module.exports = {

    getAppointments(){
        axios.get('http://localhost:8000/api/appointment/').then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    postAppointment(date, time, desc ){
        axios.post('http://localhost:8000/api/appointment/',{
            date: date,
            time: time,
            description: desc
        })
    }


}