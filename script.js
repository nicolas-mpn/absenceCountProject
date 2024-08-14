let lastAction = null;

function add() {
    const day = document.getElementById('day').value;
    const monday = document.getElementById('monday-p');
    const tuesday = document.getElementById('tuesday-p');
    const wednesday = document.getElementById('wednesday-p');
    const thursday = document.getElementById('thursday-p');
    const friday = document.getElementById('friday-p');
    const portugues = document.getElementById('portugues');
    const geografia = document.getElementById('geografia');
    const matematica = document.getElementById('matematica');
    const historia = document.getElementById('historia');
    const empreendedorismo = document.getElementById('empreendedorismo');
    const edFinanceira = document.getElementById('edfinanceira');
    const quimica = document.getElementById('quimica');
    const projetoDeVida = document.getElementById('projetodevida');
    const biologia = document.getElementById('biologia');
    const biotecnologia = document.getElementById('biotecnologia');
    const redacao = document.getElementById('redacao');
    const tecnologia = document.getElementById('tecnologia');
    const sociologia = document.getElementById('sociologia');
    const fisica = document.getElementById('fisica');
    const ingles = document.getElementById('ingles');
    const porPor = document.getElementById('porPor');
    const geoPor = document.getElementById('geoPor');
    const matPor = document.getElementById('matPor');
    const hisPor = document.getElementById('hisPor');
    const empPor = document.getElementById('empPor');
    const edfPor = document.getElementById('edfPor');
    const quiPor = document.getElementById('quiPor');
    const proPor = document.getElementById('proPor');
    const bioPor = document.getElementById('bioPor');
    const biotPor = document.getElementById('biotPor');
    const redPor = document.getElementById('redPor');
    const tecPor = document.getElementById('tecPor');
    const socPor = document.getElementById('socPor');
    const fisPor = document.getElementById('fisPor');
    const ingPor = document.getElementById('ingPor');



    switch (day) {
        case 'monday':
            monday.textContent = Number(monday.textContent) + 1;
            portugues.textContent = Number(portugues.textContent) + 1;
            geografia.textContent = Number(geografia.textContent) + 1;
            matematica.textContent = Number(matematica.textContent) + 2;
            historia.textContent = Number(historia.textContent) + 1;
            //porcentagem
            porPor.textContent = Number(porPor.textContent) - 4.17;
            geoPor.textContent = Number(geoPor.textContent) - 12.5;
            matPor.textContent = Number(matPor.textContent) - 4.17 * 2;
            hisPor.textContent = Number(hisPor.textContent) - 12.5;
            break;
        case 'tuesday':
            tuesday.textContent = Number(tuesday.textContent) + 1;
            portugues.textContent = Number(portugues.textContent) + 2;
            empreendedorismo.textContent = Number(empreendedorismo.textContent) + 2;
            edFinanceira.textContent = Number(edFinanceira.textContent) + 1;
            //porcentagem
            porPor.textContent = Number(porPor.textContent) - 4.17 * 2;
            empPor.textContent = Number(empPor.textContent) - 6.25 * 2;
            edfPor.textContent = Number(edfPor.textContent) - 6.25;
            break;
        case 'wednesday':
            wednesday.textContent = Number(wednesday.textContent) + 1;
            quimica.textContent = Number(quimica.textContent) + 1;
            matematica.textContent = Number(matematica.textContent) + 1;
            projetoDeVida.textContent = Number(projetoDeVida.textContent) + 1;
            sociologia.textContent = Number(sociologia.textContent) + 1;
            tecnologia.textContent = Number(tecnologia.textContent) + 1;
            //porcentagem
            quiPor.textContent = Number(quiPor.textContent) - 12.5;
            matPor.textContent = Number(matPor.textContent) - 4.17;
            proPor.textContent = Number(proPor.textContent) - 12.5;
            tecPor.textContent = Number(tecPor.textContent) - 4.17;
            socPor.textContent = Number(socPor.textContent) - 12.5;
            break;
        case 'thursday':
            thursday.textContent = Number(thursday.textContent) + 1;
            biologia.textContent = Number(biologia.textContent) + 1;
            biotecnologia.textContent = Number(biotecnologia.textContent) + 1;
            redacao.textContent = Number(redacao.textContent) + 2;
            tecnologia.textContent = Number(tecnologia.textContent) + 1;
            //porcentagem
            bioPor.textContent = Number(bioPor.textContent) - 12.5;
            biotPor.textContent = Number(biotPor.textContent) - 12.5;
            redPor.textContent = Number(redPor.textContent) - 6.25 * 2;
            tecPor.textContent = Number(tecPor.textContent) - 4.17;
            break;
        case 'friday':
            friday.textContent = Number(friday.textContent) + 1;
            fisica.textContent = Number(fisica.textContent) + 2;
            ingles.textContent = Number(ingles.textContent) + 1
            edFinanceira.textContent = Number(edFinanceira.textContent) + 1;
            tecnologia.textContent = Number(tecnologia.textContent) + 1;
            //porcentagem
            fisPor.textContent = Number(fisPor.textContent) - 6.25 * 2;
            ingPor.textContent = Number(ingPor.textContent) - 12.5;
            edfPor.textContent = Number(edfPor.textContent) - 6.25;
            tecPor.textContent = Number(tecPor.textContent) - 4.17;
            break;
    }
    lastAction = { day, action: 'add' };
    //dias da semana
    localStorage.setItem('lastAction', JSON.stringify(lastAction));
    localStorage.setItem('monday', monday.textContent);
    localStorage.setItem('tuesday', tuesday.textContent);
    localStorage.setItem('wednesday', wednesday.textContent);
    localStorage.setItem('thursday', thursday.textContent);
    localStorage.setItem('friday', friday.textContent);
    //matérias
    localStorage.setItem('portugues', porPor.textContent);
    localStorage.setItem('matematica', matPor.textContent);
    localStorage.setItem('tecnologia', tecPor.textContent);
    localStorage.setItem('fisica', fisPor.textContent);
    localStorage.setItem('projetodevida', proPor.textContent);
    localStorage.setItem('biologia', bioPor.textContent);
    localStorage.setItem('biotecnologia', biotPor.textContent);
    localStorage.setItem('empreendedorismo', empPor.textContent);
    localStorage.setItem('ingles', ingPor.textContent);
    localStorage.setItem('edfinanceira', edfPor.textContent);
    localStorage.setItem('geografia', geoPor.textContent);
    localStorage.setItem('historia', hisPor.textContent);
    localStorage.setItem('quimica', quiPor.textContent);
    localStorage.setItem('redacao', redPor.textContent);
    localStorage.setItem('sociologia', socPor.textContent);
    //--------------------------------------------------------------------------------------------------

    localStorage.setItem('portugues1', portugues.textContent);
    localStorage.setItem('matematica1', matematica.textContent);
    localStorage.setItem('tecnologia1', tecnologia.textContent);
    localStorage.setItem('fisica1', fisica.textContent);
    localStorage.setItem('projetodevida1', projetoDeVida.textContent);
    localStorage.setItem('biologia1', biologia.textContent);
    localStorage.setItem('biotecnologia1', biotecnologia.textContent);
    localStorage.setItem('empreendedorismo1', empreendedorismo.textContent);
    localStorage.setItem('ingles1', ingles.textContent);
    localStorage.setItem('edfinanceira1', edFinanceira.textContent);
    localStorage.setItem('geografia1', geografia.textContent);
    localStorage.setItem('historia1', historia.textContent);
    localStorage.setItem('quimica1', quimica.textContent);
    localStorage.setItem('redacao1', redacao.textContent);
    localStorage.setItem('sociologia1', sociologia.textContent);


}


