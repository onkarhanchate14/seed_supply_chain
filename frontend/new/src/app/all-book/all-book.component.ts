import { Component, OnInit } from '@angular/core';
import { Book1,Book2 } from './book';
import { BookdataService } from '../bookdata.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {
arrBooks:Book1[]=[];
arrBooksInterface:Book2[]=[];
count:number=0;
  constructor(private _data: BookdataService, private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this._data.getAllBook().subscribe(
      (data:Book1[])=>{
        this.arrBooks=data;
      }
    );

  }
  delete(item:Book1){
  this._data.deleteBook(item.name).subscribe(
    (x:any)=>{
      if(x.affectedRows==1){
        this.arrBooks.splice(this.arrBooks.indexOf(item),1);
      }
    }
  );
}



onKeyUp(val:any){
  this.arrBooks = this.arrBooks.filter((x)=> x.name.startsWith(val));
  if(val==""){
    this._router.navigate(['/all-book']);
  }
}
}
