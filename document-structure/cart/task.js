const products = document.querySelector('.products');
let productToLS = [];
const cart = document.querySelector('.cart__products');

if (localStorage.getItem('product')) {
	productToLS = JSON.parse(localStorage.getItem('product'));
	productToLS.forEach(product => {
		cart.innerHTML += `
					<div class="cart__product" data-id="${product.id}">
						<img class="cart__product-image" src="${product.img}">
						<div class="cart__product-count">${product.count}</div>
					</div>
					`
	})
}

if (cart.children.length === 0) {
	cart.parentNode.hidden = true;
}

products.addEventListener('click', changeQuantityProduct)
products.addEventListener('click', addProduct);
products.addEventListener('click', deleteProduct)

function addProduct(event) {
	const target = event.target;

	if (!target.classList.contains('product__add')) {
		return;
	};

	const cart = document.querySelector('.cart__products'),
		cartProducts = cart.querySelectorAll('.cart__product'),
		parent = target.closest('.product'),
		newProduct = {
			id: Number(parent.dataset.id),
			img: parent.querySelector('img').currentSrc,
			count: Number(parent.querySelector('.product__quantity-value').textContent)
		},
		cardProduct = `
					<div class="cart__product" data-id="${newProduct.id}">
						<img class="cart__product-image" src="${newProduct.img}">
						<div class="cart__product-count">${newProduct.count}</div>
					</div>`;
	let productID = 0;

	cartProducts.forEach(product => {
		if (newProduct.id === Number(product.dataset.id)) {
			productID = newProduct.id
		}
	})

	if (newProduct.id !== productID && newProduct.count > 0) {
		cart.innerHTML += cardProduct;
		cart.parentNode.hidden = false
		productToLS.push(newProduct)
	} else {
		const product = [...cartProducts].find(product => Number(product.dataset.id) === newProduct.id)
		let value = product.querySelector('.cart__product-count');
		let propProduct = productToLS.find(el => el.id === Number(product.dataset.id));
		value.textContent = Number(value.textContent) + newProduct.count;
		propProduct.count = Number(value.textContent);
	}

	saveToLocalStorage();
}

function changeQuantityProduct(event) {
	const target = event.target;

	if (target.classList.contains('product__quantity-control_dec')) {
		let productValue = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
		if (Number(productValue.textContent) - 1 >= 0) {
			productValue.textContent = Number(productValue.textContent) - 1
		}
	}

	if (target.classList.contains('product__quantity-control_inc')) {
		let productValue = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
		productValue.textContent = Number(productValue.textContent) + 1;
	}
}

function deleteProduct(event) {
	if (!event.target.classList.contains('product__delete')) {
		return
	};

	const target = event.target,
		parent = target.closest('.product'),
		parentID = Number(parent.dataset.id),
		productValue = Number(parent.querySelector('.product__quantity-value').textContent),
		cartProducts = document.querySelectorAll('.cart__product'),
		product = [...cartProducts].find(product => Number(product.dataset.id) === parentID);

	if (!product) {
		return
	};

	let value = Number(product.querySelector('.cart__product-count').textContent);
	let propProduct = productToLS.find(el => el.id === Number(product.dataset.id));

	if (value > productValue) {
		product.querySelector('.cart__product-count').textContent = value - productValue;
		propProduct.count = Number(product.querySelector('.cart__product-count').textContent);
	} else {
		product.remove();
		productToLS = productToLS.filter(el => el.id !== propProduct.id)
	}
	saveToLocalStorage();
}

function saveToLocalStorage() {
	localStorage.setItem('product', JSON.stringify(productToLS))
}
