import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user'
import { Repository } from '../repository'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user?:User;
  userRep:any;
  
    constructor(private gitService:GitService) {
      this.userRep = new Repository('', '', '', '');
     }
     performSearch(searchTerm:any) {
      this.gitService.userRequest(searchTerm).then((success)=>{
        this.user = this.gitService.user
      })
      
      this.gitService.displayRepos(searchTerm).then((success) => {
        this.userRep = this.gitService.userRep
      
      },
        (error) => {
          console.log(error)
        }
      ) 
    }
    ngOnInit(): void {
      this.performSearch('FITSTARGILLY2643')
    }
  
    
  }