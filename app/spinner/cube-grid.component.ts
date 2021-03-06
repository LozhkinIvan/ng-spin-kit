import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';

@Component({
  selector: 'sk-cube-grid',
  styles: [`
    .cube-grid-spinner {
      margin: 25px auto;
      width: 40px;
      height: 40px;
    }
    
    .cube-grid-spinner div {
      float: left;
      width: 33%;
      height: 33%;
      
      -webkit-animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
      animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    
    .cube-grid-spinner .cube1 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    
    .cube-grid-spinner .cube2 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    
    .cube-grid-spinner .cube3 {
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    
    .cube-grid-spinner .cube4 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    
    .cube-grid-spinner .cube5 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    
    .cube-grid-spinner .cube6 {
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    
    .cube-grid-spinner .cube7 {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    
    .cube-grid-spinner .cube8 {
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    
    .cube-grid-spinner .cube9 {
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    
    @-webkit-keyframes cubeGridScaleDelay {
      0%, 70%, 100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
      }
      35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
      }
    }
    
    @keyframes cubeGridScaleDelay {
      0%, 70%, 100% {
        -webkit-transform: scale3D(1, 1, 1);
        transform: scale3D(1, 1, 1);
      }
      35% {
        -webkit-transform: scale3D(0, 0, 1);
        transform: scale3D(0, 0, 1);
      }
    }
  `],
  template: SpinnerTemplate
})

export class CubeGridComponent extends SpinnerComponent {
  public baseClass: string = 'cube-grid-spinner';
  public childClass: string = 'cube';
  public numItems: number = 9;
}
