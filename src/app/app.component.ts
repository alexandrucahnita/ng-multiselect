import { FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ng-multiselect-dropdown";
  cities: Array<any> = [];
  selectedItems: Array<any> = [
    { item_id: 4, item_text: "Pune" },
    { item_id: 6, item_text: "Navsari" }
  ];
  dropdownSettings: any = {};

  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: "New Delhi" },
      { item_id: 2, item_text: "Mumbai" },
      { item_id: 3, item_text: "Bangalore" },
      { item_id: 4, item_text: "Pune" },
      { item_id: 5, item_text: "Chennai" },
      { item_id: 6, item_text: "Navsari" }
    ];
    this.selectedItems = [
      { item_id: 4, item_text: "Pune" },
      { item_id: 6, item_text: "Navsari" }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }
}
