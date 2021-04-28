const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
	//"Olá order.delivery.deliveryPerson, entrega para: name, Telefone: phoneNumber, R. adress.street, Nº: adress.number, AP: adress.apartment"
	const deliveryPerson = order.order.delivery.deliveryPerson;
	const name = order.name;
	const phoneNumber = order.phoneNumber;
	const street = order.address.street;
	const number = order.address.number;
	const apartment = order.address.apartment;

	
	console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`)


}

customerInfo(order);

const order2 = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 20,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 50,
  },
};

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

	const name = order.name;
	const pizzas = Object.keys(order.order.pizza).join(', ');
	const drink = order.order.drinks.coke.type;
	const newTotal = order.payment.total = '50';
	// for (index in price) {
	// 	price[index]
	// }

	console.log(`Olá ${name}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${newTotal},00.`);
}

orderModifier(order);

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.