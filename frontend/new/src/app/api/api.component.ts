import { Component, OnInit } from '@angular/core';
// import { Book1,Book2 } from './book';
import { BookdataService } from '../bookdata.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface BookApi{

  "numFound": number;
  "start": number;
  "docs": [
    {
      "title": string;
      "key": string;
      "author_name": [
        string
      ]
    }
  ],
  "num_found": number;

}
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

arrBookApi={docs:[]};
arrBookApi1={docs:[]};
  constructor(private _data: BookdataService, private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {

  }

  onKeyUp(val:any){

    this._data.getapiBook(val).subscribe(
      (data:BookApi)=>{
        this.arrBookApi1=data;
        console.log(this.arrBookApi1);
      }
    );
  }

}
