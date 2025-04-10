import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI{

  static async create(note){
    return ((await axios.post(`${BASE_URL}`, note)).data);
  }

  static async fetchAll(){
    return ((await axios.get(BASE_URL)).data);
  }

  static async fetchById(id){
    return ((await axios.get(`${BASE_URL}/${id})`).data));
  }

  static async deleteById(id){
    return ((await axios.delete(`${BASE_URL}/${id})`).data));
  }

  static async update(note){
    return ((await axios.patch(`${BASE_URL}/${note.id}`, note)).data);
  }
}