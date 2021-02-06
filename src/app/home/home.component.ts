import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService],
})
export class HomeComponent implements OnInit {
  modalActive: boolean = false;
  notes: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.notes = this.dataService.getNotes();
  }

  showModal() {
    this.modalActive = true;
  }
  hideModal() {
    this.modalActive = false;
  }
  addNote(note) {
    this.dataService.addNote(note);
  }
}
