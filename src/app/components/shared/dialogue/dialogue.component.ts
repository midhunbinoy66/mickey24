import { Component, Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA, MatDialogActions, MatDialogContent} from '@angular/material/dialog'

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent {

  constructor(
    private dialogRef:MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string; actionText: string; onConfirm: () => void }
  ){}

  close() {
    this.dialogRef.close();
  }

  confirm() {
    this.data.onConfirm(); 
    this.dialogRef.close();
  }
}
