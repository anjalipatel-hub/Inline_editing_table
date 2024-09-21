import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-edit-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inline-edit-one.component.html',
  styleUrl: './inline-edit-one.component.css'
})
export class InlineEditOneComponent {
  userArray = [
    {
      "id": 1,
      "name": "Anjai",
      "userName": "sdsd",
      "email": "anj@dfs.com",
      "phone": '243242332432',
      "webSite": "sdfsd.org",
      "iseditFieldName": ''
    },
    {
      "id": 2,
      "name": "gtrf",
      "userName": "sdsd",
      "email": "anxxj@dfs.com",
      "phone": '11111111',
      "webSite": "ddd.org",
      "iseditFieldName": ''
    },
    {
      "id": 1,
      "name": "Dhurv",
      "userName": "erwer",
      "email": "an22j@dfs.com",
      "phone": '444444444',
      "webSite": "dsds.org",
      "iseditFieldName": ''
    }
  ]

  onEdit(item: any, field: any) {
    item.iseditFieldName = field;
  }
}
