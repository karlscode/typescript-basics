// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

type Construtor = { new(...args: any[]): {} }

function perfilAdmin<T extends Construtor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }
    }
}