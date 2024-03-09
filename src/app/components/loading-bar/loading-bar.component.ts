import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [
    MatProgressSpinnerModule],
  templateUrl: './loading-bar.component.html',
  styleUrl: './loading-bar.component.css'
})
export class LoadingBarComponent implements OnInit, OnDestroy {
  isLoading = false;
   loadingSub: Subscription = new Subscription; // Definite assignment assertion modifier

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingSub = this.loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }


}
