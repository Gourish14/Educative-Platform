import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {

  Actions: string;

  Code: string;

  CourseName: string;
 
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  constructor(){

    const storedEntries = localStorage.getItem('entries');
      if (storedEntries) {
        this.entries = JSON.parse(storedEntries);
      }
    }
  entries: any[] = [];


  code:string ='';
  course:string ='';


 obj = {

   code:'',
   course:'',
}

 

  ELEMENT_DATA: PeriodicElement[] = [

    { Actions: '', Code: '', CourseName: ''},

  ];

  displayedColumns: string[] = ['Actions','Code','CourseName'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  onLocalstorage(){

     this.obj.code=this.code;
     this.obj.course=this.course;
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

      this.var10 = true;

  }

  deleteRow(row: any) {

    const index = this.entries.indexOf(row);

    if (index !== -1) {

      this.entries.splice(index, 1);

      console.log('Deleted:', row);
    }

  }

// for editing a row

isDisabled: boolean = false;

  editRow(row: any) {
    const index = this.entries.indexOf(row);
    this.isDisabled = !this.isDisabled;
    console.log(index)
    console.log(this.entries[index].code)

    if(!this.isDisabled){

      this.code=row.code
      this.course=row.course
    }

    if(this.isDisabled){

    this.entries[index].code = this.code
    this.entries[index].course=this.course

    }

  }

  var1=false;
  var2=false;
  var3=true;
  var4=true;
  var5 = false;
  var6 = false;
  var7 = true;
  var8 = true;
  var9=true;
  var10=false;
  onedit(){

    this.var1=false

    this.var2=false

    this.var3=true;

    this.var4=true;

    this.var5=false

    this.var6=false

    this.var7=true;

    this.var8=true;

  }

  ondelete(){

this.var9=false;

}
}
