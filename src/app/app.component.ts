import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewToolFormComponent } from './components/new-tool-form/new-tool-form.component';
import { Tool } from './services/bossabox/tool';
import { CardsToolsComponent } from './components/cards-tools/cards-tools.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // componente de cards das ferramentas
  @ViewChild(CardsToolsComponent, {static: false}) cardsTools !: CardsToolsComponent;

  // string de busca
  busca: String = '';

  // flag somente tags
  only_tags: Boolean = false;

  constructor(private modalService: NgbModal) {
  }

  /**
   * Abre o modal com o formulario para adicionar ferramenta
   * 
   */
  openModalAddTool() {
    this.modalService.open(NewToolFormComponent)
    .result.then( async (result: Boolean) => {

      // verifica se cadastrou
      if( result ) {
        this.cardsTools.loadTools();
      }
    }).catch( error => {});    
  }

  /**
   * faz a busca
   * 
   */
  doSearch() {
    this.cardsTools.loadTools(this.busca, this.only_tags);
  }
}
