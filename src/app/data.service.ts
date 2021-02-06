import { Injectable } from '@angular/core';

export interface Notes {
  title: string;
  id: number;
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private data: Notes[] = JSON.parse(localStorage.getItem('notes')) || [
    {
      title: 'Test title 1',
      id: 1,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione,
    voluptatem sequi necessitatibus asperiores dolorum laudantium repellendus
    alias aliquid inventore deserunt, a tempore non dolores assumenda quae
    corrupti adipisci consectetur. Esse voluptatum vel numquam provident sit
    eligendi natus accusamus quidem perspiciatis molestias harum in dignissimos
    officia tempora laudantium blanditiis, quo quisquam adipisci consequatur ab
    suscipit? Ut soluta voluptate animi quibusdam doloribus? Atque hic quam
    voluptas ea? Culpa, dignissimos fugit? Ipsa.`,
    },
    {
      title: 'Test title 2',
      id: 2,
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione,
    voluptatem sequi necessitatibus asperiores dolorum laudantium repellendus
    alias aliquid inventore deserunt, a tempore non dolores assumenda quae
    corrupti adipisci consectetur. Esse voluptatum vel numquam provident sit
    eligendi natus accusamus quidem perspiciatis molestias harum in dignissimos
    officia tempora laudantium blanditiis, quo quisquam adipisci consequatur ab
    suscipit? Ut soluta voluptate animi quibusdam doloribus? Atque hic quam
    voluptas ea? Culpa, dignissimos fugit? Ipsa.`,
    },
  ];

  getNotes(): Notes[] {
    return this.data;
  }
  getNoteById(id) {
    return this.data.find((note) => note.id === id);
  }
  removeNote(id) {
    this.data = this.data.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(this.data));
  }
  addNote(note: any) {
    this.data.push(note);
    localStorage.setItem('notes', JSON.stringify(this.data));
  }
  changeNote(note: any) {
    this.data = this.data.map((el) =>
      el.id === note.id ? (el = note) : (el = el)
    );
    localStorage.setItem('notes', JSON.stringify(this.data));
  }
}
