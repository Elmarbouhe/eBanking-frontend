import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private http:HttpClient){}

  customers:any

  ngOnInit(): void {
    this.http.get("http://localhost:8081/customers/getAll").subscribe(data=>{
      this.customers=data;},
      error=>{
        console.log("problem de colecter le customers")
      })
  }
}
