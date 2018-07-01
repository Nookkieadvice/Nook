import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //ตัวแปร หรือ properties
  itemCount:number=4;
  btnText:string='เพิ่มรายการใหม่'; // 1way binding 
  listText:string="";//2way binding โต้ตอบข้อมูลสองฝั่ง
  listAll =[];


  constructor() { }

  ngOnInit() {
    //นับจำนวนรายการเริ่มต้น
    this.itemCount = this.listAll.length;
  }

  addItem(){
   // รับค่า input จากฟอร์มและบันทึกลงอาเรย์
  this.listAll.push(this.listText);
  this.listText="";

  //นับจำนวนล่าสุด
  this.itemCount = this.listAll.length;
  }

}