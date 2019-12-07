import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Department } from "./department";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DepartmentService {
  readonly url = "http://localhost:3000/departments";

  private departmentsSubject$: BehaviorSubject<
    Department[]
  > = new BehaviorSubject<Department[]>(null);
  private loaded: boolean = false;

  constructor(private http: HttpClient) {}

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http
        .get<Department[]>(this.url)
        .pipe(tap(deps => console.log(deps)))
        .subscribe(this.departmentsSubject$);
      this.loaded = true;
    }
    return this.departmentsSubject$.asObservable();
  }

  add(d: Department): Observable<Department> {
    return this.http
      .post<Department>(this.url, d)
      .pipe(
        tap((dep: Department) => this.departmentsSubject$.getValue().push(dep))
      );
  }
}
