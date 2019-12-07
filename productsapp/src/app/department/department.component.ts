import { Department } from "./../department";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-department",
  templateUrl: "./department.component.html",
  styleUrls: ["./department.component.scss"]
})
export class DepartmentComponent implements OnInit {
  depName: string = "";
  departments: Department[] = [
    { name: "dep1", _id: 1 },
    { name: "dep2", _id: 1 },
    { name: "dep3", _id: 1 },
    { name: "dep4", _id: 1 }
  ];

  constructor() {}

  ngOnInit() {}

  save() {}

  cancel() {}

  edit(dep: Department) {}

  delete(dep: Department) {}
}
