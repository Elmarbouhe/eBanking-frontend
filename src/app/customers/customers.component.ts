import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Observable, catchError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private  CustomerService:CustomerService){}

  customers! :  Observable<Array<Customer>>;
  errorMessage! : object;

  ngOnInit(): void {
    this.customers = this.CustomerService.getAllCustomers().pipe(
      catchError(err => {
        this.errorMessage = err; return [];
      } ));
    }


}
