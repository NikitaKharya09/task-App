import { Component, OnInit } from '@angular/core';
import { AppService } from "./services/app-service.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  tableData = {};
  addition = true;
  updation = false;
  title: string;
  description: string;
  updateData = {};
  updateIndex: number;
  newRow = false;
  isSpinner = false;
  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.isSpinner = true;
    this._appService.getData().subscribe(response => {
      this.tableData = response;
      this.isSpinner = false;
    },
      error => {
        this.isSpinner = false;
        console.log(error);
      });
  }

  removeRow(postCont: any, index: number): void {
    this.isSpinner = true;
    this._appService.removeRow(postCont).subscribe(response => {
      this.getTableData();
      this.isSpinner = false;
    }, error => {
      this.isSpinner = false;
      console.log(error);
    });
  }

  onSubmitRecord(data: any): void {
    if (this.addition) {
      this.isSpinner = true;
      this._appService.submit(this.title, this.description).subscribe(response => {
        this.getTableData();
        this.title = '';
        this.description = '';
        this.isSpinner = true;
      }, error => {
        this.isSpinner = false;
        console.log(error);
      });
    } else {
      /* Dont have the url for Updating Record */
    }
  }
  
  updateRecord(postCont: any, index: number): void {
    this.newRow = true;
    this.updateIndex = index;
    this.updateData = postCont;
    this.updation = true;
    this.addition = false;
    this.title = postCont.fields.title.stringValue;
    this.description = postCont.fields.description.stringValue;
  };

  addRow(): void {
    this.newRow = true;
    this.addition = true;
    this.updation = false;
    this.resetData();
  }

  cancelSave(): void {
    this.newRow = false;
    this.addition = false;
    this.updation = false;
    this.resetData();
  }

  resetData(): void {
    this.title = '';
    this.description = '';
    this.updateData = {};
    this.updateIndex = null;
  }
}
