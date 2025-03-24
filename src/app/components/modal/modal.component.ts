import { Component, HostListener, inject } from '@angular/core';
import { ModalService } from '../../shared/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  modalService = inject(ModalService);
  constructor(
  ){}

  @HostListener('document:keydown.escape',['$event'])
  onEscape(){
    this.modalService.closeModal();
  }
}
