import { Pipe, PipeTransform, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'preparationTime',
})
export class PreparationTimePipe implements PipeTransform {
  transform(value: number): unknown {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    return `${hours}h ${minutes}m`;
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [PreparationTimePipe],
  exports: [PreparationTimePipe],
})
export class PreparationTimePipeModule {}
