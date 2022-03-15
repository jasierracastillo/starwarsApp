import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css'],
})
export class SearchPanelComponent implements OnInit {
  searching: string = '';

  entries: string[] = [];

  @Input()
  itemType: string = '';

  @Output() selectedEntry: EventEmitter<any> = new EventEmitter<any>();

  constructor(private storage: LocalStorageService, private router: Router) {}

  ngOnInit(): void {
    this.autoRemoveEntry();
  }

  //@Output manda al padre criterio de busqueda desde el input y desde las busquedas salvadas
  sendEntry(entry: any) {
    this.selectedEntry.emit({ entry });
  }

  navigate(item: string, type: string, entry: string) {
    // let route: String = `/starwars/${item}/${type}/${entry}`;
    // this.router.navigate([route]);
    let route: String = `/starwars/${item}/${type}/${entry}`;
    this.router.navigate(['/starwars/' + item + '/' + type + '/' + entry], {
      state: { key: entry },
    });
  }

  sendWithState(id: number) {
    this.router.navigate(['/starwars/films/details/' + id], {
      state: { key: id },
    });
  }

  //Tratamiento de localstorage
  saveSearch(entry: string) {
    let exist: boolean = false;
    for (let i = 0; i < this.entries.length; i++) {
      if (entry === this.entries[i]) {
        exist = true;
      }
    }
    if (!exist) {
      if (this.entries.length > 4) {
        this.removeItem(entry);
      }
      this.storage.setItem(entry, entry);
      this.entries.push(entry);
      console.log(this.entries);
    }
  }

  removeItem(entry: string) {
    this.storage.removeItem(entry);
    this.entries.shift();
  }

  autoRemoveEntry() {
    if (this.entries.length > 0) {
      setInterval(() => {
        this.removeItem(this.entries[0]);
        console.log(this.entries);
      }, 240000);
    } else {
      this.storage.clear();
    }
  }
}
