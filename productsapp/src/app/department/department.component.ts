import { Department } from "./../department";
import { Component, OnInit } from "@angular/core";
import { DepartmentService } from "../department.service";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {
  depName: string = "";
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departmentService.get().subscribe(deps => (this.departments = deps));
  }

  save() {
    this.departmentService.add({ name: this.depName }).subscribe(
      dep => {
        this.clearFields();
      },
      err => console.error(err)
    );
  }

  clearFields() {
    this.depName = "";
  }

  cancel() {}

  edit(dep: Department) {}

  delete(dep: Department) {}
}
