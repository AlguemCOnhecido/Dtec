import "../FormularioDeEventos/FormularioDeEventos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botão";
import { ListaSuspensa } from "../ListaSuspensa";




export function FormularioDeEvento() {
    return (
        <form className='form-evento'>
            <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor='nome'>Qual é o nome do evento</Label>
                    <CampoDeEntrada type="text" id="nome" placeholder="sumer dev hits" ></CampoDeEntrada>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='dataEvento'>Qual é a data do evento</Label>
                    <CampoDeEntrada type="date" id="nome" placeholder="dataEvento" ></CampoDeEntrada>
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor='tipoEvento'>qual é o tepo de evento</Label>
                    <ListaSuspensa>
                    </ListaSuspensa>
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
