import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService],
})
export class HomeComponent implements OnInit {
  // Отвечает за отображение модального окна с формой добавления новой записи
  modalActive: boolean = false;
  notes: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Получаем записи из сервиса
    this.notes = this.dataService.getNotes();
  }

  // Отображает модальное окно
  showModal() {
    this.modalActive = true;
  }

  // Скрывает модальное окно
  hideModal() {
    this.modalActive = false;
  }

  // Добавляет новую запись
  addNote(note) {
    this.dataService.addNote(note);
  }
}
