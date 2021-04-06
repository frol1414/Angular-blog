import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {FbCreateResponse, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDpUrl}/posts.json`, post)
      .pipe(map((response: any) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        }
      }))
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDpUrl}/posts.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object.keys(response).map(key => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }))
      }))
  }
}
