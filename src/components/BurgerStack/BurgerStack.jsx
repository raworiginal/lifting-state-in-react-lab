// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
	return (
		<ul>
			{props.burger.map((ingredient, index) => {
				return (
					<li key={index} style={{ backgroundColor: ingredient.color }}>
						{ingredient.name}
						<button>x</button>
					</li>
				);
			})}
		</ul>
	);
};

export default BurgerStack;
