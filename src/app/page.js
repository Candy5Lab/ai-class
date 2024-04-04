"use client";
import axios from "axios";
export default function Home() {

  async function note(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const topic = event.target.topic.value;

    const response = await axios.post("/api/create-story", {
      name,
      age,
      topic
    })

    console.log(response.data)
    
    //alert(`ชื่อ: ${name} อายุ: ${age} หัวข้อ: ${topic}`)
  }

  return (
    <form onSubmit={note} className="flex flex-col">
      <input className="border-slate-500" type="text" name="name" placeholder="กรอกชื่อ" />
      <input className="border-slate-500" type="number" name="age" placeholder="กรอกอายุ" />
      <input className="border-slate-500" type="text" maxLength={20} name="topic" placeholder="กรอกหัวข้อที่ต้องการ" />
      
      <button type="submit">Send</button>
    </form>
    
  );
}
