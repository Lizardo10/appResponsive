import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/interfaces/Character';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
characters!:Character[];
charactersCopy!:Character[];
  constructor(
    public http: HttpClient
  ) {
    this.getData();
   }
async getData(){
  await this.http.get<any>(environment.apiUrl + "characters").subscribe((res)=>{
    this.characters = res.map(({char_id,
name,
img,
status,
nickname,
occupation}:Character)=>{
  return {
    char_id,
name,
img,
status,
nickname,
occupation
  }
})
this.charactersCopy= this.characters;
  })
}
  ngOnInit(): void {
  }
filter(e:any){
  const search = e.target.value;
  this.characters=this.charactersCopy.filter(({name}:Character)=>{
return name.toLowerCase().includes(search.toLowerCase());
  })
}
}
