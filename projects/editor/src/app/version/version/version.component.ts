import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentMessageRef, ContentVersion } from '../../../../../main/src/app/content/meta';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {
  @Input() version: ContentVersion;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(({versionId}) => {
      this.version = this.data.data.versions.find(v => v.id === versionId);
    });
  }

  messageByRef(ref?: ContentMessageRef) {
    if (ref && ref.id) {
      const message = this.version.messages
        .find(m => m.id === ref.id);
      if (message && message.locales[0]) {
        return message.locales[0].text;
      }
    }
  }
}
