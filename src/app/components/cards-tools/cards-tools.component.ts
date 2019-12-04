import { Component, OnInit } from '@angular/core';
import { BossaboxService } from 'src/app/services/bossabox/bossabox.service';
import { Tool } from 'src/app/services/bossabox/tool';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-tools',
  templateUrl: './cards-tools.component.html',
  styleUrls: ['./cards-tools.component.scss'],
  providers: [BossaboxService]
})
export class CardsToolsComponent implements OnInit {

  // lista de ferramentas
  tools: Array<Tool> = [];

  constructor(private bossaboxService: BossaboxService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.loadTools();
  }

  /**
   * Carrega a lista de ferramentas
   * 
   */
  loadTools(busca: String = null, only_tags:Boolean = null) {

    // busca as ferramentas
    this.bossaboxService.getTools(busca, only_tags).subscribe((data: Array<Tool>) => {
      this.tools = data;
    });
  }

  /**
   * Deleta a ferramenta
   * 
   * @param tool
   */
  deleteTool(tool: Tool) {
    Swal.fire({
      title: '<fa-icon icon="times"></fa-icon> Remove tool',
      text: `Are you sure want to remove ${tool.title}`,
      showCancelButton: true,
      reverseButtons: true,
      customClass: {
        confirmButton: 'btn primary float-right',
        cancelButton: 'btn danger',
      },
      confirmButtonText: 'Yes, remove'
    }).then((result) => {
      if (result.value) {
        this.bossaboxService.deleteTool(tool.id).subscribe( res => {
          Swal.fire(
            'Sucesso!',
            'Ferramenta deletada com sucesso.',
            'success'
          );
          this.loadTools();
        }, error => {
          console.log(error);
          Swal.fire(
            'Erro!',
            error,
            'error'
          );      
        });
      }
    });
  }

}
