const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombrearchivo => console.log(`Archivo creado: ${colors.green(nombrearchivo)}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

// console.log('Limite ', argv.limite);



// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);