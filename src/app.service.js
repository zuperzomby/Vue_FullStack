import axios from 'axios'
const appService = {
  getCards() {
    return new Promise((resolve) => {
      axios.get(`http://188.226.162.184:8000/api/champions/`)
        .then(response => {
          resolve(response.data)
        })
    })
  },

  getCard(name) {

    return new Promise((resolve) => {
      axios.get(`http://188.226.162.184:8000/api/champions?name=`+ name)
        .then(response => {
          if(response.data.items == 0){
            window.location.replace("/notFound");
          }
          else{
          resolve(response.data)
          }
        })
    })
  },
  getCardById(id) {

    return new Promise((resolve) => {
      axios.get(`http://188.226.162.184:8000/api/champions/`+ id)
        .then(response => {
          if(response.data.items == 0){
            window.location.replace("/notFound");
          }
          else{
          resolve(response.data)
          }
        })
    })
  },

  postCard(credentials){
    return new Promise((resolve, reject) => {
      axios.post('http://188.226.162.184:8000/api/champions', credentials)
        .then(response => {
          resolve(response.data)
          window.location.replace("/cards/");
        }).catch(response => {
          reject(response.status)
        })
    })
  },

  deleteCard(id) {
    return new Promise((resolve) => {
      axios.delete(`http://188.226.162.184:8000/api/champions/`+ id)
        .then(response => {
          window.location.replace("/cards/");
        })
    })
  },

  editCard(id, credentials){
    return new Promise((resolve, reject) => {
      axios.put('http://188.226.162.184:8000/api/champions/'+ id ,credentials)
        .then(response => {
          resolve(response.data)
          window.location.replace("/cards/");
        }).catch(response => {
          reject(response.status)
        })
    })
  }

}

export default appService
