'use strict'
console.log('Iniciando sistema')

import server from './src/server'
import * as restify from 'restify'

(new server(restify)).startServer()

