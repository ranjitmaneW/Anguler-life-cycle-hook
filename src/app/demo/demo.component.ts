import { Component,OnInit,OnDestroy,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent   implements OnInit ,OnDestroy,OnChanges{


  constructor(){

console.log("  1 constructer call");

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('2️⃣ ngOnChanges called');
  }


  ngOnInit(): void {
        console.log('3️⃣ ngOnInit called');

  }

  ngOnDestroy(): void {
        console.log('4️⃣ ngOnDestroy called');

  }
}
