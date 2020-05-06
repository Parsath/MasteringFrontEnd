import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})

export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContenu: string;
  @Input() postLikes: number;
  @Input() postDate: Date;


  constructor() { }

  ngOnInit(): void {
  }

  onAddLike() {
    this.postLikes++;
  }

  onRemoveLike() {
    this.postLikes--;
  }

}
