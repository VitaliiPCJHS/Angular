import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "todo";
  
  items : Item[] = [];
  newItem : string;

  saveItem(){
    if(this.newItem){
      let item = new Item();
      item.name = this.newItem
      item.isComleted = true
      this.items.push(item);
      this.newItem = " ";
    }else{
      alert('Please enter smth');
    }
  }
  done(id:number){
    this.items[id].isComleted = !this.items[id].isComleted;
  }

  remove(id:number){
    this.items = this.items.filter((v,i)=> i !== id);
  }
}