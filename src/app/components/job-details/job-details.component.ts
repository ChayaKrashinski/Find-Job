import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {
  @Input() details: Job | undefined
}
