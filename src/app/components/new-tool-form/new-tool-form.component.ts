import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BossaboxService } from 'src/app/services/bossabox/bossabox.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Tool } from 'src/app/services/bossabox/tool';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-tool-form',
  templateUrl: './new-tool-form.component.html',
  styleUrls: ['./new-tool-form.component.scss']
})
export class NewToolFormComponent implements OnInit {

  // formulario de ferramenta
  toolForm: FormGroup;

  constructor(private activeModal: NgbActiveModal,
              private bossaboxService: BossaboxService) {
    this.setupForm();
  }
  setupForm() {
    this.toolForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      link: new FormControl('', [ Validators.required ]),
      description: new FormControl('', [ Validators.required ]),
      tags: new FormControl('', [ Validators.required ]),
    });
  }

  checkField( field ) {
    return (this.toolForm.get(field).dirty || this.toolForm.get(field).touched) && this.toolForm.get(field).invalid;
  }

  ngOnInit() {
  }

  salvar() {
    const tool: Tool = this.toolForm.value;
    tool.tags = tool.tags.toString().split(' ');
    this.bossaboxService.addTool(tool).subscribe( res => {
      Swal.fire(
        'Sucesso!',
        'Cadastro realizado com sucesso.',
        'success'
      );
      this.close(true);
    }, error => {
      console.log(error);
      Swal.fire(
        'Erro!',
        error,
        'error'
      );      
    });    
  }

  close( result ) {
    this.activeModal.close(result);
  }

}
