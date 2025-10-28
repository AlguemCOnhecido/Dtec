import "../FormularioDeEventos/FormularioDeEventos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botão";
import { ListaSuspensa } from "../ListaSuspensa";


export function FormularioDeEvento({ temas, aoSubmeter }) {
    function aoFormSubmetido(FormData) {
        console.log('Esta na hora de criar eventos', FormData)
        const evento = {
            capa: FormData.get('capa'),
            tema: temas.find(function (item) {
                return item.id == FormData.get('tema')
            }),
            data: new Date(FormData.get('dataEvento')),
            titulo: FormData.get('nomeEvento')
        }
        aoSubmeter(evento)

    }
    return (
        <form className='form-evento' action={aoFormSubmetido}>
            <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor='nomeEvento'>Qual é o nome do evento</Label>
                    <CampoDeEntrada type="text" id="nomeEvento" name="nomeEvento" placeholder="sumer dev hits" ></CampoDeEntrada>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='capa'>Qual é o endereço da imagem de capa</Label>
                    <CampoDeEntrada type='text' id='capa' placeholder='http://...' name='capa'>
                    </CampoDeEntrada>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='dataEvento'>Qual é a data do evento</Label>
                    <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" placeholder="dataEvento" ></CampoDeEntrada>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='tema'>qual é o tepo de evento</Label>
                    <ListaSuspensa id='tema' name='tema' itens={temas} />
                </CampoDeFormulario>
            </div>
            <div className="acoes">
                <Botao>
                    craie Evntoe
                </Botao>
            </div>
        </form>
    )
}
