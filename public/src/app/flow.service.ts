import { Injectable } from '@angular/core';

@Injectable()
export class FlowService {

  constructor() { }
  users(){
    this._http.get('/users').subscribe((res)=>{console.log(res.json())}
    );
  }
}