function cancel() {
    const monday = document.getElementById('monday-p');
    const tuesday = document.getElementById('tuesday-p');
    const wednesday = document.getElementById('wednesday-p');
    const thursday = document.getElementById('thursday-p');
    const friday = document.getElementById('friday-p');
    const portugues = document.getElementById('portugues');
    const geografia = document.getElementById('geografia');
    const matematica = document.getElementById('matematica');
    const historia = document.getElementById('historia');
    const empreendedorismo = document.getElementById('empreendedorismo');
    const edFinanceira = document.getElementById('edfinanceira');
    const quimica = document.getElementById('quimica');
    const projetoDeVida = document.getElementById('projetodevida');
    const biologia = document.getElementById('biologia');
    const biotecnologia = document.getElementById('biotecnologia');
    const redacao = document.getElementById('redacao');
    const tecnologia = document.getElementById('tecnologia');
    const sociologia = document.getElementById('sociologia');
    const fisica = document.getElementById('fisica');
    const ingles = document.getElementById('ingles');
    const porPor = document.getElementById('porPor');
    const geoPor = document.getElementById('geoPor');
    const matPor = document.getElementById('matPor');
    const hisPor = document.getElementById('hisPor');
    const empPor = document.getElementById('empPor');
    const edfPor = document.getElementById('edfPor');
    const quiPor = document.getElementById('quiPor');
    const proPor = document.getElementById('proPor');
    const bioPor = document.getElementById('bioPor');
    const biotPor = document.getElementById('biotPor');
    const redPor = document.getElementById('redPor');
    const tecPor = document.getElementById('tecPor');
    const socPor = document.getElementById('socPor');
    const fisPor = document.getElementById('fisPor');
    const ingPor = document.getElementById('ingPor');

    if (lastAction && lastAction.action === 'add') {
        switch (lastAction.day) {
            case 'monday':
                if (Number(monday.textContent) > 0) {
                    monday.textContent = Number(monday.textContent) - 1;
                }
                if (Number(portugues.textContent) > 0) {
                    portugues.textContent = Number(portugues.textContent) - 1;
                }
                if (Number(geografia.textContent) > 0) {
                    geografia.textContent = Number(geografia.textContent) - 1;
                }
                if (Number(matematica.textContent) > 0) {
                    matematica.textContent = Number(matematica.textContent) - 2;
                }
                if (Number(historia.textContent) > 0) {
                    historia.textContent = Number(historia.textContent) - 1;
                }
                //porcentagem
                porPor.textContent = Number(porPor.textContent) + 4.17;
                geoPor.textContent = Number(geoPor.textContent) + 12.5;
                matPor.textContent = Number(matPor.textContent) + 4.17 * 2;
                hisPor.textContent = Number(hisPor.textContent) + 12.5;
                break;
            case 'tuesday':
                if (Number(tuesday.textContent) > 0) {
                    tuesday.textContent = Number(tuesday.textContent) - 1;
                }
                if (Number(portugues.textContent) > 0) {
                    portugues.textContent = Number(portugues.textContent) - 2;
                }
                if (Number(empreendedorismo.textContent) > 0) {
                    empreendedorismo.textContent = Number(empreendedorismo.textContent) - 2;
                }
                if (Number(edFinanceira.textContent) > 0) {
                    edFinanceira.textContent = Number(edFinanceira.textContent) - 1;
                }
                //porcentagem
                porPor.textContent = Number(porPor.textContent) + 4.17 * 2;
                empPor.textContent = Number(empPor.textContent) + 6.25 * 2;
                edfPor.textContent = Number(edfPor.textContent) + 6.25;
                break;
            case 'wednesday':
                if (Number(wednesday.textContent) > 0) {
                    wednesday.textContent = Number(wednesday.textContent) - 1;
                }
                if (Number(quimica.textContent) > 0) {
                    quimica.textContent = Number(quimica.textContent) - 1;
                }
                if (Number(matematica.textContent) > 0) {
                    matematica.textContent = Number(matematica.textContent) - 1;
                }
                if (Number(projetoDeVida.textContent) > 0) {
                    projetoDeVida.textContent = Number(projetoDeVida.textContent) - 1;
                }
                if (Number(sociologia.textContent) > 0) {
                    sociologia.textContent = Number(sociologia.textContent) - 1;
                }
                if (Number(tecnologia.textContent) > 0) {
                    tecnologia.textContent = Number(tecnologia.textContent) - 1;
                }
                //porcentagem
                quiPor.textContent = Number(quiPor.textContent) + 12.5;
                matPor.textContent = Number(matPor.textContent) + 4.17;
                proPor.textContent = Number(proPor.textContent) + 12.5;
                tecPor.textContent = Number(tecPor.textContent) + 4.17;
                socPor.textContent = Number(socPor.textContent) + 12.5;
                break;
            case 'thursday':
                if (Number(thursday.textContent) > 0) {
                    thursday.textContent = Number(thursday.textContent) - 1;
                }
                if (Number(biologia.textContent) > 0) {
                    biologia.textContent = Number(biologia.textContent) - 1;
                }
                if (Number(biotecnologia.textContent) > 0) {
                    biotecnologia.textContent = Number(biotecnologia.textContent) - 1;
                }
                if (Number(redacao.textContent) > 0) {
                    redacao.textContent = Number(redacao.textContent) - 2;
                }
                if (Number(tecnologia.textContent) > 0) {
                    tecnologia.textContent = Number(tecnologia.textContent) - 1;
                }
                //porcentagem
                bioPor.textContent = Number(bioPor.textContent) + 12.5;
                biotPor.textContent = Number(biotPor.textContent) + 12.5;
                redPor.textContent = Number(redPor.textContent) + 6.25 * 2;
                tecPor.textContent = Number(tecPor.textContent) + 4.17;
                break;
            case 'friday':
                if (Number(friday.textContent) > 0) {
                    friday.textContent = Number(friday.textContent) - 1;
                }
                if (Number(fisica.textContent) > 0) {
                    fisica.textContent = Number(fisica.textContent) - 2;
                }
                if (Number(ingles.textContent) > 0) {
                    ingles.textContent = Number(ingles.textContent) - 1
                }
                if (Number(edFinanceira.textContent) > 0) {
                    edFinanceira.textContent = Number(edFinanceira.textContent) - 1;
                }
                if (Number(tecnologia.textContent) > 0) {
                    tecnologia.textContent = Number(tecnologia.textContent) - 1;
                }
                //porcentagem
                fisPor.textContent = Number(fisPor.textContent) + 6.25 * 2;
                ingPor.textContent = Number(ingPor.textContent) + 12.5;
                edfPor.textContent = Number(edfPor.textContent) + 6.25;
                tecPor.textContent = Number(tecPor.textContent) + 4.17;
                break;

        }

        // Limpe a última ação
        lastAction = null;

        localStorage.setItem('lastAction', JSON.stringify(lastAction));
        localStorage.setItem('monday', monday.textContent);
        localStorage.setItem('tuesday', tuesday.textContent);
        localStorage.setItem('wednesday', wednesday.textContent);
        localStorage.setItem('thursday', thursday.textContent);
        localStorage.setItem('friday', friday.textContent);
        //matérias
        localStorage.setItem('portugues', porPor.textContent);
        localStorage.setItem('matematica', matPor.textContent);
        localStorage.setItem('tecnologia', tecPor.textContent);
        localStorage.setItem('fisica', fisPor.textContent);
        localStorage.setItem('projetodevida', proPor.textContent);
        localStorage.setItem('biologia', bioPor.textContent);
        localStorage.setItem('biotecnologia', biotPor.textContent);
        localStorage.setItem('empreendedorismo', empPor.textContent);
        localStorage.setItem('ingles', ingPor.textContent);
        localStorage.setItem('edfinanceira', edfPor.textContent);
        localStorage.setItem('geografia', geoPor.textContent);
        localStorage.setItem('historia', hisPor.textContent);
        localStorage.setItem('quimica', quiPor.textContent);
        localStorage.setItem('redacao', redPor.textContent);
        localStorage.setItem('sociologia', socPor.textContent);
        //

        localStorage.setItem('portugues1', portugues.textContent);
        localStorage.setItem('matematica1', matematica.textContent);
        localStorage.setItem('tecnologia1', tecnologia.textContent);
        localStorage.setItem('fisica1', fisica.textContent);
        localStorage.setItem('projetodevida1', projetoDeVida.textContent);
        localStorage.setItem('biologia1', biologia.textContent);
        localStorage.setItem('biotecnologia1', biotecnologia.textContent);
        localStorage.setItem('empreendedorismo1', empreendedorismo.textContent);
        localStorage.setItem('ingles1', ingles.textContent);
        localStorage.setItem('edfinanceira1', edFinanceira.textContent);
        localStorage.setItem('geografia1', geografia.textContent);
        localStorage.setItem('historia1', historia.textContent);
        localStorage.setItem('quimica1', quimica.textContent);
        localStorage.setItem('redacao1', redacao.textContent);
        localStorage.setItem('sociologia1', sociologia.textContent);



    }
}
window.onload = function () {
    const savedLastAction = localStorage.getItem('lastAction');
    if (savedLastAction) {
        lastAction = JSON.parse(savedLastAction);

    }
    const monday = document.getElementById('monday-p');
    const tuesday = document.getElementById('tuesday-p');
    const wednesday = document.getElementById('wednesday-p');
    const thursday = document.getElementById('thursday-p');
    const friday = document.getElementById('friday-p');
    const portugues = document.getElementById('portugues');
    const geografia = document.getElementById('geografia');
    const matematica = document.getElementById('matematica');
    const historia = document.getElementById('historia');
    const empreendedorismo = document.getElementById('empreendedorismo');
    const edFinanceira = document.getElementById('edfinanceira');
    const quimica = document.getElementById('quimica');
    const projetoDeVida = document.getElementById('projetodevida');
    const biologia = document.getElementById('biologia');
    const biotecnologia = document.getElementById('biotecnologia');
    const redacao = document.getElementById('redacao');
    const tecnologia = document.getElementById('tecnologia');
    const sociologia = document.getElementById('sociologia');
    const porPor = document.getElementById('porPor');
    const geoPor = document.getElementById('geoPor');
    const matPor = document.getElementById('matPor');
    const hisPor = document.getElementById('hisPor');
    const empPor = document.getElementById('empPor');
    const edfPor = document.getElementById('edfPor');
    const quiPor = document.getElementById('quiPor');
    const proPor = document.getElementById('proPor');
    const bioPor = document.getElementById('bioPor');
    const biotPor = document.getElementById('biotPor');
    const redPor = document.getElementById('redPor');
    const tecPor = document.getElementById('tecPor');
    const socPor = document.getElementById('socPor');
    const fisPor = document.getElementById('fisPor');
    const ingPor = document.getElementById('ingPor');

    //---------------------------------------------------------

    const savedPortugues1 = localStorage.getItem('portugues1');
    if (savedPortugues1) {
        portugues.textContent = savedPortugues1;
    }

    const savedMatematica1 = localStorage.getItem('matematica1');
    if (savedMatematica1) {
        matematica.textContent = savedMatematica1;
    }

    // ... faça o mesmo para as outras matérias ...

    const savedTecnologia1 = localStorage.getItem('tecnologia1');
    if (savedTecnologia1) {
        tecnologia.textContent = savedTecnologia1;
    }

    const savedFisica1 = localStorage.getItem('fisica1');
    if (savedFisica1) {
        fisica.textContent = savedFisica1;
    }

    const savedProjetoDeVida1 = localStorage.getItem('projetodevida1');
    if (savedProjetoDeVida1) {
        projetoDeVida.textContent = savedProjetoDeVida1;
    }

    const savedBiologia1 = localStorage.getItem('biologia1');
    if (savedBiologia1) {
        biologia.textContent = savedBiologia1;
    }

    const savedBiotecnologia1 = localStorage.getItem('biotecnologia1');
    if (savedBiotecnologia1) {
        biotecnologia.textContent = savedBiotecnologia1;
    }

    const savedEmpreendedorismo1 = localStorage.getItem('empreendedorismo1');
    if (savedEmpreendedorismo1) {
        empreendedorismo.textContent = savedEmpreendedorismo1;
    }

    const savedIngles1 = localStorage.getItem('ingles1');
    if (savedIngles1) {
        ingles.textContent = savedIngles1;
    }

    const savedEdFinanceira1 = localStorage.getItem('edfinanceira1');
    if (savedEdFinanceira1) {
        edFinanceira.textContent = savedEdFinanceira1;
    }

    const savedGeografia1 = localStorage.getItem('geografia1');
    if (savedGeografia1) {
        geografia.textContent = savedGeografia1;
    }

    const savedHistoria1 = localStorage.getItem('historia1');
    if (savedHistoria1) {
        historia.textContent = savedHistoria1;
    }

    const savedQuimica1 = localStorage.getItem('quimica1');
    if (savedQuimica1) {
        quimica.textContent = savedQuimica1;
    }

    const savedRedacao1 = localStorage.getItem('redacao1');
    if (savedRedacao1) {
        redacao.textContent = savedRedacao1;
    }

    const savedSociologia1 = localStorage.getItem('sociologia1');
    if (savedSociologia1) {
        sociologia.textContent = savedSociologia1;
    }

    //--------------------------------------------------------

    const savedPortugues = localStorage.getItem('portugues');
    if (savedPortugues) {
        porPor.textContent = savedPortugues;
    }

    const savedMatematica = localStorage.getItem('matematica');
    if (savedMatematica) {
        matPor.textContent = savedMatematica;
    }



    const savedTecnologia = localStorage.getItem('tecnologia');
    if (savedTecnologia) {
        tecPor.textContent = savedTecnologia;
    }

    const savedFisica = localStorage.getItem('fisica');
    if (savedFisica) {
        fisPor.textContent = savedFisica;
    }

    const savedProjetoDeVida = localStorage.getItem('projetodevida');
    if (savedProjetoDeVida) {
        proPor.textContent = savedProjetoDeVida;
    }

    const savedBiologia = localStorage.getItem('biologia');
    if (savedBiologia) {
        bioPor.textContent = savedBiologia;
    }

    const savedBiotecnologia = localStorage.getItem('biotecnologia');
    if (savedBiotecnologia) {
        biotPor.textContent = savedBiotecnologia;
    }

    const savedEmpreendedorismo = localStorage.getItem('empreendedorismo');
    if (savedEmpreendedorismo) {
        empPor.textContent = savedEmpreendedorismo;
    }

    const savedIngles = localStorage.getItem('ingles');
    if (savedIngles) {
        ingPor.textContent = savedIngles;
    }

    const savedEdFinanceira = localStorage.getItem('edfinanceira');
    if (savedEdFinanceira) {
        edfPor.textContent = savedEdFinanceira;
    }

    const savedGeografia = localStorage.getItem('geografia');
    if (savedGeografia) {
        geoPor.textContent = savedGeografia;
    }

    const savedHistoria = localStorage.getItem('historia');
    if (savedHistoria) {
        hisPor.textContent = savedHistoria;
    }

    const savedQuimica = localStorage.getItem('quimica');
    if (savedQuimica) {
        quiPor.textContent = savedQuimica;
    }

    const savedRedacao = localStorage.getItem('redacao');
    if (savedRedacao) {
        redPor.textContent = savedRedacao;
    }

    const savedSociologia = localStorage.getItem('sociologia');
    if (savedSociologia) {
        socPor.textContent = savedSociologia;
    }



    const savedFriday = localStorage.getItem('friday');
    if (savedFriday) {
        friday.textContent = savedFriday;
    }

    const savedThursday = localStorage.getItem('thursday');
    if (savedThursday) {
        thursday.textContent = savedThursday;
    }

    const savedWednesday = localStorage.getItem('wednesday');
    if (savedWednesday) {
        wednesday.textContent = savedWednesday;
    }

    const savedTuesday = localStorage.getItem('tuesday');
    if (savedTuesday) {
        tuesday.textContent = savedTuesday;
    }

    const savedMonday = localStorage.getItem('monday');
    if (savedMonday) {
        monday.textContent = savedMonday;
    }

}







