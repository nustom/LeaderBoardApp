//Wrapper to handle data communicaion with localstorage
class DataStorage {
  constructor(){
    this.key = "leaderboard_data"
  }

  get(){
    return JSON.parse(localStorage.getItem(this.key));
  }

  set(data){
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}