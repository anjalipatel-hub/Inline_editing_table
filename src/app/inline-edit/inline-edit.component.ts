import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-edit',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  preserveWhitespaces: true,
  templateUrl: './inline-edit.component.html',
  styleUrl: './inline-edit.component.css'
})
export class InlineEditComponent {
  userArray = [
    {
      "id": 1,
      "name": "Anjai",
      "userName": "sdsd",
      "email": "anj@dfs.com",
      "phone": '243242332432',
      "webSite": "sdfsd.org",
      "isEdit": false
    },
    {
      "id": 2,
      "name": "gtrf",
      "userName": "sdsd",
      "email": "anxxj@dfs.com",
      "phone": '11111111',
      "webSite": "ddd.org",
      "isEdit": false
    },
    {
      "id": 1,
      "name": "Dhurv",
      "userName": "erwer",
      "email": "an22j@dfs.com",
      "phone": '444444444',
      "webSite": "dsds.org",
      "isEdit": false
    }
  ]

  onEdit(item: any) {
    //At a time only one row should be editable
    this.userArray.forEach(element => {
      element.isEdit = false;
    })
    this.userArray.forEach(user => user.isEdit = false);
    item.isEdit = true;
  }

  onDelete(item: any) {
    const index = this.userArray.findIndex(user => user.id === item.id);
    if (index !== -1) {
      this.userArray.splice(index, 1); // Remove the user from the array
      alert(`User ${item.name} has been successfully deleted.`);
    } else {
      alert('Error: User not found!');
    }
  }

  onUpdate(item: any) {
    // Show a confirmation dialog before updating
    const isConfirmed = confirm('Are you sure you want to update this user?');
  
    if (isConfirmed) {
      item.isEdit = false;
      alert(`User ${item.name} has been successfully Updated!`);
    } else {
      alert('Update canceled.');
    }
  }
  

}
