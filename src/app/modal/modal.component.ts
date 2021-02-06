import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalActive: string;
  @Output() hideModalEvent = new EventEmitter<boolean>();
  @Output() addNoteEvent = new EventEmitter<any>();

  title: string;
  content: string;

  ngOnInit(): void {}

  hideModal() {
    this.hideModalEvent.emit();
  }

  addNote() {
    let note: any = {};

    note.title = this.title;
    note.id = Date.now();
    note.content = this.content;

    this.addNoteEvent.emit(note);
    this.hideModal();
    this.title = '';
  }
}
