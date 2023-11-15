import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public variables = ['One','Two','County', 'Three', 'Zebra', 'XiOn'];
  public variables2 = [{ id: 0, name: 'One' }, { id: 1, name: 'Two' }];

  public filteredList1 = this.variables.slice();
  public filteredList2 = this.variables.slice();
  public filteredList3 = this.variables.slice();
  public filteredList4 = this.variables.slice();
  public filteredList5 = this.variables2.slice();
  constructor(private router: Router) {}
  name = 'Angular';
  listItems = [];

  form: any;
  ngOnInit() {
    this.form = new FormGroup({
      item: new FormControl('', Validators.required),
    });
  }
  addToListReq() {
    this.listItems.push(this.form.value.item);
  }
  delete(item) {
    this.listItems.splice(item, 1);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
