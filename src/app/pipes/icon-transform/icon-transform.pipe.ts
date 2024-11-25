import { Pipe, PipeTransform } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faAngular, faDiscord, faGithub, faJs, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'iconTransform',
  standalone: true
})
export class IconTransformPipe implements PipeTransform {

  private iconMap: { [key: string]: IconDefinition } = {
    faAngular: faAngular,
    faJs: faJs,
    faCode: faCode,
    faArrowUpRightFromSquare: faArrowUpRightFromSquare,
    faGithub: faGithub,
    faTelegram: faTelegram,
    faDiscord: faDiscord,
    faLinkedin: faLinkedin
  }

  transform(iconKey:string): IconDefinition{
    return this.iconMap[iconKey] || faCode
  }

}
