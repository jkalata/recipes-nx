import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {RecipeModel} from "@recipes-nx/domain";
import {urlFactory} from "@valueadd/typed-urls";
import {environment} from "../../../../../apps/recipes-web/src/environments/environment";
import {HttpClient} from "@angular/common/http";
import {AddRecipePayload} from "@recipes-nx/domain";

@Injectable()
export class RecipesDataService {

  private readonly url = `${environment.apiURL}/recipe`;
  private readonly endpoints = {
    getCollection: urlFactory(this.url),
    getDetails: urlFactory(`${this.url}/:id`),
    add: urlFactory(this.url),
    update: urlFactory(`${this.url}/:id`),
    delete: urlFactory(`${this.url}/:id`)
  }

  constructor(private http: HttpClient) { }

  getCollection(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(this.endpoints.getCollection.url());
  }

  getDetails(id: string): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(this.endpoints.getDetails.url({id}));
  }

  add(body: AddRecipePayload): Observable<void> {
    return this.http.post<void>(this.endpoints.add.url(), body);
  }

  update(body: RecipeModel): Observable<void> {
    return this.http.put<void>(this.endpoints.update.url({id: body._id}), body);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.endpoints.delete.url({id}))
  }
}
