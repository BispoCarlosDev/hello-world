import Veiculo from '#models/veiculo'
import type { HttpContext } from '@adonisjs/core/http'
import { messages } from '@vinejs/vine/defaults';
import { Session } from 'inspector';

export default class VeiculosController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {

    const veiculos = await Veiculo.all();

    console.log('aqui', veiculos)

    return view.render('pages/veiculos/index', { veiculos})
  }

  /**
   * Display form to create a new record
   */
  async create({view}: HttpContext) {
    return view.render('pages/veiculos/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext){

    const veiculo = await Veiculo.create({
      marca: request.input('marca'),
      modelo: request.input('modelo'),
      anoFabricacao: request.input('anoFabricacao'),
      anoModelo: request.input('anoModelo'),
      renavam: request.input('renavam'),
      cor: request.input('cor'),
      placa: request.input('placa'),
      situacao: request.input('situacao')
    })

    if(veiculo.$isPersisted) {
      session.flash('notificacao', {
        type: 'success',
        message: `Veículo ${veiculo.modelo} cadastrado com Sucesso!`
      })
    }

    return response.redirect().toRoute('veiculos.index')

    /*console.log('formulario submited')
    console.log(request.body())
    console.log(request.input('parametros'))*/
  }

  /**
   * Show individual record
   */
  /*async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  /*async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  /*async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  /*async destroy({ params }: HttpContext) {}*/
}