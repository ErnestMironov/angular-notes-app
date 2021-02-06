import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  // Узнаем от родительского компонента состояние модального окна
  @Input() modalActive: string;

  // Регистрируем событие закрытия модального окна

  @Output() hideModalEvent = new EventEmitter<boolean>();

  // Регистрируем событие добавления записи
  @Output() addNoteEvent = new EventEmitter<any>();

  title: string; // Заголовок записи
  content: string; // Содержимое записи

  ngOnInit(): void {}

  // Вызываем событие закрытия модального окна
  hideModal() {
    this.hideModalEvent.emit();
  }

  // Создаем новую запись
  addNote() {
    // Собираем новую запись
    let note: any = {};

    note.title = this.title;
    note.id = Date.now();
    note.content = this.content;

    // Передаем новую запись родительскому компоненту
    this.addNoteEvent.emit(note);

    // Скрываем модальное окно и очищаем поля ввода
    this.hideModal();
    this.title = '';
    this.content = '';
  }
}
