import { Component, OnInit } from '@angular/core';
import { Book1,Book2 } from '../all-book/book';
import { BookdataService } from '../bookdata.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from './admin-reg';


@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  signupForm: FormGroup;

  arrBasicInfo: Register[]=[];
  taskID;
  count;
  res;
  arrBooks:Register[]=[];
  constructor(private _data: BookdataService, private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this._data.getAllReg().subscribe(
      (data:Register[])=>{
        this.arrBooks=data;
      }
    );

    this.signupForm = new FormGroup({

      name: new FormControl(null, [
            Validators.required,]),
      email: new FormControl(null, [
            Validators.required,
            Validators.email,]),
      gender: new FormControl(null, [
            Validators.required,]),
      password: new FormControl(null, [
            Validators.required,]),
});
  }

  onSignup(){
    let count:number=1;
    for( let item of this.arrBooks){
      if(this.signupForm.get('email').value == item.email){
        alert('email already exist, Try with another Email');
        break;
      }
      count++;
    }

    if(count-1==this.arrBooks.length)
      {
        alert('Successfully Added');
        this._data.addReg(this.signupForm.value).subscribe(
              (x:any)=>{
                 if(x.affectedValue==1){
                  this.arrBooks.push(this.signupForm.value);
                 }}
                  );
                  this._router.navigate(['/']);
      }

  }

}
