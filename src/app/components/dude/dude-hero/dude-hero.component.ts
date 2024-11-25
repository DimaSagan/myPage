import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dude-hero',
  standalone: true,
  imports: [],
  templateUrl: './dude-hero.component.html',
  styleUrl: './dude-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DudeHeroComponent implements OnInit{
ngOnInit(): void {
  // const pathes = document.querySelectorAll('path')

  // for (let index = 0; index < pathes.length; index++) {
  //   console.log(`Length ${index+1} is ${Math.ceil(pathes[index].getTotalLength())+'px'}`)
    
  // }
}
}
