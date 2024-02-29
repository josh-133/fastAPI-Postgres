import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private http:HttpClient) {  }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8000/users/?skip=0&limit=10")
    response.subscribe((data)=>this.users=data);
  }
}
