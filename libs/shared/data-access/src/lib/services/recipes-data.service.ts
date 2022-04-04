import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {AddRecipePayload, RecipeModel} from '@recipes-nx/shared-domain';
import { urlFactory } from '@valueadd/typed-urls';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipesDataService {
  private readonly url = `${this.apiURL}/recipe`;
  private readonly endpoints = {
    getCollection: urlFactory(this.url),
    getDetails: urlFactory(`${this.url}/:id`),
    add: urlFactory(this.url),
    update: urlFactory(`${this.url}/:id`),
    delete: urlFactory(`${this.url}/:id`),
  };

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiURL: string
  ) {}

  getCollection(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.endpoints.getCollection.url());
  }

  getDetails(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(this.endpoints.getDetails.url({ id }));
  }

  add(body: AddRecipePayload): Observable<void> {
    return this.http.post<void>(this.endpoints.add.url(), body);
  }

  update(body: RecipeModel): Observable<void> {
    return this.http.put<void>(
      this.endpoints.update.url({ id: body._id }),
      {
        name: body.name,
        description: body.description,
        preparationTimeInMinutes: body.preparationTimeInMinutes,
        ingredients: body.ingredients
      }
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.endpoints.delete.url({ id }));
  }
}
