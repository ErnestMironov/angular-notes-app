import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  providers: [DataService],
})
export class NoteComponent implements OnInit {
  ngOnInit(): void {}

  // Определям свойства записи
  id: number;
  note: any;
  title: string;
  content: string;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    // Получаем id записи из url
    this.id = parseInt(activateRoute.snapshot.params['id']);

    // Получаем свойства записи из сервиса
    this.note = this.dataService.getNoteById(this.id);
    this.title = this.note.title;
    this.content = this.note.content;
  }

  // Удаляем запись и возвращаемся на главную страницу
  removeNote() {
    const remove: boolean = confirm('Вы уверены что хотите удалить запись?');
    if (remove) {
      this.dataService.removeNote(this.id);
      this.router.navigateByUrl('');
    }
  }

  // Сохраяем изменения в записи и возвращаемся на главную стираницу
  changeNote() {
    const note = {
      title: this.title,
      id: this.id,
      content: this.content,
    };

    this.dataService.changeNote(note);
    this.router.navigateByUrl('');
  }
}
