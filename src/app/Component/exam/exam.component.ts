import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {

  Actions: string;
  ExamName: string;
  TotalMarks: string;
  Date: string;
  Time: string;
  Files: string;
}

export interface Student {

  name: string;
  marks: string;
}
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  constructor(){

    const storedEntries = localStorage.getItem('entries');
      if (storedEntries) {
        this.entries = JSON.parse(storedEntries);
      }
    }

  entries: any[] = [];

  examname:string ='';
  totalmarks:string ='';
  date:string='';
  time:string='';
  files:string='';

  obj = {

   examname:'',
   totalmarks:'',
   date:'',
   time:'',
   files:''
}

  ELEMENT_DATA: PeriodicElement[] = [
    { Actions: '', ExamName: '', TotalMarks: '', Date: '', Time: '',Files: ''},
  ];

  displayedColumns: string[] = ['Actions','ExamName','TotalMarks','Date','Time','Files'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  adisabled=true;

  onLocalstorage(){

     this.obj.examname=this.examname;
     this.obj.totalmarks=this.totalmarks;
     this.obj.date=this.date;
     this.obj.time=this.time;
     this.obj.files=this.files;
     sessionStorage.setItem("obj", JSON.stringify(this.obj));
    const personCopy = { ...this.obj};
    this.entries.push(personCopy)
    this.isDisabled=true;
      console.log(this.entries)

      this.var1=true;
      this.var2=true;
      this.var3=false;
      this.var4=false;
      this.var5=true;
      this.var6=true;
      this.var7=false;
      this.var8=false;
      this.var10=true;
      this.var11=false;
      this.var12=true;
      this.var13=false;
      this.var14=true;
      this.var15=false;
      this.adisabled=false;
  }

  deleteRow(row: any) {
    const index = this.entries.indexOf(row);
    if (index !== -1) {
      this.entries.splice(index, 1);
      console.log('Deleted:', row);
    }
  }

isDisabled: boolean = false;

  editRow(row: any) {
    const index = this.entries.indexOf(row);
    this.isDisabled = !this.isDisabled;
    console.log(index)
    console.log(this.entries[index].code)
    if(!this.isDisabled){

      this.examname=row.examname
      this.totalmarks=row.totalmarks
      this.date=row.date
      this.time=row.time
      this.files=row.files
    }

    if(this.isDisabled){

    this.entries[index].examname = this.examname
    this.entries[index].totalmarks=this.totalmarks
    this.entries[index].date = this.date
    this.entries[index].time = this.time
    this.entries[index].files = this.files
    }
  }

  var1=false;
  var2=false;
  var3=true;
  var4=true;
  var5=false;
  var6=false;
  var7=true;
  var8=true;
  var9=true;
  var10=false;
  var11=true;
  var12=false;
  var13=true;
  var14=false;
  var15=true;

  onedit(){

    this.var1=false;
    this.var2=false;
    this.var3=true;
    this.var4=true;
    this.var5=false
    this.var6=false
    this.var7=true;
    this.var8=true;
    this.var10=false;
    this.var11=true;
    this.var12=false;
    this.var13=true;
    this.var14=false;
    this.var15=true;
  }

  ondelete(){
 this.var9=false;
}

students: Student[] = [

  { name: 'Gourish', marks: '' },
  { name: 'Raj', marks: '' },
  { name: 'Rahul', marks: '' },
  { name: 'Rohan', marks: '' },
  { name: 'Rebel', marks: '' },
];

cancel() {
}

saveAndClose() {
}

var20=false;

handleAnchorClick(event: Event) {
  event.preventDefault();
  this.var20=true;
}
}
