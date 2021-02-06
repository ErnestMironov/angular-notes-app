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

  // Получаем массив с записями из local storage
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

  // Возвращает массив с записями из сервиса
  getNotes(): Notes[] {
    return this.data;
  }

  // Возвращает запись по id
  getNoteById(id) {
    return this.data.find((note) => note.id === id);
  }

  // Удаляет запись из сервиса и local storage
  removeNote(id) {
    this.data = this.data.filter((note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(this.data));
  }

  // Добавляет запись в сервис и local storage
  addNote(note: any) {
    this.data.push(note);
    localStorage.setItem('notes', JSON.stringify(this.data));
  }

  // Изменяет запись в сервисе и local storage
  changeNote(note: any) {
    this.data = this.data.map((el) =>
      el.id === note.id ? (el = note) : (el = el)
    );
    localStorage.setItem('notes', JSON.stringify(this.data));
  }
}
