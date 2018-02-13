import {Component, HostBinding, Output, EventEmitter, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss']
})
export class NewCardInputComponent implements OnInit {

  @Output() addCardEvent = new EventEmitter<string>();
  public newCard: any = { text : '' };
  @HostBinding('class') col4 = 'col-4';
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
    console.log(event.code);
  }
  constructor() { }

  ngOnInit() {
  }

  addCard(text) {
    this.addCardEvent.emit(text);
    this.newCard.text = '';
  }
}
