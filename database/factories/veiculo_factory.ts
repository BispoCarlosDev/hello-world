import factory from '@adonisjs/lucid/factories'
import Veiculo from '#models/veiculo'

export const VeiculoFactory = factory
  .define(Veiculo, async ({ faker }) => {
    return {}
  })
  .build()