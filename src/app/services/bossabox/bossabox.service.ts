import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Tool } from './tool';

// url api bossa box
const url = 'http://localhost:3000';

// Http Headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BossaboxService {

  constructor(private http: HttpClient) { }

  /**
   * busca as ferramentas
   * 
   */
  getTools(busca: String = null, only_tags:Boolean = null): Observable<Array<Tool>> {
    const queryString = busca ? only_tags ? `?tags_like=${busca}` : `?q=${busca}` : '';
    return this.http.get<Array<Tool>>(`${url}/tools${queryString}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  /**
   * adiciona uma ferramenta
   * 
   * @param tool 
   */
  addTool(tool: Tool) {
    return this.http.post<Tool>(`${url}/tools/`, JSON.stringify(tool), httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  /**
   * deleta uma ferramenta
   * 
   * @param id
   */
  deleteTool( id ): Observable<any> {
    return this.http.delete<any>(`${url}/tools/${id}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  /**
   * manipula o erro
   * 
   * @param error 
   */
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {

       // pega o erro do cliente
       errorMessage = error.error.message;
     } else {

       // pega o erro do servidor
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
  }
}
