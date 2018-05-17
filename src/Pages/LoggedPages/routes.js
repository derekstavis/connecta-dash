import React from 'react';
const routes = [
  {
    name: 'Produtos',
    icon: 'barcode',
    allowedRoles: ['*'],
    path: '/produtos',
    subroutes: [
      {
        name: 'Cadastro',
        allowedRoles: ['admin'],
        component: () => (<div>Cadastro 2</div>),
        path: '/produtos/cadastro'
      }
    ],
  },
  {
    name: 'Cadastro',
    allowedRoles: ['*'],
    path: '/cadastro',
    component: () => (<div>Cadastro</div>),
  },
]

export default routes