import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const messagesVeiculoProvider = new SimpleMessagesProvider({
    'required': 'O campo {{field}} é obrigatório!',
    'minLength': 'O campo {{field}} deve ter pelo menos {{min}} caracteres!',
    'withoutDecimals': 'O campo {{field}} deve ser inteiro!',
    'min': 'O campo {{field}} deve ser no mínimo {{min}}!',

    'placa.regex': 'A placa deve ser no formato: AAA-8900 ou AAA-8A00!',
    'situacao.enum': 'A opção selecionada é inválida, a opção deve ser: liberado ou manutencao!',
})

/** Validação Veículos - create */

export const createVeiculoValidator = vine.compile(
    vine.object({
        marca: vine.string().trim().minLength(3),
        modelo: vine.string().trim().minLength(3),
        anoModelo: vine.number().withoutDecimals().min(2000),
        anoFabricacao: vine.number().withoutDecimals().min(2000),
        renavam: vine.string().regex(/^[0-9]{11}$/).trim(),
        placa: vine.string().regex(/^[A-Z]{3}-[0-9][A-Z0-9][0-9]{2}$/).trim(),
        cor: vine.string().trim().minLength(3),
        situacao: vine.enum(['liberado', 'manutencao']),

       // description: vine.string().trim().escape()
    })
)