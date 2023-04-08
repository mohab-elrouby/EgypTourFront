import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilocalperson } from '../Models/Ilocalperson';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalpersonService {
  baseApiUrl :string = 'http://localhost:29475/';
  constructor(private http : HttpClient) {}

  getAlllocalPerson() : Observable<Ilocalperson[]>
  {
    return this.http.get<Ilocalperson[]>(this.baseApiUrl + '/api/LocalPerson');
  }
  getlocalpersonByPersonId(id:string)
  {
    return this.http.get<Ilocalperson>(this.baseApiUrl + '/api/LocalPerson/' + id);
  }
  getlocalpersonByPersonName(name:string)
  {
    return this.http.get<Ilocalperson>(this.baseApiUrl + '/api/LocalPerson/' + {name});
  }
  getlocalpersonByPersonLocation(Location:string)
  {
    return this.http.get<Ilocalperson>(this.baseApiUrl + '/api/LocalPerson/' + {Location});
  }
  addlocalperson(addLocalPerson:Ilocalperson) : Observable<Ilocalperson>
  {
    return this.http.post<Ilocalperson>(this.baseApiUrl + '/api/LocalPerson',addLocalPerson);
  }
  updatelocalperson(id:string, localpersonUpdate:Ilocalperson): Observable<Ilocalperson>
  {
    return this.http.put<Ilocalperson>(this.baseApiUrl + '/api/LocalPerson/'+ id, localpersonUpdate);
  }

  deletelocalperson(id:string): Observable<Ilocalperson>
  {
    return this.http.delete<Ilocalperson>(this.baseApiUrl +'/api/LocalPerson/' + id);
  }
}

